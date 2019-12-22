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
var medicLeitstelle = 912;

const ScreenRes = mp.game.graphics.getScreenResolution(0,0);
const MenuPoint = new Point(ScreenRes.x +150, 50);

// MENÜ Interaktionen
mp.events.add("client:medic:openInteractionMenu",(canInvite,ranks) => {
    const ui_main_interaction = new Menu("LSMC", "Interagieren.", MenuPoint);
    ui_main_interaction.Visible = false;
    if (canInvite == "Y") {
        ranks = JSON.parse(ranks);
        ui_main_interaction.AddItem(new UIMenuListItem("Einstellen","Person einstellen als: ", MedicRanks = new ItemsCollection(ranks)));
        ui_main_interaction.AddItem(new UIMenuItem("Entlassen", "Person entlassen"));
    }
    ui_main_interaction.AddItem( new UIMenuItem("Wiederbeleben", "Belebt wieder"));
    ui_main_interaction.AddItem( new UIMenuItem("Heilen", "Heilt die Person"));
    ui_main_interaction.AddItem( new UIMenuItem("Zugang legen", "Legt einen Zugang"));
    ui_main_interaction.AddItem( new UIMenuItem("Zugang entfernen", "Entfernt den Zugang"));
    ui_main_interaction.AddItem( new UIMenuItem("Medikament geben", "Verabreiche Medikamente"));
    ui_main_interaction.AddItem( new UIMenuItem("Schließen", "Schließt das Menü"));
    ui_main_interaction.Visible = true;

    ui_main_interaction.ItemSelect.on((item, index, value) => {
        let nearestPlayers = [];
        mp.players.forEachInRange(mp.players.local.position, 2, (nearPlayer) => {
            nearestPlayers.push(nearPlayer);
        });
        if (item.Text == 'Einstellen') {
            mp.game.graphics.notify("Du stellst die Person ein als: "+item.SelectedItem.DisplayText);
            mp.events.callRemote("server:medic:hirePlayer", item.SelectedItem.DisplayText);
        } else if (item.Text == 'Entlassen') {
            mp.game.graphics.notify("Du entlässt die Person!");
            mp.events.callRemote("server:medic:firePlayer");
        } else if(item.Text == "Wiederbeleben") {
            if(!nearestPlayers[1]){
                mp.game.graphics.notify("Keiner in der Nähe");
                return;
            }
            mp.game.graphics.notify("Du belebst wieder...");
            mp.events.callRemote("playAnimationEvent", "amb@medic@standing@kneel@enter", "enter", 1, 33, -1);
            setTimeout(_ => {
                mp.events.callRemote("server:medic:revPlayer", nearestPlayers[1]);
            }, 12000);
            ui_main_interaction.Close();
        } else if(item.Text == "Heilen") {
            if(!nearestPlayers[1]){
                mp.game.graphics.notify("Keiner in der nähe");
                return;
            }
            mp.game.graphics.notify("Du heilst...");
            mp.events.callRemote("server:medic:healPlayer", nearestPlayers[1]);
            ui_main_interaction.Close();
        } else if(item.Text == "Zugang legen") {
            if(!nearestPlayers[1]){
                 mp.game.graphics.notify("Kein Spieler in der Nähe");
                 return;
            }
            mp.game.graphics.notify("Du legst einen Zugang");
            mp.events.callRemote("server:medic:estAccess", nearestPlayers[1]);
            ui_main_interaction.Close();
        } else if(item.Text == "Medikament geben") {
            if(!nearestPlayers[1]){
                mp.game.graphics.notify("Kein Spieler in der Nähe");
                return;
            }
            mp.game.graphics.notify("Du verabreichst Medizin...");
            mp.events.callRemote("server:medic:giveDrug", nearestPlayers[1]);
            ui_main_interaction.Close();
        } else if(item.Text == "Zugang entfernen") {
            if(!nearestPlayers[1]){
                mp.game.graphics.notify("Kein Spieler in der Nähe");
                return;
            }
            mp.game.graphics.notify("Du entfernst den Zugang...");
            mp.events.callRemote("server:medic:remAccess", nearestPlayers[1]);
            ui_main_interaction.Close();
        } else if (item.Text == 'Schließen') {
            ui_main_interaction.Close();
        }
    });
});


const   ui = new Menu("Dienst Anmelden", "In den Dienst gehen", MenuPoint);
        ui.Visible = false;
        ui.AddItem( new UIMenuListItem("Schicht beginnen","Bitte wähle deine Uniform aus !", MedicRanks =new ItemsCollection(["Praktikant", "Paramedic", "Arzt/Facharzt", "Chief"])));
        ui.AddItem( new UIMenuItem("Leitstelle", "Die Leitstelle übernehmen"));
        ui.AddItem( new UIMenuItem("Schicht beenden", "Die Schicht beenden"));
        ui.AddItem( new UIMenuItem("Schließen", "Menü schließen"));

