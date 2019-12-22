const tabakFarm = new mp.Vector3(1839.7, 5033, 56.9);
const tabakRoll = mp.peds.new(mp.game.joaat('a_f_y_business_01'), new mp.Vector3(758.57, -815.89, 26.29), 270, (rollTabak) => {}, 0);
const rollTabak = new mp.Vector3(758.57, -815.89, 26.29);
const sellZigaretten = mp.peds.new(mp.game.joaat('a_f_y_business_01'), new mp.Vector3(1710, 4728, 42.15), 126.51, (sellZig) => {}, 0);
const sellZig = new mp.Vector3(1710, 4728, 42.15);
let packTimeout = null;
var TimeoutTabak;
//E-BIND
mp.keys.bind(0x45, true, function() {
    if (player.getVariable('state') !== 'INGAME') return;
    if (isInRadius(6, player, tabakFarm)) {
        if(player.getVariable('collect') !== 'COLLECTINGTABAK') {

            mp.keys.bind(0x42, true, function() { 
                if(player.getVariable('collect') == 'COLLECTINGTABAK') {
                    mp.events.callRemote("server:jobs:tabak:setstatenormal");
                    mp.game.graphics.notify('~r~Aufheben abgebrochen');
                    clearTimeout(TimeoutTabak);
                }
            });
            
            mp.events.call("animCollectTabak");
            mp.events.callRemote("server:jobs:tabak:setstate");
            TimeoutTabak = setTimeout(_ => {
                mp.events.callRemote("giveTabak");
                mp.events.callRemote("server:jobs:tabak:setstatenormal");
            }, 12000)
        }
        else
        {
            mp.game.graphics.notify("Du Sammelst bereits Tabak");
        }
    }
    if (isInRadius(3, player, rollTabak)) {
        if((!player.getVariable('packtabak') || player.getVariable('packtabak') !== 'PACKING') && packTimeout == null) {
            mp.events.callRemote("server:jobs:tabak:startProgress");
            mp.events.callRemote("server:jobs:tabak:setpackstate");
            mp.events.call("animPackTabak");
            packTimeout = setTimeout(_ => {
                mp.events.callRemote("packTabak");
                mp.events.callRemote("server:jobs:tabak:setpackstatenormal");
                packTimeout = null;
            }, 30000);
        }
        else
        {
            mp.game.graphics.notify("Du verarbeitest bereits.");
        }
    }
    if (isInRadius(3, player, sellZig)) {
        if(player.getVariable('sellzigaretten') !== 'SELLING') {
            mp.events.callRemote("server:jobs:tabak:startSelling");
            mp.events.callRemote("server:jobs:tabak:setsellingstate");
            mp.events.call("animSellZigaretten");
            mp.events.callRemote("sellZigaretten");
            mp.events.callRemote("server:jobs:tabak:setsellingstatenormal");
        }
        else
        {
            mp.game.graphics.notify("Du verkaufst bereits.");
        }
    }
});

mp.events.add("client:jobs:tabak:endPackTimeout", () => {
  if (packTimeout !== null) {
    clearTimeout(packTimeout);
    packTimeout = null;
  }
});

mp.events.add("client:jobs:tabak:endSellTimeout", () => {
    if (sellTimeout !== null) {
      clearTimeout(sellTimeout);
      sellTimeout = null;
    }
  });

mp.events.add("animCollectTabak", (player) => {
    mp.events.callRemote("playAnimationEvent", player, "amb@medic@standing@kneel@enter", "enter", 1, 33, -1);
});
mp.events.add("animPackTabak", (player) => {
    mp.events.callRemote("playAnimationEvent", player, 'anim@amb@business@coc@coc_packing@', 'operate_press_basicmould_v1_pressoperator', 1, 47, -1);
});
mp.events.add("animSellZigaretten", (player) => {
    mp.events.callRemote("playAnimationEvent", player, 'mp_common', 'givetake2_a', 1, 49, -1);
});

function isInRadius(radius, player, pos) {
    var temppos = [];
    if (mp.players.local.vehicle) {
        temppos[0] = (mp.players.local.vehicle.position.x - pos.x);
        temppos[1] = (mp.players.local.vehicle.position.y - pos.y);
        temppos[2] = (mp.players.local.vehicle.position.z - pos.z)
    } else {
        temppos[0] = mp.players.local.position.x - pos.x;
        temppos[1] = mp.players.local.position.y - pos.y;
        temppos[2] = mp.players.local.position.z - pos.z
    }
    if (((temppos[0] < radius) & (temppos[0] > -radius)) & ((temppos[1] < radius) && (temppos[1] > -radius)) & ((temppos[2] < radius) & (temppos[2] > -radius))) {
        return true
    }
    return false
};
