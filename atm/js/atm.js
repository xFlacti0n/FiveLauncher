//read https://rage-trade.de/license
//copyright 2019 Rage-Trade.de

var app = new Vue({
    el: '#app',
    data: {
        accounts: [
            {IBAN: 'DE63401545300037218500', BIC: 'WELADE3WXXX', balance: 255.55}
        ],
        transfers: [
            {text: 'Hello World', money: -55.00, date: '25.08.17', time: '10:48', senderName: 'Daniel Elskamp', senderIBAN: 'DE63 4015 4530 0037 2185 00'},
            {text: 'Hello World', money: 55.00, date: '25.08.17', time: '11:48', senderName: 'Daniel Elskamp', senderIBAN: 'DE63 4015 4530 0037 2185 00'},
            {text: 'Hello World', money: 255.00, date: '25.08.17', time: '09:48', senderName: 'Daniel Elskamp', senderIBAN: 'DE63 4015 4530 0037 2185 00'},
        ],
        gehalt: {
            money: 3500
        },
        owner: 'Joshua Gerke'

    },
    computed: {
        orderedTransfers: function() {
            return _.orderBy(this.transfers, ['time', 'date'], ['desc', 'desc']);
        }
    }
});

setTimeout(function(){
    var t = false;
    if(t === false){
        app.transfers.push({text: 'Hello Joshua', money: 155.00, date: '28.08.17', time: '11:48', senderName: 'Daniel Elskamp', senderIBAN: 'DE63 4015 4530 0037 2185 00'},
            {text: 'Hello Daniel', money: -55.00, date: '15.08.17', time: '12:48', senderName: 'Daniel Elskamp', senderIBAN: 'DE63 4015 4530 0037 2185 00'})
        t=true;
    }
}, 5000);



var lastClass = "mainClass";

var lastItemName = "";
var lastItemSrc = "";

function switchSite(site) {
    if (site !== lastClass) {
        var givenClass = document.getElementsByName(site)[0];
        givenClass.classList.remove("hidden");
        document.getElementsByName(lastClass)[0].classList.toggle("hidden");
        lastClass = site;
    }
}

function setValues(bank, hand, gehalt)
{
    document.getElementsByClassName("a-balance")[0].innerHTML = bank + "$";
    document.getElementsByClassName("e-balance")[0].innerHTML = hand + "$";
    document.getElementsByClassName("t-balance")[0].innerHTML = bank + "$";
    document.getElementById("festgehalt").innerHTML = gehalt;
}


function Abheben()
{
    checker(1);
/*
    var value = document.getElementsByClassName("a-count")[0].value;
    if (!isEmptyOrSpaces(value)) {

        mp.trigger("bankAction", 1, value, null);
    }
    else {
        mp.trigger("ShowNotification", 4, "Sie m&uuml;ssen einen Betrag eingeben!", 5000);
    }
*/

}

function Einzahlen()
{
    checker(2);
/*
    var value = document.getElementsByClassName("e-count")[0].value;
    let newvalue = value.replace(".", "");
    if (!isEmptyOrSpaces(newvalue)) {
        mp.trigger("bankAction", 0, newvalue, null);
    }
    else {
        mp.trigger("ShowNotification", 4, "Sie m&uuml;ssen einen Betrag eingeben!", 5000);
    }
*/
}
function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
}

function provideName(name) {
    document.getElementById("name").innerHTML = name;
}

function ueberweisen()
{
    badchecker(3);
/*
    var value = document.getElementsByClassName("t-number")[0].value;
    var value2 = document.getElementsByClassName("t-count")[0].value;
    if (!isEmptyOrSpaces(value)) {
        if (!isEmptyOrSpaces(value2)) {

            mp.trigger("bankAction", 2, value, value2);
        }
        else {
            mp.trigger("ShowNotification", 4, "Sie m&uuml;ssen einen Betrag eingeben!", 5000);
        }
    }
    else {
        mp.trigger("ShowNotification", 4, "Sie m&uuml;ssen eine IBAN eingeben!", 5000);
    }
    */
}

// ACCEPT

