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
let beekerscardealerPed = mp.peds.new(mp.game.joaat('cs_floyd'), new mp.Vector3(133.2848, 6630.3110, 31.6840), 314, (streambeekersCardealer) => {}, 0);

const ui = new Menu("Beekers Cars", "", MenuPoint);
ui.Visible = false;
    newItem = new UIMenuItem("Werkstatt", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Abschlepper", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("LKW", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");

    ui.AddItem(new UIMenuItem("Schließen", ""));


mp.events.add("client:beekersCarShop:OpenMenu", () => {
    ui.Visible = true;
});

ui.ItemSelect.on((item, index, value) => {
    if(item.Text == 'Schließen') {
        ui.Close();
    } else
    if(item.Text == 'Werkstatt') {
        mp.events.callRemote("server:beekersCarShop:giveCar", "2132890591", 0);
        ui.Close();
    } else
    if(item.Text == 'Abschlepper') {
        mp.events.callRemote("server:beekersCarShop:giveCar", "3852654278", 0);
        ui.Close();
    } else
    if(item.Text == 'LKW') {
        mp.events.callRemote("server:beekersCarShop:giveCar", "2971866336", 0);
        ui.Close();
    }
});

mp.events.add("client:beekersCarShop:closeMenu", () => {
    if (ui && ui.Visible) ui.Close();
});
