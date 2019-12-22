const VehicleHashes = {
    744705981:     "Medic Helicopter"
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
let MedichelidealerPed = mp.peds.new(mp.game.joaat('s_m_y_uscg_01'), new mp.Vector3(-456.3433, -307.75, 78.16822), 249, (streamMedichelidealer) => {}, 0);

const ui = new Menu("Dienstfahrzeuge", "", MenuPoint);
ui.Visible = false;
    newItem = new UIMenuItem("Medic Helicopter", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    ui.AddItem(new UIMenuItem("Schließen", ""));


mp.events.add("client:MedicHeliShop:OpenMenu", () => {
    ui.Visible = true;
});

ui.ItemSelect.on((item, index, value) => {
    if(item.Text == 'Schließen') {
        ui.Close();
    } else
    if(item.Text == 'Medic Helicopter') {
        mp.events.callRemote("server:MedicHeliShop:giveCar", "744705981", 0);
        ui.Close();
    }
});

mp.events.add("client:MedicHeliShop:closeMenu", () => {
    if (ui && ui.Visible) ui.Close();
});
