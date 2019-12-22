const VehicleHashes = {
    0xE7D2A16E:     "shotaro",
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
let cardealerPed = mp.peds.new(mp.game.joaat('s_m_y_robber_01'), new mp.Vector3(-238.8022003173828, -1397.922119140625, 31.280920028686523), 272.994, (streamCashForTrashCardealer) => {}, 0);

const ui = new Menu("CashForTrash Cars", "", MenuPoint);
ui.Visible = false;
    newItem = new UIMenuItem("Shotaro", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$299");
    newItem = new UIMenuItem("BMX", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$50");

    ui.AddItem(new UIMenuItem("Schließen", ""));


mp.events.add("client:CashForTrashCarShop:OpenMenu", () => {
    ui.Visible = true;
});

ui.ItemSelect.on((item, index, value) => {
    if(item.Text == 'Schließen') {
        ui.Close();
    } else
    if(item.Text == 'Shotaro') {
        mp.events.callRemote("server:CashForTrashCarShop:giveCar", "0xE7D2A16E", 2000);
        ui.Close();
    } else
    if(item.Text == 'BMX') {
        mp.events.callRemote("server:CashForTrashCarShop:giveCar", "1131912276", 50);
        ui.Close();
    }
});

mp.events.add("client:CashForTrashCarShop:closeMenu", () => {
    if (ui && ui.Visible) ui.Close();
});
