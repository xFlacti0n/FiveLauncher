// Native UI
const NativeUI = require("./TechGames/nativeui");
const Menu = NativeUI.Menu;
const UIMenuItem = NativeUI.UIMenuItem;
const UIMenuListItem = NativeUI.UIMenuListItem;
const UIMenuCheckboxItem = NativeUI.UIMenuCheckboxItem;
const UIMenuSliderItem = NativeUI.UIMenuSliderItem;
const BadgeStyle = NativeUI.BadgeStyle;
const Point = NativeUI.Point;
const ItemsCollection = NativeUI.ItemsCollection;
const Color = NativeUI.Color;
const ListItem = NativeUI.ListItem;

var newItem;

const ScreenRes = mp.game.graphics.getScreenResolution(0,0);
const MenuPoint = new Point(ScreenRes.x +150, 50);

// PED
let lsccardealerPed = mp.peds.new(mp.game.joaat('cs_floyd'), new mp.Vector3(-192.9500, -1286.4597, 31.2692), 261, (streamlscCardealer) => {}, 0);

const ui = new Menu("Bennys Cars", "", MenuPoint);
ui.Visible = false;
    newItem = new UIMenuItem("Abschlepper", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Abschlepper2", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("SlamVan", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Flatbed", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");

    ui.AddItem(new UIMenuItem("Schließen", ""));


mp.events.add("client:bennysCarShop:OpenMenu", () => {
    ui.Visible = true;
});

ui.ItemSelect.on((item, index, value) => {
    if(item.Text == 'Schließen') {
        ui.Close();
    } else
    if(item.Text == 'Abschlepper') {
        mp.events.callRemote("server:bennysCarShop:giveCar", "2971866336", 0);
        ui.Close();
    } else
    if(item.Text == 'Abschlepper2') {
        mp.events.callRemote("server:bennysCarShop:giveCar", "3852654278", 0);
        ui.Close();
    } else
    if(item.Text == 'SlamVan') {
        mp.events.callRemote("server:bennysCarShop:giveCar", "1119641113", 0);
        ui.Close();
    } else
    if(item.Text == 'Flatbed') {
        mp.events.callRemote("server:bennysCarShop:giveCar", "1353720154", 0);
        ui.Close();
    }
});

mp.events.add("client:bennysCarShop:closeMenu", () => {
    if (ui && ui.Visible) ui.Close();
});
