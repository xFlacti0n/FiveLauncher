player = mp.players.local;
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
let akten = null;
let input = null;
var policeLeitstelle = 911;

const ScreenRes = mp.game.graphics.getScreenResolution(0,0);
const MenuPoint = new Point(ScreenRes.x +150, 50);


const   ui = new Menu("Kleidung", "In den Dienst gehen", MenuPoint);
        ui.Visible = false;
        ui.AddItem( new UIMenuListItem("Kleidung", "Ziehe deine Uniform an", LSPDRanks =new ItemsCollection(["Streifendienst", "Standart", "StreifendienstWinter", "Detective Unit", "SWAT", "Undercover"])));
        ui.AddItem( new UIMenuItem("Schließen", "Menü schließen"));

// PED
let policePed = mp.peds.new(mp.game.joaat('s_m_y_cop_01'), new mp.Vector3(460.26, -990.81, 30.68), 90, (streamPolice) => {}, 0);
// MENU ON-OFF DUTY
mp.events.add("client:police:dutyMenu", () => {
    ui.Visible = true;

    ui.ItemSelect.on((item, index, value) => {
        if (item.Text == 'Kleidung') {
        mp.events.callRemote("server:police:kleidung", item.SelectedItem.DisplayText);
        mp.events.call("client:TS-VoiceChat:addToRadio");
        ui.Close();
    }   else if (item.Text == 'Leitstelle') {
        mp.events.callRemote("server:phone:getLeitstelle", policeLeitstelle);
        ui.Close();
    }
        else if (item.Text == 'Schicht beenden') {
        mp.events.callRemote("server:police:offDuty");
        mp.events.call("client:TS-VoiceChat:removeFromRadio");
        ui.Close();
    }
        else if(item.Text == "Schutzwesten") {
        mp.events.callRemote("server:police:bodyarmor");
        ui.Close();
    } else
    if (item.Text == 'Weste ausziehen') {
        mp.events.callRemote("server:inventar:westeoff");
        ui_.Close();
       }
        else if (item.Text == 'Schließen') {
        ui.Close();
    }
    });
});
mp.events.add("client:police:openInteractionMenu",(canInvite,ranks) => {
    const ui_main_interaction = new Menu("LSPD", "Interagieren.", MenuPoint);
    ui_main_interaction.Visible = false;
    ui_main_interaction.AddItem(new UIMenuItem("Dispatchverwaltung", "Liste der Aktiven Dispatches"));
    if (canInvite == "Y") {
        ranks = JSON.parse(ranks);
        ui_main_interaction.AddItem(new UIMenuListItem("Befördern","Person befördern als: ", PoliceRanks = new ItemsCollection(ranks)));
        ui_main_interaction.AddItem(new UIMenuItem("Einstellen", "Person einstellen"));
        ui_main_interaction.AddItem(new UIMenuItem("Entlassen", "Person entlassen"));
        ui_main_interaction.AddItem(new UIMenuItem("Dienstnummer geben", "Person eine Dienstnummer zuweisen"));
        ui_main_interaction.AddItem(new UIMenuItem("Shop Berechtigung geben", "Beamten Shop zugriff geben"));
        ui_main_interaction.AddItem(new UIMenuItem("Shop Berechtigung wegnehmen", "Nimmt die Shop Berechtigung weg"));
    }
    ui_main_interaction.AddItem( new UIMenuItem("Dienstausweis", "Zeigt den Dienstausweis"));
    ui_main_interaction.AddItem( new UIMenuItem("Ticket ausstellen", "Strafzettel austellen"));
    ui_main_interaction.AddItem( new UIMenuItem("Durchsuchen", "Peron durchsuchen"));
    ui_main_interaction.AddItem( new UIMenuItem("Waffenlizenz A entziehen", "Nimmt Waffenlizenz A weg"));
    ui_main_interaction.AddItem( new UIMenuItem("Waffenlizenz B entziehen", "Nimmt Waffenlizenz B weg"));
    ui_main_interaction.AddItem( new UIMenuItem("Fesseln", "Fesselt die Person gegenüber!"));
    ui_main_interaction.AddItem( new UIMenuItem("Entfesseln", "Entfesselt die Person gegenüber!"));
    ui_main_interaction.AddItem( new UIMenuItem("Fahrzeug Beschlagnahmen", "Das Fahrzeug wird zur Impound geliefert"));
    ui_main_interaction.AddItem( new UIMenuItem("Nagelband auslegen", "Legt ein Nagelband aus!"));
    ui_main_interaction.AddItem( new UIMenuItem("Nagelbänder einsammeln", "Sammelt alle Nagelbänder ein!"));
    ui_main_interaction.AddItem( new UIMenuItem("Barriere aufstellen", "Stellt eine Barriere auf!"));
    ui_main_interaction.AddItem( new UIMenuItem("Barriere abbauen", "Baut alle Barrieren wieder ab!"));
    ui_main_interaction.AddItem( new UIMenuItem("Schließen", "Schließt das Menü"));
    ui_main_interaction.Visible = true;

    ui_main_interaction.ItemSelect.on((item, index, value) => {
        let nearestPlayers = [];
        mp.players.forEachInRange(mp.players.local.position, 2, (nearPlayer) => {
            nearestPlayers.push(nearPlayer);
        });
        if (item.Text == 'Dispatchverwaltung') {
            mp.events.callRemote("server:police:dispatchverw");
            ui_main_interaction.Close();
        } else if (item.Text == 'Einstellen') {
          mp.events.callRemote("server:police:einstellen");
        } else if (item.Text == 'Dienstnummer geben') {
            mp.events.call("createInputShop", "lspddienstn");
        } else if (item.Text == 'Entlassen') {
            mp.events.callRemote("server:police:firePlayer");
        }else if (item.Text == 'Befördern') {
            mp.events.callRemote("server:police:rankup", item.SelectedItem.DisplayText);
        }else if (item.Text == 'Shop Berechtigung geben') {
            mp.events.callRemote("server:police:canbuy");
        } else if (item.Text == 'Shop Berechtigung wegnehmen') {
            mp.events.callRemote("server:police:dontcanbuy");
        } else if (item.Text == 'Dienstausweis') {
            if(!nearestPlayers[1]){
              mp.game.graphics.notify("Keiner in der Nähe");
              return;
            }

            var fractionData = mp.players.local.getVariable("fractionData");
            fractionData = JSON.parse(fractionData);
            fractionRankName = fractionData.fractionRankName;
            var playerName = mp.players.local.getVariable("ingameName");
            mp.events.callRemote("server:police:showIDCard", nearestPlayers[1], playerName, fractionRankName);
            mp.game.graphics.notify("Du hast deinen Dienstausweis gezeigt");
        } else if (item.Text == 'Ticket ausstellen') {
          if(!nearestPlayers[1]){
            mp.game.graphics.notify("Keiner in der nähe");
            return;
          } else {
            mp.events.call("createInputRechnung", "LspdTicket");
          }
        } else if (item.Text == 'Waffenlizenz A entziehen') {
            mp.events.callRemote("server:police:removelicensea");
            ui_main_interaction.Close();
        } else if (item.Text == 'Waffenlizenz B entziehen') {
            mp.events.callRemote("server:police:removelicenseb");
            ui_main_interaction.Close();
        } else if(item.Text == "Fesseln") {
            mp.events.callRemote("server:cuff:cuff");
            ui_main_interaction.Close();
        } else if(item.Text == "Entfesseln") {
            mp.events.callRemote("server:cuff:uncuff");
            ui_main_interaction.Close();
        } else if(item.Text == "Fahrzeug Beschlagnahmen") {
            mp.events.call("client:police:requestVeh");
            ui_main_interaction.Close();
        } else if(item.Text == "Barriere aufstellen") {
            mp.events.callRemote("server:barrier:setbarrier");
            ui_main_interaction.Close();
        } else if(item.Text == "Barriere abbauen") {
            mp.events.callRemote("server:barrier:removebarrier");
            ui_main_interaction.Close();
        } else if(item.Text == "Nagelband auslegen") {
            mp.events.callRemote("server:spikes:setspike");
            ui_main_interaction.Close();
        } else if(item.Text == "Nagelbänder einsammeln") {
            mp.events.callRemote("server:spikes:removespike");
            ui_main_interaction.Close();
        } else if(item.Text == "Durchsuchen") {
            mp.events.callRemote("server:police:search");
            ui_main_interaction.Close();
        } else if (item.Text == 'Schließen') {
            ui_main_interaction.Close();
        }
    });
});

