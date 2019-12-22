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
const ScreenRes = mp.game.graphics.getScreenResolution(0,0);
const MenuPoint = new Point(ScreenRes.x +150, 50);


var oldKleidung = [{
    name: "Hut/Mütze",    //ID 0
    drawable: 0,
    texture: 0
  },
  {
    name: "Brille",       //ID 1
    drawable: 0,
    texture: 0
  },
  {
    name: "Maske",        //ID 2
    drawable: 0,
    texture: 0
  },
  {
    name: "Jacke",        //ID 3
    drawable: 0,
    texture: 0
  },
  {
    name: "Shirt",        //ID 4
    drawable: 0,
    texture: 0
  },
  {
    name: "Hose",         //ID 5
    drawable: 0,
    texture: 0
  },
  {
    name: "Schuhe",       //ID 6
    drawable: 0,
    texture: 0
  },
  {
    name: "Torso",       //ID 7
    drawable: 0,
    texture: 0
  }];


mp.events.add("client:clothesShop:OpenMenu",(gender, shop, price) => {
    const ui_main = new Menu("Kleidungsladen", "Wähle das Körperteil", MenuPoint);
    ui_main.AddItem( new UIMenuItem("Oberkörper", ""));
    ui_main.AddItem( new UIMenuItem("T-Shirt", ""));
    ui_main.AddItem( new UIMenuItem("Torso", ""));
    ui_main.AddItem( new UIMenuItem("Hosen", ""));
    ui_main.AddItem( new UIMenuItem("Schuhe", ""));
    ui_main.AddItem( new UIMenuItem("Texturen", ""));
    // BUTTONS
    let buy = new UIMenuItem("kaufen", "");
    ui_main.AddItem(buy);
        buy.SetRightLabel("" +price);
    let reset = new UIMenuItem("Reset", "");
    ui_main.AddItem(reset);
    reset.BackColor = new Color(138, 0, 0);
      reset.HighlightedBackColor = new Color(189, 189, 189);
      buy.BackColor = new Color(0, 138, 0);
      buy.HighlightedBackColor = new Color(189, 189, 189);

    ui_main.ItemSelect.on((item, index, value) => {
        if (item.Text !== 'Schließen' && item.Text !== "kaufen" && item.Text !== "Reset") {
            mp.events.callRemote("server:clothesShop:openSubMenu", item.Text, gender, shop);
            ui_main.Close();    

        } else if (item.Text == "kaufen") {
          mp.events.callRemote("server:clothesShop:saveClothes");    
        } else if (item.Text == "Reset") {
            mp.events.callRemote("server:clothesShop:reset");    
        } else {
        ui_main.Close();
        }      
    });
});

mp.events.add("client:clothesShop:OpenHatEye",(gender, shop, price) => {
  const ui_hateye = new Menu("Kleidungsladen", "Wähle das Körperteil", MenuPoint);
  ui_hateye.AddItem( new UIMenuItem("Hüte", ""));
  ui_hateye.AddItem( new UIMenuItem("Brillen", ""));
  ui_hateye.AddItem( new UIMenuItem("Texturen", ""));
  // BUTTONS
  let buy = new UIMenuItem("kaufen", "");
  ui_hateye.AddItem(buy);
      buy.SetRightLabel("" +price);
  let reset = new UIMenuItem("Reset", "");
  ui_hateye.AddItem(reset);
  reset.BackColor = new Color(138, 0, 0);
    reset.HighlightedBackColor = new Color(189, 189, 189);
    buy.BackColor = new Color(0, 138, 0);
    buy.HighlightedBackColor = new Color(189, 189, 189);

    ui_hateye.ItemSelect.on((item, index, value) => {
      if (item.Text !== 'Schließen' && item.Text !== "kaufen" && item.Text !== "Reset") {
          mp.events.callRemote("server:clothesShop:openSubMenu", item.Text, gender, shop);
          ui_hateye.Close();    

      } else if (item.Text == "kaufen") {
        mp.events.callRemote("server:clothesShop:saveClothes");    
      } else if (item.Text == "Reset") {
          mp.events.callRemote("server:clothesShop:reset");    
      } else {
        ui_hateye.Close();
      }      
  });
});

