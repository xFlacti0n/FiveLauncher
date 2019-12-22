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
let idcarddocument = null;
var checkHut = true;
var checkBrille = true;
var checkMaske = true;
var checkOberkoerper = true;
var checkHose = true;
var checkSchuhe = true;
var checkAccessoires = true;
var oldHairID = 0;
var oldHairColor= 0;
var oldHairHighlight = 0;

IDsForInvisible = [[8,0,0,15,15,21,34,15],[120,15,0,15,14,15,35,15]];

var kleidungFirstRun = true;

var oldKleidung = [{
                    name: "Hut/Mütze",    //ID 0
                    drawable: 0,
                    texture: 0
                  },
                  {
                    name: "Brille",       //ID 1
                    drawable: 0,
                    texture: 0
                  },
                  {
                    name: "Maske",        //ID 2
                    drawable: 0,
                    texture: 0
                  },
                  {
                    name: "Jacke",        //ID 3
                    drawable: 0,
                    texture: 0
                  },
                  {
                    name: "Shirt",        //ID 4
                    drawable: 0,
                    texture: 0
                  },
                  {
                    name: "Hose",         //ID 5
                    drawable: 0,
                    texture: 0
                  },
                  {
                    name: "Schuhe",       //ID 6
                    drawable: 0,
                    texture: 0
                  },
                  {
                    name: "Torso",       //ID 7
                    drawable: 0,
                    texture: 0
                  }];

var currentTarget = null;

let InvMenu = [];

const ScreenRes = mp.game.graphics.getScreenResolution(0,0);
const MenuPoint = new Point(ScreenRes.x +150, 50);

// Laufstil Menu
let Laufstile = ["Normal","Mutig","Sicher","Betrunken","Fett","Gangster","Eilig","Verletzt","Schnell","Traurig","Stark"];
ui_Laufstil = new Menu("Laufstile", "", MenuPoint);
ui_Laufstil.Visible = false;
ui_Laufstil.AddItem(new UIMenuItem("Auswählen", ""));
Laufstile.forEach( function(aktLaufstil) {
  ui_Laufstil.AddItem(new UIMenuItem(aktLaufstil, ""));
});

ui_Laufstil.MenuClose.on(() => {
  ui_Laufstil.RefreshIndex();
});

ui_Laufstil.ItemSelect.on((item, index, value) => {
  mp.events.callRemote("server:inventory:setWalkingstyle", item.Text);
});

// Interaktionsmenu
let nearestPlayers = [];
ui_Interaktion = new Menu("Interaktion", "", MenuPoint);
ui_Interaktion.Visible = false;
ui_Interaktion.AddItem(new UIMenuItem("Auswählen", ""));
ui_Interaktion.AddItem(new UIMenuItem("Ausweis zeigen", ""));
ui_Interaktion.AddItem(new UIMenuItem("Fahrzeugpapiere", ""));
ui_Interaktion.AddItem(new UIMenuItem("Führerschein zeigen", ""));
ui_Interaktion.AddItem(new UIMenuItem("Geld geben", ""));
ui_Interaktion.AddItem(new UIMenuItem("Rechnung ausstellen", ""));
ui_Interaktion.AddItem(new UIMenuItem("Waffenlizenz A zeigen", ""));
ui_Interaktion.AddItem(new UIMenuItem("Waffenlizenz B zeigen", ""));

ui_Interaktion.MenuClose.on(() => {
  ui_Interaktion.RefreshIndex();
});

