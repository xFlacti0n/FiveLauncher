const VehicleHashes = {
    353883353:     "Police Helicopter"
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
let PolicehelidealerPed = mp.peds.new(mp.game.joaat('cs_prolsec_02'), new mp.Vector3(463.3555, -982.4477, 43.6919), 90, (streamPolicehelidealer) => {}, 0);

const ui = new Menu("Dienstfahrzeuge", "", MenuPoint);
ui.Visible = false;
    newItem = new UIMenuItem("Police Helicopter", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    ui.AddItem(new UIMenuItem("Schließen", ""));


mp.events.add("client:PoliceHeliShop:OpenMenu", () => {
    ui.Visible = true;
});

ui.ItemSelect.on((item, index, value) => {
    if(item.Text == 'Schließen') {
        ui.Close();
    } else
    if(item.Text == 'Police Helicopter') {
        mp.events.callRemote("server:PoliceHeliShop:giveCar", "353883353", 0);
        ui.Close();
    }
});

mp.events.add("client:PoliceHeliShop:closeMenu", () => {
    if (ui && ui.Visible) ui.Close();
});
