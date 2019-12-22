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
let selectedNumPlate = null;

const ScreenRes = mp.game.graphics.getScreenResolution(0,0);
const MenuPoint = new Point(ScreenRes.x +150, 50);

function drawMenu(charJSON){
  mp.gui.cursor.visible = false;
  // Menu für Fahrzeugliste anlegen
  ui_List = new Menu("Charakter", "Liste aller Charakter", MenuPoint);
  ui_List.Visible = true;
  if (charJSON != "none"){
    charList = JSON.parse(charJSON);
    charList.forEach(char => {
        let newItem = new UIMenuItem("" + char.ingamename, ""+char.ingamename);
        ui_List.AddItem(newItem);
    });
  } else{
    ui_List.AddItem( new UIMenuItem("Du besitzt keine Charakters!", ""));
  }

  // Auswertung Menuauswahl ausparken
  ui_List.ItemSelect.on((item, index) => {      
      mp.events.callRemote("server:charchooser:menuclick",item.Description);
      ui_List.Close();
  });
}
mp.events.add("client:charchooser:openMenu", drawMenu);