const VehicleHashes = {
    2046537925:     "Streifenwagen",
    2667966721:     "Police Buffalo",
    1912215274:     "Police Interceptor",
    2321795001:     "Police Undercover",
    4260343491:     "Police Motorrad",
    //3005788552:     "Police Fahrrad",
    456714581:      "Police Transporter",
    3089277354: "Police Riot",
    2601952180: "Police Riot2"
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
let PolicecardealerPed = mp.peds.new(mp.game.joaat('s_m_y_cop_01'), new mp.Vector3(459.167, -1007.915, 28.25), 101, (streamPoliceCardealer) => {}, 0);

const ui = new Menu("Dienstfahrzeuge", "", MenuPoint);
ui.Visible = false;
    newItem = new UIMenuItem("Streifenwagen", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Porsche 718", "");
    ui.AddItem(newItem);
	newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("BMW M5", "");
    ui.AddItem(newItem);
	newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Benz A45", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Police Buffalo", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Police Interceptor", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Police Undercover", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Police Motorrad", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Police Transporter", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Police Riot", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Police Riot2", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Schafter Gepanzert", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Undercover Fahrzeug", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");   

    ui.AddItem(new UIMenuItem("Schließen", ""));


mp.events.add("client:PoliceCarShop:OpenMenu", () => {
    ui.Visible = true;
});

ui.ItemSelect.on((item, index, value) => {
    if(item.Text == 'Schließen') {
        ui.Close();
    } else
    if(item.Text == 'Streifenwagen') {
        mp.events.callRemote("server:PoliceCarShop:giveCar", "2046537925", 0);
        ui.Close();
    } else
    if(item.Text == 'Porsche 718') {
        mp.events.callRemote("server:PoliceCarShop:giveCar", "pol718", 0);
        ui.Close();
    } else
	if(item.Text == 'BMW M5') {
        mp.events.callRemote("server:PoliceCarShop:giveCar", "2019m5", 0);
        ui.Close();
    } else
	if(item.Text == 'Benz A45') {
        mp.events.callRemote("server:PoliceCarShop:giveCar", "A45", 0);
        ui.Close();
    } else
    if(item.Text == 'Police Buffalo') {
        mp.events.callRemote("server:PoliceCarShop:giveCar", "2667966721", 0);
        ui.Close();
    } else
    if(item.Text == 'Police Interceptor') {
        mp.events.callRemote("server:PoliceCarShop:giveCar", "1912215274", 0);
        ui.Close();
    } else
    if(item.Text == 'Police Undercover') {
        mp.events.callRemote("server:PoliceCarShop:giveCar", "2321795001", 0);
        ui.Close();
    } else
    if(item.Text == 'Police Motorrad') {
        mp.events.callRemote("server:PoliceCarShop:giveCar", "4260343491", 0);
        ui.Close();
    } else
    if(item.Text == 'Police Transporter') {
        mp.events.callRemote("server:PoliceCarShop:giveCar", "456714581", 0);
        ui.Close();
    } else 
    if(item.Text == 'Police Riot') {
        mp.events.callRemote("server:PoliceCarShop:giveCar", "3089277354", 0);
        ui.Close();
    } else
    if(item.Text == 'Police Riot2') {
        mp.events.callRemote("server:PoliceCarShop:giveCar", "2601952180", 0);
        ui.Close();
    } else
    if(item.Text == 'Schafter Gepanzert') {
        mp.events.callRemote("server:PoliceCarShop:giveCar", "3406724313", 0);
        ui.Close();
    }  else 
    if(item.Text == 'Undercover Fahrzeug') {
        mp.events.callRemote("server:PoliceCarShop:giveCar", "1127131465", 0);
        ui.Close();
    }
});

mp.events.add("client:PoliceCarShop:closeMenu", () => {
    if (ui && ui.Visible) ui.Close();
});