ui_Interaktion.ItemSelect.on((item, index, value) => {
  let nearestPlayers = [];
  mp.players.forEachInRange(mp.players.local.position, 2, (nearPlayer) => {
      nearestPlayers.push(nearPlayer);
  });
      if (item.Text == "Ausweis zeigen") {
        if(!nearestPlayers[1]){
          mp.game.graphics.notify("Keiner in der Nähe");
          ui_Interaktion.Close();
          return;
        }
        var dateOfBirth = mp.players.local.getVariable("dob");
        var playerName = mp.players.local.getVariable("ingameName");
        mp.events.callRemote("server:inventory:showIDCard", nearestPlayers[1], playerName, dateOfBirth);
        ui_Interaktion.Close();
      } else if (item.Text == "Fahrzeugpapiere") {
        mp.events.callRemote("server:VehicleInteractions:prepereMenu", player);
        ui_Interaktion.Close();
      } else if (item.Text == "Führerschein zeigen") {
        if(!nearestPlayers[1]){
          mp.game.graphics.notify("Keiner in der Nähe");
          ui_Interaktion.Close();
          return;
      } else
        var dateOfBirth = mp.players.local.getVariable("dob");
        var playerName = mp.players.local.getVariable("ingameName");
        mp.events.callRemote("server:inventory:showLicense", nearestPlayers[1], playerName, dateOfBirth);
        ui_Interaktion.Close();
      } else if (item.Text == "Waffenlizenz A zeigen") {
        if(!nearestPlayers[1]){
          mp.game.graphics.notify("Keiner in der Nähe");
          ui_Interaktion.Close();
          return;
      } else
      var dateOfBirth = mp.players.local.getVariable("dob");
      var playerName = mp.players.local.getVariable("ingameName");
      mp.events.callRemote("server:players:weapona", nearestPlayers[1], playerName, dateOfBirth);
      ui_Interaktion.Close();
      } else if (item.Text == "Waffenlizenz B zeigen") {
        if(!nearestPlayers[1]){
          mp.game.graphics.notify("Keiner in der Nähe");
          ui_Interaktion.Close();
          return;
      } else
      var dateOfBirth = mp.players.local.getVariable("dob");
      var playerName = mp.players.local.getVariable("ingameName");
      mp.events.callRemote("server:players:weaponb", nearestPlayers[1], playerName, dateOfBirth);
      ui_Interaktion.Close();
      } else if (item.Text == "Geld geben") {
        if(!nearestPlayers[1]){
          mp.game.graphics.notify("Keiner in der nähe");
          ui_Interaktion.Close();
          return;
        } else {
          mp.events.call("createInputShop", "giveMoneyToTarget");
        }
      } else if (item.Text == 'Rechnung ausstellen') {
        if(!nearestPlayers[1]){
          mp.game.graphics.notify("Keiner in der nähe");
          ui_Interaktion.Close();
          return;
        } else {
          mp.events.call("createInputShop", "Rechnung");
        }
      }
});


