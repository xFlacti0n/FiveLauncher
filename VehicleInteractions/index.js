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
var vehpaper = null;
const ScreenRes = mp.game.graphics.getScreenResolution(0,0);
const MenuPoint = new Point(ScreenRes.x +150, 50);

var ui_List = new Menu("Fahrzeugliste", "Liste aller Fahrzeuge", MenuPoint);
ui_List.Visible = false;
var ui_main = new Menu("Fahrzeugpapiere", "", MenuPoint);
ui_main.Visible = false;

// MAIN MENU anzeigen
function drawMenu(vehJSON){
	if (ui_main.Visible) return;
  // Menu für Fahrzeugliste anlegen
  ui_List = new Menu("Fahrzeugliste", "Liste aller Fahrzeuge", MenuPoint);
  ui_List.Visible = true;
  if (vehJSON != "none"){
    vehList = JSON.parse(vehJSON);
    vehList.forEach(actVeh => {
        let newItem = new UIMenuItem("" + actVeh.kennzeichen, "");
        ui_List.AddItem(newItem);
        newItem.SetRightLabel("" + [String(actVeh.bezeichnung)]);
    });
  } else{
    ui_List.AddItem( new UIMenuItem("Du besitzt keine Fahrzeuge", ""));
  }

  // Hauptmenu anzeigen
	ui_main = new Menu("Fahrzeugpapiere", "Melde ein Fahrzeug von dir an.", MenuPoint);
  ui_main.Visible = false;
  ui_main.AddItem( new UIMenuItem("Fahrzeugpapiere", "Fahrzeug wählen und anmelden"));
  ui_main.AddItem( new UIMenuItem("Schließen", "Menü schließen"));

  // Auswertung Menuauswahl Main Menu
  ui_main.ItemSelect.on((item, index) => {
    if (item.Text == "Fahrzeugpapiere"){
      ui_List.Visible = true;
      ui_main.Close();
    } else if (item.Text == "Schließen"){
      ui_main.Close();
    }
  });

  // Auswertung Menuauswahl ausparken
  ui_List.ItemSelect.on((item, index) => {
      selectedNumPlate = item.Text;
      mp.events.call("client:VehicleInteractions:subMenu", selectedNumPlate);
      ui_List.Close();
  });
}
mp.events.add("client:VehicleInteractions:drawMenu", drawMenu);


// SUBMENU
mp.events.add("client:VehicleInteractions:subMenu", (selectedNumPlate) => {
  const ui_vehiclesubmenu = new Menu("Fahrzeugpapiere", ""+selectedNumPlate, MenuPoint);
  ui_vehiclesubmenu.AddItem( new UIMenuItem("Fahrzeugpapiere sehen", ""));
  ui_vehiclesubmenu.AddItem( new UIMenuItem("Fahrzeugpapiere zeigen", ""));
  ui_vehiclesubmenu.AddItem( new UIMenuItem("Fahrzeugpapiere überschreiben", ""));
  ui_vehiclesubmenu.AddItem( new UIMenuItem("Schließen", ""));
  ui_vehiclesubmenu.Visible = true;

  ui_vehiclesubmenu.ItemSelect.on((item, index, value) => {
    let nearestPlayers = [];
    mp.players.forEachInRange(mp.players.local.position, 2, (nearPlayer) => {
        nearestPlayers.push(nearPlayer);
    });

    if (item.Text == "Fahrzeugpapiere sehen") {
      var playerName = mp.players.local.getVariable("ingameName");
      mp.events.callRemote("server:players:seeVehiclePapers", playerName, selectedNumPlate);
      ui_vehiclesubmenu.Close();
    } else if (item.Text == "Fahrzeugpapiere zeigen") {
      if(!nearestPlayers[1]){
        mp.game.graphics.notify("Keiner in der nähe");
        return;
      } else {
        var playerName = mp.players.local.getVariable("ingameName");
        mp.events.callRemote("server:players:currentseeVehiclePapers",nearestPlayers[1], playerName, selectedNumPlate);
      }
      ui_vehiclesubmenu.Close();
    } else if (item.Text == "Fahrzeugpapiere überschreiben") {
      if(!nearestPlayers[1]){
        mp.game.graphics.notify("Keiner in der nähe");
        return;
      } else {
        mp.events.call("client:VehicleInteractions:paperMenu",selectedNumPlate);
      }
      ui_vehiclesubmenu.Close();
    } else if (item.Text == "Schließen") {
      ui_vehiclesubmenu.Close();
    }
  });
});

// SUBMENU
mp.events.add("client:VehicleInteractions:paperMenu", (selectedNumPlate) => {
  const ui_papersubmenu = new Menu("Überschreiben", "Willst du wirklich dein Fahrzeug übschreiben?", MenuPoint);
  ui_papersubmenu.AddItem( new UIMenuItem("Ja", ""));
  ui_papersubmenu.AddItem( new UIMenuItem("Nein", ""));
  ui_papersubmenu.Visible = true;

  ui_papersubmenu.ItemSelect.on((item, index, value) => {
    let nearestPlayers = [];
    mp.players.forEachInRange(mp.players.local.position, 2, (nearPlayer) => {
        nearestPlayers.push(nearPlayer);
    });
     if (item.Text == "Ja") {
      if(!nearestPlayers[1]){
        mp.game.graphics.notify("Keiner in der nähe");
        return;
      } else {
        mp.events.callRemote("server:VehicleInteractions:giveVehiclePapers",nearestPlayers[1], selectedNumPlate);
      }
      ui_papersubmenu.Close();
    } else if (item.Text == "Nein") {
      ui_papersubmenu.Close();
    }
  });
});

mp.events.add("client:VehicleInteraction:showPaper", (fromDB, vehData, playerName) => {
  if (vehpaper == null) {
    vehData = JSON.parse(vehData);
    fromDB = JSON.parse(fromDB);
    vehpaper = mp.browsers.new('package://Dokumente/carpaper.html');
    vehpaper.execute("setName('"+playerName+"')");
    vehpaper.execute("setNumberplate('"+fromDB.numberplate+"')");
    vehpaper.execute("setbuyDate('"+fromDB.buyDate+"')");
    vehpaper.execute("setisRegistered('"+fromDB.isRegistered+"')");
    if (fromDB.firstRegistration == null) { 
      vehpaper.execute("setfirstRegistration('n.A')");
    } else {
      vehpaper.execute("setfirstRegistration('"+fromDB.firstRegistration+"')");
    }
    vehpaper.execute("setBezeichnung('"+vehData.bezeichnung+"')");
    vehpaper.execute("setSitzplatz('"+vehData.sitzplatz+"')");
    vehpaper.execute("setTankvolumen('"+vehData.tankvolumen+"')");
    vehpaper.execute("setVerbrauch('"+vehData.verbrauch+"')");
    vehpaper.execute("setTreibstoff('"+vehData.treibstoff+"')");

    setTimeout(function() {
      if (vehpaper !== null) {
        vehpaper.destroy();
        vehpaper = null;
      }
    }, 30000);
  }
});