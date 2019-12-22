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
var player = mp.players.local;
const NOOSELeitstelle = 999;

const ScreenRes = mp.game.graphics.getScreenResolution(0,0);
const MenuPoint = new Point(ScreenRes.x +150, 50);

// PED
let NOOSEDutyPed = mp.peds.new(mp.game.joaat('s_m_m_highsec_01'), new mp.Vector3(2110.9128, 2928.4641, -61.8019), 211.4817, (streamNOOSEDutyPed) => {}, 0);
let NOOSEBikePed = mp.peds.new(mp.game.joaat('s_m_m_armoured_02'), new mp.Vector3(2126.3151, 2918.2976, -61.8019), 3.0204, (streamNOOSEBikePed) => {}, 0);

// MENÜ Interaktionen
mp.events.add("client:NOOSE:openInteractionMenu",(canInvite,ranks) => {
    const ui_main_interaction = new Menu("NOOSE Interaktion", "Interagieren.", MenuPoint);
    ui_main_interaction.Visible = false;
    if (canInvite == "Y") {
        ranks = JSON.parse(ranks);
        ui_main_interaction.AddItem( new UIMenuListItem("Einstellen","Person einstellen als: ", TaxiRanks = new ItemsCollection(ranks)));
        ui_main_interaction.AddItem(new UIMenuItem("Entlassen", "Person entlassen"));
    }
    ui_main_interaction.AddItem( new UIMenuItem("Spielerliste", "zurzeit Online Spieler",));
    ui_main_interaction.AddItem( new UIMenuItem("Wiederbeleben", "Belebt wieder"));
    ui_main_interaction.AddItem( new UIMenuItem("Durchsuchen", "Person durchsuchen"));
    ui_main_interaction.AddItem( new UIMenuItem("Heilen", "Heilt die Person"));
    ui_main_interaction.AddItem(new UIMenuItem("Nametags", "Schaltet Spielernamen an oder aus"));
    ui_main_interaction.AddItem(new UIMenuItem("Verschrottung", "Despawnt das Fahrzeug, in dem du sitzt"));
    ui_main_interaction.AddItem( new UIMenuItem("Fesseln", "Handschellen anlegen"));
    ui_main_interaction.AddItem( new UIMenuItem("Entfesseln", "Handschellen abnehmen"));
    ui_main_interaction.AddItem( new UIMenuItem("Leitstelle", "Übernehme die Leitstelle",));
    ui_main_interaction.AddItem( new UIMenuListItem("Invisible", "Setze Unsichtbarkeit", States = new ItemsCollection(["Unsichtbar","Sichtbar"])));
    ui_main_interaction.AddItem( new UIMenuItem("Schließen", "Schließt das Menü"));
    ui_main_interaction.Visible = true;

    ui_main_interaction.ItemSelect.on((item, index, value) => {
        let nearestPlayers = [];
        mp.players.forEachInRange(mp.players.local.position, 2, (nearPlayer) => {
            nearestPlayers.push(nearPlayer);
        });
        if (item.Text == 'Einstellen') {
            mp.game.graphics.notify("Du stellst die Person ein als: "+item.SelectedItem.DisplayText);
            mp.events.callRemote("server:NOOSE:hirePlayer", item.SelectedItem.DisplayText);
        } else if (item.Text == 'Entlassen') {
            mp.game.graphics.notify("Du entlässt die Person!");
            mp.events.callRemote("server:NOOSE:firePlayer");
        } else if (item.Text == 'Invisible') {
            mp.events.callRemote("server:NOOSE:setInvisible", item.SelectedItem.DisplayText);
        } else if(item.Text == "Wiederbeleben") {
            if(!nearestPlayers[1]){
                mp.game.graphics.notify("Kein Spieler in der Nähe");
                return;
            }
            mp.game.graphics.notify("Du belebst wieder: " + nearestPlayers[1].name)
            mp.events.callRemote("playAnimationEvent", "amb@medic@standing@kneel@enter", "enter", 1, 33, -1);
            setTimeout(_ => {
                mp.events.callRemote("server:medic:revPlayer", nearestPlayers[1]);
            }, 12000)
            ui_main_interaction.Close();
        } else
        if(item.Text == "Heilen") {
            if(!nearestPlayers[1]){
                mp.game.graphics.notify("Kein Spieler in der Nähe");
                return;
            }

            mp.game.graphics.notify("Du heilst: " + nearestPlayers[1].name)
            mp.events.callRemote("server:medic:healPlayer", nearestPlayers[1]);
            ui_main_interaction.Close();
        } else if (item.Text == 'Fesseln') {
            mp.events.callRemote("server:cuff:cuff");
        } else if (item.Text == 'Entfesseln') {
            mp.events.callRemote("server:cuff:uncuff");
        } else if (item.Text == 'Spielerliste') {
            mp.events.callRemote("server:noose:playerlist");
            ui_main_interaction.Close();
        } else if (item.Text == 'Leitstelle') {
            mp.events.callRemote("server:phone:getLeitstelle", NOOSELeitstelle);
            ui_main_interaction.Close();
        } else if(item.Text == "Durchsuchen") {
            mp.events.callRemote("server:police:search");
            ui_main_interaction.Close();
        } else if (item.Text == 'Schließen') {
            ui_main_interaction.Close();
        } else if(item.Text == 'Veh nearest player') {
            let nearestPlayers = [];
            mp.players.forEachInRange(mp.players.local.position, 1,
                (nearPlayer) => {
                    nearestPlayers.push(nearPlayer);
                }
            );
            mp.events.callRemote("server:Admin:VehNearestPlayer", nearestPlayers[1]);
            ui_main_interaction.Close();
        } else if(item.Text == 'Nametags') {
            mp.nametags.enabled = !mp.nametags.enabled;
            mp.game.graphics.notify("Nametags: " + mp.nametags.enabled);
        } else if(item.Text == 'Verschrottung') {
            if(!mp.players.local.vehicle) return;
            mp.game.graphics.notify("Verschrotte Fahrzeug");
            mp.events.callRemote("server:Admin:destroyVeh");
        }
    });
});

