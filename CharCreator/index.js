const Chardata = require('TechGames/CharCreator/chardata.js');
const NativeUI = require("./TechGames/nativeui");
const Menu = NativeUI.Menu;
const UIMenuItem = NativeUI.UIMenuItem;
const UIMenuListItem = NativeUI.UIMenuListItem;
const Point = NativeUI.Point;
const ItemsCollection = NativeUI.ItemsCollection;

//*************************************************************************/ Charcreator Stuff
let creatorMenus = [];
let similarities = [];
let angles = [];
let hairColors = [];
let blushColors = [];
let lipstickColors = [];
let featureData = [];
let appearanceData = [];
let appearanceItems = [];
let appearanceOpacityItems = [];
let opacities = [];
let featureItems = [];
let features = [];

let currentGender = 0;

let hairItem;
let hairColorItem;
let hairHighlightItem;
let eyebrowColorItem;
let beardColorItem;
let eyeColorItem;
let blushColorItem;
let lipstickColorItem;
let chestHairColorItem;

for (let i = 0; i <= 100; i++) similarities.push(i + "%");
for (let i = -180.0; i <= 180.0; i += 5.0) angles.push(i.toFixed(1));
for (let i = 0; i < Chardata.maxHairColor; i++) hairColors.push(i.toString());
for (let i = 0; i < Chardata.maxBlushColor; i++) blushColors.push(i.toString());
for (let i = 0; i < Chardata.maxLipstickColor; i++) lipstickColors.push(i.toString());
for (let i = -1.0; i <= 1.01; i += 0.01) features.push(i.toFixed(2));
for (let i = 0; i <= 100; i++) opacities.push(i + "%");

const ScreenRes = mp.game.graphics.getScreenResolution(0,0);
const MenuPoint = new Point(ScreenRes.x +150, 50);


var creatorMainMenu = new Menu("Creator", "", MenuPoint);

mp.events.callRemote("clientConsoleLog", "creatorMainMenu geladen");
creatorMainMenu.Visible = false;
let genderItem = new UIMenuListItem("Geschlecht", "~r~Dies setzt deine Veränderungen zurück.", new ItemsCollection(["Male", "Female"]));
creatorMainMenu.AddItem(genderItem);
creatorMainMenu.AddItem(new UIMenuItem("Eltern", "Deine Eltern."));
creatorMainMenu.AddItem(new UIMenuItem("Gesicht", "Dein Gesicht."));
creatorMainMenu.AddItem(new UIMenuItem("Aussehen", "Dein Aussehen."));
creatorMainMenu.AddItem(new UIMenuItem("Haare & Farben", "Deine Haare und Farben."));
creatorMainMenu.AddItem(new UIMenuItem("Einreisen", "Erstelle deinen Charakter."));

let creatorParentsMenu = new Menu("Eltern", "",  MenuPoint);
creatorParentsMenu.Visible = false;
let fatherItem = new UIMenuListItem("Vater", "Dein Vater.", new ItemsCollection(Chardata.fatherNames));
let motherItem = new UIMenuListItem("Mutter", "Deine Mutter.", new ItemsCollection(Chardata.motherNames));
let similarityItem = new UIMenuListItem("Ähnlichkeit", "Ähnlichkeit zu den Eltern.\n(weniger = mutter, höher = vater)", new ItemsCollection(similarities));
let skinSimilarityItem = new UIMenuListItem("Hautfarbe", "Ähnlichkeit zu den Eltern.\n(weniger = mutter, höher = vater)", new ItemsCollection(similarities));
creatorParentsMenu.AddItem(fatherItem);
creatorParentsMenu.AddItem(motherItem);
creatorParentsMenu.AddItem(similarityItem);
creatorParentsMenu.AddItem(skinSimilarityItem);
creatorParentsMenu.AddItem(new UIMenuItem("Zufällig", "~r~Zufällig generieren."));


// Charcreator => Hair zeugs
let creatorHairMenu = new Menu("Haare & Farben", "", MenuPoint);
creatorHairMenu.Visible = false;
fillHairMenu();

let creatorAppearanceMenu = new Menu("Aussehen", "", MenuPoint);
creatorAppearanceMenu.Visible = false;

