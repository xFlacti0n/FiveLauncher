let DojLabel = null;

mp.events.add("ExecutiveRich", (x,y,z,IPLName) => {
  var interior = mp.game.interior.getInteriorAtCoords(-141.1987, -620.913, 168.8205); //pkt wo der spieler im interior spawnt
  mp.game.streaming.requestIpl("Executive Rich"); // interior name(IPL)
  //mp.game.interior.refreshInterior(interior); // Lädt das Interior neu
});

mp.events.add("client:doj:enterDojOffice",() => {
  var interior = mp.game.interior.getInteriorAtCoords(-117.6321, -605.8104, 36.2807);
  mp.game.streaming.requestIpl("ex_dt1_02_office_02b");
  mp.game.interior.refreshInterior(interior﻿);

  if (DojLabel == null) {
    DojLabel = mp.labels.new("Department of Justice", new mp.Vector3(-138.8352, -635.3146, 169.5),
    {
        los: true,
        font: 1,
        drawDistance: 30,
    });
  }
});

mp.events.add("client:doj:exitDojOffice",() => {
  var interior = mp.game.interior.getInteriorAtCoords(-117.6321, -605.8104, 36.2807);
  mp.game.streaming.removeIpl("ex_dt1_02_office_02b");
  mp.game.interior.refreshInterior(interior﻿);

  if (DojLabel !== null) {
    DojLabel = null;
  }
});
