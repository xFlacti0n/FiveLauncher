const NativeUI = require("nativeui");
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
let zulassungBrowser = null;
let selectedNumPlate = null;
//PED
mp.markers.new(36, new mp.Vector3(-539.41, -190.51, -156.20), 1,
{
    direction: new mp.Vector3(-539.41, -190.51, -156.20),
    rotation: new mp.Vector3(0, 0, 0),
    color: [255,255,255,255],
    visible: true,
    dimension: 7
});
const ScreenRes = mp.game.graphics.getScreenResolution(0,0);
const MenuPoint = new Point(ScreenRes.x +150, 50);

var ui_List = new Menu("Fahrzeugliste", "Liste aller Fahrzeuge", MenuPoint);
ui_List.Visible = false;
var ui_main = new Menu("Zulassungsstelle", "Parke Fahrzeuge ein oder aus.", MenuPoint);
ui_main.Visible = false;

// MAIN MENU anzeigen
function drawMenu(vehJSON){
	if (ui_main.Visible) return;
  // Menu für Fahrzeugliste anlegen
  ui_List = new Menu("Fahrzeugliste", "Liste aller Fahrzeuge", MenuPoint);
  ui_List.Visible = false;
  if (vehJSON != "none"){
    vehList = JSON.parse(vehJSON);
    vehList.forEach(actVeh => {
        let newItem = new UIMenuItem("" + actVeh.kennzeichen, "Fahrzeug zulassen für 100$");
        ui_List.AddItem(newItem);
        newItem.SetRightLabel("" + [String(actVeh.bezeichnung)]);
    });
  } else{
    ui_List.AddItem( new UIMenuItem("Du besitzt keine Fahrzeuge", ""));
  }

  // Hauptmenu anzeigen
	ui_main = new Menu("Zulassungsstelle", "Melde ein Fahrzeug von dir an.", MenuPoint);
  ui_main.Visible = true;
  ui_main.AddItem( new UIMenuItem("Fahrzeug anmelden", "Fahrzeug wählen und anmelden"));
  ui_main.AddItem( new UIMenuItem("Schließen", "Menü schließen"));

  // Auswertung Menuauswahl Main Menu
  ui_main.ItemSelect.on((item, index) => {
    if (item.Text == "Fahrzeug anmelden"){
      ui_List.Visible = true;
      ui_main.Close();
    } else if (item.Text == "Schließen"){
      ui_main.Close();
    }
  });

  // Auswertung Menuauswahl ausparken
  ui_List.ItemSelect.on((item, index) => {
      selectedNumPlate = item.Text;
      mp.events.call("client:zulassung:zulassungCEF", selectedNumPlate);
      ui_List.Close();
  });
}
mp.events.add("client:zulassung:drawMenu", drawMenu);

//CEF ÖFNEN
mp.events.add("client:zulassung:zulassungCEF", (player) => {
	mp.gui.cursor.visible = true;
  mp.gui.chat.activate(false);
	if (zulassungBrowser == null) zulassungBrowser = mp.browsers.new("package://Zulassung/cef/index.html");
});

mp.events.add("client:zulassung:zulassung", (kennzeichen) => {
  mp.gui.cursor.visible = false;
	mp.gui.chat.activate(true);
	if (zulassungBrowser !== null) {
	  zulassungBrowser.destroy();
		zulassungBrowser = null;
  }
	mp.events.callRemote("server:zulassung:kennzeichen",kennzeichen, selectedNumPlate);
});
