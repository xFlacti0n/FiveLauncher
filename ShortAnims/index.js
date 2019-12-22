let surrender = false;
let sitting = false;
let armscross = false;
let phone = false;

// ERGEBEN
mp.keys.bind(186, true, function() {
  if (mp.gui.chat.enabled === true || player.getVariable("isUnconcious") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('cuffState') == 'CUFFED' || mp.gui.cursor.visible === true) return;
    if (surrender === false) {
        surrender = true;
        mp.game.graphics.notify("~w~Animation: ~g~Ergeben");
        mp.events.callRemote("playAnimationEvent", 'mp_am_hold_up', 'handsup_base', 1, 49, -1);
    } else {
        mp.events.callRemote("stopAnimation", player);
        surrender = false;
    }

});

// SITZEN
mp.keys.bind(0x62, true, function() {
  if (mp.gui.chat.enabled === true || player.getVariable("isUnconcious") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('cuffState') == 'CUFFED' || mp.gui.cursor.visible === true) return;
    if (sitting === false) {
        mp.events.callRemote("playAnimationEvent", 'anim@heists@fleeca_bank@ig_7_jetski_owner', 'owner_idle', 1, 33);
        sitting = true;
        mp.game.graphics.notify("~w~Animation: ~g~Sitzen");
    } else {
        mp.events.callRemote("stopAnimation", player);
        sitting = false;
    }
});

// ARME VERSCHRÄNKEN
mp.keys.bind(0x63, true, function() {
  if (mp.gui.chat.enabled === true || player.getVariable("isUnconcious") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('cuffState') == 'CUFFED' || mp.gui.cursor.visible === true) return;
    if (armscross === false) {
        mp.events.callRemote("playAnimationEvent",  'anim@heists@heist_corona@single_team', 'single_team_loop_boss', 1, 49);
        armscross = true;
        mp.game.graphics.notify("~w~Animation: ~g~Arme verschränken");
    } else {
        mp.events.callRemote("stopAnimation", player);
        armscross = false;
    }
});