mp.events.add("client:clothesShop:OpenMask",(gender, shop, price) => {
  const ui_mask = new Menu("Kleidungsladen", "Wähle das Körperteil", MenuPoint);
  ui_mask.AddItem( new UIMenuItem("Masken", ""));
  ui_mask.AddItem( new UIMenuItem("Texturen", ""));
  // BUTTONS
  let buy = new UIMenuItem("kaufen", "");
  ui_mask.AddItem(buy);
      buy.SetRightLabel("" +price);
  let reset = new UIMenuItem("Reset", "");
  ui_mask.AddItem(reset);
  reset.BackColor = new Color(138, 0, 0);
    reset.HighlightedBackColor = new Color(189, 189, 189);
    buy.BackColor = new Color(0, 138, 0);
    buy.HighlightedBackColor = new Color(189, 189, 189);

    ui_mask.ItemSelect.on((item, index, value) => {
      if (item.Text !== 'Schließen' && item.Text !== "kaufen" && item.Text !== "Reset") {
          mp.events.callRemote("server:clothesShop:openSubMenu", item.Text, gender, shop);
          ui_mask.Close();    

      } else if (item.Text == "kaufen") {
        mp.events.callRemote("server:clothesShop:saveClothes");    
      } else if (item.Text == "Reset") {
          mp.events.callRemote("server:clothesShop:reset");    
      } else {
        ui_mask.Close();
      }      
  });
});

mp.events.add("client:clothesShop:Openbuyed",(gender, shop, price) => {
  const ui_buyed = new Menu("Kleidungsladen", "Wähle das Körperteil", MenuPoint);
  ui_buyed.AddItem( new UIMenuItem("Oberkörper", ""));
  ui_buyed.AddItem( new UIMenuItem("T-Shirt", ""));
  ui_buyed.AddItem( new UIMenuItem("Torso", ""));
  ui_buyed.AddItem( new UIMenuItem("Hosen", ""));
  ui_buyed.AddItem( new UIMenuItem("Schuhe", ""));
  ui_main.AddItem( new UIMenuItem("Hüte", ""));
  ui_main.AddItem( new UIMenuItem("Brillen", ""));
  ui_main.AddItem( new UIMenuItem("Masken", ""));
  ui_buyed.AddItem( new UIMenuItem("Texturen", ""));
  // BUTTONS
  let buy = new UIMenuItem("Setzen", "");
  ui_buyed.AddItem(buy);
  let reset = new UIMenuItem("Reset", "");
  ui_buyed.AddItem(reset);
    reset.BackColor = new Color(138, 0, 0);
    reset.HighlightedBackColor = new Color(189, 189, 189);
    buy.BackColor = new Color(0, 138, 0);
    buy.HighlightedBackColor = new Color(189, 189, 189);

    ui_buyed.ItemSelect.on((item, index, value) => {
      if (item.Text !== 'Schließen' && item.Text !== "Setzen" && item.Text !== "Reset") {
          mp.events.callRemote("server:clothesShop:openbuyedSubMenu", item.Text, gender, shop);
          ui_buyed.Close();    

      } else if (item.Text == "Setzen") {
        mp.events.callRemote("server:clothesShop:savebuyedClothes");    
      } else if (item.Text == "Reset") {
          mp.events.callRemote("server:clothesShop:reset");    
      } else {
      ui_buyed.Close();
      }      
  });
});

mp.events.add("client:clothesShop:openSubMenu",(json, type) => {
  var parsed = JSON.parse(json);
  const ui_sub = new Menu("Kleidung auswählen", "Wähle die Kleidung", MenuPoint);
    parsed.forEach(function(cloth) {
        let newItem = new UIMenuItem(""+cloth.price, ""+cloth.id);
        ui_sub.AddItem(newItem);
        newItem.SetRightLabel("" +cloth.name);
    });

    ui_sub.ItemSelect.on((item, index, value) => {
      if (item.Text !== 'Schließen') {
         mp.events.callRemote("server:clothesShop:setClothes",item.Description, type)
      } else {
          ui_sub.Close();
      }         
    });
});

