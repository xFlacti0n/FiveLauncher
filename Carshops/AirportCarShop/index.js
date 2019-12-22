const VehicleHashes = {
    2452219115:     "Faggio",
    1131912276:     "BMX"
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
let cardealerPed = mp.peds.new(mp.game.joaat('g_m_m_armboss_01'), new mp.Vector3(-1011.875, -2687.733, 13.97), 148, (streamAirportCardealer) => {}, 0);

const ui = new Menu("Airport Cars", "", MenuPoint);
ui.Visible = false;
    newItem = new UIMenuItem("Faggio", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$299");
    newItem = new UIMenuItem("BMX", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$50");

    ui.AddItem(new UIMenuItem("Schließen", ""));


mp.events.add("client:AirportCarShop:OpenMenu", () => {
    ui.Visible = true;
});

ui.ItemSelect.on((item, index, value) => {
    if(item.Text == 'Schließen') {
        ui.Close();
    } else
    if(item.Text == 'Faggio') {
        mp.events.callRemote("server:AirportCarShop:giveCar", "2452219115", 299);
        ui.Close();
    } else
    if(item.Text == 'BMX') {
        mp.events.callRemote("server:AirportCarShop:giveCar", "1131912276", 50);
        ui.Close();
    }
});

mp.events.add("client:AirportCarShop:closeMenu", () => {
    if (ui && ui.Visible) ui.Close();
});
