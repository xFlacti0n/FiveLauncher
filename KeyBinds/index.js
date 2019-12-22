// Keybinds rufen Server- und Clientevents auf, wenn der Spieler die Taste drückt

player = mp.players.local;
let MinimapShow = true;



// Taste "E"
mp.keys.bind(0x45, true, function() {
    if (mp.gui.chat.enabled === true || player.getVariable("isUnconcious") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('cuffState') == 'CUFFED' || mp.gui.cursor.visible === true) return;
    mp.events.callRemote('server:Keybind:KeyE');
    mp.events.call('client:Keybind:KeyE');
    //LEGACY (wird entfernt, sobald alle keypressE genannten Events Serverside entfernt wurden)
    //mp.events.callRemote('keypressE');
    //mp.events.call('keypressE');
});

// TASTE "K"
mp.keys.bind(0x4B, true, function () {
    if (mp.gui.chat.enabled === true || player.getVariable("isUnconcious") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('cuffState') == 'CUFFED' || mp.gui.cursor.visible === true) return;
    mp.events.callRemote('server:Keybind:KeyK');
    mp.events.call('client:Keybind:KeyK');
});

// Taste "M"
mp.keys.bind(0x4D, true, function () {
    if (mp.gui.chat.enabled === true || player.getVariable("isUnconcious") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('cuffState') == 'CUFFED' || mp.gui.cursor.visible === true) return;
    mp.events.callRemote('server:Keybind:KeyM');
    mp.events.call('client:Keybind:KeyM');
});

// Taste "N"
mp.keys.bind(0x4E, true, function () {
    if (mp.gui.chat.enabled === true || player.getVariable("isUnconcious") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('cuffState') == 'CUFFED' || mp.gui.cursor.visible === true) return;
    mp.events.callRemote('server:Keybind:KeyN');
    mp.events.call('client:Keybind:KeyN');
});

// Taste "O"
mp.keys.bind(0x4F, true, function () {
  if (mp.gui.chat.enabled === true || player.getVariable("isUnconcious") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('cuffState') == 'CUFFED' || mp.gui.cursor.visible === true) return;
    mp.events.callRemote('server:Keybind:KeyO');
    mp.events.call('client:Keybind:KeyO');
});

// TASTE "PageUp"
mp.keys.bind(0x21, true, function () {
    if (mp.gui.chat.enabled === true || player.getVariable("isUnconcious") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('cuffState') == 'CUFFED') return;
    mp.events.callRemote('server:Keybind:PageUp');
    mp.events.call('client:Keybind:PageUp');
    mp.events.callRemote("playAnimationEvent", 'anim@cellphone@in_car@ds', 'cellphone_text_read_base', 1, 49, -1);
});

// Taste "PageDown"
mp.keys.bind(0x22, true, function () {
    if (mp.gui.chat.enabled === true || player.getVariable("isUnconcious") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('cuffState') == 'CUFFED') return;
    mp.events.callRemote('server:Keybind:PageDown');
    mp.events.call('client:Keybind:PageDown');
    mp.events.callRemote("playAnimationEvent", 'cellphone@', 'cellphone_horizontal_exit', 1, 40, -1);
});

// TASTE "X"
mp.keys.bind(0x12, true, function () {
    if (mp.gui.chat.enabled === true || player.getVariable("isUnconcious") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('cuffState') == 'CUFFED') return;
    mp.events.callRemote('server:Keybind:Alt');
    mp.events.call('client:Keybind:Alt');
});

// TASTE "U"
mp.keys.bind(0x55, true, function () {
    if (mp.gui.chat.enabled === true || player.getVariable("isUnconcious") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('cuffState') == 'CUFFED' || mp.gui.cursor.visible === true) return;
	player.setToRagdoll(5000, 10000, 0, false, false, false);
    mp.events.callRemote('server:Keybind:U');
    mp.events.call('client:Keybind:U');
});

// TASTE "G"
mp.keys.bind(0x47, true, () => {
    if (mp.gui.chat.enabled === true || player.getVariable("isUnconcious") == 'true' || player.getVariable('state') !== 'INGAME' || mp.gui.cursor.visible === true) return;
    //mp.events.callRemote('server:Keybind:G');
    mp.events.call('client:Keybind:G');
});

// Taste "F8"
mp.keys.bind(0x77, true, function () {
    if (mp.gui.chat.enabled === true || player.getVariable("isUnconcious") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('cuffState') == 'CUFFED') return;
    mp.events.callRemote('server:Keybind:KeyF8');
    mp.events.call('client:Keybind:KeyF8');
});