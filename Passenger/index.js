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
let playerPos = null;
let vehHandle = null;
let vehicle = null;

const ScreenRes = mp.game.graphics.getScreenResolution(0,0);
const MenuPoint = new Point(ScreenRes.x +150, 50);


mp.events.add("client:Keybind:G", () => {
    mp.events.callRemote("server:Passenger:getVehSeatNr");
});

// MENÜ Interaktionen
mp.events.add("client:Passenger:openMenu", (numberOfSeats, handle) => {
    const ui_main_interaction = new Menu("Sitzplatz", "Freie Sitzplätze", MenuPoint);
    ui_main_interaction.Visible = false;
    for (i = 1; i <= numberOfSeats; i++) {
        if (i == 1) {
          ui_main_interaction.AddItem( new UIMenuItem("Sitzplatz 1 (Fahrer)", "Als Fahrer Einsteigen"));
        } else if (i == 2) {
          ui_main_interaction.AddItem( new UIMenuItem("Sitzplatz 2 (Beifahrer)", "Als Beifahrer Einsteigen"));
        } else if (i == 3) {
          ui_main_interaction.AddItem( new UIMenuItem("Sitzplatz 3 (Hinten Links)", "Hinten Links Einsteigen"));
        } else if (i == 4) {
          ui_main_interaction.AddItem( new UIMenuItem("Sitzplatz 4 (Hinten Rechts)", "Hinten Rechts Einsteigen"));
        } else {
          ui_main_interaction.AddItem( new UIMenuItem("Sitzplatz " + i, "Einsteigen"));
        }
    }
    ui_main_interaction.AddItem( new UIMenuItem("Schließen", "Schließt das Menü"));
    ui_main_interaction.Visible = true;

    ui_main_interaction.ItemSelect.on((item, index) => {
        if (item.Text == 'Sitzplatz 1 (Fahrer)') {
          mp.players.local.taskEnterVehicle(handle.handle, 5000, -1, 1.0, 1, 0);
          ui_main_interaction.Close();
        } else if (item.Text == 'Sitzplatz 2 (Beifahrer)') {
          mp.players.local.taskEnterVehicle(handle.handle, 5000, 0, 1.0, 1, 0);
          ui_main_interaction.Close();
        } else if (item.Text == 'Sitzplatz 3 (Hinten Links)') {
          mp.players.local.taskEnterVehicle(handle.handle, 5000, 1, 1.0, 1, 0);
          ui_main_interaction.Close();
        } else if (item.Text == 'Sitzplatz 4 (Hinten Rechts)') {
          mp.players.local.taskEnterVehicle(handle.handle, 5000, 2, 1.0, 1, 0);
          ui_main_interaction.Close();
        } else if (item.Text == 'Sitzplatz 5') {
          mp.players.local.taskEnterVehicle(handle.handle, 5000, 3, 1.0, 1, 0);
          ui_main_interaction.Close();
        } else if (item.Text == 'Sitzplatz 6') {
          mp.players.local.taskEnterVehicle(handle.handle, 5000, 4, 1.0, 1, 0);
          ui_main_interaction.Close();
        } else if (item.Text == 'Sitzplatz 7') {
          mp.players.local.taskEnterVehicle(handle.handle, 5000, 5, 1.0, 1, 0);
          ui_main_interaction.Close();
        } else if (item.Text == 'Sitzplatz 8') {
          mp.players.local.taskEnterVehicle(handle.handle, 5000, 6, 1.0, 1, 0);
          ui_main_interaction.Close();
        } else if (item.Text == 'Sitzplatz 9') {
          mp.players.local.taskEnterVehicle(handle.handle, 5000, 7, 1.0, 1, 0);
          ui_main_interaction.Close();
        } else if (item.Text == 'Sitzplatz 10') {
          mp.players.local.taskEnterVehicle(handle.handle, 5000, 8, 1.0, 1, 0);
          ui_main_interaction.Close();
        } else if (item.Text == 'Sitzplatz 11') {
          mp.events.callRemote("server:Passenger:putIntoVehicle", handle, 9);
          ui_main_interaction.Close();
        } else if (item.Text == 'Sitzplatz 12') {
          mp.events.callRemote("server:Passenger:putIntoVehicle", handle, 10);
          ui_main_interaction.Close();
        } else if (item.Text == 'Sitzplatz 13') {
          mp.events.callRemote("server:Passenger:putIntoVehicle", handle, 11);
          ui_main_interaction.Close();
        } else if (item.Text == 'Sitzplatz 14') {
          mp.events.callRemote("server:Passenger:putIntoVehicle", handle, 12);
          ui_main_interaction.Close();
        } else if (item.Text == 'Sitzplatz 15') {
          mp.events.callRemote("server:Passenger:putIntoVehicle", handle, 13);
          ui_main_interaction.Close();
        } else if (item.Text == 'Sitzplatz 16') {
          mp.events.callRemote("server:Passenger:putIntoVehicle", handle, 14);
          ui_main_interaction.Close();
        } else if (item.Text == 'Schließen') {
          ui_main_interaction.Close();
        }
    });
});
