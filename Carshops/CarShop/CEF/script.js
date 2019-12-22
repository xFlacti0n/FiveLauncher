function changeCat(newCat) {
  if (newCat == "gebraucht") {
    $("#cat--neu").hide();
    $("#cat--bike").hide();
    $("#cat--gebraucht").show();
  } else if (newCat == "neu") {
    $("#cat--gebraucht").hide();
    $("#cat--bike").hide();
    $("#cat--neu").show();
  } else if (newCat == "bike") {
    $("#cat--neu").hide();
    $("#cat--gebraucht").hide();
    $("#cat--bike").show();
  }

  return true;
}

function showModal(modelId, price) {
  var vehData = {
    "390201602":  {bezeichnung: "Cliffhanger", name: "cliffhanger", sparte: "Motorrad", sitzplatz: 1, tankvolumen: "15", verbrauch: "0.125", treibstoff: "Benzin", kofferraum: 0},
    "627535535":  {bezeichnung: "FCR 1000", name: "fcr", sparte: "Motorrad", sitzplatz: 1, tankvolumen: "17", verbrauch: "0.14", treibstoff: "Benzin", kofferraum: 0},
    "2035069708": {bezeichnung: "Esskey", name: "esskey", sparte: "Motorrad", sitzplatz: 1, tankvolumen: "13.5", verbrauch: "0.11", treibstoff: "Benzin", kofferraum: 0},
    "3724934023": {bezeichnung: "Zombie Chopper", name: "zombieb", sparte: "Motorrad", sitzplatz: 2, tankvolumen: "16", verbrauch: "0.13", treibstoff: "Benzin", kofferraum: 5},
    "3285698347": {bezeichnung: "Zombie Bopper", name: "zombiea", sparte: "Motorrad", sitzplatz: 1, tankvolumen: "16", verbrauch: "0.13", treibstoff: "Benzin", kofferraum: 0},
    "2154536131": {bezeichnung: "Bagger", name: "bagger", sparte: "Motorrad", sitzplatz: 1, tankvolumen: "14.1", verbrauch: "0.11", treibstoff: "Benzin", kofferraum: 12},
    "1873600305": {bezeichnung: "rostiges Ratbike", name: "ratbike", sparte: "Motorrad", sitzplatz: 1, tankvolumen: "20", verbrauch: "0.16", treibstoff: "Benzin", kofferraum: 0},
    "699456151":  {bezeichnung: "Surfer", name: "surfer", sparte: "Van", sitzplatz: 2, tankvolumen: "35", verbrauch: "0.31", treibstoff: "Benzin", kofferraum: 45},
    "1039032026": {bezeichnung: "Blista Sport", name: "blista2", sparte: "Sports", Sitzplatz: 2, tankvolumen: "55", verbrauch: "0.61", treibstoff: "Benzin", Kofferraum: 25},
    "Surge": {bezeichnung: "Surge", name: "surge", sparte: "Sedan", sitzplatz: 4, tankvolumen: "40", verbrauch: "0.33", treibstoff: "Benzin", kofferraum: 35},
    "Stratum": {bezeichnung: "Stratum", name: "stratum", sparte: "Sedan", sitzplatz: 4, tankvolumen: "50", verbrauch: "0.42", treibstoff: "Benzin", kofferraum: 40},
    "Stanier": {bezeichnung: "Stanier", name: "stanier", sparte: "Sedan", sitzplatz: 4, tankvolumen: "68", verbrauch: "0.57", treibstoff: "Benzin", kofferraum: 35},
    "Regina": {bezeichnung: "Regina", name: "regina", sparte: "Sedan", sitzplatz: 4, tankvolumen: "84", verbrauch: "0.7", treibstoff: "Benzin", kofferraum: 40},
    "Premier": {bezeichnung: "Premier", name: "premier", sparte: "Sedan", sitzplatz: 4, tankvolumen: "50", verbrauch: "0.42", treibstoff: "Benzin", kofferraum: 35},
    "Intruder":  {bezeichnung: "Intruder", name: "intruder", sparte: "Sedan", sitzplatz: 4, tankvolumen: "80", verbrauch: "0.67", treibstoff: "Benzin", kofferraum: 35},
    "Ingot": {bezeichnung: "Ingot", name: "ingot", sparte: "Sedan", sitzplatz: 4, tankvolumen: "80", verbrauch: "0.67", treibstoff: "Diesel", kofferraum: 40},
    "3609690755": {bezeichnung: "Emperor", name: "emperor", sparte: "Sedan", sitzplatz: 4, tankvolumen: "77", verbrauch: "0.77", treibstoff: "Benzin", kofferraum: 40},
    "Asterope": {bezeichnung: "Asterope", name: "asterope", sparte: "Sedan", sitzplatz: 4, tankvolumen: "70", verbrauch: "0.58", treibstoff: "Benzin", kofferraum: 35},
    "841808271":  {bezeichnung: "Rhapsody", name: "rhapsody", sparte: "Kompaktwagen", sitzplatz: 4, tankvolumen: "42", verbrauch: "0.27", treibstoff: "Benzin", kofferraum: 35},
    "2844316578": {bezeichnung: "Prairie", name: "prairie", sparte: "Kompaktwagen", sitzplatz: 2, tankvolumen: "50", verbrauch: "0.31", treibstoff: "Benzin", kofferraum: 35},
    "3117103977": {bezeichnung: "Issi", name: "issi2", sparte: "Kompaktwagen", sitzplatz: 2, tankvolumen: "43", verbrauch: "0.27", treibstoff: "Benzin", kofferraum: 25},
    "3164157193": {bezeichnung: "Dilettante", name: "dilletante", sparte: "Kompaktwagen", sitzplatz: 4, tankvolumen: "43", verbrauch: "0.25", treibstoff: "Benzin", kofferraum: 35},
    "2166734073": {bezeichnung: "Blazer", name: "blazer", sparte: "Off-Road", sitzplatz: 1, tankvolumen: "11", verbrauch: "0.11", treibstoff: "Benzin", kofferraum: 0},
    "3087195462": {bezeichnung: "rostiger Rebel", name: "rebel", sparte: "Off-Road", sitzplatz: 2, tankvolumen: "80", verbrauch: "0.8", treibstoff: "Diesel", kofferraum: 45},
    "2983726598": {bezeichnung: "rostiger Surfer", name: "surfer2", sparte: "Van", sitzplatz: 2, tankvolumen: "35", verbrauch: "0.31", treibstoff: "Benzin", kofferraum: 45},
    "1762279763": {bezeichnung: "rostiger Tornado", name: "tornado", sparte: "Sports Classic", sitzplatz: 2, tankvolumen: "65", verbrauch: "0.76", treibstoff: "Benzin", kofferraum: 40},
    "3306466016": {bezeichnung: "Cheburek", name: "cheburek", sparte: "Sports Classic", sitzplatz: 4, tankvolumen: "45", verbrauch: "0.52", treibstoff: "Benzin", kofferraum: 35},
    "2411965148": {bezeichnung: "rostiger Emperor", name: "emperor2", sparte: "Sedan", sitzplatz: 4, tankvolumen: "77", verbrauch: "0.64", treibstoff: "Benzin", kofferraum: 40},
    "2485144969": {bezeichnung: "Asea", name: "asea", sparte: "Sedan", sitzplatz: 4, tankvolumen: "46", verbrauch: "0.38", treibstoff: "Benzin", kofferraum: 35},
    "3863274624": {bezeichnung: "Panto", name: "panto", sparte: "Kompaktwagen", sitzplatz: 2, tankvolumen: "40", verbrauch: "0.25", treibstoff: "Benzin", kofferraum: 25},
    "2859047862": {bezeichnung: "Bodhi", name: "bodhi2", sparte: "Off-Road", sitzplatz: 2, tankvolumen: "100", verbrauch: "1", treibstoff: "Diesel", kofferraum: 45},
    "Blista": {bezeichnung: "Blista", name: "blista", sparte: "Kompaktwagen", sitzplatz: 4, tankvolumen: "55", verbrauch: "0.34", treibstoff: "Benzin", kofferraum: 35},
    "2890830793": {bezeichnung: "Daemon Custom", name: "daemon2", sparte: "Motorrad", sitzplatz: 2, tankvolumen: "17", verbrauch: "0.14", treibstoff: "Benzin", kofferraum: 0},
    "3945366167": {bezeichnung: "bifta", name: "bifta", sparte: "Off-Road", sitzplatz: 2, tankvolumen: "20", verbrauch: "0.20", treibstoff: "Benzin", kofferraum: 5},
    "2841686334": {bezeichnung: "Sanchez", name: "sanchez2", sparte: "Motorrad", sitzplatz: 2, tankvolumen: "12.5", verbrauch: "0.1", treibstoff: "Benzin", kofferraum: 0},
    "3783366066": {bezeichnung: "Oracle", name: "oracle2", sparte: "Coupe", sitzplatz: 4, tankvolumen: "60", verbrauch: "0.46", treibstoff: "Benzin", kofferraum: 40},
    "223258115":  {bezeichnung: "Sabre Turbo", name: "sabregt2", sparte: "Muscle-Car", sitzplatz: 2, tankvolumen: "76", verbrauch: "0.76", treibstoff: "Benzin", kofferraum: 35}
  };
  var data = vehData[""+modelId];

  $("#modal--head-carname").html(data.bezeichnung);
  $("#modal-sparte").html(data.sparte);
  $("#modal-sitzplatz").html(data.sitzplatz);
  $("#modal-kofferraum").html(data.kofferraum);
  $("#modal-tankvolumen").html(data.tankvolumen);
  $("#modal-verbrauch").html(data.verbrauch);
  $("#modal-treibstoff").html(data.treibstoff);
  $("#modal--head-carimage").attr("src","images/"+modelId+".jpg");
  $("#modalDataModelId").html(""+modelId);
  $("#modalDataModelPrice").html(""+price);
  $("#wrapper--modal").show("slow");
  $("#modalData").show();
}

