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

const ScreenRes = mp.game.graphics.getScreenActiveResolution(0,0);
const MenuPoint = new Point(ScreenRes.x - 440, 250);

let uiMenu = []
let speditoerPed = mp.peds.new(mp.game.joaat('s_m_y_construct_02'), new mp.Vector3(879.444, -1257.135, 26.3593), 230.8319, (streamlscGarage) =>{}, 0);


mp.events.add("client:speditoer:openMenu",() => {
const ui_Main = new Menu("Spediteur", "Werde zum Trucker", MenuPoint);
ui_Main.AddItem(hire = new UIMenuItem("Arbeitsvertrag unterschreiben", "Unterschreibe einen Arbeitsvertrag"));
ui_Main.AddItem(begin = new UIMenuItem("Job Beginnen", "Beginne deinen Job"));
ui_Main.AddItem(finish = new UIMenuItem("Job Beenden", "Beende deinen Job"));
ui_Main.AddItem(fire = new UIMenuItem("Arbeitsvertrag Kündigen", "Kündige deinen Arbeitsvertrag"));
// CLOSING
let ui_Close = new UIMenuItem("Schließen", "Schließt das Menü");
ui_Close.BackColor = new Color(138,0, 0);
ui_Close.HighlightedBackColor = new Color(189, 189, 189);
ui_Main.AddItem(ui_Close);
ui_Main.Visible = false;
uiMenu.push(ui_Main);


ui_Main.ItemSelect.on((item, index, value) => {
    if (item.Text == 'Arbeitsvertrag unterschreiben') {
        mp.events.call("client:arbeitsvertrag:openMenu");
        ui_Main.Close();
    } else
    if (item.Text == 'Job Beginnen') {
        ui_Main.Close();
    } else
      if (item.Text == 'Job Beenden') {
        ui_Main.Close();
    } else 
    if (item.Text == 'Arbeitsvertrag Kündigen') {
        mp.events.call("client:kündigen:openMenu");
        ui_Main.Close();
    } else
    if (item.Text == 'Schließen') {
        ui_Main.Close();
    }

});

// arbeitsvertrag
mp.events.add("client:arbeitsvertrag:openMenu", () => {
const ui_arbeitsvertrag = new Menu("Arbeitsvertrag", "Unterschreiben eines Vertrages", MenuPoint);
ui_arbeitsvertrag.AddItem(new UIMenuItem("Nicht unterschreiben",""));
let ui_kündigenja = new UIMenuItem("Unterschreiben", "Du bekommst eine wiedererstattung von 400$");
ui_kündigenja.BackColor = new Color(138, 0, 0);
ui_kündigenja.HighlightedBackColor = new Color(255, 153, 51);
ui_arbeitsvertrag.AddItem(ui_kündigenja);
ui_arbeitsvertrag.Visible = true;
ui.Menu.push(ui_arbeitsvertrag);


ui_arbeitsvertrag.MenuClose.on(() => {
    ui_arbeitsvertrag.RefreshIndex();
});

ui_arbeitsvertrag.ItemSelect.on((item, index, value) => {
    if (item.Text == 'Nicht unterschreiben') {
        ui_arbeitsvertrag.Close();
    } else
    if (item.Text == 'Unterschreiben') {
        mp.events.callRemote("server:spediteur:unterschreiben");
        mp.game.graphics.notify("Du hast einen Arbeitsvertrag unterschrieben");
        ui_arbeitsvertrag.Close();
    }
    });
});

// Kündigen
mp.events.add("client:kündigen:openMenu", () => {
const ui_kündigen = new Menu("Kündigen", "Kündige deinen Job", MenuPoint);
ui_kündigen.AddItem(new UIMenuItem("Nein",""));
let ui_kündigenja = new UIMenuItem("Ja", "Du bekommst eine wiedererstattung von 400$");
ui_kündigenja.BackColor = new Color(138, 0, 0);
ui_kündigenja.HighlightedBackColor = new Color(255, 153, 51);
ui_kündigen.AddItem(ui_kündigenja);
ui_kündigen.Visible = true;
uiMenu.push(ui_kündigen);

ui_kündigen.MenuClose.on(() => {
    ui_kündigen.RefreshIndex();
});

ui_kündigen.ItemSelect.on((item, index, value) => {
    if (item.Text == 'Nein') {
        ui_kündigen.Close();
    } else
    if (item.Text == 'Ja') {
        mp.events.callRemote("server:spediteur:kündigen");
        ui_kündigen.Close();
    }
    });
});


ui_Main.BindMenuToItem(ui_arbeitsvertrag, hire);
ui_Main.BindMenuToItem(ui_kündigen, fire);


mp.events.add("client:speditoer:closeMenu", () => {
    if (ui && ui.Visible) ui.Close();
  });
});
