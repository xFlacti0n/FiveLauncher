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

mp.events.add("client:phoneshop:openMenu",() => {
    const   ui_main = new Menu("Handyladen", "Call me Baby", MenuPoint);
            ui_main.AddItem( new UIMenuItem("Telefonnummer ändern", "50$",));
            ui_main.AddItem( new UIMenuItem("Schließen", "Menü schließen"));
            ui_main.Visible = true;
  
            ui_main.ItemSelect.on((item, index, value) => {
          if (item.Text == 'Telefonnummer ändern') {
            mp.events.call("createInputShop", "phonenumber");
          } else if (item.Text == 'Schließen') {
            ui_main.Close();
          }
      });
  });