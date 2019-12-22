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
let policeImpoundPed = mp.peds.new(mp.game.joaat('ig_trafficwarden'), new mp.Vector3(409.2658, -1623.0095, 29.2919), 229.1702, (streamPoliceImpound) =>{}, 0);
// Array Variable zum halten der Fahrzeuge in der Garage

const ScreenRes = mp.game.graphics.getScreenResolution(0,0);
const MenuPoint = new Point(ScreenRes.x +150, 50);

// MAIN MENU anzeigen
function drawMenu(vehJSON){
  // Menu für Fahrzeugliste anlegen
  const ui_List = new Menu("Fahrzeugliste", "Liste aller Fahrzeuge", MenuPoint);
  ui_List.Visible = false;
  if (vehJSON != "none"){
    vehInGarage = JSON.parse(vehJSON); // vehJSON beinhaltet [{"model":"aaa","kennzeichen":"bbb"},{"model":"xxx","kennzeichen":"yyy"}]
    vehInGarage.forEach(actVeh => {
        let newItem = new UIMenuItem("" + actVeh.kennzeichen, ""+ String(actVeh.model));
        ui_List.AddItem(newItem);
        newItem.SetRightLabel("" + [String(actVeh.owner)]);
    });
  } else{
    ui_List.AddItem( new UIMenuItem("keine Fahrzeuge in dieser Garage", ""));
  }

  // Hauptmenu anzeigen
  const ui_main = new Menu("Verwahrstelle", "Parke Fahrzeuge ein oder aus.", MenuPoint);
  ui_main.Visible = true;
  ui_main.AddItem( new UIMenuItem("Fahrzeug ausparken", "Fahrzeug wählen und ausparken"));
  ui_main.AddItem( new UIMenuItem("Fahrzeug einparken", "aktuelles Fahrzeug einparken"));
  ui_main.AddItem( new UIMenuItem("Schließen", "Menü schließen"));

  // Auswertung Menuauswahl Main Menu
  ui_main.ItemSelect.on((item, index) => {
    if (item.Text == "Fahrzeug ausparken"){
      ui_List.Visible = true;
      ui_main.Close();
    } else if (item.Text == "Fahrzeug einparken"){
      mp.events.callRemote("server:PoliceImpound:destroyVeh");
      ui_main.Close();
    } else if (item.Text == "Schließen"){
      ui_main.Close();
    }
  });

  // Auswertung Menuauswahl ausparken
  ui_List.ItemSelect.on((item, index) => {
      let selectedNumPlate = item.Text;
      mp.events.callRemote("server:PoliceImpound:spawnVeh", selectedNumPlate);
      ui_List.Close();
  });
}
mp.events.add("client:PoliceImpound:drawMenu", drawMenu);