mp.events.add("client:police:searchInvMenu", (inventory) => {
    const ui_search = new Menu("Durchsuchung", "Das hat diese Person dabei", MenuPoint);

    var invParsed = JSON.parse(inventory);
    invParsed.forEach((invItem) => {
          ui_search.AddItem( new UIMenuItem(""+invItem.itemName+" ("+invItem.amout+"x)", ""+invItem.id));
    });
          ui_search.AddItem( new UIMenuItem("Schließen", "Durchsuchung beenden"));
          ui_search.Visible = true;

    ui_search.ItemSelect.on((item, index, value) => {
      if (item.Text !== "Schließen") {
        mp.events.callRemote("server:police:removeItem",item.Description);
      } else {
        ui_search.Close();
      }
    });
});

mp.events.add("client:police:requestTicket", (cop, amount, accountamount, staatskonto) => {
  const   ui_ticket = new Menu("Ticket bezahlen", "Du sollst "+amount+"$ bezahlen", MenuPoint);
          ui_ticket.AddItem( new UIMenuItem("Bezahlen", "Bezahle das Ticket"));
          ui_ticket.AddItem( new UIMenuItem("Ablehnen", "Das Ticket nicht bezahlen"));
          ui_ticket.Visible = true;

  ui_ticket.ItemSelect.on((item, index, value) => {
      if (item.Text == 'Bezahlen') {
          mp.events.callRemote("server:police:payTicket",cop,amount,accountamount, staatskonto);
          ui_ticket.Close();
      } else if (item.Text == 'Ablehnen') {
          mp.events.callRemote("server:police:dontPayTicket",cop);
          ui_ticket.Close();
      }
  });
});

