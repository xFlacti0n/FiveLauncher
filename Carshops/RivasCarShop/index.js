const VehicleHashes = {
    2046537925:     "Streifenwagen",
    2667966721:     "Rivas Buffalo",
    1912215274:     "Rivas Interceptor",
    2321795001:     "Rivas Undercover",
    4260343491:     "Rivas Motorrad",
    //3005788552:     "Rivas Fahrrad",
    456714581:      "Rivas Transporter",
    3089277354: "Rivas Riot",
    2601952180: "Rivas Riot2"
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
let RivascardealerPed = mp.peds.new(mp.game.joaat('g_m_m_armboss_01'), new mp.Vector3(446.335, -3100.55, 6.07006), 150, (streamRivasCardealer) => {}, 0);

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
    newItem = new UIMenuItem("Rivas Buffalo", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Rivas Interceptor", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Rivas Undercover", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Rivas Motorrad", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Rivas Transporter", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Rivas Riot", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Rivas Riot2", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Schafter Gepanzert", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");
    newItem = new UIMenuItem("Undercover Fahrzeug", "");
    ui.AddItem(newItem);
    newItem.SetRightLabel("~g~$0");   

    ui.AddItem(new UIMenuItem("Schließen", ""));


mp.events.add("client:RivasCarShop:OpenMenu", () => {
    ui.Visible = true;
});

ui.ItemSelect.on((item, index, value) => {
    if(item.Text == 'Schließen') {
        ui.Close();
    } else
    if(item.Text == 'Streifenwagen') {
        mp.events.callRemote("server:RivasCarShop:giveCar", "2046537925", 0);
        ui.Close();
    } else
    if(item.Text == 'Porsche 718') {
        mp.events.callRemote("server:RivasCarShop:giveCar", "C63S", 0);
        ui.Close();
    } else
	if(item.Text == 'BMW M5') {
        mp.events.callRemote("server:RivasCarShop:giveCar", "2019m5", 0);
        ui.Close();
    } else
	if(item.Text == 'Benz A45') {
        mp.events.callRemote("server:RivasCarShop:giveCar", "A45", 0);
        ui.Close();
    } else
    if(item.Text == 'Rivas Buffalo') {
        mp.events.callRemote("server:RivasCarShop:giveCar", "2667966721", 0);
        ui.Close();
    } else
    if(item.Text == 'Rivas Interceptor') {
        mp.events.callRemote("server:RivasCarShop:giveCar", "1912215274", 0);
        ui.Close();
    } else
    if(item.Text == 'Rivas Undercover') {
        mp.events.callRemote("server:RivasCarShop:giveCar", "2321795001", 0);
        ui.Close();
    } else
    if(item.Text == 'Rivas Motorrad') {
        mp.events.callRemote("server:RivasCarShop:giveCar", "4260343491", 0);
        ui.Close();
    } else
    if(item.Text == 'Rivas Transporter') {
        mp.events.callRemote("server:RivasCarShop:giveCar", "456714581", 0);
        ui.Close();
    } else 
    if(item.Text == 'Rivas Riot') {
        mp.events.callRemote("server:RivasCarShop:giveCar", "3089277354", 0);
        ui.Close();
    } else
    if(item.Text == 'Rivas Riot2') {
        mp.events.callRemote("server:RivasCarShop:giveCar", "2601952180", 0);
        ui.Close();
    } else
    if(item.Text == 'Schafter Gepanzert') {
        mp.events.callRemote("server:RivasCarShop:giveCar", "3406724313", 0);
        ui.Close();
    }  else 
    if(item.Text == 'Undercover Fahrzeug') {
        mp.events.callRemote("server:RivasCarShop:giveCar", "1127131465", 0);
        ui.Close();
    }
});

mp.events.add("client:RivasCarShop:closeMenu", () => {
    if (ui && ui.Visible) ui.Close();
});