// Kleidungssmenu
mp.events.add("client:inventory:showKleidung", (fromServer, gender, duty, fractionname,hairID, color, highlight) => {
  oldKleidung = JSON.parse(fromServer);
  fractionname = JSON.parse(fractionname);
  ui_Kleidung = new Menu("Kleidung", "", MenuPoint);
  ui_Kleidung.AddItem(new UIMenuItem("Auswählen", ""));
  ui_Kleidung.AddItem(new UIMenuCheckboxItem("Hut/Mütze", checked = checkHut, Description = ""));
  ui_Kleidung.AddItem(new UIMenuCheckboxItem("Brille", checked = checkBrille, Description = ""));
  ui_Kleidung.AddItem(new UIMenuCheckboxItem("Maske", checked = checkMaske, Description = ""));
  ui_Kleidung.AddItem(new UIMenuCheckboxItem("Oberkörper", checked = checkOberkoerper, Description = ""));
  ui_Kleidung.AddItem(new UIMenuCheckboxItem("Hose", checked = checkHose, Description = ""));
  ui_Kleidung.AddItem(new UIMenuCheckboxItem("Schuhe", checked = checkSchuhe, Description = ""));  
  ui_Kleidung.AddItem(new UIMenuCheckboxItem("Accessoires", checked = checkAccessoires, Description = ""));
  
  ui_Kleidung.AddItem(new UIMenuItem("Weste ausziehen", "Zieht deine West aus"));
  ui_Kleidung.Visible = true;

  ui_Kleidung.MenuClose.on(() => {
    ui_Kleidung.RefreshIndex();
  });
  oldHairID = hairID;
  oldHairColor= color;
  oldHairHighlight = highlight;

  ui_Kleidung.CheckboxChange.on((checkbox, value) => {
    if (checkbox.Text === "Hut/Mütze"){
      if (value === true){
        var prop = oldKleidung.props[0];
          mp.events.callRemote("server:inventory:setProp", 0, prop.drawable, prop.texture);
          checkHut = true;
      } else {
        if (gender == 0) {
          mp.events.callRemote("server:inventory:setProp", 0, 121, 0);
        } else {
          mp.events.callRemote("server:inventory:setProp", 0, 120, 0);
        }
        checkHut = false;
      }
    } else if (checkbox.Text === "Brille"){
      if (value === true){
        var prop = oldKleidung.props[1];
        mp.events.callRemote("server:inventory:setProp", 1, prop.drawable, prop.texture);
        checkBrille = true;
      } else {
        if (gender == 0) {
          mp.events.callRemote("server:inventory:setProp", 1, 0, 0);
        } else {
          mp.events.callRemote("server:inventory:setProp", 1, 5, 0);
        }
        checkBrille = false;
      }
    } else if (checkbox.Text === "Maske"){
      if (value === true){        
        var clothes = oldKleidung.clothes[1];
        mp.events.callRemote("server:inventory:setKleidung", 1, clothes.drawable, clothes.texture, clothes.palette);
        checkMaske = true;
      } else {
        if (gender == 0) {
          mp.events.callRemote("server:inventory:setKleidung", 1, 0, 0);
        } else {
          mp.events.callRemote("server:inventory:setKleidung", 1, 0, 0);
        }
        checkMaske = false;
      }
    } else if (checkbox.Text === "Oberkörper"){
      if (value === true){
        if (fractionname != "LSPD" || duty == "N") {
          var clothes = oldKleidung.clothes[11];
          mp.events.callRemote("server:inventory:setKleidung", 11, clothes.drawable, clothes.texture, clothes.palette);
          var clothes = oldKleidung.clothes[8];
          mp.events.callRemote("server:inventory:setKleidung", 8, clothes.drawable, clothes.texture, clothes.palette);
          var clothes = oldKleidung.clothes[3];
          mp.events.callRemote("server:inventory:setKleidung", 3, clothes.drawable, clothes.texture, clothes.palette);
        } else if (fractionname == "LSPD") {
          var clothes = oldKleidung.clothes[11];
          mp.events.callRemote("server:lspd:setOber", 11, clothes.drawable, clothes.texture, clothes.palette);
          var clothes = oldKleidung.clothes[8];
          mp.events.callRemote("server:lspd:setOber", 8, clothes.drawable, clothes.texture, clothes.palette);
          var clothes = oldKleidung.clothes[3];
          mp.events.callRemote("server:lspd:setOber", 3, clothes.drawable, clothes.texture, clothes.palette);
        }        
        checkOberkoerper = true;
      } else {
        if (gender == 0) {
          mp.events.callRemote("server:inventory:setKleidung", 11, 91, 0);
          mp.events.callRemote("server:inventory:setKleidung", 8, 15, 0);
          mp.events.callRemote("server:inventory:setKleidung", 3, 15, 0);
        } else {
          mp.events.callRemote("server:inventory:setKleidung", 11, 271, 0);
          mp.events.callRemote("server:inventory:setKleidung", 8, 14, 0);
          mp.events.callRemote("server:inventory:setKleidung", 3, 15, 0);
        }
        checkOberkoerper = false;
      }
    } else if (checkbox.Text === "Hose"){
      if (value === true){
        if (fractionname != "LSPD"  || duty == "N") {
        var clothes = oldKleidung.clothes[4];
        mp.events.callRemote("server:inventory:setKleidung", 4, clothes.drawable, clothes.texture, clothes.palette);
        } else if (fractionname == "LSPD") {
        var clothes = oldKleidung.clothes[4];
        mp.events.callRemote("server:lspd:setLeg", 4, clothes.drawable, clothes.texture, clothes.palette);
        }
        checkHose = true;
      } else {
        if (gender == 0) {
          mp.events.callRemote("server:inventory:setKleidung", 4, 21, 0);
        } else {
          mp.events.callRemote("server:inventory:setKleidung", 4, 15, 0);
        }
        checkHose = false;
      }
    } else if (checkbox.Text === "Schuhe"){
      if (value === true){
        if (fractionname != "LSPD"  || duty == "N") {
          var clothes = oldKleidung.clothes[6];
          mp.events.callRemote("server:inventory:setKleidung", 6, clothes.drawable, clothes.texture, clothes.palette);
        } else if (fractionname == "LSPD") {
          var clothes = oldKleidung.clothes[6];
          mp.events.callRemote("server:lspd:setShoe", 6, clothes.drawable, clothes.texture, clothes.palette);
        }
        checkSchuhe = true;
      } else {
        if (gender == 0) {
          mp.events.callRemote("server:inventory:setKleidung", 6, 34, 0);
        } else {
          mp.events.callRemote("server:inventory:setKleidung", 6, 35, 0);
        }
        checkSchuhe = false;
      }
    } else if (checkbox.Text === "Accessoires"){
      if (value === true){
        var clothes = oldKleidung.clothes[7];
        mp.events.callRemote("server:inventory:setKleidung", 7, clothes.drawable, clothes.texture, clothes.palette);
        var prop = oldKleidung.props[2];
        mp.events.callRemote("server:inventory:setProp", 2, prop.drawable, prop.texture);
        var prop = oldKleidung.props[6];
        mp.events.callRemote("server:inventory:setProp", 6, prop.drawable, prop.texture);
        var prop = oldKleidung.props[7];
        mp.events.callRemote("server:inventory:setProp", 7, prop.drawable, prop.texture);
        checkAccessoires = true;
      } else {
        if (gender == 0) {
          mp.events.callRemote("server:inventory:setKleidung", 7, 0, 0);
          mp.events.callRemote("server:inventory:setProp", 2, 255, 0);
          mp.events.callRemote("server:inventory:setProp", 6, 255, 0);
          mp.events.callRemote("server:inventory:setProp", 7, 255, 0);
        } else {
          mp.events.callRemote("server:inventory:setKleidung", 7, 0, 0);
          mp.events.callRemote("server:inventory:setProp", 2, 255, 0);
          mp.events.callRemote("server:inventory:setProp", 6, 255, 0);
          mp.events.callRemote("server:inventory:setProp", 7, 255, 0);
        }
        checkAccessoires = false;
      }
    }
  });
  ui_Kleidung.ItemSelect.on((item, index, value) => {
    if (item.Text == 'Weste ausziehen') {
      mp.events.callRemote("server:inventar:westeoff");
      ui_Kleidung.Close();
     }
  });
});
let money = mp.players.local.getVariable("money");
// MAIN MENU
let ui_Main = new Menu("Spieler", "", MenuPoint);
//ui_Main.AddItem(kleidung_item = new UIMenuItem("Kleidung", "An- und Ausziehen von Kleidung"));
ui_Main.AddItem(inventar = new UIMenuItem("Inventar", "Dein Inventar"));
ui_Main.AddItem(interaktion_item = new UIMenuItem("Interaktionen", "Interagiere mit anderen Spielern"));
ui_Main.AddItem(laufstil_item = new UIMenuItem("Laufstile", "Auswahl an Laufstilen"));
ui_Main.AddItem(new UIMenuItem("Charakterwechsel", "Wechsel deinen Charakter"));
ui_Main.AddItem(new UIMenuItem("Supportlog", "Lege einen Supportlog an"));
ui_Main.AddItem(new UIMenuItem("Kleidung", "Kleidung an und ausziehen"));
ui_Main.AddItem(new UIMenuItem("Schlüsselverwaltung", "Deine Fahrzeugschlüssel"));
ui_Main.AddItem(new UIMenuItem("Dienst", "Verwalte deinen Dienst"));
// CLOSE MENU
let ui_Close = new UIMenuItem("Schließen", "Schließt das Menü");
ui_Close.BackColor = new Color(138, 0, 0);
ui_Close.HighlightedBackColor = new Color(255, 153, 51);
ui_Main.AddItem(ui_Close);
// VISIBILITY
ui_Main.Visible = false;
InvMenu.push(ui_Main);

