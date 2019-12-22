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




mp.events.add("client:housing:openMenu", (house) => {
  const ui_main = new Menu("Housing", "Kaufe dein Haus", MenuPoint);
    var houseParsed = JSON.parse(house);
    houseParsed.forEach(function(house) {
        ui_main.AddItem( new UIMenuItem("Bewohner", ""+house.id));
        let houseItem = new UIMenuItem("Haus: ", "");
        ui_main.AddItem(houseItem);
        houseItem.SetRightLabel("" +house.name);
        let garageItem = new UIMenuItem("Garagenplätze: ", "");
        ui_main.AddItem(garageItem);
        garageItem.SetRightLabel("" +house.garage);
        let priceItem = new UIMenuItem("Preis: ", "");
        ui_main.AddItem(priceItem);
        priceItem.SetRightLabel("" +house.price+"$");
        ui_main.AddItem( new UIMenuItem("Kaufen", ""+house.id));
    });
    ui_main.AddItem( new UIMenuItem("Schließen", ""));
          ui_main.Visible = true;
          ui_main.ItemSelect.on((item, index, value) => {
      if (item.Text == "Kaufen") {
        mp.events.callRemote("server:housing:buyhouse", item.Description);
        ui_main.Close();
      } else if (item.Text == "Schließen") {
        ui_main.Close();
      } else if (item.Text == "Bewohner") {
        mp.events.callRemote("server:housing:houseOwners", item.Description);
        ui_main.Close();
      }
    });
    ui_main.MenuClose.on(() => {
      ui_main.RefreshIndex();
    });
});

