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
mp.players.local.setMinGroundTimeForStungun(15000);
let document = null;
let player = mp.players.local;

mp.events.add("client:Players:syncOnDeath", (deadPlayer) => {
    mp.players.forEachInStreamRange(
      (player, id) => {
        deadPlayer.taskPlayAnim("misssolomon_5@end", "dead_black_ops", 8.0, 1, -1, 33, 1.0, true, true, true);
      }
    );
});

mp.events.add('entityStreamIn', (entity) => {
  if (entity.getType() == 4 || entity.getType() == 5) {
    mp.events.callRemote("server:Players:syncDeathAnim", entity);
    mp.events.callRemote("server:ClothesMenu:syncClothes", entity);
  }
});

mp.events.add("client:Players:syncDeathAnim", () => {
    mp.events.callRemote("playAnimationEvent", 'misssolomon_5@end', 'dead_black_ops', 1, 33, -1);
});

mp.events.add("client:Documents:Perso", (playerName, dateOfBirth) => {
  if (document == null) {
    document = mp.browsers.new('package://Dokumente/index.html');
    document.execute("setName('"+playerName+"')");
    document.execute("setDateOfBirth('"+dateOfBirth+"')");

    setTimeout(function() {
      document.destroy();
      document = null;
    }, 10000);
  }
});
mp.events.add("client:Documents:DriverLicense", (playerName, dateOfBirth) => {
  if (document == null) {
    document = mp.browsers.new('package://Dokumente/driverlicense.html');
    document.execute("setName('"+playerName+"')");
    document.execute("setDateOfBirth('"+dateOfBirth+"')");

    setTimeout(function() {
      document.destroy();
      document = null;
    }, 10000);
  }
});

/* Notification */
/* CLIENTSIDE */
/* Notification */

