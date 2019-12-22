const NativeUI = require('nativeui');
const camerasManager = require('./ragelife/camera.js');
const objects = require('./ragelife/objects.js');
const Menu = NativeUI.Menu;
const UIMenuItem = NativeUI.UIMenuItem;
const UIMenuListItem = NativeUI.UIMenuListItem;
const Point = NativeUI.Point;
const ItemsCollection = NativeUI.ItemsCollection;

var color = { r: 255, g: 0, b: 0 };

const player = mp.players.local;
let radioKillTimer = null;
let state = 'LOGIN';
let fraktion = 'arbeitslos';
let browser = null;
let progressbarTimeout = null;
let camera = null;
let hud = null;
let deathscreen = null;
let input = null;
let audio = null;
let bank = null;
let inputShop = null;
let inputHouse = null;
let inputRechnung = null;
let acceptRechnung = null;
let characterJoinCamera = null;
let unnötigeCameraAbfrage = "N";
let currentMarker = null;
let teleports = new Array();
let actions = new Array();
let custommarker = new Array();
const verkehrsamt = new mp.Vector3(-547.6566772460938, -247.71319580078125, 36.49610900878906);
let collorTrigger = "primary";
let duty = "Feierabend";
let MinimapShow = true;
//let mp.gui.chat.enabled = false;
mp.gui.chat.activate(false);
mp.nametags.enabled = false;
mp.game.gameplay.disableAutomaticRespawn(true);
mp.game.gameplay.setFadeOutAfterDeath(false);
mp.game.player.setHealthRechargeMultiplier(0.0);
//mp.game.vehicle.defaultEngineBehaviour = false;

const ScreenRes = mp.game.graphics.getScreenResolution(0, 0);
const MenuPoint = new Point(ScreenRes.x + 150, 50);


function syncTime() {
    if (mp.players.local.dimension !== 7) {
        var date = new Date();
        mp.game.time.setClockTime(date.getHours(), date.getMinutes(), date.getSeconds());
    } else {
        mp.game.time.setClockTime(23, 0, 0);
    }
}

setInterval(syncTime, 60000);
syncTime();

mp.events.add("client:world:timeUpdate", () => {
    syncTime();
});

mp.events.add("client:world:weatherUpdate", (newWeather) => {
    if (mp.players.local.dimension !== 7) {
        mp.game.gameplay.setOverrideWeather(newWeather);
        mp.game.gameplay.setWeatherTypePersist(newWeather);
        if (newWeather == "RAIN" || newWeather == "THUNDER") {
            mp.game.gameplay.setRainFxIntensity(0.75);
        } else {
            mp.game.gameplay.setRainFxIntensity(0.0);
        }
    } else {
        mp.game.gameplay.setOverrideWeather("CLEAR");
        mp.game.gameplay.setWeatherTypeNow("CLEAR");
        mp.game.gameplay.setWeatherTypePersist("CLEAR");
        mp.game.gameplay.setRainFxIntensity(0.0);
    }
});

mp.events.add("client:progressbar:start", (percentage, duration) => {
    if (browser !== null) browser.destroy();
    if (progressbarTimeout !== null) {
        clearTimeout(progressbarTimeout);
        progressbarTimeout = null;
    }
    browser = mp.browsers.new('package://progressbar/index.html');
    browser.execute("init('" + percentage + "','" + duration + "')");
    progressbarTimeout = setTimeout(_ => {
        if (browser !== null) {
            browser.destroy();
            browser = null;
        }
    }, parseInt(duration));
});

mp.events.add("client:progressbar:end", () => {
    if (browser !== null) browser.destroy();
    if (progressbarTimeout !== null) {
        clearTimeout(progressbarTimeout);
        progressbarTimeout = null;
    }
    browser = null;
});

