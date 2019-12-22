const VehicleHashes = {
    1127131465:     "Undercover Fahrzeug",
    2647026068:     "Undercover Granger"
};

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
let NOOSEcardealerPed = mp.peds.new(mp.game.joaat('mp_m_fibsec_01'), new mp.Vector3(2520.879, -415.385, 94.123), 318, (streamNOOSECardealer) => {}, 0);

const ui = new Menu("Dienstfahrzeuge", "", MenuPoint);
ui.Visible = false;
    newItem = new UIMenuItem("Undercover Fahrzeug", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Undercover Granger", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Insurgent", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Insurgent2", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Schafter", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    ui.AddItem(new UIMenuItem("Schließen", ""));


mp.events.add("client:NOOSECarShop:OpenMenu", () => {
    ui.Visible = true;
});

ui.ItemSelect.on((item, index, value) => {
    if(item.Text == 'Schließen') {
        ui.Close();
    } else
    if(item.Text == 'Undercover Fahrzeug') {
        mp.events.callRemote("server:NOOSECarShop:giveCar", "1127131465", 0);
        ui.Close();
    } else
    if(item.Text == 'Undercover Granger') {
        mp.events.callRemote("server:NOOSECarShop:giveCar", "2647026068", 0);
        ui.Close();
    } else
    if(item.Text == 'Insurgent') {
        mp.events.callRemote("server:NOOSECarShop:giveCar", "2434067162", 0);
        ui.Close();
    } else
    if(item.Text == 'Insurgent2') {
        mp.events.callRemote("server:NOOSECarShop:giveCar", "2071877360", 0);
        ui.Close();
    } else
    if(item.Text == 'Schafter') {
        mp.events.callRemote("server:NOOSECarShop:giveCar", "3406724313", 0);
        ui.Close();
    }

});

mp.events.add("client:NOOSECarShop:closeMenu", () => {
    if (ui && ui.Visible) ui.Close();
});
