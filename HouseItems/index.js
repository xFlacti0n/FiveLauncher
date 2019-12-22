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



mp.events.add("client:housinglager:openverMenu", (house, charid, id) => {
  const ui_list = new Menu("Lager", "Verwalte dein Lager", MenuPoint);
    var houseParsed = JSON.parse(house);
    houseParsed.forEach(function(lager) {
      if(lager.housecharid == charid || lager.locked == "1") {
          ui_list.AddItem( new UIMenuItem("Lager Öffnen", ""+id));
      }
      if (lager.housecharid == charid && lager.locked == "0"){
      ui_list.AddItem( new UIMenuItem("Lager aufschließen", ""+id));
      }
      if (lager.housecharid == charid && lager.locked == "1") {
          ui_list.AddItem( new UIMenuItem("Lager abschließen", ""+id));
      }   
      if (lager.housecharid == charid) {
          ui_list.AddItem( new UIMenuItem("PIN ändern", ""+id));
      }  
  ui_list.AddItem( new UIMenuItem("Lager öffnen Pin", ""+id));    
  });
    ui_list.AddItem( new UIMenuItem("Schließen", ""));
    ui_list.Visible = true;
    ui_list.ItemSelect.on((item, index, value) => {
      if (item.Text == "Lager Öffnen") {
        mp.events.call("client:houseitems:openMenu", id);
        ui_list.Close();
      } else if (item.Text == "Schließen") {
          ui_list.Close();
      }  else if(item.Text == "Lager aufschließen") {
          mp.events.callRemote("server:housingitems:unlock", item.Description);
          ui_list.Close();
      } else if(item.Text == "Lager abschließen") {
          mp.events.callRemote("server:housingitems:lock", item.Description);
          ui_list.Close();
      } else if (item.Text == 'PIN ändern') {
          mp.events.call("createInputHouse", "lagerPin",item.Description);
          ui_list.Close();
      } else if (item.Text == "Lager öffnen Pin") {
          mp.events.call("createInputHouse", "lagerPinenter");
          ui_list.Close();
      }
    });
    ui_list.MenuClose.on(() => {
      ui_list.RefreshIndex();
    });
});


// Einladen
mp.events.add("client:houseitems:einlagern", (inventory, weight, vehWeight) => {
  res = JSON.parse(inventory);
  const ui_einlagern = new Menu("Einlagern", "("+weight+"/"+vehWeight+")kg", MenuPoint);
    var invParsed = JSON.parse(inventory);
    for(var res in invParsed) {
      var newRes = invParsed[""+res];
      ui_einlagern.AddItem( new UIMenuItem(""+newRes.itemName+" ("+newRes.amout+"x)", ""+newRes.id));
    }
          ui_einlagern.AddItem( new UIMenuItem("Schließen", "houseitems schließen"));
          ui_einlagern.Visible = true;
          ui_einlagern.ItemSelect.on((item, index, value) => {
      if (item.Text !== "Schließen") {
        mp.events.call("createInputShop", "loadLagerItem");
        mp.events.callRemote("server:houseitems:loadItem", item.Description);
        ui_einlagern.Close();
      } else {
        ui_einlagern.Close();
      }
    });
    ui_einlagern.MenuClose.on(() => {
      ui_einlagern.RefreshIndex();
    });
});

// Main Menu
mp.events.add("client:houseitems:openMenu", (id) => {
  const ui_houseitems = new Menu("Lagerkiste", "", MenuPoint);
    ui_houseitems.AddItem( new UIMenuItem("Gegenstand einladen", ""));
    ui_houseitems.AddItem( new UIMenuItem("Gegenstand ausladen", ""));
    ui_houseitems.AddItem( new UIMenuItem("Schließen", ""));
    ui_houseitems.Visible = true;

    ui_houseitems.ItemSelect.on((item, index, value) => {
      if (item.Text == "Gegenstand einladen") {
        mp.events.callRemote("server:houseitems:einladen",id);
        ui_houseitems.Close();
      } else if (item.Text == "Gegenstand ausladen") {
        mp.events.callRemote("server:houseitems:ausladen",id);
        ui_houseitems.Close();
      } else if (item.Text == "Schließen") {
        ui_houseitems.Close();
      }
    });
});

// Ausladen
mp.events.add("client:houseitems:ausladen", (vehinventory, weight, vehWeight) => {
  const ui_ausladen = new Menu("Ausladen", "("+weight+"/"+vehWeight+")kg", MenuPoint);
  var vehinvParsed = JSON.parse(vehinventory);
  for(var res in vehinvParsed) {
    var newRes = vehinvParsed[""+res];
    ui_ausladen.AddItem( new UIMenuItem(""+newRes.itemName+" ("+newRes.amout+"x)", ""+newRes.itemid));
  }
    ui_ausladen.AddItem( new UIMenuItem("Schließen", "houseitems schließen"));
    ui_ausladen.Visible = true;
    ui_ausladen.ItemSelect.on((item, index, value) => {
    if (item.Text !== "Schließen") {
      mp.events.call("createInputShop", "unloadLagerItem");
      mp.events.callRemote("server:houseitems:unloadItem", item.Description);
      ui_ausladen.Close();
    } else {
      ui_ausladen.Close();
    }
  });
  ui_ausladen.MenuClose.on(() => {
    ui_ausladen.RefreshIndex();
  });
});


