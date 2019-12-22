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
var taxiLeitstelle = 913;

const ScreenRes = mp.game.graphics.getScreenResolution(0,0);
const MenuPoint = new Point(ScreenRes.x +150, 50);


// MENÜ Interaktionen
mp.events.add("client:Cabco:openInteractionMenu",(canInvite,ranks) => {
    const ui_main_interaction = new Menu("Fraktionsinteraktion", "Interagieren.", MenuPoint);
    ui_main_interaction.Visible = false;
    if (canInvite == "Y") {
        ranks = JSON.parse(ranks);
        ui_main_interaction.AddItem( new UIMenuListItem("Einstellen","Person einstellen als: ", TaxiRanks = new ItemsCollection(ranks)));
        ui_main_interaction.AddItem(new UIMenuItem("Entlassen", "Person entlassen"));
    }
    ui_main_interaction.AddItem( new UIMenuItem("Schließen", "Schließt das Menü"));
    ui_main_interaction.Visible = true;

    ui_main_interaction.ItemSelect.on((item, index, value) => {
        if (item.Text == 'Einstellen') {
            mp.game.graphics.notify("Du stellst die Person ein als: "+item.SelectedItem.DisplayText);
            mp.events.callRemote("server:Cabco:hirePlayer", item.SelectedItem.DisplayText);
        } else if (item.Text == 'Entlassen') {
            mp.game.graphics.notify("Du entlässt die Person!");
            mp.events.callRemote("server:Cabco:firePlayer");
        } else if (item.Text == 'Schließen') {
            ui_main_interaction.Close();
        }
    });
});

// MENÜ FAHRZEUGE
mp.events.add("client:Cabco:openDutyMenu", () => {
const ui_main_duty = new Menu("Downtown Cab Co", "Dein Taxi Unternehmen.", MenuPoint);
    ui_main_duty.Visible = false;
    ui_main_duty.AddItem( new UIMenuItem("Dienst beginnen", "Zum Dienst melden"));
    ui_main_duty.AddItem( new UIMenuItem("Dienst beenden", "Vom Dienst abmelden"));
    ui_main_duty.AddItem( new UIMenuItem("Leitstelle", "Die Leitstelle übernehmen"));
    ui_main_duty.AddItem( new UIMenuItem("Schließen", "Schließt das Menü"));
    ui_main_duty.Visible = true;

    ui_main_duty.ItemSelect.on((item, index, value) => {
        if (item.Text == 'Dienst beginnen') {
            mp.events.callRemote("server:Cabco:onDuty");
            mp.events.call("client:TS-VoiceChat:addToRadio");
        } else if (item.Text == 'Dienst beenden') {
            mp.events.callRemote("server:Cabco:offDuty");
            mp.events.call("client:TS-VoiceChat:removeFromRadio");
        } else if (item.Text == 'Leitstelle') {
            mp.events.callRemote("server:phone:getLeitstelle", taxiLeitstelle);
        } else if (item.Text == 'Schließen') {
            ui_main_duty.Close();
        }
    });
});

// Dispatch blips
mp.events.add("client:cabco:showDispatch", (posX, posY, posZ) => {
    var dispatchTime = new Date().getTime();
    var cabcoDispatch = "cabcoDispatch_";
    mp.game.graphics.notify("Neuer Dispatch eingegangen.");

    global[cabcoDispatch + mp.players.local.getVariable("ingameName") + "_" + dispatchTime] = mp.blips.new(56, new mp.Vector3(parseFloat(posX), parseFloat(posY), parseFloat(posZ)),
    {
        name: "Taxiruf Standort",
        scale: 1.00,
        color: 70,
        alpha: 255,
        drawDistance: 10,
        shortRange: false,
        rotation: 0.00,
        dimension: 0,
    });
    setTimeout(() => {
      global[cabcoDispatch + mp.players.local.getVariable("ingameName") + "_" + dispatchTime].destroy();
    }, 600000)
});
