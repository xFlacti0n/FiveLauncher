const traubenFarm = new mp.Vector3(-1933, 1904, 175.8);
const traubenRoll = mp.peds.new(mp.game.joaat('ig_mrs_thornhill'), new mp.Vector3(-51, 1905.52, 195.4), 92, (rollTrauben) => {}, 0);
const rollTrauben = new mp.Vector3(-51, 1905.52, 195.4);
const sellTraubenSaft = mp.peds.new(mp.game.joaat('cs_dale'), new mp.Vector3(-1890.2, 2051, 141), 126.51, (sellSaft) => {}, 0);
const sellSaft = new mp.Vector3(-1890.2, 2051, 141);
let packTimeout = null;

//E-BIND
mp.keys.bind(0x45, true, function() {
    if (player.getVariable('state') !== 'INGAME') return;
    if (isInRadius(6, player, traubenFarm)) {
        if(player.getVariable('collect') !== 'COLLECTINGTRAUBEN') {
            mp.events.call("animCollectTrauben");
            mp.events.callRemote("server:jobs:trauben:setstate");
            setTimeout(_ => {
                mp.events.callRemote("giveTrauben");
                mp.events.callRemote("server:jobs:trauben:setstatenormal");
                mp.game.graphics.notify('Trauben gesammelt.');
            }, 12000)
        }
        else
        {
            mp.game.graphics.notify("Du Sammelst bereits Trauben");
        }
    }
    if (isInRadius(3, player, rollTrauben)) {
        if((!player.getVariable('packtrauben') || player.getVariable('packtrauben') !== 'PACKING') && packTimeout == null) {
            mp.events.callRemote("server:jobs:trauben:startProgress");
            mp.events.callRemote("server:jobs:trauben:setpackstate");
            mp.events.call("animPackTrauben");
            packTimeout = setTimeout(_ => {
                mp.events.callRemote("packTrauben");
                mp.events.callRemote("server:jobs:trauben:setpackstatenormal");
                packTimeout = null;
            }, 30000);
        }
        else
        {
            mp.game.graphics.notify("Du verarbeitest bereits.");
        }
    }
    if (isInRadius(3, player, sellSaft)) {
        if(player.getVariable('sellsaft') !== 'SELLING') {
            mp.events.callRemote("server:jobs:trauben:startSelling");
            mp.events.callRemote("server:jobs:trauben:setsellingstate");
            mp.events.callRemote("sellSaft");
            mp.events.callRemote("server:jobs:trauben:setsellingstatenormal");
        }
        else
        {
            mp.game.graphics.notify("Du verkaufst bereits.");
        }
    }
});

mp.events.add("client:jobs:trauben:endPackTimeout", () => {
  if (packTimeout !== null) {
    clearTimeout(packTimeout);
    packTimeout = null;
  }
});

mp.events.add("client:jobs:trauben:endSellTimeout", () => {
    if (sellTimeout !== null) {
      clearTimeout(sellTimeout);
      sellTimeout = null;
    }
  });

mp.events.add("animCollectTrauben", (player) => {
    mp.events.callRemote("playAnimationEvent", player, "amb@medic@standing@kneel@enter", "enter", 1, 33, -1);
});
mp.events.add("animPackTrauben", (player) => {
    mp.events.callRemote("playAnimationEvent", player, 'anim@amb@business@coc@coc_packing@', 'operate_press_basicmould_v1_pressoperator', 1, 47, -1);
});
mp.events.add("animSellSaft", (player) => {
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
