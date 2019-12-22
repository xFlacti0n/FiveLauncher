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


// MENÜ Interaktionen
mp.events.add("client:lsc:openInteractionMenu",(canInvite,ranks) => {
    const ui_main_interaction = new Menu("Unternehmensinteraktion", "Interagieren.", MenuPoint);
    ui_main_interaction.Visible = false;
    if (canInvite == "Y") {
        ranks = JSON.parse(ranks);
        ui_main_interaction.AddItem( new UIMenuListItem("Einstellen","Person einstellen als: ", BennyRanks = new ItemsCollection(ranks)));
        ui_main_interaction.AddItem(new UIMenuItem("Entlassen", "Person entlassen"));
    }
    ui_main_interaction.AddItem(new UIMenuItem("Fahrzeug reparieren", "Fahrzeug Reparieren"));
    ui_main_interaction.AddItem( new UIMenuItem("Schließen", "Schließt das Menü"));
    ui_main_interaction.Visible = true;

    ui_main_interaction.ItemSelect.on((item, index, value) => {
        let position = mp.players.local.position;
        let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
        let vehicle = mp.vehicles.atHandle(vehHandle);

        if (item.Text == 'Einstellen') {
            mp.game.graphics.notify("Du stellst die Person ein als: "+item.SelectedItem.DisplayText);
            mp.events.callRemote("server:lsc:hirePlayer", item.SelectedItem.DisplayText);
        } else if (item.Text == 'Entlassen') {
            mp.game.graphics.notify("Du entlässt die Person!");
            mp.events.callRemote("server:lsc:firePlayer");
        } else if (item.Text == 'Fahrzeug reparieren') {
            mp.events.callRemote("repair", vehicle);
            ui_main_interaction.Close();
        } else if (item.Text == 'Schließen') {
            ui_main_interaction.Close();
        }
    });
});

// MENÜ FAHRZEUGE
mp.events.add("client:lsc:openMenu", () => {
const ui_main = new Menu("Garage", "Parke dein Fahrzeug ein oder aus.", MenuPoint);
    ui_main.Visible = false;
    ui_main.AddItem( new UIMenuItem("Abschlepper", "Abschlepper ausparken"));
    ui_main.AddItem( new UIMenuItem("Abschlepper2", "anderen Abschlepper ausparken"));
    ui_main.AddItem( new UIMenuItem("SlamVan", "komische Karre ausparken"));
    ui_main.AddItem( new UIMenuItem("Flatbed", "Flachen Abschlepper ausparken"));
    ui_main.AddItem( new UIMenuItem("Fahrzeug einparken", "Parkt das Fahrzeug ein"));
    ui_main.AddItem( new UIMenuItem("Schließen", "Schließt das Menü"));
    ui_main.Visible = true;

    ui_main.ItemSelect.on((item, index, value) => {
        if (item.Text == 'Abschlepper') {
            mp.events.callRemote("server:lsc:SpawnVeh", "towtruck");
            ui_main.Close();
        } else if (item.Text == 'Abschlepper2') {
            mp.events.callRemote("server:lsc:SpawnVeh", "towtruck2");
            ui_main.Close();
        } else if (item.Text == 'SlamVan') {
            mp.events.callRemote("server:lsc:SpawnVeh", "slamvan3");
            ui_main.Close();
        } else if (item.Text == 'Flatbed') {
            mp.events.callRemote("server:lsc:SpawnVeh", "flatbed");
            ui_main.Close();
        } else if (item.Text == 'Fahrzeug einparken') {
            mp.events.callRemote("server:lsc:DestructVeh");
            ui_main.Close();
        } else if (item.Text == 'Schließen') {
            ui_main.Close();
        }
    });
});

// MENÜ FAHRZEUGE
mp.events.add("client:lsc:openDutyMenu", () => {
const ui_main_duty = new Menu("Los Santos Customs", "Die Werkstatt des Vertrauens.", MenuPoint);
    ui_main_duty.Visible = false;
    ui_main_duty.AddItem( new UIMenuItem("Dienst beginnen", "Zum Dienst melden"));
    ui_main_duty.AddItem( new UIMenuItem("Dienst beenden", "Vom Dienst abmelden"));
    ui_main_duty.AddItem( new UIMenuItem("Leitstelle", "Die Leitstelle übernehmen"));
    ui_main_duty.AddItem( new UIMenuItem("Schließen", "Schließt das Menü"));
    ui_main_duty.Visible = true;
    var lscLeitstelle = 921;

    ui_main_duty.ItemSelect.on((item, index, value) => {
        if (item.Text == 'Dienst beginnen') {
            mp.events.callRemote("server:lsc:onDuty");
            mp.events.call("client:TS-VoiceChat:addToRadio");
        } else if (item.Text == 'Dienst beenden') {
            mp.events.callRemote("server:lsc:offDuty");
            mp.events.call("client:TS-VoiceChat:removeFromRadio");
        } else if (item.Text == 'Leitstelle') {
            mp.events.callRemote("server:phone:getLeitstelle", lscLeitstelle);
        } else if (item.Text == 'Schließen') {
            ui_main_duty.Close();
        }
    });
});