mp.events.add("client:police:requestVeh", () => {
    const   ui_vehdestroy = new Menu("Fahrzeug Beschlagnahmen", "Nähestes Fahrzeug beschlagnahmen", MenuPoint);
            ui_vehdestroy.AddItem( new UIMenuItem("Ja", "Fahrzeug beschlagnahmen"));
            ui_vehdestroy.AddItem( new UIMenuItem("Nein", "Schließt dass Menü"));
            ui_vehdestroy.Visible = true;

        ui_vehdestroy.ItemSelect.on((item) => {
        if (item.Text == 'Ja') {
            mp.events.callRemote("server:police:vehdestroy");
            ui_vehdestroy.Close();
        } else if (item.Text == 'Nein') {
            ui_vehdestroy.Close();
        }
    });
  });

mp.events.add("client:police:leitstellenmenu", () => {
  const   ui_leitstelle = new Menu("Leitstelle", "Leitstellen Computer LSPD", MenuPoint);
          ui_leitstelle.AddItem( new UIMenuItem("Halterabfrage", "Stelle einen Halter fest"));
          ui_leitstelle.AddItem( new UIMenuItem("Aktensystem", "Öffnet das Aktensystem"));
          ui_leitstelle.AddItem( new UIMenuItem("Leitstellensystem", "Öffnet das Leitstellensystem"));
          ui_leitstelle.Visible = true;

  ui_leitstelle.ItemSelect.on((item, index ) => {
    if (item.Text == 'Halterabfrage') {
      mp.events.call("createInput", "LspdHalter");
      mp.game.graphics.notify("Halterabfrage wird gestartet");
      //mp.events.callRemote("server:police:halter");
      ui_leitstelle.Close();
    }
    if (item.Text == 'Leitstellensystem') {
      mp.events.callRemote("server:police:leitstellensystem");
      ui_leitstelle.Close();
    } else
    if (item.Text == 'Aktensystem') {
        mp.events.callRemote("server:police:aktensystem");
        ui_leitstelle.Close();
      }
  });
});

mp.events.add("client:police:leitstellensystem", (link) => {
    if (akten == null) {
      akten = mp.browsers.new('package://Police/Leitstelle/index.html');
      akten.execute("changeLink('"+link+"')");
      mp.gui.cursor.show(true, true);
      mp.gui.chat.activate(false);
    }
  });

  mp.events.add("client:police:aktensystem", (link) => {
    if (akten == null) {
      akten = mp.browsers.new('package://PDComputer/index.html');
      //akten.execute("changeLink('"+link+"')");
      mp.gui.cursor.show(true, true);
      mp.gui.chat.activate(false);
    }
  });

mp.events.add("client:police:closeLeitstelle", () => {
   if (akten !== null) {
    mp.gui.cursor.show(false,false);
    akten.destroy();
    akten = null;
    mp.gui.chat.activate(true);
   }
});

mp.events.add("client:police:showIDCard", (playerName,rankName) => {
  if (idcarddocument == null) {
    idcarddocument = mp.browsers.new('package://Dokumente/dienstausweis_police.html');
    idcarddocument.execute("setName('"+playerName+"')");
    idcarddocument.execute("setFractionRank('"+rankName+"')");

    setTimeout(function() {
      if (idcarddocument !== null) {
       idcarddocument.destroy();
       idcarddocument = null;
      }
    }, 10000);
  }
});