function playerListDraw(playerJSON){
  // Menu für Fahrzeugliste anlegen
  ui_playerlist = new Menu("Spielerliste", "Liste aller Spieler", MenuPoint);
  ui_playerlist.Visible = true;
  if (playerJSON != "none"){
    playerJSON = JSON.parse(playerJSON);
    playerJSON.forEach(players => {
        let newItem = new UIMenuItem("" + players.charname, ""+players.commandname);
        ui_playerlist.AddItem(newItem);
        newItem.SetRightLabel(""+ [String(players.telefon)]);
    });
  } else {
    ui_playerlist.AddItem( new UIMenuItem("Keine Spieler Online!", ""));
  }

  // Auswertung Menuauswahl ausparken
  ui_playerlist.ItemSelect.on((item, index) => {
    selectedNumPlate = item.Text;
      mp.events.call("client:admin:subMenu", item.Description);
      ui_playerlist.Close();
  });
}
mp.events.add("client:noose:playerlist", playerListDraw);


mp.events.add("client:admin:subMenu", (id) => {
    let ui_admin = new Menu("Admin", "Abuse mich und ich Fick Dich!", MenuPoint);
    ui_admin.AddItem(new UIMenuItem("Zum Spieler Teleportieren",""));
    ui_admin.AddItem(new UIMenuItem("Spieler her Teleportieren","Heilwasser ist Beste!"));
    ui_admin.AddItem(new UIMenuItem("Kicken","Der Harry Potter umhang"));
    ui_admin.AddItem(new UIMenuItem("Perma Bannen","Der Harry Potter umhang"));
    ui_admin.AddItem(new UIMenuItem("Heilen","Der Harry Potter umhang"));
    ui_admin.AddItem(new UIMenuItem("Tracken","Ich weiß wo du bist :)"));
  
     ui_admin.AddItem( new UIMenuItem("Schließen", ""));
     ui_admin.Visible = true;
  
     ui_admin.ItemSelect.on((item, index, value) => {
     if (item.Text == "Zum Spieler Teleportieren") {
       mp.events.callRemote("server:admin:tpto",id);
       ui_admin.Close();
     } else if (item.Text == "Spieler her Teleportieren") {
       mp.events.callRemote("server:admin:tphere",id);
       ui_admin.Close();  
    } else if (item.Text == "Kicken") {
        mp.events.callRemote("server:admin:kick",id);
        ui_admin.Close();   
    } else if (item.Text == "Perma Bannen") {
        mp.events.callRemote("server:admin:permban",id);
        ui_admin.Close(); 
    } else if (item.Text == "Heilen") {
        mp.events.callRemote("server:admin:heal",id);
        ui_admin.Close(); 
      } else if (item.Text == "Tracken") {
        mp.events.callRemote("server:admin:track",id);
        ui_admin.Close(); 
     } else if (item.Text == "Schließen") {
      ui_admin.Close();
     }
   });
  });