function modalInfoBuy() {
  var modelId = $("#modalDataModelId").html();
  var modelPrice = parseInt($("#modalDataModelPrice").html());

  showBuyModal(modelId, modelPrice);
}

var target = 'modalBuy';
var target2 = 'modalData';

$(this).click(function(event) {
  if (event.target.id == 'wrapper--modal') {
    $("#modalBuy").hide();
    $("#modalData").hide();
    $("#wrapper--modal").hide("slow");
  }
});

function showBuyModal(modelId, price) {
  $("#modalData").hide("slow");
  $("#wrapper--modal").hide();
  var vehData = {
    "390201602":  {bezeichnung: "Cliffhanger", name: "cliffhanger", sparte: "Motorrad", sitzplatz: 1, tankvolumen: "15", verbrauch: "0.125", treibstoff: "Benzin", kofferraum: 0},
    "627535535":  {bezeichnung: "FCR 1000", name: "fcr", sparte: "Motorrad", sitzplatz: 1, tankvolumen: "17", verbrauch: "0.14", treibstoff: "Benzin", kofferraum: 0},
    "2035069708": {bezeichnung: "Esskey", name: "esskey", sparte: "Motorrad", sitzplatz: 1, tankvolumen: "13.5", verbrauch: "0.11", treibstoff: "Benzin", kofferraum: 0},
    "3724934023": {bezeichnung: "Zombie Chopper", name: "zombieb", sparte: "Motorrad", sitzplatz: 2, tankvolumen: "16", verbrauch: "0.13", treibstoff: "Benzin", kofferraum: 5},
    "3285698347": {bezeichnung: "Zombie Bopper", name: "zombiea", sparte: "Motorrad", sitzplatz: 1, tankvolumen: "16", verbrauch: "0.13", treibstoff: "Benzin", kofferraum: 0},
    "2154536131": {bezeichnung: "Bagger", name: "bagger", sparte: "Motorrad", sitzplatz: 1, tankvolumen: "14.1", verbrauch: "0.11", treibstoff: "Benzin", kofferraum: 12},
    "1873600305": {bezeichnung: "rostiges Ratbike", name: "ratbike", sparte: "Motorrad", sitzplatz: 1, tankvolumen: "20", verbrauch: "0.16", treibstoff: "Benzin", kofferraum: 0},
    "699456151":  {bezeichnung: "Surfer", name: "surfer", sparte: "Van", sitzplatz: 2, tankvolumen: "35", verbrauch: "0.31", treibstoff: "Benzin", kofferraum: 45},
    "1039032026": {bezeichnung: "Blista Sport", name: "blista2", sparte: "Sports", Sitzplatz: 2, tankvolumen: "55", verbrauch: "0.61", treibstoff: "Benzin", Kofferraum: 25},
    "Surge": {bezeichnung: "Surge", name: "surge", sparte: "Sedan", sitzplatz: 4, tankvolumen: "40", verbrauch: "0.33", treibstoff: "Benzin", kofferraum: 35},
    "Stratum": {bezeichnung: "Stratum", name: "stratum", sparte: "Sedan", sitzplatz: 4, tankvolumen: "50", verbrauch: "0.42", treibstoff: "Benzin", kofferraum: 40},
    "Stanier": {bezeichnung: "Stanier", name: "stanier", sparte: "Sedan", sitzplatz: 4, tankvolumen: "68", verbrauch: "0.57", treibstoff: "Benzin", kofferraum: 35},
    "Regina": {bezeichnung: "Regina", name: "regina", sparte: "Sedan", sitzplatz: 4, tankvolumen: "84", verbrauch: "0.7", treibstoff: "Benzin", kofferraum: 40},
    "Premier": {bezeichnung: "Premier", name: "premier", sparte: "Sedan", sitzplatz: 4, tankvolumen: "50", verbrauch: "0.42", treibstoff: "Benzin", kofferraum: 35},
    "Intruder":  {bezeichnung: "Intruder", name: "intruder", sparte: "Sedan", sitzplatz: 4, tankvolumen: "80", verbrauch: "0.67", treibstoff: "Benzin", kofferraum: 35},
    "Ingot": {bezeichnung: "Ingot", name: "ingot", sparte: "Sedan", sitzplatz: 4, tankvolumen: "80", verbrauch: "0.67", treibstoff: "Diesel", kofferraum: 40},
    "3609690755": {bezeichnung: "Emperor", name: "emperor", sparte: "Sedan", sitzplatz: 4, tankvolumen: "77", verbrauch: "0.77", treibstoff: "Benzin", kofferraum: 40},
    "Asterope": {bezeichnung: "Asterope", name: "asterope", sparte: "Sedan", sitzplatz: 4, tankvolumen: "70", verbrauch: "0.58", treibstoff: "Benzin", kofferraum: 35},
    "841808271":  {bezeichnung: "Rhapsody", name: "rhapsody", sparte: "Kompaktwagen", sitzplatz: 4, tankvolumen: "42", verbrauch: "0.27", treibstoff: "Benzin", kofferraum: 35},
    "2844316578": {bezeichnung: "Prairie", name: "prairie", sparte: "Kompaktwagen", sitzplatz: 2, tankvolumen: "50", verbrauch: "0.31", treibstoff: "Benzin", kofferraum: 35},
    "3117103977": {bezeichnung: "Issi", name: "issi2", sparte: "Kompaktwagen", sitzplatz: 2, tankvolumen: "43", verbrauch: "0.27", treibstoff: "Benzin", kofferraum: 25},
    "3164157193": {bezeichnung: "Dilettante", name: "dilletante", sparte: "Kompaktwagen", sitzplatz: 4, tankvolumen: "43", verbrauch: "0.25", treibstoff: "Benzin", kofferraum: 35},
    "2166734073": {bezeichnung: "Blazer", name: "blazer", sparte: "Off-Road", sitzplatz: 1, tankvolumen: "11", verbrauch: "0.11", treibstoff: "Benzin", kofferraum: 0},
    "3087195462": {bezeichnung: "rostiger Rebel", name: "rebel", sparte: "Off-Road", sitzplatz: 2, tankvolumen: "80", verbrauch: "0.8", treibstoff: "Diesel", kofferraum: 45},
    "2983726598": {bezeichnung: "rostiger Surfer", name: "surfer2", sparte: "Van", sitzplatz: 2, tankvolumen: "35", verbrauch: "0.31", treibstoff: "Benzin", kofferraum: 45},
    "1762279763": {bezeichnung: "rostiger Tornado", name: "tornado", sparte: "Sports Classic", sitzplatz: 2, tankvolumen: "65", verbrauch: "0.76", treibstoff: "Benzin", kofferraum: 40},
    "3306466016": {bezeichnung: "Cheburek", name: "cheburek", sparte: "Sports Classic", sitzplatz: 4, tankvolumen: "45", verbrauch: "0.52", treibstoff: "Benzin", kofferraum: 35},
    "2411965148": {bezeichnung: "rostiger Emperor", name: "emperor2", sparte: "Sedan", sitzplatz: 4, tankvolumen: "77", verbrauch: "0.64", treibstoff: "Benzin", kofferraum: 40},
    "2485144969": {bezeichnung: "Asea", name: "asea", sparte: "Sedan", sitzplatz: 4, tankvolumen: "46", verbrauch: "0.38", treibstoff: "Benzin", kofferraum: 35},
    "3863274624": {bezeichnung: "Panto", name: "panto", sparte: "Kompaktwagen", sitzplatz: 2, tankvolumen: "40", verbrauch: "0.25", treibstoff: "Benzin", kofferraum: 25},
    "2859047862": {bezeichnung: "Bodhi", name: "bodhi2", sparte: "Off-Road", sitzplatz: 2, tankvolumen: "100", verbrauch: "1", treibstoff: "Diesel", kofferraum: 45},
    "Blista": {bezeichnung: "Blista", name: "blista", sparte: "Kompaktwagen", sitzplatz: 4, tankvolumen: "55", verbrauch: "0.34", treibstoff: "Benzin", kofferraum: 35},
    "2890830793": {bezeichnung: "Daemon Custom", name: "daemon2", sparte: "Motorrad", sitzplatz: 2, tankvolumen: "17", verbrauch: "0.14", treibstoff: "Benzin", kofferraum: 0},
    "3945366167": {bezeichnung: "bifta", name: "bifta", sparte: "Off-Road", sitzplatz: 2, tankvolumen: "20", verbrauch: "0.20", treibstoff: "Benzin", kofferraum: 5},
    "2841686334": {bezeichnung: "Sanchez", name: "sanchez2", sparte: "Motorrad", sitzplatz: 2, tankvolumen: "12.5", verbrauch: "0.1", treibstoff: "Benzin", kofferraum: 0},
    "3783366066": {bezeichnung: "Oracle", name: "oracle2", sparte: "Coupe", sitzplatz: 4, tankvolumen: "60", verbrauch: "0.46", treibstoff: "Benzin", kofferraum: 40},
    "223258115":  {bezeichnung: "Sabre Turbo", name: "sabregt2", sparte: "Muscle-Car", sitzplatz: 2, tankvolumen: "76", verbrauch: "0.76", treibstoff: "Benzin", kofferraum: 35}
  };
  var data = vehData[""+modelId];
  data.price = price;
  data = JSON.stringify(data);

  $("#buyModalInfo").html(data);
  $("#buyModalModelId").html(modelId);
  $("#buyModalMoney").html(price);
  $("#wrapper--modal").show("slow");
  $("#modalBuy").show();
}

function buyModalAccept() {
  var data = $("#buyModalInfo").html();
  data = JSON.parse(data);
  var price = data.price;
  var modelId = $("#buyModalModelId").html();
  $("#modalBuy").hide();
  $("#wrapper--modal").hide("slow");

  mp.trigger('client:CarShop:spawnCar', modelId, price);
}

function closeBrowser() {
  mp.trigger('client:CarShop:CloseDialog');
}

function modalClose() {
  $("#modalData").hide("slow");
  $("#wrapper--modal").hide("slow");
}

function buyModalDecline() {
  $("#modalBuy").hide("slow");
  $("#wrapper--modal").hide("slow");
}