mp.events.add("client:police:closeMenu", () => {
    if (ui && ui.Visible) ui.Close();
});

// ATTACK
control = [
    140,141,142,257,263,264,24,25,22, // ATTACK
    59, // CONTROL CAR DIRECTION
    69,92,114, // VEH IN ATTACK
    12,13,14,15,19,85,332,333 //WEAPON WHEEL, RADI WHEEL
]
mp.events.add('render', () => {
    control.forEach(element => {
        if(player.getVariable('cuffState') == 'CUFFED') {
            mp.game.controls.disableControlAction(2, element, true);
        } else if(player.getVariable('cuffState') == 'UNCUFFED') {
            mp.game.controls.enableControlAction(2, element, true);
        }
    });
});

// MAIN MENU anzeigen
function drawMenu(disJSON){
	if (ui_main.Visible) return;
  // Menu für Fahrzeugliste anlegen
  ui_List = new Menu("Dispatches", "Liste aller Dispatches", MenuPoint);
  ui_List.Visible = true;
  if (disJSON != "none"){
    disList = JSON.parse(disJSON);
    disList.forEach(dispatch => {
        let newItem = new UIMenuItem("Dispatch-"+dispatch.disid, ""+dispatch.id);
        ui_List.AddItem(newItem);
    });
  } else{
    ui_List.AddItem( new UIMenuItem("Keine Dispatches vorhanden", ""));
  }

  // Auswertung Menuauswahl ausparken
  ui_List.ItemSelect.on((item, index) => {
      mp.events.call("client:police:dispatchsub", item.Description);
      ui_List.Close();
  });
}
mp.events.add("client:police:dispatchvewer", drawMenu);

mp.events.add("client:police:dispatchsub", (position) => {
    const   ui_subdispatch = new Menu("Dipatch", "Wähle eine Aktion", MenuPoint);
    ui_subdispatch.AddItem( new UIMenuItem("Dispatch Makieren", ""+position));
    ui_subdispatch.AddItem( new UIMenuItem("Dispatch löschen", ""+position));
    ui_subdispatch.Visible = true;

    ui_subdispatch.ItemSelect.on((item) => {
        if (item.Text == 'Dispatch Makieren') {
            mp.events.callRemote("server:police:mark",item.Description)
            ui_subdispatch.Close();
        } else if (item.Text == 'Dispatch löschen') {
            mp.events.callRemote("server:police:deletedispatch",item.Description);
            ui_subdispatch.Close();
        }
    });
  });

// Dispatch blips
mp.events.add("client:police:showDispatch", (posX, posY, posZ, id) => {
    var dispatchTime = new Date().getTime();
    var policeDispatch = "policeDispatch_";
    mp.game.graphics.notify("Neuer Dispatch eingegangen.");

    global[policeDispatch + mp.players.local.getVariable("ingameName") + "_" + dispatchTime] = mp.blips.new(60, new mp.Vector3(parseFloat(posX), parseFloat(posY), parseFloat(posZ)),
    {
        name: "Notruf Standort: "+id,
        scale: 1.00,
        color: 1,
        alpha: 255,
        drawDistance: 10,
        shortRange: false,
        rotation: 0.00,
        dimension: 0,
    });
    setTimeout(() => {
      global[policeDispatch + mp.players.local.getVariable("ingameName") + "_" + dispatchTime].destroy();
    }, 600000)
    // 300000 = 5 min
    // 600000 = 10 min
});

// Prellen beim Tanken
mp.events.add("client:police:fuelstation", (posX, posY, posZ, hint, hintType) => {
    var dispatchTime = new Date().getTime();
    var fuelDispatch = "fuelDispatch_";
    mp.game.graphics.notify("Ein neuer Tank Diebstahl");
    if (hintType == "numberplate") {
      mp.game.graphics.notify("Kennzeichen wurde erkannt: "+hint);
    } else if (hintType == "gender") {
      mp.game.graphics.notify("Der Täter wurde identifiziert als "+hint);
    }

    global[fuelDispatch + mp.players.local.getVariable("ingameName") + "_" + dispatchTime] = mp.blips.new(60, new mp.Vector3(parseFloat(posX), parseFloat(posY), parseFloat(posZ)),
    {
        name: "Tank Diebstahl",
        scale: 1.00,
        color: 1,
        alpha: 255,
        drawDistance: 10,
        shortRange: false,
        rotation: 0.00,
        dimension: 0,
    });
    setTimeout(() => {
      global[fuelDispatch + mp.players.local.getVariable("ingameName") + "_" + dispatchTime].destroy();
    }, 300000)
    // 300000 = 5 min
    // 600000 = 10 min
});