mp.events.add("client:clothesShop:openEyeMenu",(json, type) => {
  var parsed = JSON.parse(json);
  const ui_sub = new Menu("Kleidung auswählen", "Wähle die Kleidung", MenuPoint);
    parsed.forEach(function(cloth) {
        let newItem = new UIMenuItem(""+cloth.price, ""+cloth.id);
        ui_sub.AddItem(newItem);
        newItem.SetRightLabel("" +cloth.name);
    });

    ui_sub.ItemSelect.on((item, index, value) => {
      if (item.Text !== 'Schließen') {
         mp.events.callRemote("server:clothesShop:setProp",item.Description, "Brillen");
      } else {
          ui_sub.Close();
      }         
    });
});

mp.events.add("client:clothesShop:openHatMenu",(json, type) => {
  var parsed = JSON.parse(json);
  const ui_sub = new Menu("Kleidung auswählen", "Wähle die Kleidung", MenuPoint);
    parsed.forEach(function(cloth) {
        let newItem = new UIMenuItem(""+cloth.price, ""+cloth.id);
        ui_sub.AddItem(newItem);
        newItem.SetRightLabel("" +cloth.name);
    });

    ui_sub.ItemSelect.on((item, index, value) => {
      if (item.Text !== 'Schließen') {
         mp.events.callRemote("server:clothesShop:setProp",item.Description, "Hüte")
      } else {
          ui_sub.Close();
      }         
    });
});

mp.events.add("client:clothesShop:openbuyedSubMenu",(json, type) => {
  var parsed = JSON.parse(json);
  const ui_buyedsub = new Menu("Gekaufte Kleidung", "Wähle die Kleidung", MenuPoint);
    parsed.forEach(function(cloth) {
        let newItem = new UIMenuItem(""+cloth.name, ""+cloth.id);
        ui_buyedsub.AddItem(newItem);
    });
    
    ui_buyedsub.ItemSelect.on((item, index, value) => {
      if (item.Text !== 'Schließen') {
         mp.events.callRemote("server:clothesShop:setbuyedClothes",item.Description, type, item.Text)
      } else {
        ui_buyedsub.Close();
      }         
    });
});

mp.events.add("client:clothesShop:loadOutfits",(json, type) => {
  var outfit = JSON.parse(json);
  const ui_outfits = new Menu("Kleidung auswählen", "Wähle dein Outfit", MenuPoint);
  outfit.forEach(function(clot) {
        let newItem = new UIMenuItem(""+clot.name, ""+clot.id);
        ui_outfits.AddItem(newItem);
    });

    ui_outfits.ItemSelect.on((item, index, value) => {
      if (item.Text !== 'Schließen') {
         mp.events.callRemote("server:clothesShop:turnClothing",item.Description);
      } else {
        ui_outfits.Close();
      }         
    });
});

mp.events.add("client:clothesShop:errorMessage",() => {
  mp.game.graphics.notify('~r~Du hast kein Outfit gespeichert');
});

mp.events.add("client:clothesShop:deleteOutfits",(json, type) => {
  var outfit = JSON.parse(json);
  const ui_outfits = new Menu("Kleidung auswählen", "Lösche ein Outfit", MenuPoint);
  outfit.forEach(function(clot) {
        let newItem = new UIMenuItem(""+clot.name, ""+clot.id);
        ui_outfits.AddItem(newItem);
    });

    ui_outfits.ItemSelect.on((item, index, value) => {
      if (item.Text !== 'Schließen') {
         mp.events.callRemote("server:clothesShop:deleteClothing",item.Description);
         mp.game.graphics.notify('~g~Du hast das Outfit gelöscht');
         ui_outfits.Close();
      } else {
        ui_outfits.Close();
      }         
    });
});