ui_Main.ItemSelect.on((item, index, value) => {
    if (item.Text == "Inventar") {
        mp.events.callRemote("server:inventory:prepareMenu");
    }
    if (item.Text == "Kleidung") {
      mp.events.callRemote("server:inventory:prepareKleidung");
      ui_Main.Close();
    }
    if (item.Text == "Supportlog") {
      mp.events.callRemote("server:players:supportlog");
      ui_Main.Close();
    }
    if (item.Text == "Charakterwechsel") {
      mp.events.callRemote("server:players:charwechsel");
      ui_Main.Close();
      //mp.events.callRemote("server:inventory:SendToCharChooser");
    }
    if (item.Text == "Schlüsselverwaltung") {
      mp.events.callRemote("server:vehKeys:openKeys");
      ui_Main.Close();
    }
    if (item.Text == "Dienst") {
      mp.events.callRemote("server:duty:openMenu");
      ui_Main.Close();
    }
    if (item.Text == "Schließen") {
      ui_Main.Close();
    }
});
//Charchooser
mp.events.add("client:inventory:charchooser", (player, characters) => {
  ui_Main.Close();
    const ui_charchooser = new Menu("", "Charakterwechsel", MenuPoint);
    var characters = JSON.parse(characters);
    for(var res in characters) {
      var newRes = characters[""+res];
      ui_charchooser.AddItem( new UIMenuItem(""+player.ingameName));
    }
          ui_charchooser.Visible = true;
    ui_charchooser.ItemSelect.on((player, characters) => {
      }
    );
});