mp.events.add("client:NOOSE:openBikeMenu", () => {
    const ui_main_bike = new Menu("Garage", "Parke dein Fahrzeug ein oder aus.", MenuPoint);
    ui_main_bike.Visible = false;
    ui_main_bike.AddItem( new UIMenuItem("Fahrrad", "Ein Fahrrad"));
    ui_main_bike.AddItem( new UIMenuItem("Fahrzeug einparken", "Parkt das Fahrzeug ein"));
    ui_main_bike.AddItem( new UIMenuItem("Schließen", "Schließt das Menü"));
    ui_main_bike.Visible = true;

    ui_main_bike.ItemSelect.on((item, index, value) => {
        if (item.Text == 'Fahrrad') {
            mp.game.graphics.notify("Du spawnst ein Fahrrad!");
            mp.events.callRemote("server:NOOSE:SpawnBike", "bmx");
        } else if (item.Text == 'Fahrzeug einparken') {
            mp.events.callRemote("server:NOOSE:DestructBike");
        } else if (item.Text == 'Schließen') {
            ui_main_bike.Close();
        }
    });
});

// MENU ON-OFF DUTY
mp.events.add("client:NOOSE:openDutyMenu", () => {
    const   ui = new Menu("Dienst Anmelden", "In den Dienst gehen", MenuPoint);
    ui.Visible = false;
    ui.AddItem( new UIMenuListItem("Schicht beginnen","Bitte wähle deine Uniform aus!", NOOSERanks =new ItemsCollection(["NOOSE Agent", "NOOSE Special Agent", "NOOSE Leitung"])));
    ui.AddItem( new UIMenuItem("Schicht beenden", "Die Schicht beenden"));
    ui.AddItem( new UIMenuItem("Schutzweste", "Schutzweste anlegen"));
    ui.AddItem( new UIMenuListItem("Waffe ausgeben","Bitte wähle deine Waffen aus!", NOOSEWeapons = new ItemsCollection(["Karabiner MK2", "Combat MG MK2", "Pistol MK2", "Tazer"])));
    ui.AddItem( new UIMenuItem("Schließen", "Menü schließen"));

    ui.Visible = true;
    ui.ItemSelect.on((item, index, value) => {
            if (item.Text == 'Schicht beginnen') {
                mp.events.callRemote("server:NOOSE:onDuty", item.SelectedItem.DisplayText);
                mp.events.call("client:TS-VoiceChat:addToRadio");
            } else if (item.Text == 'Schicht beenden') {
                mp.events.callRemote("server:NOOSE:offDuty");
                mp.events.call("client:TS-VoiceChat:removeFromRadio");
                ui.Close();
            } else if (item.Text == 'Schließen') {
                ui.Close();
            } else if (item.Text == 'Schutzweste') {
                mp.events.callRemote("server:NOOSE:armor");
            } else if (item.Text == 'Waffe ausgeben') {
                mp.events.callRemote("server:NOOSE:weapon", item.SelectedItem.DisplayText);
            }
    });
});

let trackingBlip = null;
mp.events.add("client:NOOSE:usertracker", (posX, posY, posZ) => {
    if (trackingBlip !== null) trackingBlip.destroy();

    trackingBlip = mp.blips.new(84, new mp.Vector3(parseFloat(posX), parseFloat(posY), parseFloat(posZ)),
    {
        name: "NOOSE Zielperson",
        scale: 1.00,
        color: 1,
        alpha: 255,
        drawDistance: 10,
        shortRange: false,
        rotation: 0.00,
        dimension: 0,
    });
});
mp.events.add("client:NOOSE:endusertrack", () => {
    if (trackingBlip !== null) trackingBlip.destroy();
});