mp.events.add("client:clothesShop:Clothes",() => {
  const ui_buy = new Menu("Kleidungsladen", "Wähle eine Aktion", MenuPoint);
  ui_buy.AddItem( new UIMenuItem("Kleidung Kaufen", ""));
  ui_buy.AddItem( new UIMenuItem("Bereits gekaufte Kleidung", ""));
  ui_buy.Visible = true;
  
  ui_buy.ItemSelect.on((item, index, value) => {
      if (item.Text == 'Kleidung Kaufen') {
      mp.events.call("client:clothesShop:OpenMenu");
          ui_buy.Close();
      }   else if (item.Text == 'Bereits gekaufte Kleidung') {
        mp.events.call("client:clothesShop:Openbuyed");
          ui_buy.Close();
    }
  });
});

mp.events.add("client:clothesShop:openOutfit",() => {
  const ui_outfit = new Menu("Kleiderschrank", "Speicher oder wähle dein Outfit", MenuPoint);
  ui_outfit.AddItem( new UIMenuItem("Outfit anziehen", ""));
  ui_outfit.AddItem( new UIMenuItem("Outfit Speichern", ""));
  ui_outfit.AddItem( new UIMenuItem("Outfit Löschen", ""));
  ui_outfit.Visible = true;
  
  ui_outfit.ItemSelect.on((item, index, value) => {
      if (item.Text == 'Outfit anziehen') {
      mp.events.callRemote("server:clothesShop:loadOutfits");
      ui_outfit.Close();
      } else if (item.Text == 'Outfit Speichern') {
        mp.events.call("createInput", "Saveoutfit");
        ui_outfit.Close();
      } else if (item.Text == 'Outfit Löschen') {
        mp.events.callRemote("server:clothesShop:loaddelOutfits");
        ui_outfit.Close();
      }
  });
});

mp.events.add("client:clothesShop:textures",(fromServer) => {
    oldKleidung = JSON.parse(fromServer);
    var price = 1;
    const ui_texture = new Menu("Kleidungsladen", "Kaufe deine Kleidung", MenuPoint);
    ui_texture.AddItem( new UIMenuListItem("Oberteile", "", Texture =new ItemsCollection(["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","16","17"])));
    ui_texture.AddItem( new UIMenuListItem("Tshirt", "", Texture =new ItemsCollection(["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","16","17"])));
    ui_texture.AddItem( new UIMenuListItem("Hosen", "", Texture =new ItemsCollection(["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","16","17"])));
    ui_texture.AddItem( new UIMenuListItem("Schuhe", "", Texture =new ItemsCollection(["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","16","17"])));
    ui_texture.AddItem( new UIMenuItem("Schließen", ""));
    ui_texture.Visible = true;
    
    ui_texture.ItemSelect.on((item, index, value) => {
        if (item.Text !== 'Schließen') {
        mp.events.call("client:clothesShop:buyClothes", price);
        ui_texture.Close();
        } else {
            ui_texture.Close();
        }
    });
    ui_texture.ListChange.on(item => {
        if(item.Text == "Oberteile") {
            var clothes = oldKleidung.clothes[11];
            mp.events.callRemote("server:clothesShop:setTexture", clothes.drawable, item.SelectedItem.DisplayText, item.Text);
        } else if(item.Text == "Tshirt") {
            var clothes = oldKleidung.clothes[8];
            mp.events.callRemote("server:clothesShop:setTexture", clothes.drawable, item.SelectedItem.DisplayText, item.Text);
        } else if(item.Text == "Hosen") {
            var clothes = oldKleidung.clothes[4];
            mp.events.callRemote("server:clothesShop:setTexture", clothes.drawable, item.SelectedItem.DisplayText, item.Text);
        } else if(item.Text == "Schuhe") {
            var clothes = oldKleidung.clothes[6];
            mp.events.callRemote("server:clothesShop:setTexture", clothes.drawable, item.SelectedItem.DisplayText, item.Text);
        }
      });
});
