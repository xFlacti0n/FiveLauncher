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

mp.events.add("client:bankrob:door1",() => {
  const ui_main_door1 = new Menu("Staatsbank", "", MenuPoint);
  ui_main_door1.Visible = false;
  ui_main_door1.AddItem( new UIMenuItem("Türe knacken", "Löst einen Alarm aus"));
  ui_main_door1.AddItem( new UIMenuItem("Schließen", "Doch nicht tanken"));
  ui_main_door1.Visible = true;

  ui_main_door1.ItemSelect.on((item, index, value) => {
    if (item.Text == 'Türe knacken') {
      mp.events.callRemote("server:bankrob:door1");
      ui_main_door1.Close();
    } else if (item.Text == 'Schließen') {
        ui_main_door1.Close();
    }
  });
});

mp.events.add("client:bankrob:door2",() => {
    const ui_main_door2 = new Menu("Staatsbank", "", MenuPoint);
    ui_main_door2.Visible = false;
    ui_main_door2.AddItem( new UIMenuItem("Türe knacken", "Löst einen Alarm aus"));
    ui_main_door2.AddItem( new UIMenuItem("Schließen", "Doch nicht tanken"));
    ui_main_door2.Visible = true;
  
    ui_main_door2.ItemSelect.on((item, index, value) => {
      if (item.Text == 'Türe knacken') {
        mp.events.callRemote("server:bankrob:door2");
        ui_main_door2.Close();
      } else if (item.Text == 'Schließen') {
        ui_main_door2.Close();
      }
    });
  });

  mp.markers.new(1, new mp.Vector3(257.297, 219.957, 105.286), 1,
  {
      direction: new mp.Vector3(257.297, 219.957, 105.286),
      rotation: new mp.Vector3(0, 0, 0),
      color: [255, 255, 255, 100],
      visible: true,
      dimension: 0
  });
  mp.markers.new(1, new mp.Vector3(261.708, 223.078,105.283), 1,
  {
      direction: new mp.Vector3(261.708, 223.078,105.283),
      rotation: new mp.Vector3(0, 0, 0),
      color: [255, 255, 255, 100],
      visible: true,
      dimension: 0
  });
  mp.markers.new(1, new mp.Vector3(258.269, 218.064, 100.683), 1,
  {
      direction: new mp.Vector3(258.269, 218.064, 100.683),
      rotation: new mp.Vector3(0, 0, 0),
      color: [255, 255, 255, 100],
      visible: true,
      dimension: 0
  });
  mp.markers.new(1, new mp.Vector3(259.61, 217.870, 100.68), 1,
  {
      direction: new mp.Vector3(259.61, 217.870, 100.68),
      rotation: new mp.Vector3(0, 0, 0),
      color: [255, 255, 255, 100],
      visible: true,
      dimension: 0
  });
  
  mp.markers.new(1, new mp.Vector3(261.082, 217.268, 100.68), 1,
  {
      direction: new mp.Vector3(261.082, 217.268, 100.68),
      rotation: new mp.Vector3(0, 0, 0),
      color: [255, 255, 255, 100],
      visible: true,
      dimension: 0
  });
  mp.markers.new(1, new mp.Vector3(259.851, 213.757, 100.683), 1,
  {
      direction: new mp.Vector3(259.851, 213.757, 100.683),
      rotation: new mp.Vector3(0, 0, 0),
      color: [255, 255, 255, 100],
      visible: true,
      dimension: 0
  });
  mp.markers.new(1, new mp.Vector3(258.352, 214.640, 100.683), 1,
  {
      direction: new mp.Vector3(258.352, 214.640, 100.683),
      rotation: new mp.Vector3(0, 0, 0),
      color: [255, 255, 255, 100],
      visible: true,
      dimension: 0
  });
  mp.markers.new(1, new mp.Vector3(266.898, 214.858, 100.683), 1,
  {
      direction: new mp.Vector3(266.898, 214.858, 100.683),
      rotation: new mp.Vector3(0, 0, 0),
      color: [255, 255, 255, 100],
      visible: true,
      dimension: 0
  });
