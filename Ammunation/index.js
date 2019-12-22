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
mp.events.add("client:ammunation:openInteractionMenu",(canInvite,ranks) => {
    const ui_main_interaction = new Menu("Ammunation Interaktion", "Interagieren.", MenuPoint);
    ui_main_interaction.Visible = false;
    if (canInvite == "Y") {
        ranks = JSON.parse(ranks);
        ui_main_interaction.AddItem( new UIMenuListItem("Einstellen","Person einstellen als: ", AmmuRanks = new ItemsCollection(ranks)));
        ui_main_interaction.AddItem(new UIMenuItem("Entlassen", "Person entlassen"));
    }
    ui_main_interaction.AddItem( new UIMenuItem("Waffenlizenz A geben", "Gibt Waffenlizenz A"));
    ui_main_interaction.AddItem( new UIMenuItem("Waffenlizenz B geben", "Gibt Waffenlizenz B"));
    ui_main_interaction.AddItem( new UIMenuItem("Schließen", "Schließt das Menü"));
    ui_main_interaction.Visible = true;

    ui_main_interaction.ItemSelect.on((item, index, value) => {
        if (item.Text == 'Einstellen') {
            mp.game.graphics.notify("Du stellst die Person ein als: "+item.SelectedItem.DisplayText);
            mp.events.callRemote("server:ammunation:hirePlayer", item.SelectedItem.DisplayText);
        } else if (item.Text == 'Entlassen') {
            mp.game.graphics.notify("Du entlässt die Person!");
            mp.events.callRemote("server:ammunation:firePlayer");
        } else if (item.Text == 'Waffenlizenz A geben') {
            mp.events.callRemote("server:ammunation:givelicensea");
            ui_main_interaction.Close();
        } else if (item.Text == 'Waffenlizenz B geben') {
            mp.events.callRemote("server:ammunation:givelicenseb");
            ui_main_interaction.Close();
        } else if (item.Text == 'Schließen') {
            ui_main_interaction.Close();
        }
    });
});
// MENÜ FAHRZEUGE
mp.events.add("client:ammunation:openDutyMenu", () => {
const ui_main_duty = new Menu("Ammunation", "Ammunation", MenuPoint);
    ui_main_duty.Visible = false;
    ui_main_duty.AddItem( new UIMenuItem("Dienst beginnen", "Zum Dienst melden"));
    ui_main_duty.AddItem( new UIMenuItem("Dienst beenden", "Vom Dienst abmelden"));
    ui_main_duty.AddItem( new UIMenuItem("Leitstelle", "Die Leitstelle übernehmen"));
    ui_main_duty.AddItem( new UIMenuItem("Schließen", "Schließt das Menü"));
    ui_main_duty.Visible = true;
    let ammuLeitstelle = 931;

    ui_main_duty.ItemSelect.on((item, index, value) => {
        if (item.Text == 'Dienst beginnen') {
            mp.events.callRemote("server:ammunation:onDuty");
            ui_main_duty.Close();
        } else if (item.Text == 'Dienst beenden') {
            mp.events.callRemote("server:ammunation:offDuty");
            ui_main_duty.Close();
        } else if (item.Text == 'Leitstelle') {
            mp.events.callRemote("server:phone:getLeitstelle", ammuLeitstelle);
        } else if (item.Text == 'Schließen') {
            ui_main_duty.Close();
        }
    });
});