let creatorFeaturesMenu = new Menu("Gesicht", "", MenuPoint);
creatorFeaturesMenu.Visible = false;


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function colorForOverlayIdx(index) {
    let color;

    switch (index) {
        case 1:
            color = beardColorItem.Index;
            break;

        case 2:
            color = eyebrowColorItem.Index;
            break;

        case 5:
            color = blushColorItem.Index;
            break;

        case 8:
            color = lipstickColorItem.Index;
            break;

        case 10:
            color = chestHairColorItem.Index;
            break;

        default:
            color = 0;
    }

    return color;
}

function updateParents() {
    mp.players.local.setHeadBlendData(
        // shape
        Chardata.mothers[motherItem.Index],
        Chardata.fathers[fatherItem.Index],
        0,

        // skin
        Chardata.mothers[motherItem.Index],
        Chardata.fathers[fatherItem.Index],
        0,

        // mixes
        similarityItem.Index * 0.01,
        skinSimilarityItem.Index * 0.01,
        0.0,

        false
    );
}

function updateFaceFeature(index) {
    mp.players.local.setFaceFeature(index, parseFloat(featureItems[index].SelectedValue));
}

function updateAppearance(index) {
    let overlayID = (appearanceItems[index].Index == 0) ? 255 : appearanceItems[index].Index - 1;
    mp.players.local.setHeadOverlay(index, overlayID, appearanceOpacityItems[index].Index * 0.01, colorForOverlayIdx(index), 0);
}


function fillHairMenu() {
    hairItem = new UIMenuListItem("Haare", "Deine Haare.", new ItemsCollection(Chardata.hairList[currentGender].map(h => h.Name)));
    creatorHairMenu.AddItem(hairItem);

    hairColorItem = new UIMenuListItem("Haar Farbe", "Deine Haarfarbe.", new ItemsCollection(hairColors));
    creatorHairMenu.AddItem(hairColorItem);

    hairHighlightItem = new UIMenuListItem("Haar Highlight Farbe", "Deine Haar Highlight Farbe.", new ItemsCollection(hairColors));
    creatorHairMenu.AddItem(hairHighlightItem);

    eyebrowColorItem = new UIMenuListItem("Augenbrauen Farbe", "Deine Augenbrauen Farbe.", new ItemsCollection(hairColors));
    creatorHairMenu.AddItem(eyebrowColorItem);

    beardColorItem = new UIMenuListItem("Bart Farbe", "Deine Bart Farbe.", new ItemsCollection(hairColors));
    creatorHairMenu.AddItem(beardColorItem);

    eyeColorItem = new UIMenuListItem("Augen Farbe", "Deine Augenfarbe.", new ItemsCollection(Chardata.eyeColors));
    creatorHairMenu.AddItem(eyeColorItem);

    blushColorItem = new UIMenuListItem("Rötungsfarbe", "Deine Rötungsfarbe.", new ItemsCollection(blushColors));
    creatorHairMenu.AddItem(blushColorItem);

    lipstickColorItem = new UIMenuListItem("Lippenstift Farbe", "Deine Lippenstift Farbe.", new ItemsCollection(lipstickColors));
    creatorHairMenu.AddItem(lipstickColorItem);

    chestHairColorItem = new UIMenuListItem("Körper Haar Farbe", "Deine Körper Haar Farbe.", new ItemsCollection(hairColors));
    creatorHairMenu.AddItem(chestHairColorItem);

    creatorHairMenu.AddItem(new UIMenuItem("Zufällig", "~r~Zufällig generieren."));
    creatorHairMenu.AddItem(new UIMenuItem("Zurücksetzen", "~r~Einstellung zurücksetzen."));
}

function updateHairAndColors() {
    mp.players.local.setComponentVariation(2, Chardata.hairList[currentGender][hairItem.Index].ID, 0, 2);
    mp.players.local.setHairColor(hairColorItem.Index, hairHighlightItem.Index);
    mp.players.local.setEyeColor(eyeColorItem.Index);
    mp.players.local.setHeadOverlayColor(1, 1, beardColorItem.Index, 0);
    mp.players.local.setHeadOverlayColor(2, 1, eyebrowColorItem.Index, 0);
    mp.players.local.setHeadOverlayColor(5, 2, blushColorItem.Index, 0);
    mp.players.local.setHeadOverlayColor(8, 2, lipstickColorItem.Index, 0);
    mp.players.local.setHeadOverlayColor(10, 1, chestHairColorItem.Index, 0);
}