// ATM Rob
mp.events.add("client:police:atmrob", (posX, posY, posZ) => {
  var dispatchTime = new Date().getTime();
  var atmRob = "atmRob_";
  mp.game.graphics.notify("Ein neuer ATM Raub");

  global[atmRob + mp.players.local.getVariable("ingameName") + "_" + dispatchTime] = mp.blips.new(60, new mp.Vector3(parseFloat(posX), parseFloat(posY), parseFloat(posZ)),
  {
      name: "ATM Raub",
      scale: 1.00,
      color: 1,
      alpha: 255,
      drawDistance: 10,
      shortRange: false,
      rotation: 0.00,
      dimension: 0,
  });
  setTimeout(() => {
    global[atmRob + mp.players.local.getVariable("ingameName") + "_" + dispatchTime].destroy();
  }, 300000)
  // 300000 = 5 min
  // 600000 = 10 min
});

mp.events.add("client:police:door1bank", (posX, posY, posZ) => {
  var dispatchTime = new Date().getTime();
  var bankRob1 = "bankRob1_";
  mp.game.graphics.notify("ALARM!! Türe 1 der Staatsbank");

  global[bankRob1 + mp.players.local.getVariable("ingameName") + "_" + dispatchTime] = mp.blips.new(60, new mp.Vector3(parseFloat(posX), parseFloat(posY), parseFloat(posZ)),
  {
      name: "ATM Raub",
      scale: 1.00,
      color: 1,
      alpha: 255,
      drawDistance: 10,
      shortRange: false,
      rotation: 0.00,
      dimension: 0,
  });
  setTimeout(() => {
    global[bankRob1 + mp.players.local.getVariable("ingameName") + "_" + dispatchTime].destroy();
  }, 300000)
  // 300000 = 5 min
  // 600000 = 10 min
});

mp.events.add("client:police:door2bank", (posX, posY, posZ) => {
  var dispatchTime = new Date().getTime();
  var bankRob2 = "bankRob2_";
  mp.game.graphics.notify("ALARM!! Türe 2 der Staatsbank");

  global[bankRob2 + mp.players.local.getVariable("ingameName") + "_" + dispatchTime] = mp.blips.new(60, new mp.Vector3(parseFloat(posX), parseFloat(posY), parseFloat(posZ)),
  {
      name: "ATM Raub",
      scale: 1.00,
      color: 1,
      alpha: 255,
      drawDistance: 10,
      shortRange: false,
      rotation: 0.00,
      dimension: 0,
  });
  setTimeout(() => {
    global[bankRob2 + mp.players.local.getVariable("ingameName") + "_" + dispatchTime].destroy();
  }, 300000)
  // 300000 = 5 min
  // 600000 = 10 min
});

mp.events.add("client:police:manyduty", () => {
    const   ui_manyduty = new Menu("Informationen", "Möchtest du Informationen für 500$ kaufen?", MenuPoint);
            ui_manyduty.AddItem( new UIMenuItem("Ja", "Die kostet dich 500$"));
            ui_manyduty.AddItem( new UIMenuItem("Nein", "Schließt dass Menü"));
            ui_manyduty.Visible = true;

        ui_manyduty.ItemSelect.on((item) => {
        if (item.Text == 'Ja') {
            mp.events.callRemote("server:police:manyduty");
            ui_manyduty.Close();
        } else if (item.Text == 'Nein') {
            ui_manyduty.Close();
        }
    });
  });


  mp.events.add("client:police:markdispatch",(posx, posy) => {
    mp.game.ui.setNewWaypoint(posx, posy);
  });


  mp.events.add("client:dispatch:showDispatch", () => {
    var value = "AtmRob";
      var playerposx = player.position.x;
        var playerposy = player.position.y;
        var playerposz = player.position.z;
        mp.events.callRemote("server:Global:showDispatch",value,playerposx,playerposy,playerposz);   
  });

  mp.events.add("client:dispatch:bankdoor1", () => {
    var value = "Door1Bank";
      var playerposx = player.position.x;
        var playerposy = player.position.y;
        var playerposz = player.position.z;
        mp.events.callRemote("server:Global:showDispatch",value,playerposx,playerposy,playerposz);   
  });

  mp.events.add("client:dispatch:bankdoor2", () => {
    var value = "Door2Bank";
      var playerposx = player.position.x;
        var playerposy = player.position.y;
        var playerposz = player.position.z;
        mp.events.callRemote("server:Global:showDispatch",value,playerposx,playerposy,playerposz);   
  });