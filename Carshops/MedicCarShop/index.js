const VehicleHashes = {
    1171614426:     "Krankenwagen",
    469291905:     "Lifeguard Wagen"
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
let MediccardealerPed = mp.peds.new(mp.game.joaat('s_m_y_airworker'), new mp.Vector3(-518.65, -299.33, 35.34), 20, (streamMedicCardealer) => {}, 0);

const ui = new Menu("Dienstfahrzeuge", "", MenuPoint);
ui.Visible = false;
    newItem = new UIMenuItem("Krankenwagen", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Lifeguard Wagen", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    ui.AddItem(new UIMenuItem("Schließen", ""));


mp.events.add("client:MedicCarShop:OpenMenu", () => {
    ui.Visible = true;
});

ui.ItemSelect.on((item, index, value) => {
    if(item.Text == 'Schließen') {
        ui.Close();
    } else
    if(item.Text == 'Krankenwagen') {
        mp.events.callRemote("server:MedicCarShop:giveCar", "1171614426", 0);
        ui.Close();
    } else
    if(item.Text == 'Lifeguard Wagen') {
        mp.events.callRemote("server:MedicCarShop:giveCar", "469291905", 0);
        ui.Close();
    }
});

mp.events.add("client:MedicCarShop:closeMenu", () => {
    if (ui && ui.Visible) ui.Close();
});