function applyCreatorOutfit() {
    if (currentGender == 0) {
        mp.players.local.setDefaultComponentVariation();
        mp.players.local.setComponentVariation(3, 15, 0, 2);
        mp.players.local.setComponentVariation(4, 21, 0, 2);
        mp.players.local.setComponentVariation(6, 34, 0, 2);
        mp.players.local.setComponentVariation(8, 15, 0, 2);
        mp.players.local.setComponentVariation(11, 15, 0, 2);
    } else {
        mp.players.local.setDefaultComponentVariation();
        mp.players.local.setComponentVariation(3, 15, 0, 2);
        mp.players.local.setComponentVariation(4, 10, 0, 2);
        mp.players.local.setComponentVariation(6, 35, 0, 2);
        mp.players.local.setComponentVariation(8, 15, 0, 2);
        mp.players.local.setComponentVariation(11, 15, 0, 2);
    }
}



function resetParentsMenu(refresh = false) {
    fatherItem.Index = 0;
    motherItem.Index = 0;
    similarityItem.Index = (currentGender == 0) ? 100 : 0;
    skinSimilarityItem.Index = (currentGender == 0) ? 100 : 0;

    updateParents();
    if (refresh) creatorParentsMenu.RefreshIndex();
}

function resetFeaturesMenu(refresh = false) {
    for (let i = 0; i < Chardata.featureNames.length; i++) {
        featureItems[i].Index = 100;
        updateFaceFeature(i);
    }

    if (refresh) creatorFeaturesMenu.RefreshIndex();
}

function resetAppearanceMenu(refresh = false) {
    for (let i = 0; i < Chardata.appearanceNames.length; i++) {
        appearanceItems[i].Index = 0;
        appearanceOpacityItems[i].Index = 100;
        updateAppearance(i);
    }

    if (refresh) creatorAppearanceMenu.RefreshIndex();
}

function resetHairAndColorsMenu(refresh = false) {
    hairItem.Index = 0;
    hairColorItem.Index = 0;
    hairHighlightItem.Index = 0;
    eyebrowColorItem.Index = 0;
    beardColorItem.Index = 0;
    eyeColorItem.Index = 0;
    blushColorItem.Index = 0;
    lipstickColorItem.Index = 0;
    chestHairColorItem.Index = 0;
    updateHairAndColors();

    if (refresh) creatorHairMenu.RefreshIndex();
}


// Charcreator = 1
creatorMainMenu.ListChange.on((item, listIndex) => {
    if (item == genderItem) {
        currentGender = listIndex;
        mp.events.callRemote("creator_GenderChange", listIndex);

        setTimeout(() => {
            mp.players.local.clearTasksImmediately();
            applyCreatorOutfit();
            resetParentsMenu(true);
            resetFeaturesMenu(true);
            resetAppearanceMenu(true);

            creatorHairMenu.Clear();
            fillHairMenu();
            creatorHairMenu.RefreshIndex();
        }, 200);
    } else if (item == angleItem) {
        mp.players.local.setHeading(parseFloat(angleItem.SelectedValue));
        mp.players.local.clearTasksImmediately();
    }
});