mp.events.add("client:housing:openownerMenu", (house) => {
    const ui_main = new Menu("Housing", "Kaufe dein Haus", MenuPoint);
      var houseParsed = JSON.parse(house);
      houseParsed.forEach(function(house) {
          let houseItem = new UIMenuItem("Bewohner: ", ""+house.id);
          ui_main.AddItem(houseItem);
          houseItem.SetRightLabel("" +house.name);
      });
      ui_main.AddItem( new UIMenuItem("Schließen", ""));
            ui_main.Visible = true;
            ui_main.ItemSelect.on((item, index, value) => {
        if (item.Text !== "Schließen") {
          mp.events.callRemote("server:housing:houseMenu", item.Description);
          ui_main.Close();
        } else if (item.Text == "Schließen") {
          ui_main.Close();
        }
      });
      ui_main.MenuClose.on(() => {
        ui_main.RefreshIndex();
      });
  });

  mp.events.add("client:housing:openverwMenu", (house, charid, id) => {
    const ui_list = new Menu("Housing", "Verwalte dein Haus", MenuPoint);
      var houseParsed = JSON.parse(house);
      houseParsed.forEach(function(house) {
        if(house.housecharid == charid || house.locked == "1") {
            ui_list.AddItem( new UIMenuItem("Haus betreten", ""+id));
        }
        if (house.housecharid == charid && house.locked == "0"){
        ui_list.AddItem( new UIMenuItem("Haus aufschließen", ""+id));
        }
        if (house.housecharid == charid && house.locked == "1") {
            ui_list.AddItem( new UIMenuItem("Haus abschließen", ""+id));
        }   
        if (house.housecharid == charid) {
            ui_list.AddItem( new UIMenuItem("PIN ändern", ""+id));
        }  
    ui_list.AddItem( new UIMenuItem("Haus Betreten Pin", ""+id));    
      ui_list.AddItem( new UIMenuItem("Klingeln", ""+id));
    });
      ui_list.AddItem( new UIMenuItem("Schließen", ""));
      ui_list.Visible = true;
      ui_list.ItemSelect.on((item, index, value) => {
        if (item.Text == "Haus betreten") {
          mp.events.callRemote("server:housing:enterhouse", item.Description, charid);
          ui_list.Close();
        } else if (item.Text == "Schließen") {
            ui_list.Close();
        } else if (item.Text == "Bewohner") {
          mp.events.callRemote("server:housing:houseOwners", item.Description);
          ui_list.Close();
        } else if(item.Text == "Haus aufschließen") {
            mp.events.callRemote("server:housing:unlock", item.Description);
            ui_list.Close();
        } else if(item.Text == "Haus abschließen") {
            mp.events.callRemote("server:housing:lock", item.Description);
            ui_list.Close();
        } else if (item.Text == 'PIN ändern') {
            mp.events.call("createInputHouse", "housingPin",item.Description);
            ui_list.Close();
        } else if (item.Text == "Klingeln") {
            mp.events.callRemote("server:housing:klingeln", item.Description);
            ui_list.Close();
        } else if (item.Text == "Haus Betreten Pin") {
            mp.events.call("createInputHouse", "housingPinenter",item.Description);
            ui_list.Close();
        }
      });
      ui_list.MenuClose.on(() => {
        ui_list.RefreshIndex();
      });
  });

  mp.events.add("client:housing:openverwinnenMenu", (house,charid) => {
    const ui_innen = new Menu("Housing", "Verwalte dein Haus", MenuPoint);
      var houseParsed = JSON.parse(house);
      houseParsed.forEach(function(house) {
        if (house.housecharid == charid && house.locked == "0"){
            ui_innen.AddItem( new UIMenuItem("Haus aufschließen", ""+house.id));
        }
        if (house.housecharid == charid && house.locked == "1") {
            ui_innen.AddItem( new UIMenuItem("Haus abschließen", ""+house.id));
        }        
        ui_innen.AddItem( new UIMenuItem("Raus gehen", ""+house.id));
    });
    ui_innen.AddItem( new UIMenuItem("Schließen", ""));
    ui_innen.Visible = true;
    ui_innen.ItemSelect.on((item, index, value) => {
        if (item.Text == "Raus gehen") {
          mp.events.callRemote("server:housing:exithouse", item.Description);
          ui_innen.Close();
        } else if (item.Text == "Schließen") {
            ui_innen.Close();
        } else if(item.Text == "Haus aufschließen") {
            mp.events.callRemote("server:housing:unlock", item.Description);
            ui_innen.Close();
        } else if(item.Text == "Haus abschließen") {
            mp.events.callRemote("server:housing:lock", item.Description);
            ui_innen.Close();
        }
      });
      ui_innen.MenuClose.on(() => {
        ui_innen.RefreshIndex();
      });
  });


  mp.events.add("client:housing:openKlingel", (id,internalId) => {
    const ui_klingel = new Menu("Ding Dong", "Es hat jemand geklingelt", MenuPoint);
        ui_klingel.AddItem( new UIMenuItem("Reinlassen", ""+id));
        ui_klingel.AddItem( new UIMenuItem("Nö!", ""+id));
        ui_klingel.Visible = true;
        ui_klingel.ItemSelect.on((item, index, value) => {
        if (item.Text == "Reinlassen") {
          mp.events.callRemote("server:housing:klingelenter", item.Description,internalId);
          ui_klingel.Close();
        } else if (item.Text == "Schließen") {
            ui_klingel.Close();
        } else if (item.Text == "Nö!") {
          ui_klingel.Close();
        }
      });
      ui_klingel.MenuClose.on(() => {
        ui_klingel.RefreshIndex();
      });
  });

  mp.markers.new(1, new mp.Vector3(-658.778, 887.164, 228.24), 1,
  {
      direction: new mp.Vector3(-658.778, 887.164, 228.24),
      rotation: new mp.Vector3(0, 0, 0),
      color: [255, 255, 255, 100],
      visible: true,
      dimension: 0
  });

  mp.markers.new(1, new mp.Vector3(-47.588, -585.3088, 36.95), 1,
  {
      direction: new mp.Vector3(-47.588, -585.3088, 36.95),
      rotation: new mp.Vector3(0, 0, 0),
      color: [255, 255, 255, 100],
      visible: true,
      dimension: 0
  });
  mp.markers.new(1, new mp.Vector3(243.46, -1073.9377, 28.285), 1,
  {
      direction: new mp.Vector3(243.46, -1073.9377, 28.285),
      rotation: new mp.Vector3(0, 0, 0),
      color: [255, 255, 255, 100],
      visible: true,
      dimension: 0
  });

  mp.markers.new(1, new mp.Vector3(-822.385, -1223.430, 6.365), 1,
  {
      direction: new mp.Vector3(-822.385, -1223.430, 6.365),
      rotation: new mp.Vector3(0, 0, 0),
      color: [255, 255, 255, 100],
      visible: true,
      dimension: 0
  });
  
  mp.markers.new(1, new mp.Vector3(-1274.315, 315.404, 64.511), 1,
  {
      direction: new mp.Vector3(-1274.315, 315.404, 64.511),
      rotation: new mp.Vector3(0, 0, 0),
      color: [255, 255, 255, 100],
      visible: true,
      dimension: 0
  });

  mp.markers.new(1, new mp.Vector3(2476.543, 4087.47, 37.11), 1,
  {
      direction: new mp.Vector3(2476.543, 4087.47, 37.11),
      rotation: new mp.Vector3(0, 0, 0),
      color: [255, 255, 255, 100],
      visible: true,
      dimension: 0
  });

  mp.markers.new(1, new mp.Vector3(-109.075, 6337, 30.57), 1,
  {
      direction: new mp.Vector3(-109.075, 6337, 30.57),
      rotation: new mp.Vector3(0, 0, 0),
      color: [255, 255, 255, 100],
      visible: true,
      dimension: 0
  });
  mp.markers.new(1, new mp.Vector3(287.997, -919.811, 28.27), 1,
  {
      direction: new mp.Vector3(287.997, -918.811, 22.57),
      rotation: new mp.Vector3(0, 0, 0),
      color: [255, 255, 255, 100],
      visible: true,
      dimension: 0
  });