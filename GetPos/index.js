// GetPos Befehl Clientside
const NativeUI = require("nativeui");
const Menu = NativeUI.Menu;
const UIMenuItem = NativeUI.UIMenuItem;
const Point = NativeUI.Point;

const ScreenRes = mp.game.graphics.getScreenResolution(0,0);
const MenuPoint = new Point(ScreenRes.x +150, 50);

//Position mit NativeUI anzeigen
function position(player, rot) {
    mp.game.graphics.notify("Posi Funktion aufgerufen")
    const ui = new Menu("Position", "zeigt deine aktuelle Position an", MenuPoint);
    ui.Visible = true;
	ui.AddItem(new UIMenuItem(
        "PosX",
        ""));
    ui.AddItem(new UIMenuItem(
        player.position.x,
        ""));
    ui.AddItem(new UIMenuItem(
        "PosY",
        ""));
    ui.AddItem(new UIMenuItem(
        player.position.y,
        ""));
    ui.AddItem(new UIMenuItem(
        "PosZ",
        ""));
    ui.AddItem(new UIMenuItem(
        player.position.z,
        ""));
    ui.AddItem(new UIMenuItem(
        "Heading",
        ""));
    ui.AddItem(new UIMenuItem(
        rot,
        ""));
}
mp.events.add("client:GetPos:position", position);
