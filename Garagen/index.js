// Native UI
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

const ScreenRes = mp.game.graphics.getScreenResolution(0,0);
const MenuPoint = new Point(ScreenRes.x +150, 50);

var ui_List = new Menu("Fahrzeugliste", "Liste aller Fahrzeuge", MenuPoint, "shopui_title_ie_modgarage", "shopui_title_ie_modgarage");
ui_List.Visible = false;
var ui_main = new Menu("Garage", "Parke dein Fahrzeug ein oder aus.", MenuPoint, "shopui_title_ie_modgarage", "shopui_title_ie_modgarage");
ui_main.Visible = false;

// Array Variable zum halten der Fahrzeuge in der Garage

// MAIN MENU anzeigen
function drawMenu(vehJSON){
    if (ui_main.Visible) return;
    // Menu für Fahrzeugliste anlegen
        ui_List = new Menu("Fahrzeugliste", "Liste aller Fahrzeuge", MenuPoint, "shopui_title_ie_modgarage", "shopui_title_ie_modgarage");
        ui_List.Visible = false;
        if (vehJSON != "none"){
            vehInGarage = JSON.parse(vehJSON); // vehJSON beinhaltet [{"model":"aaa","kennzeichen":"bbb"},{"model":"xxx","kennzeichen":"yyy"}]
            vehInGarage.forEach(actVeh => {
                let newItem = new UIMenuItem("" + actVeh.kennzeichen, "");
                ui_List.AddItem(newItem);
                newItem.SetRightLabel("" + String(actVeh.bezeichnung));
            });
        } else{
            ui_List.AddItem( new UIMenuItem("keine Fahrzeuge in dieser Garage", ""));
        }

    // Hauptmenu anzeigen
        ui_main = new Menu("Garage", "Parke dein Fahrzeug ein oder aus.", MenuPoint, "shopui_title_ie_modgarage", "shopui_title_ie_modgarage");
        ui_main.Visible = true;
        ui_main.AddItem( new UIMenuItem("Fahrzeug ausparken", "Fahrzeug wählen und ausparken"));
        ui_main.AddItem( new UIMenuItem("Fahrzeug einparken", "aktuelles Fahrzeug einparken"));
        ui_main.AddItem( new UIMenuItem("Schließen", "Menü schließen"));

    // Auswertung Menuauswahl Main Menu
    ui_main.ItemSelect.on((item, index) => {
        if (item.Text == "Fahrzeug ausparken"){
        ui_List.Visible = true;
        ui_main.Close();
        if (vehJSON == "none");
        } else
        if (item.Text == "Fahrzeug einparken"){
            // TODO - FAHRZEUG EINPARKEN
            mp.events.callRemote("server:Garagen:destroyVeh");
            ui_main.Close();
        } else
        if (item.Text == "Schließen"){
        ui_main.Close();
        }
    });

    // Auswertung Menuauswahl ausparken
    ui_List.ItemSelect.on((item, index) => {
        let selectedNumPlate = item.Text;
        mp.events.callRemote("server:Garagen:spawnVeh", selectedNumPlate);
        ui_List.Close();
    });
}
mp.events.add("client:Garagen:drawMenu", drawMenu);
