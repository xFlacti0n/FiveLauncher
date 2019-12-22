const VehicleHashes = {
    142944341:     "Baller LE",
    3990165190:     "Buffalo"
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

// PEDs
let DOJcardealerPed = mp.peds.new(mp.game.joaat('ig_barry'), new mp.Vector3(261.849, -336.92, 45.01), 298, (streamDOJCardealer) => {}, 0);

const ui = new Menu("Dienstfahrzeuge", "", MenuPoint);
ui.Visible = false;
    newItem = new UIMenuItem("Baller LE", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Buffalo", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    ui.AddItem(new UIMenuItem("Schließen", ""));


mp.events.add("client:DOJCarShop:OpenMenu", () => {
    ui.Visible = true;
});

ui.ItemSelect.on((item, index, value) => {
    if(item.Text == 'Schließen') {
        ui.Close();
    } else
    if(item.Text == 'Baller LE') {
        mp.events.callRemote("server:DOJCarShop:giveCar", "142944341", 0);
        ui.Close();
    } else
    if(item.Text == 'Buffalo') {
        mp.events.callRemote("server:DOJCarShop:giveCar", "3990165190", 0);
        ui.Close();
    }
});

mp.events.add("client:DOJCarShop:closeMenu", () => {
    if (ui && ui.Visible) ui.Close();
});
