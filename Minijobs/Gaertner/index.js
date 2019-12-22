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
const routeOne = [
  {step: 1, coords: new mp.Vector3(-1334.889, 122.314, 56.751)},
  {step: 2, coords: new mp.Vector3(-1369.3096, 148.7156, 56.6052)},
  {step: 3, coords: new mp.Vector3(-1401.8455, 108.8564, 53.7475)},
  {step: 4, coords: new mp.Vector3(-1394.7448, 148.1583, 56.2672)},
  {step: 5, coords: new mp.Vector3(-1353.066, 169.0654, 58.0133)},
  {step: 6, coords: new mp.Vector3(-1293.228, 177.6004, 59.4605)},
  {step: 7, coords: new mp.Vector3(-1233.964, 178.4593, 62.9196)},
  {step: 8, coords: new mp.Vector3(-1170.996, 191.24515, 64.925)},
  {step: 9, coords: new mp.Vector3(-1228.8089, 178.4341, 63.1607)},
  {step: 10, coords: new mp.Vector3(-1304.3525, 184.5518, 59.23693)},
  {step: 11, coords: new mp.Vector3(-1376.245, 171.3981, 58.1934)},
  {step: 12, coords: new mp.Vector3(-1323.504, 132.8414, 57.43131)},
  {step: 13, coords: new mp.Vector3(-1255.512, 98.5326, 56.155)},
  {step: 14, coords: new mp.Vector3(-1310.7506, 116.3965, 56.8635)}
];
const routeTwo = [
  {step: 1, coords: new mp.Vector3(-1337.648, 114.066, 56.355)},
  {step: 2, coords: new mp.Vector3(-1337.15 , 158.14, 57.89)},
  {step: 3, coords: new mp.Vector3(-1294.53, 183.604, 59.587)},
  {step: 4, coords: new mp.Vector3(-1240.27, 178.47, 62.472)},
  {step: 5, coords: new mp.Vector3(-1208.01, 188.95, 64.93)},
  {step: 6, coords: new mp.Vector3(-1153.111, 198.62, 65.23)},
  {step: 7, coords: new mp.Vector3(-1137.68, 170.33, 63.07)},
  {step: 8, coords: new mp.Vector3(-1170.22, 128.48, 61.189)},
  {step: 9, coords: new mp.Vector3(-1217.33, 117.48, 58.18)},
  {step: 10, coords: new mp.Vector3(-1266.86, 151.08, 58.71)},
  {step: 11, coords: new mp.Vector3(-1325.08, 167.56, 57.805)},
  {step: 12, coords: new mp.Vector3(-1379.315, 161.21, 57.66)},
  {step: 13, coords: new mp.Vector3(-1390.94, 115.27, 55.015)}
];
const routeThree = [
  {step: 1, coords: new mp.Vector3(-1318.274, 8.7668, 52.191)},
  {step: 2, coords: new mp.Vector3(-1254.226, -39.868, 46.1663)},
  {step: 3, coords: new mp.Vector3(-1187.943, -75.1234, 44.8743)},
  {step: 4, coords: new mp.Vector3(-1118.099, -94.026, 42.0691)},
  {step: 5, coords: new mp.Vector3(-1052.5695, -114.2131, 42.10684)},
  {step: 6, coords: new mp.Vector3(-1009.8082, -114.4068, 41.4778)},
  {step: 7, coords: new mp.Vector3(-1069.026, -111.735, 41.5656)},
  {step: 8, coords: new mp.Vector3(-1032.045, -80.4835, 44.0831)},
  {step: 9, coords: new mp.Vector3(-1078.9475, -47.8834, 47.2814)},
  {step: 10, coords: new mp.Vector3(-1167.2987, -19.7199, 46.1369)},
  {step: 11, coords: new mp.Vector3(-1225.6938, 11.5039, 47.6899)}
];
const routeFour = [
  {step: 1, coords: new mp.Vector3(-1216.1340, -69.9859, 44.475)},
  {step: 2, coords: new mp.Vector3(-1186.966, 120.6536, 60.7416)},
  {step: 3, coords: new mp.Vector3(-1135.581, 155.488, 63.1789)},
  {step: 4, coords: new mp.Vector3(-1112.3962, 186.9919, 63.5498)},
  {step: 5, coords: new mp.Vector3(-1075.63, 137.835, 58.83213)},
  {step: 6, coords: new mp.Vector3(-1036.53, 78.1476, 52.227)},
  {step: 7, coords: new mp.Vector3(-1005.381, 10.6086, 49.313)},
  {step: 8, coords: new mp.Vector3(-961.316, -49.283, 42.2663)},
  {step: 9, coords: new mp.Vector3(-946.866, -96.1949, 40.1741)},
  {step: 10, coords: new mp.Vector3(-992.7404, -55.7819, 42.104)},
  {step: 11, coords: new mp.Vector3(-1032.76, -26.167, 46.632)},
  {step: 12, coords: new mp.Vector3(-1031.3861, 16.4823, 50.5961)},
  {step: 13, coords: new mp.Vector3(-1028.3402, 72.0598, 52.033)},
  {step: 14, coords: new mp.Vector3(-1057.947, 120.544, 55.9802)},
  {step: 15, coords: new mp.Vector3(-1080.513, 159.902, 60.6065)},
  {step: 16, coords: new mp.Vector3(-1207.578, 99.315, 57.858)}
];
const routeFive = [
  {step: 1, coords: new mp.Vector3(-1338.7, 111.8, 56.3)},
  {step: 2, coords: new mp.Vector3(-1341.5, 144, 56.7)},
  {step: 3, coords: new mp.Vector3(-1354.5, 150, 56.4)},
  {step: 4, coords: new mp.Vector3(-1356.2, 175.5, 58.1)},
  {step: 5, coords: new mp.Vector3(-1317.5, 189.2, 59)},
  {step: 6, coords: new mp.Vector3(-1291.7, 190, 59.9)},
  {step: 7, coords: new mp.Vector3(-1233.8, 203, 64.6)},
  {step: 8, coords: new mp.Vector3(-1212.1, 193.5, 65.1)},
  {step: 9, coords: new mp.Vector3(-1186.3, 204.7, 66.4)},
  {step: 10, coords: new mp.Vector3(-1156.2, 223.5, 67.2)},
  {step: 11, coords: new mp.Vector3(-1115.3, 233.8, 65.6)},
  {step: 12, coords: new mp.Vector3(-1100.6, 195.6, 63.2)},
  {step: 13, coords: new mp.Vector3(-1086.3, 162.3, 61)},
  {step: 14, coords: new mp.Vector3(-1060.6, 116.9, 55.7)},
  {step: 15, coords: new mp.Vector3(-1021.3, 46.2, 50.9)},
  {step: 16, coords: new mp.Vector3(-997, 8.5, 49)},
  {step: 17, coords: new mp.Vector3(-956.9, 52.5, 41.7)},
  {step: 18, coords: new mp.Vector3(-940.6, 92.5, 39.8)},
  {step: 19, coords: new mp.Vector3(-986.7, -115.7, 40.1)},
  {step: 20, coords: new mp.Vector3(-1016.8, -73.3, 43.5)},
  {step: 21, coords: new mp.Vector3(-1069.5, -31, 50)}
];
let currentBlip = null;
let currentMarker = null;
let gaertnerPed = mp.peds.new(mp.game.joaat('a_f_y_business_04'), new mp.Vector3(-1341.6960, 58.8220, 55.2456), 273.2815, (streamGaertner) =>{}, 0);

