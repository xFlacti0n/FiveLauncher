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

const ScreenRes = mp.game.graphics.getScreenResolution(0,0);
const MenuPoint = new Point(ScreenRes.x +150, 50);
const dojLeitstelle = 914;

const   ui = new Menu("Dienst Anmelden", "In den Dienst gehen", MenuPoint);
        ui.Visible = false;
        ui.AddItem( new UIMenuItem("Schicht beginnen", "Die Schicht beginnen"));
        ui.AddItem( new UIMenuItem("Leitstelle", "Die Leitstelle übernehmen"));
        ui.AddItem( new UIMenuItem("Schicht beenden", "Die Schicht beenden"));
        ui.AddItem( new UIMenuItem("Schließen", "Menü schließen"));


// MENU ON-OFF DUTY
mp.events.add("client:doj:dutyMenu", () => {
    ui.Visible = true;

    ui.ItemSelect.on((item, index, value) => {
        if (item.Text == 'Schicht beginnen') {
        mp.events.callRemote("server:doj:onDuty");
        mp.events.call("client:TS-VoiceChat:addToRadio");
        ui.Close();
    } else if (item.Text == 'Leitstelle') {
        mp.events.callRemote("server:phone:getLeitstelle", dojLeitstelle);
        ui.Close();
    } else if (item.Text == 'Schicht beenden') {
        mp.events.callRemote("server:doj:offDuty");
        mp.events.call("client:TS-VoiceChat:removeFromRadio");
        ui.Close();
    }
        else if (item.Text == 'Schließen') {
        ui.Close();
    }
    });
});

mp.events.add("client:doj:reDutyMenu",() => {
  const   ui_reduty = new Menu("Dienst Anmelden", "In den Dienst gehen", MenuPoint);
          ui_reduty.AddItem( new UIMenuItem("Schicht beginnen", "Die Schicht beginnen"));
          ui_reduty.AddItem( new UIMenuItem("Leitstelle", "Die Leitstelle übernehmen"));
          ui_reduty.AddItem( new UIMenuItem("Schicht beenden", "Die Schicht beenden"));
          ui_reduty.AddItem( new UIMenuItem("Schließen", "Menü schließen"));
          ui_reduty.Visible = true;

    ui_reduty.ItemSelect.on((item, index, value) => {
        if (item.Text == 'Schicht beginnen') {
            mp.events.callRemote("server:doj:onDuty")
            mp.events.call("client:TS-VoiceChat:addToRadio");
        } else if (item.Text == 'Leitstelle') {
            mp.events.callRemote("server:phone:getLeitstelle", dojLeitstelle);
            ui.Close();
        } else if (item.Text == 'Schicht beenden') {
            mp.events.callRemote("server:doj:offDuty");
            mp.events.call("client:TS-VoiceChat:removeFromRadio");
        } else if (item.Text == 'Schließen') {
            ui_reduty.Close();
        }
    });
});

mp.events.add("client:doj:openInteractionMenu",(canInvite,ranks) => {
    const ui_main_interaction = new Menu("DOJ", "Interagieren.", MenuPoint);
    ui_main_interaction.Visible = false;
    if (canInvite == "Y") {
        ranks = JSON.parse(ranks);
        ui_main_interaction.AddItem(new UIMenuListItem("Einstellen","Person einstellen als: ", DOJRanks = new ItemsCollection(ranks)));
        ui_main_interaction.AddItem(new UIMenuItem("Entlassen", "Person entlassen"));
        ui_main_interaction.AddItem(new UIMenuItem("Shop Berechtigung geben", "Beamten Shop zugriff geben"));
        ui_main_interaction.AddItem(new UIMenuItem("Shop Berechtigung wegnehmen", "Nimmt die Shop Berechtigung weg"));
    }
    ui_main_interaction.AddItem( new UIMenuItem("Waffenlizenz A geben", "Gibt Waffenlizenz A"));
    ui_main_interaction.AddItem( new UIMenuItem("Waffenlizenz A entziehen", "Nimmt Waffenlizenz A weg"));
    ui_main_interaction.AddItem( new UIMenuItem("Waffenlizenz B geben", "Gibt Waffenlizenz B"));
    ui_main_interaction.AddItem( new UIMenuItem("Waffenlizenz B entziehen", "Nimmt Waffenlizenz B weg"));
    ui_main_interaction.AddItem( new UIMenuItem("Schließen", "Schließt das Menü"));
    ui_main_interaction.Visible = true;

    ui_main_interaction.ItemSelect.on((item, index, value) => {
        let nearestPlayers = [];
        mp.players.forEachInRange(mp.players.local.position, 2, (nearPlayer) => {
            nearestPlayers.push(nearPlayer);
        });
        if (item.Text == 'Einstellen') {
            mp.game.graphics.notify("Du stellst die Person ein als: "+item.SelectedItem.DisplayText);
            mp.events.callRemote("server:doj:hirePlayer", item.SelectedItem.DisplayText);
        } else if (item.Text == 'Entlassen') {
            mp.game.graphics.notify("Du entlässt die Person!");
            mp.events.callRemote("server:doj:firePlayer");
        } else if (item.Text == 'Shop Berechtigung geben') {
            mp.events.callRemote("server:doj:canbuy");
        } else if (item.Text == 'Shop Berechtigung wegnehmen') {
            mp.events.callRemote("server:doj:dontcanbuy");
        } else if (item.Text == 'Waffenlizenz A geben') {
            mp.events.callRemote("server:doj:givelicensea");
            ui_main_interaction.Close();     
        } else if (item.Text == 'Waffenlizenz A entziehen') {
            mp.events.callRemote("server:doj:removelicensea");
            ui_main_interaction.Close(); 
        } else if (item.Text == 'Waffenlizenz B geben') {
            mp.events.callRemote("server:doj:givelicenseb");
            ui_main_interaction.Close(); 
        } else if (item.Text == 'Waffenlizenz B entziehen') {
            mp.events.callRemote("server:doj:removelicenseb");
            ui_main_interaction.Close(); 
        } else if (item.Text == 'Schließen') {
            ui_main_interaction.Close();
        }
    });
});

mp.events.add("client:doj:closeMenu", () => {
    if (ui && ui.Visible) ui.Close();
});