// Charcreator = 2
creatorMainMenu.ItemSelect.on((item, index) => {
    switch (index) {
        case 1:
            creatorMainMenu.Visible = false;
            creatorParentsMenu.Visible = true;
            break;

        case 2:
            creatorMainMenu.Visible = false;
            creatorFeaturesMenu.Visible = true;
            break;

        case 3:
            creatorMainMenu.Visible = false;
            creatorAppearanceMenu.Visible = true;
            break;

        case 4:
            creatorMainMenu.Visible = false;
            creatorHairMenu.Visible = true;
            break;
        case 5:

            let parentData = {
                Father: Chardata.fathers[fatherItem.Index],
                Mother: Chardata.mothers[motherItem.Index],
                Similarity: similarityItem.Index * 0.01,
                SkinSimilarity: skinSimilarityItem.Index * 0.01
            };

            for (let i = 0; i < featureItems.length; i++) featureData.push(parseFloat(featureItems[i].SelectedValue));

            for (let i = 0; i < appearanceItems.length; i++) appearanceData.push({
                Value: ((appearanceItems[i].Index == 0) ? 255 : appearanceItems[i].Index - 1),
                Opacity: appearanceOpacityItems[i].Index * 0.01
            });

            let hairAndColors = [
                Chardata.hairList[currentGender][hairItem.Index].ID,
                hairColorItem.Index,
                hairHighlightItem.Index,
                eyebrowColorItem.Index,
                beardColorItem.Index,
                eyeColorItem.Index,
                blushColorItem.Index,
                lipstickColorItem.Index,
                chestHairColorItem.Index
            ];

            mp.events.callRemote("createCharacter", JSON.stringify({
                "Gender": currentGender,
                "Parents": parentData,
                "Features": featureData,
                "Appearance": appearanceData,
                "Hair": hairAndColors
            }));
            break;
    }
});

// Charcreator = Close Menu
creatorMainMenu.MenuClose.on(() => {
    creatorMainMenu.Visible = true;
});

// Charctraor => Hair 1
creatorHairMenu.ItemSelect.on((item, index) => {
    switch (item.Text) {
        case "Randomize":
            hairItem.Index = getRandomInt(0, Chardata.hairList[currentGender].length - 1);
            hairColorItem.Index = getRandomInt(0, Chardata.maxHairColor);
            hairHighlightItem.Index = getRandomInt(0, Chardata.maxHairColor);
            eyebrowColorItem.Index = getRandomInt(0, Chardata.maxHairColor);
            beardColorItem.Index = getRandomInt(0, Chardata.maxHairColor);
            eyeColorItem.Index = getRandomInt(0, Chardata.maxEyeColor);
            blushColorItem.Index = getRandomInt(0, Chardata.maxBlushColor);
            lipstickColorItem.Index = getRandomInt(0, Chardata.maxLipstickColor);
            chestHairColorItem.Index = getRandomInt(0, Chardata.maxHairColor);
            updateHairAndColors();
            break;

        case "Reset":
            resetHairAndColorsMenu();
            break;
    }
});

// Charctraor => Hair 2
creatorHairMenu.ListChange.on((item, listIndex) => {
    if (item == hairItem) {
        let hairStyle = Chardata.hairList[currentGender][listIndex];
        mp.players.local.setComponentVariation(2, hairStyle.ID, 0, 2);
    } else {
        switch (creatorHairMenu.CurrentSelection) {
            case 1: // hair color
                mp.players.local.setHairColor(listIndex, hairHighlightItem.Index);
                break;

            case 2: // hair highlight color
                mp.players.local.setHairColor(hairColorItem.Index, listIndex);
                break;

            case 3: // eyebrow color
                mp.players.local.setHeadOverlayColor(2, 1, listIndex, 0);
                break;

            case 4: // facial hair color
                mp.players.local.setHeadOverlayColor(1, 1, listIndex, 0);
                break;

            case 5: // eye color
                mp.players.local.setEyeColor(listIndex);
                break;

            case 6: // blush color
                mp.players.local.setHeadOverlayColor(5, 2, listIndex, 0);
                break;

            case 7: // lipstick color
                mp.players.local.setHeadOverlayColor(8, 2, listIndex, 0);
                break;

            case 8: // chest hair color
                mp.players.local.setHeadOverlayColor(10, 1, listIndex, 0);
                break;
        }
    }
});

for (let i = 0; i < Chardata.appearanceNames.length; i++) {
    let items = [];
    for (let j = 0, max = mp.game.ped.getNumHeadOverlayValues(i); j <= max; j++) items.push((Chardata.appearanceItemNames[i][j] === undefined) ? j.toString() : Chardata.appearanceItemNames[i][j]);

    let tempAppearanceItem = new UIMenuListItem(Chardata.appearanceNames[i], "", new ItemsCollection(items));
    appearanceItems.push(tempAppearanceItem);
    creatorAppearanceMenu.AddItem(tempAppearanceItem);

    let tempAppearanceOpacityItem = new UIMenuListItem(Chardata.appearanceNames[i] + " Opacity", "", new ItemsCollection(opacities));
    tempAppearanceOpacityItem.Index = 100;
    appearanceOpacityItems.push(tempAppearanceOpacityItem);
    creatorAppearanceMenu.AddItem(tempAppearanceOpacityItem);
}
creatorAppearanceMenu.AddItem(new UIMenuItem("Zufällig", "~r~Zufällig Generieren."));
creatorAppearanceMenu.AddItem(new UIMenuItem("Zurücksetzen", "~r~Einstellung zurücksetzen."));