/*function checkMinimap(){
	if (player.vehicle) {
    //alles gut
    mp.game.ui.displayRadar(true);
  } else {
    mp.game.ui.displayRadar(false);
  }
}
setInterval(checkMinimap, 1000);*/


  function dutyMenu(fracJSON){
    ui_List = new Menu("Dienstverwaltung", "", MenuPoint);
    ui_List.Visible = true;
    ui_List.AddItem( new UIMenuItem("Arbeitsverhältniss", ""));
    if (fracJSON != "none") {
      fractionList = JSON.parse(fracJSON);
      fractionList.forEach(fraction => {
        //!!LSPD!!
        if (fraction.fractionname == "LSPD" && fraction.duty == "N") {
          let newItem = new UIMenuItem("Den LSPD Dienst antreten", "");
          ui_List.AddItem(newItem);
        } else if (fraction.fractionname == "LSPD" && fraction.duty == "Y") {
          let lspdoffduty = new UIMenuItem("Den LSPD Dienst beenden", "");
          ui_List.AddItem(lspdoffduty);
          let lspdleitstelle = new UIMenuItem("LSPD Leitstelle", "");
          ui_List.AddItem(lspdleitstelle);
        //!!LSMC!!
        } else if (fraction.fractionname == "LSMC" && fraction.duty == "N") {
          let lsmcduty = new UIMenuItem("Den LSMC Dienst antreten", "");
          ui_List.AddItem(lsmcduty);
        } else if (fraction.fractionname == "LSMC" && fraction.duty == "Y") {
          let lsmcoffduty = new UIMenuItem("Den LSMC Dienst beenden", "");
          ui_List.AddItem(lsmcoffduty);
          let lsmcleitstelle = new UIMenuItem("LSMC Leitstelle", "");
          ui_List.AddItem(lsmcleitstelle);
        //!!ACLS!!
        } else if (fraction.fractionname == "ACLS" && fraction.duty == "N") {
          let aclsduty = new UIMenuItem("Den ACLS Dienst antreten", "");
          ui_List.AddItem(aclsduty);
        } else if (fraction.fractionname == "ACLS" && fraction.duty == "Y") {
          let aclsoffduty = new UIMenuItem("Den ACLS Dienst beenden", "");
          ui_List.AddItem(aclsoffduty);
          let aclsleitstelle = new UIMenuItem("ACLS Leitstelle", "");
          ui_List.AddItem(aclsleitstelle);
        //!!DOJ!!
        } else if (fraction.fractionname == "DOJ" && fraction.duty == "N") {
          let dojduty = new UIMenuItem("Den DOJ Dienst antreten", "");
          ui_List.AddItem(dojduty);
        } else if (fraction.fractionname == "DOJ" && fraction.duty == "Y") {
          let dojoffduty = new UIMenuItem("Den DOJ Dienst beenden", "");
          ui_List.AddItem(dojoffduty);
          let dojleitstelle = new UIMenuItem("DOJ Leitstelle", "");
          ui_List.AddItem(dojleitstelle);
        //NOOSE
        } else if (fraction.fractionname == "NOOSE" && fraction.duty == "N") {
          let nooseduty = new UIMenuItem("Den NOOSE Dienst antreten", "");
          ui_List.AddItem(nooseduty);
        } else if (fraction.fractionname == "NOOSE" && fraction.duty == "Y") {
          let nooseoffduty = new UIMenuItem("Den NOOSE Dienst beenden", "");
          ui_List.AddItem(nooseoffduty);
          let nooseleitstelle = new UIMenuItem("NOOSE Leitstelle", "");
          ui_List.AddItem(nooseleitstelle);
        }        
      });      
    } else {
      ui_List.AddItem( new UIMenuItem("Du bist in keiner Fraktion", ""));
    }
  ui_List.ItemSelect.on((item, index) => {
    //LSPD
    if (item.Text == "Den LSPD Dienst antreten"){
        mp.events.callRemote("server:police:onduty");
        ui_List.Close();
    } else if (item.Text == "Den LSPD Dienst beenden"){
        mp.events.callRemote("server:police:offDuty");
        mp.events.call("client:TS-VoiceChat:removeFromRadio");
      ui_List.Close();
    } else if (item.Text == "LSPD Leitstelle"){
        let policeLeitstelle = 911;
        mp.events.callRemote("server:phone:getLeitstelle", policeLeitstelle);
        ui_List.Close();
    //ACLS
    } else if (item.Text == "Den ACLS Dienst beenden"){
      ui_List.Close();
    } else if (item.Text == "ACLS Leitstelle"){
        ui_List.Close();
    } else if (item.Text == "Den ACLS Dienst antreten"){
      ui_List.Close();
    //DOJ
    } else if (item.Text == "Den DOJ Dienst beenden"){
      ui_List.Close();
    } else if (item.Text == "DOJ Leitstelle"){
        ui_List.Close();
    } else if (item.Text == "Den DOJ Dienst antreten"){
      ui_List.Close();
    //Noose
    } else if (item.Text == "Den NOOSE Dienst beenden"){
      ui_List.Close();
    } else if (item.Text == "NOOSE Leitstelle"){
        ui_List.Close();
    } else if (item.Text == "Den NOOSE Dienst antreten"){
      ui_List.Close();
    } else if (item.Text == "Den LSMC Dienst beenden"){
      ui_List.Close();
    } else if (item.Text == "LSMC Leitstelle"){
        ui_List.Close();
    } else if (item.Text == "Den LSMC Dienst antreten"){
      ui_List.Close();
    } else if (item.Text == "Arbeitsverhältniss"){
      mp.events.callRemote("server:arbeitsver:openMenu");
      ui_List.Close();
    }
  });
}
mp.events.add("client:duty:openMenu", dutyMenu);

function arbeitsver(fracJSON){
  ui_arbeit = new Menu("Arbeitsverhältniss", "", MenuPoint);
  ui_arbeit.Visible = true;
  if (fracJSON != "none"){
    fractionList = JSON.parse(fracJSON);
    fractionList.forEach(fraction => {
      let fraktion = new UIMenuItem("Fraktion:", "");
      ui_arbeit.AddItem(fraktion);
      fraktion.SetRightLabel("" + [String(fraction.fractionname)]);
      let rang = new UIMenuItem("Rang:", "");
      ui_arbeit.AddItem(rang);
      rang.SetRightLabel("" + [String(fraction.rang)]);      
      let gehalt = new UIMenuItem("Gehalt:", "");
      ui_arbeit.AddItem(gehalt);
      gehalt.SetRightLabel("" + [String(fraction.gehalt)+"$"]);  
      ui_arbeit.AddItem( new UIMenuItem("Arbeitsverhältniss Kündigen", ""));
    });    
  } else{
    ui_arbeit.AddItem( new UIMenuItem("Du besitzt kein Arbeitsverhältniss", ""));
  }

// Auswertung Menuauswahl ausparken
ui_arbeit.ItemSelect.on((item, index) => {
  if (item.Text == "Arbeitsverhältniss Kündigen"){
    ui_arbeit.Visible = true;
    ui_arbeit.Close();
  }
});
}
mp.events.add("client:arbeitsver:openMenu", arbeitsver);