mp.events.add({
    "changeDuty": () => {
        if (duty === "Feierabend") {
            duty = "Im Dienst"
        } else {
            duty = "Feierabend";
        }

        mp.events.callRemote("changeDuty", duty != "Feierabend");

    },
    "entityStreamIn": (entity) => {
        mp.events.callRemote("getDoors", mp.players.local);
    },
    "render": () => {
        if (mp.players.local.isInAnyVehicle(true) && !mp.players.local.isSittingInAnyVehicle()) {
            if (radioKillTimer == null) {
                radioKillTimer = setInterval(() => {
                    if (!mp.players.local.isInAnyVehicle(true)) {
                        clearInterval(radioKillTimer);
                        radioKillTimer = null;
                        return;
                    }
                    if (mp.game.invoke("0xE8AF77C4C06ADC93") != 255) {
                        mp.game.audio.setRadioToStationName("OFF");
                    }
                    if (mp.players.local.isSittingInAnyVehicle()) {
                        clearInterval(radioKillTimer);
                        radioKillTimer = null;
                        return;
                    }
                }, 500);
            }
        }
    },
    "startDeathScreen": () => {
        if (browser !== null) browser.destroy();
        browser = mp.browsers.new('package://deathscreen/index.html');
        mp.game.player.setInvincible(true);
        mp.gui.cursor.visible = false;
        mp.gui.chat.show(false);
        mp.game.controls.disableControlAction(0, 82, false);
        setTimeout(function() {
            mp.gui.cursor.show(true, false);
            setTimeout(function() {
                mp.events.callRemote("playAnimationEvent", 'misssolomon_5@end', 'dead_black_ops', 1, 33, -1);
            }, 1000);
        }, 1000);
    },
    "endDeathScreen": () => {
        if (browser !== null) {
            browser.destroy();
            browser = null;
            mp.gui.cursor.visible = false;
            mp.gui.chat.show(true);
            mp.game.player.setInvincible(false);
            mp.players.local.freezePosition(false);
        }
    },

    "createBank": () => {
        if (browser != null || bank != null) return;
        bank = mp.browsers.new("package://BankVertrag/index.html");
        mp.gui.chat.show(false);
        mp.gui.cursor.show(true, true);
    },

    "endBank": () => {
        if (bank !== null) {
            bank.destroy();
            bank = null;
            mp.gui.chat.show(true);
            mp.gui.cursor.show(false, false);
        }
    },

    "createInput": (trigger) => {
        if (browser != null || input != null) return;
        input = mp.browsers.new("package://input/input.html");
        input.execute('setTrigger("' + trigger + '")');
        mp.gui.chat.show(false);
        mp.gui.cursor.show(true, true);
    },

    "noosenachricht": () => {
        if (browser != null || audio != null) return;
        audio = mp.browsers.new("package://IAATower/index2.html");
    },

    "nooseend": () => {
        if (audio !== null) {
            audio.destroy();
            audio = null;
        }
    },

    "createInputHouse": (trigger) => {
        if (browser != null || inputHouse != null) return;
        inputHouse = mp.browsers.new("package://inputHouse/input.html");
        inputHouse.execute('setTrigger("' + trigger + '")');
        mp.gui.chat.show(false);
        mp.gui.cursor.show(true, true);
    },

    "createInputRechnung": (trigger) => {
        if (browser != null || inputRechnung != null) return;
        inputRechnung = mp.browsers.new("package://inputRechnung/input.html");
        inputRechnung.execute('setTrigger("' + trigger + '")');
        mp.gui.chat.show(false);
        mp.gui.cursor.show(true, true);
    },

    "createTargetRechnung": (player, output, text) => {
        if (browser != null || acceptRechnung != null) return;
        acceptRechnung = mp.browsers.new("package://inputRechnung/input.html");
        acceptRechnung.execute('disableInputs("' + output + text + player + '")');
        mp.gui.chat.show(false);
        mp.gui.cursor.show(true, true);
    },

    "createInputShop": (trigger, button) => {
        if (browser != null || inputShop != null) return;
        inputShop = mp.browsers.new("package://inputShop/input.html");
        inputShop.execute('setTrigger("' + trigger + '")');
        mp.gui.chat.show(false);
        mp.gui.cursor.show(true, true);
    },

    "sendInput": (trigger, output) => {
        if (input !== null) {
            input.destroy();
            input = null;
        }
        mp.events.callRemote("inputValue", trigger, output);
        mp.gui.chat.show(true);
        mp.gui.cursor.show(false, false);
    },

    "sendInputShop": (trigger, output, itemName) => {
        if (inputShop !== null) {
            inputShop.destroy();
            inputShop = null;
        }
        if (output > 0) {
            mp.game.audio.playSoundFrontend(-1, "LOCAL_PLYR_CASH_COUNTER_COMPLETE", "DLC_HEISTS_GENERAL_FRONTEND_SOUNDS", true);
        }
        mp.events.callRemote("inputValueShop", trigger, output);
        mp.gui.chat.show(true);
        mp.gui.cursor.show(false, false);
    },

    "sendInputHouse": (trigger, output) => {
        if (inputHouse !== null) {
            inputHouse.destroy();
            inputHouse = null;
        }
        mp.events.callRemote("inputValueHouse", trigger, output);
        mp.gui.chat.show(true);
        mp.gui.cursor.show(false, false);
    },
    "sendInputRechnung": (trigger, output, text) => {
        if (inputRechnung !== null) {
            inputRechnung.destroy();
            inputRechnung = null;
        }
        mp.events.callRemote("inputValueRechnung", trigger, output, text);
        mp.gui.chat.show(true);
        mp.gui.cursor.show(false, false);
    },
    "acceptInputRechnung": (output, text) => {
        if (acceptRechnung !== null) {
            acceptRechnung.destroy();
            acceptRechnung = null;
        }
        mp.events.callRemote("inputValueTargetRechnung", output, text);
        mp.gui.chat.show(true);
        mp.gui.cursor.show(false, false);
    },

    "closeInputShop": (trigger, output) => {
        if (inputShop !== null) {
            inputShop.destroy();
            inputShop = null;
        }
        mp.gui.chat.show(true);
        mp.gui.cursor.show(false, false);
    },
    "closeInputHouse": (trigger, output) => {
        if (inputHouse !== null) {
            inputHouse.destroy();
            inputHouse = null;
        }
        mp.gui.chat.show(true);
        mp.gui.cursor.show(false, false);
    },

    "closeInputRechnung": (trigger, output) => {
        if (inputRechnung !== null) {
            inputRechnung.destroy();
            inputRechnung = null;
        }
        mp.gui.chat.show(true);
        mp.gui.cursor.show(false, false);
    },

    "createMenu": (triggerName, menuName, menuItemList) => {
        if (browser !== null || input !== null) return;
        browser = mp.browsers.new('package://menu/index.html');
        browser.execute('setTrigger("' + triggerName + '")');
        browser.execute('setMenuTitle("' + menuName + '")');

        for (menuItem of menuItemList) {
            browser.execute('addChild("' + menuItem + '")')
        }
        browser.execute('activateFirst()');
        browser.execute('slider("in")');
        mp.gui.chat.show(true);
    },

    "menuInteract": (trigger, item) => {
        if (browser !== null) {
            browser.destroy();
            browser = null;
        }
        mp.events.callRemote("menuClick", trigger, item);
    },

    "menuClose": () => {
        if (browser !== null) {
            browser.destroy();
            browser = null;
        }
    },

    "startLogin": (username) => {
        camera = mp.cameras.new('default', new mp.Vector3(-794.6556396484375, 332.10400390625, 154.8050079345703), new mp.Vector3(0, 0, 0), 70);
        camera.pointAtCoord(-797.3433227539062, 332.110595703125, 153.8050079345703);
        camera.setActive(true);
        mp.game.cam.renderScriptCams(true, false, 0, true, false);
        mp.gui.cursor.visible = true;
        mp.gui.execute('chatAPI.clear()');
        mp.gui.chat.show(false);

        mp.players.local.freezePosition(true);
        browser = mp.browsers.new('package://login/index.html');
        browser.execute('setName("' + username + '")');
    },

    "checkUsernamePassword": (username, password) => {
        mp.events.callRemote("checkUsernamePassword", username, password);
    },

    "wrongLoginDatas": () => {
        browser.execute('info("Falsche Logindaten!")');
    },

    "closeLogin": () => {
        state = "CHARCHOOSER";
        if (browser !== null) {
            browser.destroy();
            browser = null;
        }
    },

    "loginFinish": (money) => {
        camera = mp.cameras.new('default', new mp.Vector3(-794.6556396484375, 332.10400390625, 154.8050079345703), new mp.Vector3(0, 0, 0), 70);
        camera.setActive(false);
        mp.game.cam.renderScriptCams(false, false, 0, false, false);
        camera.destroy(true);
        camera = null;
        state = "INGAME";
        mp.players.local.freezePosition(false);
        mp.gui.cursor.visible = false;
        mp.gui.chat.show(true);
        mp.gui.execute('mp.chat.clear()');
        mp.game.ui.displayRadar(true);
        MinimapShow = true;

        camerasManager.setActiveCamera(characterJoinCamera, false);
        mp.game.audio.playSoundFrontend(-1, "TENNIS_MATCH_POINT", "HUD_AWARDS", true);

        if (hud != null) {
            hud.destroy();
            hud = null;
        }

        if (fraktion != "Feierabend") {
            fraktion = "Feierabend";
        }

        hud = mp.browsers.new("package://hud/index.html");
        hud.execute("setMoneyValue('" + money + "')");
        hud.execute("changeValue, ['money', " + money + "]");

        mp.events.callRemote("getDoors", mp.players.local);

        mp.game.audio.startAudioScene("FBI_HEIST_H5_MUTE_AMBIENCE_SCENE");
        mp.game.audio.startAudioScene("MIC1_RADIO_DISABLE");
    },

    "startCreator": () => {
        state = "CHARCREATOR";
        camera.setActive(false);
        mp.game.cam.renderScriptCams(false, false, 0, false, false);
        camera.destroy(true);
        camera = null;
        mp.players.local.setAlpha(255);
        creatorMainMenu.Visible = true;
        mp.gui.cursor.visible = false;
    },

    "genderChange": () => {
        mp.players.local.setAlpha(255);
    },

    "sendPlayerToAirport": () => {
        state = "INGAME";
        mp.gui.chat.show(true);
        creatorMainMenu.Visible = false;
        mp.players.local.freezePosition(false);
        mp.game.audio.playSoundFrontend(-1, "TENNIS_MATCH_POINT", "HUD_AWARDS", true);
        hud = mp.browsers.new("package://hud/index.html");
        mp.events.callRemote("initEinreise");
    },

    "loginCamera": (pos) => {
        state = "INGAME";
        mp.gui.chat.show(true);
        mp.players.local.freezePosition(false);
        hud = mp.browsers.new("package://hud/index.html");
        mp.events.callRemote("unnötigesCameraDestroyEvent");
        mp.game.streaming.removeIpl("hei_bi_hw1_13_door");
        mp.game.streaming.requestIpl("bkr_bi_hw1_13_int");
    },

    "charChange": () => {
        camera = mp.cameras.new('default', new mp.Vector3(-794.6556396484375, 332.10400390625, 154.8050079345703), new mp.Vector3(0, 0, 0), 70);
        camera.pointAtCoord(-797.3433227539062, 332.110595703125, 153.8050079345703); //Changes the rotation of the camera to point towards a location
        camera.setActive(true);
        mp.game.cam.renderScriptCams(true, false, 0, true, false);
        mp.gui.cursor.visible = false;
        mp.gui.chat.show(false);
        mp.players.local.freezePosition(true);
    },

    "createPed": (hash, x, y, z, rotation, dimension) => {
        let Ped = mp.peds.new(hash, new mp.Vector3(x, y, z), rotation, (streamPed) => {
            streamPed.setAlpha(0);
            //streamPed.freezePosition(true);
        }, dimension);
    },

    "loadAction": (action, actionID, fraktionsAction, x, y, z) => {
        actions.push(JSON.stringify({
            "action": action,
            "actionID": actionID,
            "fraktion": fraktionsAction,
            "pos": new mp.Vector3(x, y, z)
        }));
    },

    "setFraktion": (fr) => {
        fraktion = fr
    },

    "loadMarker": (krz, dim, dim2, x, y, z, x2, y2, z2, ownerType, ownerName, open) => {
        teleports.push(JSON.stringify({
            "name": krz,
            "dim": dim,
            "dim2": dim2,
            "start": new mp.Vector3(x, y, z),
            "end": new mp.Vector3(x2, y2, z2),
            "ownerType": ownerType,
            "ownerName": ownerName,
            "open": open
        }));

        mp.markers.new(27, new mp.Vector3(x, y, (z - 0.95)), 0.95, {
            color: [255, 100, 100, 255],
            visible: 255,
            dimension: dim
        });

        mp.markers.new(27, new mp.Vector3(x2, y2, (z2 - 0.95)), 0.95, {
            color: [255, 100, 100, 255],
            visible: 255,
            dimension: dim2
        });
    },

    "createBlip": (pos, sprite, color, name) => {
        var marker = mp.blips.new(sprite, pos, {
            name: "" + name,
            scale: 1,
            color: color,
            alpha: 255,
            drawDistance: 50,
            shortRange: true,
            rotation: 0,
            dimension: 0,
        });
        custommarker.push(marker);
    },

    "updateHudMoney": (money) => {
        hud.execute("setMoneyValue('" + money + "')");
    },

    "changeValue": (type, value) => {
        if (type === "money") {
            hud.execute("setMoneyValue('" + value + "')");
        } else if (type === "bank") {
            hud.execute("setBankValue('" + value + "')");
        } else if (type === "drink") {
            hud.execute("setDrinkValue('" + value + "')");
        } else if (type === "food") {
            hud.execute("setFoodValue('" + value + "')");
        } else if (type === "micro") {
            hud.execute("setMicroValue('" + value + "')");
        }
    },

    "attachObject": (name, pos, time) => {
        var o = mp.objects.new(mp.game.joaat(name), pos, {
            alpha: 255,
            dimension: 0
        });
        o.attachTo(mp.players.local.handle, 0, 0, 0.5, 0, 0, 0, 0, true, false, false, false, 0, true);
        setTimeout(function() {
            if (o) {
                o.destroy();
            }
        }, time * 1000);
    },

    "playSound": (d1, d2) => {
        mp.game.audio.playSoundFrontend(-1, d1, d2, true);
    },

    "updatedoor": (doorHash, x, y, z, locked, p5) => {
        //mp.gui.chat.push("DOORCONTROL" +doorHash+x+y+z+locked+p5)
        mp.game.object.doorControl(doorHash, x, y, z, locked, p5, 0, 0);
    },

});

