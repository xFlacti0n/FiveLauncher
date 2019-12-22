const CEFHandy = mp.browsers.new("package://Handy/index.html");

let handyOpen = false;

mp.keys.bind(33, true, function() {
    if(handyOpen == false) {
        CEFHandy.execute("openHandy()");
        handyOpen = true;
        mp.gui.cursor.show(true, true);
        mp.gui.chat.activate(false);
    }
});

mp.keys.bind(34, true, function() {
    if(handyOpen == true) {
        CEFHandy.execute("closeHandy()");
        handyOpen = false;
        mp.gui.cursor.show(false, false);
        mp.gui.chat.activate(true);
    }
});

mp.events.add("client:Handy:sendDispatch", (value) => {
    var playerposx = player.position.x;
    var playerposy = player.position.y;
    var playerposz = player.position.z;
    mp.game.graphics.notify('Du hast einen Dispatch gesendet an: ' + value);
    mp.events.callRemote("server:Global:showDispatch", value, playerposx, playerposy, playerposz);
  });

  mp.events.add("client:Handy:addContact",(name, number) => {
    mp.events.callRemote("server:phone:addContact", name, number);
});

mp.events.add("client:Handy:sendSMS", (myNumber,number,message,date) => {
    mp.events.callRemote("server:phone:sendSMS", myNumber,number,message,date);
  });

  mp.events.add("client:phone:getContacts", () => {
    mp.events.callRemote("server:phone:getContacts");
  });

mp.events.add("client:Handy:showContacts", (names) => {
    setTimeout(function() {
    var innerHTMLString = "";
    if(names != undefined) {
      names.forEach(function(contactName) {
        CEFHandy.execute(".loadContacts('" + contactName + phoneNumber +"')");
      });
    }
  }, 500);
});