function checker(id) {
    if(id == 1) {var id1 = "auszahleninhalt"; var type = "Ausgezahlt";var id2 = "auszahlenstatus";var money = document.getElementsByClassName("a-count")[0].value + "$";
    document.getElementsByClassName("überdecken1")[0].style.display = "none";
    document.getElementsByClassName("überdecken2")[0].style.display = "block";
    document.getElementsByClassName("überdecken3")[0].style.display = "block";
}
    if(id == 2) {var id1 = "einzahleninhalt"; var type = "Eingezahlt";var id2 = "einzahlenstatus";var money = document.getElementsByClassName("e-count")[0].value+ "$";
    document.getElementsByClassName("überdecken1")[0].style.display = "block";
    document.getElementsByClassName("überdecken2")[0].style.display = "none";
    document.getElementsByClassName("überdecken3")[0].style.display = "block";
}
    if(id == 3) {var id1 = "ueberweiseninhalt"; var type = "Überwiesen";var id2 = "ueberweisenstatus";var money = document.getElementsByClassName("t-count")[0].value+ "$";var iban = document.getElementsByClassName("t-number")[0].value;
    document.getElementsByClassName("überdecken1")[0].style.display = "block";
    document.getElementsByClassName("überdecken2")[0].style.display = "block";
    document.getElementsByClassName("überdecken3")[0].style.display = "none";
}

var opacity = id1.substring(0, id1.length-6);

document.getElementsByClassName(opacity)[0].style.opacity = "1";

document.getElementsByClassName(id1)[0].style.transition = "0.5 all";
document.getElementsByClassName(id1)[0].style.left = "24vw";

document.getElementsByClassName(id2)[0].style.transition = "0.5 all";
document.getElementsByClassName(id2)[0].style.left = "0vw";

if(id == 1) {
    document.getElementsByClassName('statustäxt')[0].innerHTML = "wurde erfolgreich ";
    document.getElementsByClassName('statusmoney')[0].innerHTML = money;
    document.getElementsByClassName('statustype')[0].innerHTML = type;

    document.getElementsByClassName('statusmoney')[0].style.color = "#00ec90";
    document.getElementsByClassName('statustype')[0].style.color = "#00ec90";
    document.getElementsByClassName('statustext')[0].style.border = "0.05vw solid #00ec90";
    document.getElementsByClassName('statusaccept')[0].style.background = "#00ec90";
}

if(id == 2) {
    document.getElementsByClassName('statustäxt')[0].innerHTML = "wurde erfolgreich ";
    document.getElementsByClassName('statusmoney')[1].innerHTML = money;
    document.getElementsByClassName('statustype')[1].innerHTML = type;

    document.getElementsByClassName('statusmoney')[1].style.color = "#00ec90";
    document.getElementsByClassName('statustype')[1].style.color = "#00ec90";
    document.getElementsByClassName('statustext')[1].style.border = "0.05vw solid #00ec90";
    document.getElementsByClassName('statusaccept')[1].style.background = "#00ec90";
}

if(id == 3) {
    document.getElementsByClassName('statustäxt')[0].innerHTML = "wurde erfolgreich an die IBAN ";
    document.getElementsByClassName('statusiban')[0].innerHTML = iban;
    document.getElementsByClassName('statusmoney')[2].innerHTML = money;
    document.getElementsByClassName('statustype')[2].innerHTML = type;

    document.getElementsByClassName('statusmoney')[2].style.color = "#00ec90";
    document.getElementsByClassName('statustype')[2].style.color = "#00ec90";
    document.getElementsByClassName('statustext')[2].style.border = "0.05vw solid #00ec90";
    document.getElementsByClassName('statusaccept')[2].style.background = "#00ec90";
}}

// ERROR