camerasManager.on('stopInterp', (camera) => {
    if (unnötigeCameraAbfrage === "N") return;
    mp.events.callRemote("unnötigesCameraDestroyEvent");
    unnötigeCameraAbfrage = "N";
});

mp.keys.bind(0x45, true, function() {
    if (state != "INGAME") return;
    var fractionData = mp.players.local.getVariable("fractionData");
    fractionData = JSON.parse(fractionData);
    fractionName = fractionData.fractionName;
    var businessData = mp.players.local.getVariable("businessData");
    businessData = JSON.parse(businessData);
    businessName = businessData.businessName;

    if (objects.checkLocalObjectsFirst(player) === "gas") {
        mp.events.callRemote("server:fuelStation:start");
        return;
    }
    if (objects.checkLocalObjectsFirst(player) === "atm") {
        mp.events.callRemote("server:bank:konten");
        return;
    }
    if (objects.checkLocalObjectsFirst(player) === "water") {
        mp.events.callRemote("startShop", 61);
        return;
    }
    if (objects.checkLocalObjectsFirst(player) === "snack") {
        mp.events.callRemote("startShop", 62);
        return;
    }
    if (objects.checkLocalObjectsFirst(player) === "drinks") {
        mp.events.callRemote("startShop", 63);
        return;
    }
    if (objects.checkLocalObjectsFirst(player) === "coffee") {
        mp.events.callRemote("startShop", 64);
        return;
    }
    if (objects.checkLocalObjectsFirst(player) === "kippen") {
        mp.events.callRemote("startShop", 65);
        return;
    }
    for (p of teleports) {
        const tel = JSON.parse(p);
        //mp.events.callRemote("consoleLog", "Radius: " + isInRadius(2, player, new mp.Vector3(tel["start"]["x"], tel["start"]["y"], tel["start"]["z"])));

        if (isInRadius(1, player, new mp.Vector3(tel["start"]["x"], tel["start"]["y"], tel["start"]["z"]))) {
            if (tel["open"] == "Y" || (tel["ownerType"] == "Fraction" && tel["ownerName"] == fractionName) || (tel["ownerType"] == "Business" && tel["ownerName"] == businessName)) {
                mp.events.callRemote("tpPlayer", tel["end"]["x"], tel["end"]["y"], tel["end"]["z"]);
                mp.events.callRemote("changeDimension", tel["dim2"]);
                return;
            } else return;
        }

        if (isInRadius(1, player, new mp.Vector3(tel["end"]["x"], tel["end"]["y"], tel["end"]["z"]))) {
            if (tel["open"] == "Y" || (tel["ownerType"] == "Fraction" && tel["ownerName"] == fractionName) || (tel["ownerType"] == "Business" && tel["ownerName"] == businessName)) {
                mp.events.callRemote("tpPlayer", tel["start"]["x"], tel["start"]["y"], tel["start"]["z"]);
                mp.events.callRemote("changeDimension", tel["dim"]);
                return;
            } else return;
        }

    }

    for (act of actions) {
        const action = JSON.parse(act);
        if (isInRadius(4, player, new mp.Vector3(action["pos"]["x"], action["pos"]["y"], action["pos"]["z"]))) {
            if (action["fraktion"] !== "none") {
                if (action["fraktion"] !== fractionName && action["fraktion"] !== businessName) {
                    mp.game.graphics.notify("~r~Du bist nicht in der passenden Fraktion!");
                    return;
                }

                if (action["action"] === "shop") {
                    mp.events.callRemote("startShop", action["actionID"]);
                }
            } else {
                if (action["action"] === "shop") {
                    let playerWeapon = player.weapon;
                    if(playerWeapon != 2725352035) {
                        mp.events.callRemote("server:shop:ausrauben", [player]);
                    } else if(playerWeapon == 2725352035) {
                        mp.events.callRemote("startShop", action["actionID"]);
                    }
                }
            }
        }
        if (isInRadius(2, player, new mp.Vector3(action["pos"]["x"], action["pos"]["y"], action["pos"]["z"]))) {
            if (action["fraktion"] !== "none") {
                if (action["fraktion"] !== fractionName && action["fraktion"] !== businessName) {
                    mp.game.graphics.notify("~r~Du bist nicht in der passenden Fraktion!");
                    return;
                }
            }

            if (action["action"] === "garage") {
                mp.events.callRemote("openGarage", action["actionID"]);
            } else if (action["action"] === "bank") {
                mp.events.call("createBank");
            } else if (action["action"] === "weed") {
                mp.game.graphics.notify(action["actionID"]);
                mp.events.callRemote("startShopWeed", action["actionID"]);
            }
        }
    }
});


function isInRadius(radius, player, pos) {
    var temppos = [];
    if (mp.players.local.vehicle) {
        temppos[0] = (mp.players.local.vehicle.position.x - pos.x);
        temppos[1] = (mp.players.local.vehicle.position.y - pos.y);
        temppos[2] = (mp.players.local.vehicle.position.z - pos.z);
    } else {
        temppos[0] = mp.players.local.position.x - pos.x;
        temppos[1] = mp.players.local.position.y - pos.y;
        temppos[2] = mp.players.local.position.z - pos.z;
    }
    if (((temppos[0] < radius) & (temppos[0] > -radius)) & ((temppos[1] < radius) && (temppos[1] > -radius)) & ((temppos[2] < radius) & (temppos[2] > -radius))) {
        return true;
    }
    return false;
}