//Rdm zeugs das da sein muss, das funkt 1
creatorHairMenu.ParentMenu = creatorMainMenu;
creatorHairMenu.Visible = false;
creatorMenus.push(creatorHairMenu);

// Charcreator => Apperance 1
creatorAppearanceMenu.ItemSelect.on((item, index) => {
    switch (item.Text) {
        case "Randomize":
            for (let i = 0; i < Chardata.appearanceNames.length; i++) {
                appearanceItems[i].Index = getRandomInt(0, mp.game.ped.getNumHeadOverlayValues(i) - 1);
                appearanceOpacityItems[i].Index = getRandomInt(0, 100);
                updateAppearance(i);
            }
            break;

        case "Reset":
            resetAppearanceMenu();
            break;
    }
});

// Charcreator => Apperance 2
creatorAppearanceMenu.ListChange.on((item, listIndex) => {
    let idx = (creatorAppearanceMenu.CurrentSelection % 2 == 0) ? (creatorAppearanceMenu.CurrentSelection / 2) : Math.floor(creatorAppearanceMenu.CurrentSelection / 2);
    updateAppearance(idx);
});

//Rdm zeugs das da sein muss, das funkt 2
creatorAppearanceMenu.ParentMenu = creatorMainMenu;
creatorAppearanceMenu.Visible = false;
creatorMenus.push(creatorAppearanceMenu);

// Charcreator => Parents 1
creatorParentsMenu.ItemSelect.on((item, index) => {
    switch (item.Text) {
        case "Randomize":
            fatherItem.Index = getRandomInt(0, Chardata.fathers.length - 1);
            motherItem.Index = getRandomInt(0, Chardata.mothers.length - 1);
            similarityItem.Index = getRandomInt(0, 100);
            skinSimilarityItem.Index = getRandomInt(0, 100);
            updateParents();
            break;
    }
});

// Charcreator => Parents 2
creatorParentsMenu.ListChange.on((item, listIndex) => {
    updateParents();
});

//Rdm zeugs das da sein muss, das funkt 3
creatorParentsMenu.ParentMenu = creatorMainMenu;
creatorParentsMenu.Visible = false;
creatorMenus.push(creatorParentsMenu);

// Charcreator => Features 1
creatorFeaturesMenu.ItemSelect.on((item, index) => {
    switch (item.Text) {
        case "Randomize":
            for (let i = 0; i < Chardata.featureNames.length; i++) {
                featureItems[i].Index = getRandomInt(0, 200);
                updateFaceFeature(i);
            }
            break;

        case "Reset":
            resetFeaturesMenu();
            break;
    }
});

// Charcreator => Features 2
creatorFeaturesMenu.ListChange.on((item, listIndex) => {
    updateFaceFeature(featureItems.indexOf(item));
});

for (let i = 0; i < Chardata.featureNames.length; i++) {
    let tempFeatureItem = new UIMenuListItem(Chardata.featureNames[i], "", new ItemsCollection(features));
    tempFeatureItem.Index = 100;
    featureItems.push(tempFeatureItem);
    creatorFeaturesMenu.AddItem(tempFeatureItem);
}

creatorFeaturesMenu.AddItem(new UIMenuItem("Zufällig", "~r~Zufällige Generierung."));
creatorFeaturesMenu.AddItem(new UIMenuItem("Zurücksetzen", "~r~Einstellung zurücksetzen."));

//Rdm zeugs das da sein muss, das funkt 4
creatorFeaturesMenu.ParentMenu = creatorMainMenu;
creatorFeaturesMenu.Visible = false;
creatorMenus.push(creatorFeaturesMenu);