// INVENTORY
mp.events.add("client:inventory:showInventory", (inventory, weight) => {
  ui_Main.Close();
    const ui_inventory = new Menu("Inventar", "Inventar ("+weight+")KG / 10KG", MenuPoint);
    var invParsed = JSON.parse(inventory);
    for(var res in invParsed) {
      var newRes = invParsed[""+res];
      ui_inventory.AddItem( new UIMenuItem(""+newRes.itemName+" ("+newRes.amout+"x)", ""+newRes.id));
    }
    /*
    invParsed.forEach((invItem) => {
          ui_inventory.AddItem( new UIMenuItem(""+invItem.itemName+" ("+invItem.amout+"x)", ""+invItem.id));
    });
    */
          ui_inventory.AddItem( new UIMenuItem("Schließen", "Inventar schließen"));
          ui_inventory.Visible = true;
    ui_inventory.ItemSelect.on((item, index, value) => {
      if (item.Text !== "Schließen") {
        mp.events.callRemote("server:inventory:openItemSubmenu",item.Description);
        ui_inventory.Close();
      } else {
        ui_inventory.Close();
      }
    });
    ui_inventory.MenuClose.on(() => {
      ui_inventory.RefreshIndex();
    });
});

// SUBMENU
mp.events.add("client:inventory:openItemSubmenu", (inventory) => {
    res = JSON.parse(inventory);
    const ui_inventorysubmenu = new Menu("Inventar", res.amout+"x "+res.itemName, MenuPoint);
    if (res.usable == "Y") {
      ui_inventorysubmenu.AddItem( new UIMenuItem("Benutzen", ""));
    }
    ui_inventorysubmenu.AddItem( new UIMenuItem("Weitergeben", ""));
    ui_inventorysubmenu.AddItem( new UIMenuItem("Wegwerfen", ""));
    ui_inventorysubmenu.AddItem( new UIMenuItem("Schließen", ""));
    ui_inventorysubmenu.Visible = true;

    ui_inventorysubmenu.ItemSelect.on((item, index, value) => {
      let nearestPlayers = [];
      mp.players.forEachInRange(mp.players.local.position, 2, (nearPlayer) => {
          nearestPlayers.push(nearPlayer);
      });

      if (item.Text == "Benutzen") {
        mp.events.callRemote("server:inventory:useItem", res.id);
        ui_inventorysubmenu.Close();
      } else if (item.Text == "Weitergeben") {
        if(!nearestPlayers[1]){
          mp.game.graphics.notify("Keiner in der nähe");
          return;
        } else {
          mp.events.callRemote("server:inventory:setGiveItem", res.id);
          mp.events.call("createInputShop", "GiveItem");
        }
        //mp.events.callRemote("server:inventory:giveItem", res.id);
        ui_inventorysubmenu.Close();
      } else if (item.Text == "Wegwerfen") {
        mp.events.callRemote("server:inventory:setDestroyItem", res.id);
        mp.events.call("createInputShop", "DestroyItem");
        ui_inventorysubmenu.Close();
      } else if (item.Text == "Schließen") {
        ui_inventorysubmenu.Close();
      }
    });
});


ui_Main.BindMenuToItem(ui_Laufstil, laufstil_item);
ui_Main.BindMenuToItem(ui_Interaktion, interaktion_item);

