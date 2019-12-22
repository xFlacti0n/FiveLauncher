const VehicleHashes = {
    788045382:      "Sanchez",
    841808271:      "Rhapsody",
    3863274624:     "Panto",
    3117103977:     "Issi 2",
    3164157193:     "Dilettante",
    1549126457:     "Brioso",
    Blista:     "Blista",
    2859047862:     "Bodhi",
    2485144969:     "Asea",
    2411965148:     "Emperor",
    3306466016:     "Cheburek",
    1762279763:     "Tornado 3",
    2983726598:     "Surfer 2",
    3087195462:     "Rebel",
    1873600305:     "Ratbike",
    3117103977:     "Issi",
    2844316578:     "Prairie",
    841808271:      "Rhapsody",
    Asterope:     "Asterope",
    3609690755:     "Emperor",
    30052405074:    "Ingot",
    Intruder:      "Intruder",
    Premier:     "Premier",
    Regina:     "Regina",
    Stanier:     "Stanier",
    Stratum:     "Stratum",
    Surge:     "Surge",
    1039032026:     "Blista Kompakt",
    699456151:      "Surfer",
    2166734073:     "Blazer"
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
let browser = null;

var newItem;
let uiMenu = []

const ScreenRes = mp.game.graphics.getScreenResolution(0,0);
const MenuPoint = new Point(ScreenRes.x +150, 50);

// PED
let cardealerPed = mp.peds.new(mp.game.joaat('g_m_m_armboss_01'), new mp.Vector3(-40.84, -1674.82, 29.46), 143, (streamCardealer) => {}, 0);


// MAIN
const ui_Main = new Menu("Autohändler", "Gebraucht oder nicht - Alles da!", MenuPoint);
ui_Main.AddItem(used = new UIMenuItem("Gebrauchtwagen", "Rostig & Alt - Wie Winfield"));
ui_Main.AddItem(newly = new UIMenuItem("Neuwagen", "Neu & mit frischem glanz!"));
ui_Main.Visible = false;
uiMenu.push(ui_Main);

// NEWLY
const ui_Newly = new Menu("Neuwagen", "", MenuPoint);
ui_Newly.Visible = false;
    ui_Newly.AddItem(new UIMenuItem("Auswählen", ""));
    newItem = new UIMenuItem("Blazer", "");
    ui_Newly.AddItem(newItem);
    newItem.SetRightLabel("~g~$11790");
    newItem = new UIMenuItem("Dilettante", "");
    ui_Newly.AddItem(newItem);
    newItem.SetRightLabel("~g~$15000");
    newItem = new UIMenuItem("Issi", "");
    ui_Newly.AddItem(newItem);
    newItem.SetRightLabel("~g~$10500");
    newItem = new UIMenuItem("Prairie", "");
    ui_Newly.AddItem(newItem);
    newItem.SetRightLabel("~g~$15900");
    newItem = new UIMenuItem("Rhapsody", "");
    ui_Newly.AddItem(newItem);
    newItem.SetRightLabel("~g~$33000");
    newItem = new UIMenuItem("Asterope", "");
    ui_Newly.AddItem(newItem);
    newItem.SetRightLabel("~g~$16500");
    newItem = new UIMenuItem("Emperor", "");
    ui_Newly.AddItem(newItem);
    newItem.SetRightLabel("~g~$23700");
    newItem = new UIMenuItem("Ingot", "");
    ui_Newly.AddItem(newItem);
    newItem.SetRightLabel("~g~$7000");
    newItem = new UIMenuItem("Intruder", "");
    ui_Newly.AddItem(newItem);
    newItem.SetRightLabel("~g~$29700");
    newItem = new UIMenuItem("Premier", "");
    ui_Newly.AddItem(newItem);
    newItem.SetRightLabel("~g~$21750");
    newItem = new UIMenuItem("Regina", "");
    ui_Newly.AddItem(newItem);
    newItem.SetRightLabel("~g~$5800");
    newItem = new UIMenuItem("Stanier", "");
    ui_Newly.AddItem(newItem);
    newItem.SetRightLabel("~g~$21750");
    newItem = new UIMenuItem("Stratum", "");
    ui_Newly.AddItem(newItem);
    newItem.SetRightLabel("~g~$21750");
    newItem = new UIMenuItem("Surge", "");
    ui_Newly.AddItem(newItem);
    newItem.SetRightLabel("~g~$16500");
    newItem = new UIMenuItem("Blista Kompakt", "");
    ui_Newly.AddItem(newItem);
    newItem.SetRightLabel("~g~$24000");
    newItem = new UIMenuItem("Surfer", "");
    ui_Newly.AddItem(newItem);
    newItem.SetRightLabel("~g~$18000");
    uiMenu.push(ui_Newly);

// USEDCARS
const ui_Used = new Menu("Gebrauchtwagen", "", MenuPoint);
ui_Used.Visible = false;
    ui_Used.AddItem(new UIMenuItem("Auswählen", ""));
    newItem = new UIMenuItem("Blista", "");
    ui_Used.AddItem(newItem);
    newItem.SetRightLabel("~g~$6920");
    newItem = new UIMenuItem("Bodhi", "");
    ui_Used.AddItem(newItem);
    newItem.SetRightLabel("~g~$9630");
    newItem = new UIMenuItem("Panto", "");
    ui_Used.AddItem(newItem);
    newItem.SetRightLabel("~g~$4630");
    newItem = new UIMenuItem("Asea", "");
    ui_Used.AddItem(newItem);
    newItem.SetRightLabel("~g~$7830");
    newItem = new UIMenuItem("Rostiger Emperor", "");
    ui_Used.AddItem(newItem);
    newItem.SetRightLabel("~g~$999");
    newItem = new UIMenuItem("Cheburek", "");
    ui_Used.AddItem(newItem);
    newItem.SetRightLabel("~g~$7620");
    newItem = new UIMenuItem("Rostiger Tornado", "");
    ui_Used.AddItem(newItem);
    newItem.SetRightLabel("~g~$799");
    newItem = new UIMenuItem("Rostiger Surfer", "");
    ui_Used.AddItem(newItem);
    newItem.SetRightLabel("~g~$1099");
    newItem = new UIMenuItem("Rostiger Rebel", "2-Sitzer Wagen");
    ui_Used.AddItem(newItem);
    newItem.SetRightLabel("~g~$1299");
    newItem = new UIMenuItem("Rostiges Ratbike", "");
    ui_Used.AddItem(newItem);
    newItem.SetRightLabel("~g~$599");

    let ui_Close = new UIMenuItem("Schließen", "Schließt das Menü");
    ui_Close.BackColor = new Color(138, 0, 0);
    ui_Close.HighlightedBackColor = new Color(189, 189, 189);
    ui_Main.AddItem(ui_Close);
    uiMenu.push(ui_Used);


    ui_Newly.MenuClose.on(() => {
        ui_Newly.RefreshIndex();
    });


    ui_Newly.ItemSelect.on((item, index, value) => {
    if (item.Text == 'Blazer') {
        mp.events.callRemote("server:CarShop:giveCar", "2166734073", 11790);
        ui_Newly.Close();
    } else
    if(item.Text == 'Dilettante') {
        mp.events.callRemote("server:CarShop:giveCar", "3164157193", 15000);
        ui_Newly.Close();
    } else
    if(item.Text == 'Issi') {
        mp.events.callRemote("server:CarShop:giveCar", "3117103977", 10500);
        ui_Newly.Close();
    } else
    if(item.Text == 'Prairie') {
        mp.events.callRemote("server:CarShop:giveCar", "2844316578", 15900);
        ui_Newly.Close();
    } else
    if(item.Text == 'Rhapsody') {
        mp.events.callRemote("server:CarShop:giveCar", "841808271", 33000);
        ui_Newly.Close();
    } else
    if(item.Text == 'Asterope') {
        mp.events.callRemote("server:CarShop:giveCar", "Asterope", 16550);
        ui_Newly.Close();
    } else
    if(item.Text == 'Emperor') {
        mp.events.callRemote("server:CarShop:giveCar", "3609690755", 23700);
        ui_Newly.Close();
    } else
    if(item.Text == 'Ingot') {
        mp.events.callRemote("server:CarShop:giveCar", "30052405074", 7000);
        ui_Newly.Close();
    } else
    if(item.Text == 'Intruder') {
        mp.events.callRemote("server:CarShop:giveCar", "Intruder", 29700);
        ui_Newly.Close();
    } else
    if(item.Text == 'Premier') {
        mp.events.callRemote("server:CarShop:giveCar", "Premier", 21750);
        ui_Newly.Close();
    } else
    if(item.Text == 'Regina') {
        mp.events.callRemote("server:CarShop:giveCar", "Regina", 5800);
        ui_Newly.Close();
    } else
    if(item.Text == 'Stanier') {
        mp.events.callRemote("server:CarShop:giveCar", "Stanier", 21750);
        ui_Newly.Close();
    } else
    if(item.Text == 'Stratum') {
        mp.events.callRemote("server:CarShop:giveCar", "Stratum", 21750);
        ui_Newly.Close();
    } else
    if(item.Text == 'Surge') {
        mp.events.callRemote("server:CarShop:giveCar", "Surge", 16500);
        ui_Newly.Close();
    } else
    if(item.Text == 'Blista Kompakt') {
        mp.events.callRemote("server:CarShop:giveCar", "1039032026", 24000);
        ui_Newly.Close();
    } else
    if(item.Text == 'Surfer') {
        mp.events.callRemote("server:CarShop:giveCar", "699456151", 18000);
        ui_Newly.Close();
    }
});


    ui_Used.MenuClose.on(() => {
        ui_Used.RefreshIndex();
    });

    ui_Used.ItemSelect.on((item, index, value) => {
    if(item.Text == 'Blista') {
        mp.events.callRemote("server:CarShop:giveCar", "Blista", 6920);
        ui_Used.Close();
    } else
    if(item.Text == 'Bodhi') {
        mp.events.callRemote("server:CarShop:giveCar", "2859047862", 9630);
        ui_Used.Close();
    } else
    if(item.Text == 'Panto') {
        mp.events.callRemote("server:CarShop:giveCar", "3863274624", 4630);
        ui_Used.Close();
    } else
    if(item.Text == 'Asea') {
        mp.events.callRemote("server:CarShop:giveCar", "2485144969", 7830);
        ui_Used.Close();
    } else
    if(item.Text == 'Rostiger Emperor') {
        mp.events.callRemote("server:CarShop:giveCar", "2411965148", 999);
        ui_Used.Close();
    } else
    if(item.Text == 'Cheburek') {
        mp.events.callRemote("server:CarShop:giveCar", "3306466016", 7620);
        ui_Used.Close();
    } else
    if(item.Text == 'Rostiger Tornado') {
        mp.events.callRemote("server:CarShop:giveCar", "1762279763", 799);
        ui_Used.Close();
    } else
    if(item.Text == 'Rostiger Surfer') {
        mp.events.callRemote("server:CarShop:giveCar", "2983726598", 1099);
        ui_Used.Close();
    } else
    if(item.Text == 'Rostiger Rebel') {
        mp.events.callRemote("server:CarShop:giveCar", "3087195462", 1299);
        ui_Used.Close();
    } else
    if(item.Text == 'Rostiges Ratbike') {
        mp.events.callRemote("server:CarShop:giveCar", "1873600305", 599);
        ui_Used.Close();
    }
});

mp.events.add("client:CarShop:OpenDialog", () => {
  if (browser == null) {
    browser = mp.browsers.new('package://TechGames/Carshops/CarShop/CEF/index.html');
    mp.gui.cursor.show(true, true);
    mp.gui.chat.activate(false);
  }
});

mp.events.add("client:CarShop:CloseDialog", () => {
  if (browser !== null) {
    browser.destroy();
    browser = null;
    mp.gui.cursor.show(false, false);
    mp.gui.chat.activate(true);
  }
});

mp.events.add("client:CarShop:spawnCar", (modelId, price) => {
  if (browser !== null) {
    browser.destroy();
    browser = null;
    mp.gui.cursor.show(false, false);
    mp.gui.chat.activate(true);

    mp.events.callRemote("server:CarShop:giveCar", ""+modelId, price);
  }
});

mp.events.add("client:CarShop:OpenMenu", () => {
    ui_Main.Visible = true;
});



ui_Main.BindMenuToItem(ui_Newly, newly);
ui_Main.BindMenuToItem(ui_Used, used);

mp.events.add("client:CarShop:closeMenu", () => {
    if (ui_Main.Visible | ui_Used.Visible | ui_Newly) {
        uiMenu.forEach(function(element, index, array){element.Close()});
    }
});
