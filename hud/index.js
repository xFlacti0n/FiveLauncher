var value = 2;
var food = 100;
var drink = 100;
var fuel = 100;
var speed = 0;
var money = 0;

var interval = null;

mp.game.ui.hideHudComponentThisFrame(7);
mp.game.ui.hideHudComponentThisFrame(9);

function setVisible(state) {
    if (state == "true") {
        document.getElementById("body").style.display = 'block';
    } else {
        document.getElementById("body").style.display = 'none';
    }
}

function setDrinkValue(drink) {
    document.getElementsByClassName("indrink")[0].style.width = drink + "%";
    update();
}

function setFoodValue(food) {
    document.getElementsByClassName("infood")[0].style.width = food + "%";
    update();
}

function setMoneyValue(money) {
    money = Number.parseFloat(money).toFixed(0);
    document.getElementById("cash").innerHTML = money;
    document.getElementById("cash").innerHTML = '<text style="color:#00ec90">$</text> ' + money;
}

function setMoney(money) {
    money = Number.parseFloat(money).toFixed(0);
    document.getElementById("cash").innerHTML = '<text style="color:#00ec90">$</text> ' + money;
}

function setCharName(role) {
    document.getElementsByClassName("text1")[0].innerHTML = role;
}

function setMicroValue(value) {
    if (value == 0) {
        document.getElementsByClassName('micro')[0].src = "muted.png";
    }
    if (value == 1) {
        document.getElementsByClassName('micro')[0].src = "laut1.png";
    }
    if (value == 2) {
        document.getElementsByClassName('micro')[0].src = "laut2.png";
    }
    if (value == 3) {
        document.getElementsByClassName('micro')[0].src = "laut3.png";
    }
    if (value == 4) {
        document.getElementsByClassName('micro')[0].src = "laut4.png";
    }
}

mp.events.add('setMicroValue', setMicroValue);
mp.events.add('setFoodValue', setFoodValue);
mp.events.add('setDrinkValue', setDrinkValue);
mp.events.add('setBank', setBank);
mp.events.add('setCharName', setCharName);

function setHealthValues(health, armor) {
    document.getElementsByClassName("inlife")[0].style.width = health + "%";
    document.getElementsByClassName("inarmor")[0].style.width = armor + "%";
}


// Speedo