mp.events.add("client:Keybind:KeyM", (player) => {
  if (ui_Main.Visible | ui_Laufstil.Visible) {
      uiMenu.forEach(function(element, index, array){element.Close()});
      } else {
          ui_Main.Open();
      }
});

mp.events.add("client:invent:showIDCard", (gender, name, street, housenumber, birthdayday, birthdaymonth, birthdayyear, birthplace, job, familystand) => {
  if (idcarddocument == null) {
    idcarddocument = mp.browsers.new('package://Dokumente/index.html');
    idcarddocument.execute("setIdentityCardInformation('" + gender + "','" + name + "','" + street + "','" + housenumber + "','" + birthdayday + "','" + birthdaymonth + "', '" + birthdayyear + "','" + birthplace + "', '" + job + "', '" + familystand + "')");

    setTimeout(function() {
      if (idcarddocument !== null) {
       idcarddocument.destroy();
       idcarddocument = null;
      }
    }, 10000);
  }
});

mp.events.add("client:invent:showLicense", (playerName,dateOfBirth) => {
  if (idcarddocument == null) {
    idcarddocument = mp.browsers.new('package://Dokumente/driverlicense.html');
    idcarddocument.execute("setName('"+playerName+"')");
    idcarddocument.execute("setDateOfBirth('"+dateOfBirth+"')");

    setTimeout(function() {
      if (idcarddocument !== null) {
       idcarddocument.destroy();
       idcarddocument = null;
      }
    }, 10000);
  }
});

mp.events.add("client:invent:showweapona", (playerName,dateOfBirth) => {
  if (idcarddocument == null) {
    idcarddocument = mp.browsers.new('package://Dokumente/weaponlicensea.html');
    idcarddocument.execute("setName('"+playerName+"')");
    idcarddocument.execute("setDateOfBirth('"+dateOfBirth+"')");

    setTimeout(function() {
      if (idcarddocument !== null) {
       idcarddocument.destroy();
       idcarddocument = null;
      }
    }, 10000);
  }
});

mp.events.add("client:invent:showweaponb", (playerName,dateOfBirth) => {
  if (idcarddocument == null) {
    idcarddocument = mp.browsers.new('package://Dokumente/weaponlicenseb.html');
    idcarddocument.execute("setName('"+playerName+"')");
    idcarddocument.execute("setDateOfBirth('"+dateOfBirth+"')");

    setTimeout(function() {
      if (idcarddocument !== null) {
       idcarddocument.destroy();
       idcarddocument = null;
      }
    }, 10000);
  }
});

mp.events.add("client:inventar:requestRechnung", (rechnung, amount, accountamount) => {
  const   ui_ticket = new Menu("Rechnung bezahlen", "Du sollst "+amount+"$ bezahlen", MenuPoint);
          ui_ticket.AddItem( new UIMenuItem("Bezahlen", "Bezahle die Rechnung"));
          ui_ticket.AddItem( new UIMenuItem("Ablehnen", "Die Rechnung nicht bezahlen"));
          ui_ticket.Visible = true;

  ui_ticket.ItemSelect.on((item, index, value) => {
      if (item.Text == 'Bezahlen') {
          mp.events.callRemote("server:inventar:payRechnung",rechnung,amount,accountamount);
          ui_ticket.Close();
      } else if (item.Text == 'Ablehnen') {
          mp.events.callRemote("server:inventar:dontPayRechnung",rechnung);
          ui_ticket.Close();
      }
  });
});

mp.events.add("client:inventar:kleidung", (player) => {
  const   ui_kleidung = new Menu("Kleidung", "", MenuPoint);
          ui_kleidung.AddItem( new UIMenuItem("Weste ausziehen", "zieht deine West aus"));
          ui_kleidung.Visible = true;
          ui_kleidung.ItemSelect.on((item, index, value) => {
      if (item.Text == 'Weste ausziehen') {
          mp.events.callRemote("server:inventar:westeoff");
          ui_kleidung.Close();
      }
  });
});

function getNearestPlayer(player, range) {
  let dist = range;
  mp.players.forEachInRange(player.position, range, (_player) => {
      if(player != _player) {
          let _dist = _player.dist(player.position);
          if(_dist < dist) {
              currentTarget = _player;
              dist = _dist;
          }
      }
  });
}