const ScreenRes = mp.game.graphics.getScreenResolution(0,0);
const MenuPoint = new Point(ScreenRes.x +150, 50);

function drawMenu(){
  // Hauptmenu anzeigen
  const ui_main = new Menu("Gärtner", "Mähe den Golfrasen.", MenuPoint);
  ui_main.Visible = true;
  if (mp.players.local.getVariable("isGardenerMinijob") == "true") {
    ui_main.AddItem( new UIMenuItem("Job beenden", "Die Strecke beenden"));
  } else {
    ui_main.AddItem( new UIMenuItem("Job beginnen", "Fahrzeug wählen und ausparken"));
  }
  ui_main.AddItem( new UIMenuItem("Schließen", "Menü schließen"));

  // Auswertung Menuauswahl Main Menu
  ui_main.ItemSelect.on((item, index) => {
    if (item.Text == "Job beginnen"){
      mp.events.callRemote("server:MiniJobGaertner:startJob");
      ui_main.Close();
    } else if (item.Text == "Job beenden"){
      if (mp.players.local.getVariable("gardenerMiniJobWaypoint") == "0") {
        mp.events.callRemote("server:MiniJobGaertner:endJob");
      } else {
        mp.game.graphics.notify("Du hast noch nicht deine Runde gedreht!");
      }
      ui_main.Close();
    } else if (item.Text == "Schließen"){
      ui_main.Close();
    }
  });
}
mp.events.add("client:MiniJobGaertner:speakToPed", drawMenu);

function destroyBlip() {
  if (currentBlip && currentBlip !== null && currentBlip.doesExist()) {
    currentBlip.destroy();
    currentBlip = null;
  }
}
function destroyMarker() {
  if (currentMarker && currentMarker !== null) {
    currentMarker.destroy();
    currentMarker = null;
  }
}
mp.events.add("client:MiniJobGaertner:destroyBlip",destroyBlip);
mp.events.add("client:MiniJobGaertner:destroyMarker",destroyMarker);

function startJob(route,waypoint) {
  if (currentBlip && currentBlip !== null && currentBlip.doesExist()) {
    currentBlip.destroy();
  }
  if (currentMarker && currentMarker !== null) {
    currentMarker.destroy();
  }

  route = parseInt(route);
  waypoint = parseInt(waypoint);
  waypoint = waypoint - 1;
  if (route == 1) {
    newWaypoint = routeOne[waypoint].coords;
  } else if (route == 2) {
    newWaypoint = routeTwo[waypoint].coords;
  } else if (route == 3) {
    newWaypoint = routeThree[waypoint].coords;
  } else if (route == 4) {
    newWaypoint = routeFour[waypoint].coords;
  } else if (route == 5) {
    newWaypoint = routeFive[waypoint].coords;
  }

  currentBlip = mp.blips.new(1, newWaypoint,
  {
      name: "Wegpunkt",
      scale: 1.0,
      color: 2,
      alpha: 255,
      drawDistance: 10.0,
      shortRange: false,
      rotation: 0.0,
      dimension: 0,
  });
  currentBlip.pulse();

  currentMarker = mp.markers.new(1, newWaypoint, 1,
    {
      direction: newWaypoint,
      rotation: newWaypoint,
      color: [0, 255, 138, 255],
      visible: true,
      dimension: 0
    });
}
mp.events.add("client:MiniJobGaertner:startJob", startJob);
