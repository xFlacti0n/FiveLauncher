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
let prellTimeout = null;
let prellDisable = false;

mp.events.add("client:fuelstation:setFuel",() => {
  const ui_main_fuel = new Menu("", "Bitte wähle den Treibstoff.", MenuPoint, "shopui_title_gasstation", "shopui_title_gasstation");
  ui_main_fuel.Visible = false;
  ui_main_fuel.AddItem( new UIMenuItem("Benzin", "Benzin tanken"));
  ui_main_fuel.AddItem( new UIMenuItem("Diesel", "Diesel tanken"));
  ui_main_fuel.AddItem( new UIMenuItem("Schließen", "Doch nicht tanken"));
  ui_main_fuel.Visible = true;

  ui_main_fuel.ItemSelect.on((item, index, value) => {
    if (item.Text == 'Benzin') {
      mp.events.callRemote("server:fuelStation:startFueling", "Benzin");
      ui_main_fuel.Close();
    } else if (item.Text == 'Diesel') {
      mp.events.callRemote("server:fuelStation:startFueling", "Diesel");
      ui_main_fuel.Close();
    } else if (item.Text == 'Schließen') {
      ui_main_fuel.Close();
    }
  });
});

mp.events.add("client:fuelstation:payMenu",(amount) => {
  mp.players.local.freezePosition(true);
  prellDisable = false;
  const ui_main_pay = new Menu("", "Bitte bezahle deine Rechnung.", MenuPoint, "shopui_title_gasstation", "shopui_title_gasstation");
  ui_main_pay.Visible = false;
  ui_main_pay.AddItem( new UIMenuItem("Karte", "Per Bankkarte "+amount+"$ zahlen"));
  ui_main_pay.AddItem( new UIMenuItem("Bar", "Bar "+amount+"$ zahlen"));
  ui_main_pay.AddItem( new UIMenuItem("Prellen", "Prelle die Tankrechnung"));
  ui_main_pay.Visible = true;

  ui_main_pay.ItemSelect.on((item, index, value) => {
    if (item.Text == 'Karte') {
      mp.events.callRemote("server:fuelStation:payCard", ""+amount);
      mp.players.local.freezePosition(false);
      ui_main_pay.Close();
      prellDisable = true;
    } else if (item.Text == 'Bar') {
      mp.events.callRemote("server:fuelStation:payCash", ""+amount);
      mp.players.local.freezePosition(false);
      ui_main_pay.Close();
      prellDisable = true;
    } else if (item.Text == 'Prellen') {
      mp.events.callRemote("server:fuelStation:payCheat", ""+amount);
      mp.players.local.freezePosition(false);
      ui_main_pay.Close();
      prellDisable = true;
    }
  });

  prellTimeout = setTimeout(function() {
    if (prellDisable == false) {
      mp.events.callRemote("server:fuelStation:payCheat", ""+amount);
      mp.players.local.freezePosition(false);
      ui_main_pay.Close();
    }
    prellTimeout = null;
    prellDisable = false;
  }, 20000);
});