const   drugs_ui = new Menu("Medikamente", "Medikament verabreichen", MenuPoint);
        drugs_ui.Visible = false;
        drugs_ui.AddItem( new UIMenuItem("Ibuprofen", ""));

// MENU ON-OFF DUTY
mp.events.add("client:medic:medicMenu", () => {
    ui.Visible = true;
    ui.ItemSelect.on((item, index, value) => {
      if (item.Text == 'Schicht beginnen') {
        mp.events.callRemote("server:medic:onDuty", item.SelectedItem.DisplayText);
        mp.events.call("client:TS-VoiceChat:addToRadio");
        ui.Close();
      } else if (item.Text == 'Schicht beenden') {
        mp.events.callRemote("server:medic:offDuty");
        mp.events.call("client:TS-VoiceChat:removeFromRadio");
        ui.Close();
      } else if (item.Text == 'Leitstelle') {
        mp.events.callRemote("server:phone:getLeitstelle", medicLeitstelle);
        ui.Close();
      } else if (item.Text == 'Schließen') {
        ui.Close();
      }
    });
});

const   ui_leftCabinet = new Menu("Medizinschrank", "Wähle das Medikament", MenuPoint);
        ui_leftCabinet.Visible = false;
        ui_leftCabinet.AddItem( new UIMenuListItem("Medikament","Das Medikament", Medicines = new ItemsCollection(["Bepanthen","Betaisodona","Blutinfusion","Diclofenac","Flammazine","Ibuprofen","Imodium Akut","Nitro Spray","Novalgin","Pantoprazol","Ringerlösung"])));
        ui_leftCabinet.AddItem( new UIMenuItem("Schließen", "Menü schließen"));

const   ui_rightCabinet = new Menu("Medizinschrank", "Wähle das Medikament", MenuPoint);
        ui_rightCabinet.Visible = false;
        ui_rightCabinet.AddItem( new UIMenuListItem("Medikament","Das Medikament", Medicines = new ItemsCollection(["Antibiotika","Fentanyl","Propofol","Antidepressiva","Diazepam"])));
        ui_rightCabinet.AddItem( new UIMenuItem("Schließen", "Menü schließen"));

mp.events.add("client:medic:leftCabinet", () => {
    ui_leftCabinet.Visible = true;
    ui_leftCabinet.ItemSelect.on((item, index, value) => {
      if (item.Text == 'Medikament') {
        mp.game.graphics.notify("Du bekommst 1x ~r~"+item.SelectedItem.DisplayText);
        mp.events.callRemote("server:medic:getMedicine", item.SelectedItem.DisplayText);
        ui_leftCabinet.Close();
      } else if (item.Text == 'Schließen') {
        ui_leftCabinet.Close();
      }
    });
});

mp.events.add("client:medic:rightCabinet", () => {
  ui_rightCabinet.Visible = true;
  ui_rightCabinet.ItemSelect.on((item, index, value) => {
    if (item.Text == 'Medikament') {
      mp.game.graphics.notify("Du bekommst 1x ~r~"+item.SelectedItem.DisplayText);
      mp.events.callRemote("server:medic:getMedicine", item.SelectedItem.DisplayText);
      ui_rightCabinet.Close();
    } else if (item.Text == 'Schließen') {
      ui_rightCabinet.Close();
    }
  });
});

//SPIELER HEALTH REGENERATION AUSSTELLEN
mp.events.add('render', () => {
    mp.game.player.setHealthRechargeMultiplier(0.0);
});

mp.events.add("client:medic:sitafterrevive", () => {
  mp.events.callRemote("playAnimationEvent", 'anim@heists@fleeca_bank@ig_7_jetski_owner', 'owner_idle', 1, 33);
  mp.events.callRemote("server:inventory:setWalkingstyle", "Verletzt");
});

// Dispatch blips
mp.events.add("client:medic:showDispatch", (posX, posY, posZ) => {
    var dispatchTime = new Date().getTime();
    var medicDispatch = "medicDispatch_";
    mp.game.graphics.notify("Neuer Dispatch eingegangen.");

    global[medicDispatch + mp.players.local.getVariable("ingameName") + "_" + dispatchTime] = mp.blips.new(61, new mp.Vector3(parseFloat(posX), parseFloat(posY), parseFloat(posZ)),
    {
        name: "Notruf Standort",
        scale: 1.00,
        color: 1,
        alpha: 255,
        drawDistance: 10,
        shortRange: false,
        rotation: 0.00,
        dimension: 0,
    });
    setTimeout(() => {
      global[medicDispatch + mp.players.local.getVariable("ingameName") + "_" + dispatchTime].destroy();
    }, 600000)
    // 300000 = 5 min
    // 600000 = 10 min
});
