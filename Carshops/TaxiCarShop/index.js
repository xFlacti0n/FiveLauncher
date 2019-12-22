const VehicleHashes = {
    3338918751:     "Taxi",
    Cognoscenti:     "Cognoscenti",
    2333339779:     "Stretch Limo",
    3874056184:     "Patriot Limo",
    1941029835:     "Tourbus",
    3581397346:     "Linienbus"
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
let TaxicardealerPed = mp.peds.new(mp.game.joaat('cs_floyd'), new mp.Vector3(896.2299, -144.5151, 76.8037), 327, (streamTaxiCardealer) => {}, 0);

const ui = new Menu("Dienstfahrzeuge", "", MenuPoint);
ui.Visible = false;
    newItem = new UIMenuItem("Taxi", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Cognoscenti", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Stretch Limo", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Patriot Limo", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Tourbus", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Linienbus", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    ui.AddItem(new UIMenuItem("Schließen", ""));


mp.events.add("client:TaxiCarShop:OpenMenu", () => {
    ui.Visible = true;
});

ui.ItemSelect.on((item, index, value) => {
    if(item.Text == 'Schließen') {
        ui.Close();
    } else
    if(item.Text == 'Taxi') {
        mp.events.callRemote("server:TaxiCarShop:giveCar", "3338918751", 0);
        ui.Close();
    } else
    if(item.Text == 'Cognoscenti') {
        mp.events.callRemote("server:TaxiCarShop:giveCar", "Cognoscenti", 0);
        ui.Close();
    } else
    if(item.Text == 'Stretch Limo') {
        mp.events.callRemote("server:TaxiCarShop:giveCar", "2333339779", 0);
        ui.Close();
    } else
    if(item.Text == 'Patriot Limo') {
        mp.events.callRemote("server:TaxiCarShop:giveCar", "3874056184", 0);
        ui.Close();
    } else
    if(item.Text == 'Tourbus') {
        mp.events.callRemote("server:TaxiCarShop:giveCar", "1941029835", 0);
        ui.Close();
    } else
    if(item.Text == 'Linienbus') {
        mp.events.callRemote("server:TaxiCarShop:giveCar", "3581397346", 0);
        ui.Close();
    }

});

mp.events.add("client:TaxiCarShop:closeMenu", () => {
    if (ui && ui.Visible) ui.Close();
});