function badchecker(id) {
    if(id == 1) {var id1 = "auszahleninhalt"; var type = "Ausgezahlt";var id2 = "auszahlenstatus";var money = document.getElementsByClassName("a-count")[0].value + "$";
    document.getElementsByClassName("überdecken1")[0].style.display = "none";
    document.getElementsByClassName("überdecken2")[0].style.display = "block";
    document.getElementsByClassName("überdecken3")[0].style.display = "block";
}
    if(id == 2) {var id1 = "einzahleninhalt"; var type = "Eingezahlt";var id2 = "einzahlenstatus";var money = document.getElementsByClassName("e-count")[0].value+ "$";
    document.getElementsByClassName("überdecken1")[0].style.display = "block";
    document.getElementsByClassName("überdecken2")[0].style.display = "none";
    document.getElementsByClassName("überdecken3")[0].style.display = "block";
}
    if(id == 3) {var id1 = "ueberweiseninhalt"; var type = "Überwiesen";var id2 = "ueberweisenstatus";var money = document.getElementsByClassName("t-count")[0].value+ "$";var iban = document.getElementsByClassName("t-number")[0].value;
    document.getElementsByClassName("überdecken1")[0].style.display = "block";
    document.getElementsByClassName("überdecken2")[0].style.display = "block";
    document.getElementsByClassName("überdecken3")[0].style.display = "none";
}

var opacity = id1.substring(0, id1.length-6);

document.getElementsByClassName(opacity)[0].style.opacity = "1";

document.getElementsByClassName(id1)[0].style.transition = "0.5 all";
document.getElementsByClassName(id1)[0].style.left = "24vw";

document.getElementsByClassName(id2)[0].style.transition = "0.5 all";
document.getElementsByClassName(id2)[0].style.left = "0vw";

if(id == 1) {
    document.getElementsByClassName('statustäxt')[0].innerHTML = "wurde nicht erfolgreich ";
    document.getElementsByClassName('statusmoney')[0].innerHTML = money;
    document.getElementsByClassName('statustype')[0].innerHTML = type;

    document.getElementsByClassName('statusmoney')[0].style.color = "#ff6565";
    document.getElementsByClassName('statustype')[0].style.color = "#ff6565";
    document.getElementsByClassName('statustext')[0].style.border = "0.05vw solid #ff6565";
    document.getElementsByClassName('statusaccept')[0].style.background = "#ff6565";
}

if(id == 2) {
    document.getElementsByClassName('statustäxt')[1].innerHTML = "wurde nicht erfolgreich ";
    document.getElementsByClassName('statusmoney')[1].innerHTML = money;
    document.getElementsByClassName('statustype')[1].innerHTML = type;

    document.getElementsByClassName('statusmoney')[1].style.color = "#ff6565";
    document.getElementsByClassName('statustype')[1].style.color = "#ff6565";
    document.getElementsByClassName('statustext')[1].style.border = "0.05vw solid #ff6565";
    document.getElementsByClassName('statusaccept')[1].style.background = "#ff6565";
}

if(id == 3) {
    var errorrrrrtext = "wurde nicht erfolgreich an die IBAN "

    document.getElementsByClassName('statustäxt')[2].innerHTML = errorrrrrtext;
    document.getElementsByClassName('statusiban')[0].innerHTML = iban;
    document.getElementsByClassName('statusmoney')[2].innerHTML = money;
    document.getElementsByClassName('statustype')[2].innerHTML = type;

    document.getElementsByClassName('statusmoney')[2].style.color = "#ff6565";
    document.getElementsByClassName('statustype')[2].style.color = "#ff6565";
    document.getElementsByClassName('statustext')[2].style.border = "0.05vw solid #ff6565";
    document.getElementsByClassName('statusaccept')[2].style.background = "#ff6565";
}}

//BACK

function unchecker(id) {
    if(id == 1) {var id1 = "auszahleninhalt";var id2 = "auszahlenstatus"}
    if(id == 2) {var id1 = "einzahleninhalt";var id2 = "einzahlenstatus"}
    if(id == 3) {var id1 = "ueberweiseninhalt";var id2 = "ueberweisenstatus"}
    
    document.getElementsByClassName(id1)[0].style.transition = "0.5 all";
    document.getElementsByClassName(id1)[0].style.left = "0vw";
    
    document.getElementsByClassName(id2)[0].style.transition = "0.5 all";
    document.getElementsByClassName(id2)[0].style.left = "-24vw";

    document.getElementsByClassName('statusmoney')[0].innerHTML = "";
    document.getElementsByClassName('statustype')[0].innerHTML = "";

    document.getElementsByClassName("überdecken1")[0].style.display = "none";
    document.getElementsByClassName("überdecken2")[0].style.display = "none";
    document.getElementsByClassName("überdecken3")[0].style.display = "none";

    document.getElementsByClassName('statustäxt')[0].innerHTML = "";
    document.getElementsByClassName('statusiban')[0].innerHTML = "";
    document.getElementsByClassName('statusmoney')[0].innerHTML = "";
    document.getElementsByClassName('statustype')[0].innerHTML = "";
    document.getElementsByClassName('statustäxt')[1].innerHTML = "";
    document.getElementsByClassName('statusmoney')[1].innerHTML = "";
    document.getElementsByClassName('statustype')[1].innerHTML = "";
    document.getElementsByClassName('statustäxt')[2].innerHTML = "";
    document.getElementsByClassName('statusmoney')[2].innerHTML = "";
    document.getElementsByClassName('statustype')[2].innerHTML = "";
    document.getElementsByClassName('a-count')[0].value = "";
    document.getElementsByClassName('e-count')[0].value = "";
    document.getElementsByClassName('t-count')[0].value = "";
    
}