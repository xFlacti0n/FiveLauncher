// Native UI
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


// Tuning
const ui = new Menu("Tuning", "Tuning Teile", MenuPoint);
ui.Visible = false;

    /*
    ui.AddItem(new UIMenuListItem(
        "Perlglanz",
        "Perlglanz des Fahrzeugs ändern",
        new ItemsCollection([   "weißlich" ,"rötlich"])
        ));
        */

	ui.AddItem(new UIMenuListItem(
        "Primärfarbe",
		"Die Farbe des Fahrzeuges ändern",
		new ItemsCollection([	"Schwarz~g~$1.250.00",
								"Graphit~g~$1.250.00",
								"Stahl Schw.~g~$1.250.00",
								"Dunkelsilber~g~$1.250.00",
								"Silber~g~$1.250.00",
								"Blau-Silber~g~$1.250.00",
								"Graustahl~g~$1.250.00",
								"Schatten Silber~g~$1.250.00",
								"Stein Silber~g~$1.250.00",
								"Mitternachts~g~$1.250.00",
								"Gun Metal~g~$1.250.00",
								"Anthrazit Grau~g~$1.250.00",
								"Matt Schwarz",
								"Matt Grau",
								"Matt Hellgrau",
								"Shiny Schwarz",
								"Shiny Schwarz 2",
								"Shiny Silber",
								"Shiny Silber 2",
								"Shiny Gun Metal",
								"Shiny Schatten Silber",
								"Matt Schwarz",
								"Matt Graphit",
								"Matt Silber Grau",
								"Matt Silber",
								"Matt Blau Silber",
								"Matt Schatten Silber",
								"Rot~g~$1.250.00",
								"Torino rot~g~$1.250.00",
								"Formula rot~g~$1.250.00",
								"Blaze rot~g~$1.250.00",
								"Anmutiges rot~g~$1.250.00",
								"Granarot~g~$1.250.00",
								"Wüstenrot~g~$1.250.00",
								"Cabernet rot~g~$1.250.00",
								"Bonbonrot~g~$1.250.00",
								"Sunrise orange~g~$1.250.00",
								"Klassisches Gold",
								"Orange~g~$1.250.00",
								"Matt Rot",
								"Matt Dunkelrot",
								"Matt Orange",
								"Matt Gelb",
								"Shiny Rot",
								"Hellrot~g~$1.250.00",
								"Shiny Granatrot",
								"Abgenutztes Rot",
								"Goldenes Rot",
								"Abgenutztes Dunkelrot",
								"Dunkelgrün~g~$1.250.00",
								"Renngrün~g~$1.250.00",
								"Meeresgrün~g~$1.250.00",
								"Olivengrün~g~$1.250.00",
								"Grün~g~$1.250.00",
								"Blaugrün ~g~$1.250.00",
								"Limettengrün~g~$1.250.00",
								"Dunkelgrün 2~g~$1.250.00",
								"Shiny Grün",
								"Abgenutztes Dunkelgrün",
								"Abgenutztes Grün",
								"Abgenutztes Meeresgrün",
								"Mitternachtsblau~g~$1.250.00",
								"Dunkelblau~g~$1.250.00",
								"Sächsischblau~g~$1.250.00",
								"Hafenblau~g~$1.250.00",
								"Diamantblau~g~$1.250.00",
								"Surferblau~g~$1.250.00",
								"Nautischesblau~g~$1.250.00",
								"Hellblau~g~$1.250.00",
								"Violettblau~g~$1.250.00",
								"Spinnakerblau~g~$1.250.00",
								"Ultrablau~g~$1.250.00",
								"Hellblau 2~g~$1.250.00",
								"Glänzend Dunkelblau",
								"Glänzend Mitternachtsblau",
								"Glänzend Blau",
								"Meerschaumblau",
								"Blitzblau",
								"Mauiblau",
								"Glänzend Hellblau",
								"Matt Dunkelblau",
								"Matt Blau",
								"Matt Mitternachtsblau",
								"Abgenutztes Dunkelblau",
								"Abgenutztes Blau",
								"Abgenutztes Hellblau",
								"Taxi Gelb",
								"Renngelb",
								"Bronze",
								"Vogelgelb",
								"Citrusgelb",
								"Champagnier",
								"Beige",
								"Elfenbein",
								"Schokobraun",
								"Goldbraun",
								"Hellbraun",
								"Strohbeige",
								"Moosbraun",
								"Bostonbraun",
								"Buchenholz",
								"Dunkles Buchenholz",
								"Schoko Orange",
								"Sandfarbend",
								"Sonnengebleicht",
								"Cremefarbend",
								"Glänzend Braun",
								"Glänzend Mittelbraun",
								"Glänzend Hellbraun",
								"Weiß",
								"Frostweiß",
								"Honigbeige",
								"Abgenutztes Braun",
								"Abgenutztes Dunkelbraun",
								"Abgenutztes Strohbeige",
								"Gebürsteter Stahl",
								"Gebürsteter Schwarzstahl",
								"Gebürstetes Aluminium",
								"Chrome",
								"Grauweiß",
								"Glänzend Grauweiß",
								"Abgenutztes Orange",
								"Abgenutztes Hellorange",
								"Grünstich",
								"Abgenutztes Taxigelb",
								"Polizei Blau",
								"Matt Grün",
								"Matt Braun",
								"Abgenutztes Orange 2",
								"Matt Weiß",
								"Abgenutztes Armeegrün",
								"Reines Weiß",
								"Heißes Pink",
								"Lachsrosa",
								"Vermillion Pink",
								"Orange 2",
								"Grün 2",
								"Blau 2",
								"Schwarzblau",
								"Schwarzlila",
								"Schwarzrot",
								"Jägergrün",
								"Lila",
								"Matt Lila",
								"Matt Dunkellila",
								"Lavarot",
								"Waldgrün",
								"Olivegrün",
								"Wüstenbraun",
								"Wüstenbräune",
								"Laubgrün",
								"Legierung",
								"Epsilonblau",
								"Pures Gold",
								"Gebürstetes Gold"])
    ));

	ui.AddItem(new UIMenuListItem(
        "Sekundärfarbe",
		"Die Farbe des Fahrzeuges ändern",
		new ItemsCollection([	"Schwarz ",
								"Graphit ",
								"Stahl Schw.  ",
								"Dunkelsilber ",
								"Silber ",
								"Blau-Silber ",
								"Graustahl ",
								"Schatten Silber ",
								"Stein Silber ",
								"Mitternachts Silber ",
								"Gun Metal ",
								"Anthrazit Grau ",
								"Matt Schwarz ",
								"Matt Grau ",
								"Matt Hellgrau ",
								"Shiny Schwarz ",
								"Shiny Schwarz 2 ",
								"Shiny Silber ",
								"Shiny Silber 2 ",
								"Shiny Gun Metal ",
								"Shiny Schatten Silber ",
								"Matt Schwarz ",
								"Matt Graphit ",
								"Matt Silber Grau ",
								"Matt Silber ",
								"Matt Blau Silber ",
								"Matt Schatten Silber ",
								"Rot ",
								"Torino rot ",
								"Formula rot ",
								"Blaze rot ",
								"Anmutiges rot ",
								"Granarot ",
								"Wüstenrot ",
								"Cabernet rot ",
								"Bonbonrot ",
								"Sunrise orange ",
								"Klassisches Gold ",
								"Orange ",
								"Matt Rot ",
								"Matt Dunkelrot ",
								"Matt Orange ",
								"Matt Gelb ",
								"Shiny Rot ",
								"Hellrot ",
								"Shiny Granatrot ",
								"Abgenutztes Rot ",
								"Goldenes Rot ",
								"Abgenutztes Dunkelrot ",
								"Dunkelgrün ",
								"Renngrün ",
								"Meeresgrün ",
								"Olivengrün ",
								"Grün ",
								"Blaugrün ",
								"Limettengrün ",
								"Dunkelgrün 2 ",
								"Shiny Grün ",
								"Abgenutztes Dunkelgrün ",
								"Abgenutztes Grün ",
								"Abgenutztes Meeresgrün ",
								"Mitternachtsblau ",
								"Dunkelblau ",
								"Sächsischblau ",
								"Hafenblau ",
								"Diamantblau ",
								"Surferblau ",
								"Nautischesblau ",
								"Hellblau ",
								"Violettblau ",
								"Spinnakerblau ",
								"Ultrablau ",
								"Hellblau 2 ",
								"Glänzend Dunkelblau ",
								"Glänzend Mitternachtsblau ",
								"Glänzend Blau ",
								"Meerschaumblau ",
								"Blitzblau ",
								"Mauiblau ",
								"Glänzend Hellblau ",
								"Matt Dunkelblau ",
								"Matt Blau ",
								"Matt Mitternachtsblau ",
								"Abgenutztes Dunkelblau ",
								"Abgenutztes Blau ",
								"Abgenutztes Hellblau ",
								"Taxi Gelb ",
								"Renngelb ",
								"Bronze ",
								"Vogelgelb ",
								"Citrusgelb ",
								"Champagnier ",
								"Beige ",
								"Elfenbein ",
								"Schokobraun ",
								"Goldbraun ",
								"Hellbraun ",
								"Strohbeige ",
								"Moosbraun ",
								"Bostonbraun ",
								"Buchenholz ",
								"Dunkles Buchenholz ",
								"Schoko Orange ",
								"Sandfarbend ",
								"Sonnengebleicht ",
								"Cremefarbend ",
								"Glänzend Braun ",
								"Glänzend Mittelbraun ",
								"Glänzend Hellbraun ",
								"Weiß ",
								"Frostweiß ",
								"Honigbeige ",
								"Abgenutztes Braun ",
								"Abgenutztes Dunkelbraun ",
								"Abgenutztes Strohbeige ",
								"Gebürsteter Stahl ",
								"Gebürsteter Schwarzstahl ",
								"Gebürstetes Aluminium ",
								"Chrome ",
								"Grauweiß ",
								"Glänzend Grauweiß ",
								"Abgenutztes Orange ",
								"Abgenutztes Hellorange ",
								"Grünstich ",
								"Abgenutztes Taxigelb ",
								"Polizei Blau ",
								"Matt Grün ",
								"Matt Braun ",
								"Abgenutztes Orange 2 ",
								"Matt Weiß ",
								"Abgenutztes Armeegrün ",
								"Reines Weiß ",
								"Heißes Pink ",
								"Lachsrosa ",
								"Vermillion Pink ",
								"Orange 2 ",
								"Grün 2 ",
								"Blau 2 ",
								"Schwarzblau ",
								"Schwarzlila ",
								"Schwarzrot ",
								"Jägergrün ",
								"Lila ",
								"Matt Lila ",
								"Matt Dunkellila ",
								"Lavarot ",
								"Waldgrün ",
								"Olivegrün ",
								"Wüstenbraun ",
								"Wüstenbräune ",
								"Laubgrün ",
								"Legierung ",
								"Epsilonblau ",
								"Pures Gold ",
								"Gebürstetes Gold "])
    ));
    ui.AddItem(new UIMenuListItem(
        "Felgen",
        "Die Felgen des Fahrzeuges ändern",
        new ItemsCollection(["Felgen Std.", "Felgen 0", "Felgen 1", "Felgen 2", "Felgen 3", "Felgen 4", "Felgen 5", "Felgen 6", "Felgen 7", "Felgen 8", "Felgen 9", "Felgen 10", "Felgen 11", "Felgen 12", "Felgen 13", "Felgen 14", "Felgen 15", "Felgen 16", "Felgen 17", "Felgen 18", "Felgen 19", "Felgen 20", "Felgen 21", "Felgen 21", "Felgen 22", "Felgen 23", "Felgen 24", "Felgen 25", "Felgen 26", "Felgen 27", "Felgen 28", "Felgen 29", "Felgen 30", "Felgen 31", "Felgen 32", "Felgen 33", "Felgen 34", "Felgen 35", "Felgen 36", "Felgen 37", "Felgen 38", "Felgen 39", "Felgen 40", "Felgen 41", "Felgen 42", "Felgen 43", "Felgen 44", "Felgen 45", "Felgen 46", "Felgen 47", "Felgen 48", "Felgen 49", "Felgen 50", "Felgen 51", "Felgen 52"])
    ));
	ui.AddItem(new UIMenuListItem(
		"Felgen Farbe",
		"Die Farbe der Felgen ändern",
		new ItemsCollection(["Metallic Rot", "Metallic Blau", "Metallic Grün", "Metallic Gelb", "Metallic Weiß", "Metallic Lila"])
    ));
	ui.AddItem(new UIMenuListItem(
		"Scheiben Tönung",
		"Stärke der Scheiben Tönung",
		new ItemsCollection(["Toenung Std.", "Toenung Stark", "Toenung Mittel", "Toenung Leicht"])
	));
	ui.AddItem(new UIMenuListItem(
		"Design",
		"Ändere das Design deines Fahrzeugs",
		new ItemsCollection(["Kein Design", "Design 1", "Design 2", "Design 3", "Design 4", "Design 5", "Design 6", "Design 7", "Design 8"])
	));
	ui.AddItem(new UIMenuListItem(
        "Neon an/aus",
        "Unterbodenbeleuchtung an oder aus",
        new ItemsCollection(["Neon aus", "Neon an"])
    ));
	ui.AddItem(new UIMenuListItem(
		"Neon Farbe",
		"Ändere die Farbe der Unterbodenbeleuchtung",
		new ItemsCollection(["Neon Rot", "Neon Grün", "Neon Blau", "Neon Pink", "Neon Lila", "Neon Lime", "Neon Gelb", "Neon Weiß", "Neon Hellblau", "Neon Orange"])
	));
    ui.AddItem(new UIMenuListItem(
        "Spoiler",
        "Den Spoiler des Fahrzeuges ändern",
        new ItemsCollection(["Spoiler Std.", "Spoiler 1", "Spoiler 2", "Spoiler 3", "Spoiler 4", "Spoiler 5", "Spoiler 6", "Spoiler 7", "Spoiler 8", "Spoiler 9", "Spoiler 10", "Spoiler 11"])
    ));
    ui.AddItem(new UIMenuListItem(
        "Motorhaube",
        "Die Motorhaube des Fahrzeuges ändern",
        new ItemsCollection(["Motorhaube Std.", "Motorhaube 1", "Motorhaube 2", "Motorhaube 3", "Motorhaube 4", "Motorhaube 5", "Motorhaube 6", "Motorhaube 7", "Motorhaube 8", "Motorhaube 9", "Motorhaube 10", "Motorhaube 11"])
    ));
    ui.AddItem(new UIMenuListItem(
        "Vordere Stoßstange",
        "Die Vordere Stoßstange des Fahrzeuges ändern",
        new ItemsCollection(["Front Std.", "Front 1", "Front 2", "Front 3", "Front 4", "Front 5", "Front 6", "Front 7", "Front 8", "Front 9", "Front 10", "Front 11"])
    ));
    ui.AddItem(new UIMenuListItem(
        "Hintere Stoßstange",
        "Die Hintere Stoßstange des Fahrzeuges ändern",
        new ItemsCollection(["Heck Std.", "Heck 1", "Heck 2", "Heck 3", "Heck 4", "Heck 5", "Heck 6", "Heck 7", "Heck 8", "Heck 9", "Heck 10", "Heck 11"])
    ));
    ui.AddItem(new UIMenuListItem(
        "Seitenverkleidung",
        "Die Seitenverkleidung des Fahrzeuges ändern",
        new ItemsCollection(["Schürze Std.", "Schürze 1", "Schürze 2", "Schürze 3", "Schürze 4", "Schürze 5", "Schürze 6", "Schürze 7", "Schürze 8", "Schürze 9", "Schürze 10", "Schürze 11"])
    ));
    ui.AddItem(new UIMenuListItem(
        "Auspuff",
        "Den Auspuff des Fahrzeuges ändern",
        new ItemsCollection(["Auspuff Std.", "Auspuff 1", "Auspuff 2", "Auspuff 3", "Auspuff 4", "Auspuff 5", "Auspuff 6", "Auspuff 7", "Auspuff 8", "Auspuff 9", "Auspuff 10", "Auspuff 11"])
    ));
    ui.AddItem(new UIMenuListItem(
        "Kotflügel",
        "Den Kotflügel des Fahrzeuges ändern",
        new ItemsCollection(["Kotflügel Std.", "Kotflügel 1", "Kotflügel 2", "Kotflügel 3", "Kotflügel 4", "Kotflügel 5", "Kotflügel 6", "Kotflügel 7", "Kotflügel 8", "Kotflügel 9", "Kotflügel 10", "Kotflügel 11"])
    ));
    ui.AddItem(new UIMenuListItem(
        "Dach",
        "Das Dach des Fahrzeuges ändern",
        new ItemsCollection(["Dach Std.", "Dach 1", "Dach 2", "Dach 3", "Dach 4", "Dach 5", "Dach 6", "Dach 7", "Dach 8", "Dach 9", "Dach 10", "Dach 11"])
    ));
    ui.AddItem(new UIMenuListItem(
        "Motor",
        "Den Motor des Fahrzeuges ändern",
        new ItemsCollection(["Motor Std.", "Motor 1", "Motor 2", "Motor 3", "Motor 4"])
    ));
    ui.AddItem(new UIMenuListItem(
        "Bemsen",
        "Die Bemsen des Fahrzeuges ändern",
        new ItemsCollection(["Bremsen Std.", "Bremsen 1", "Bremsen 2", "Bremsen 3"])
    ));
    ui.AddItem(new UIMenuListItem(
        "Getriebe",
        "Das Getriebe des Fahrzeuges ändern",
        new ItemsCollection(["Getriebe Std.", "Getriebe 1", "Getriebe 2", "Getriebe 3"])
    ));
    ui.AddItem(new UIMenuListItem(
        "Turbo",
        "Der Turbo des Fahrzeuges ändern",
        new ItemsCollection(["Kein Turbo", "Turbo"])
    ));
    ui.AddItem(new UIMenuListItem(
        "Federung",
        "Die Federung des Fahrzeuges ändern",
        new ItemsCollection(["Federung Std.", "Federung 1", "Federung 2", "Federung 3", "Federung 4",])
    ));
    ui.AddItem(new UIMenuListItem(
        "Rahmen",
        "Den Rahmen des Fahrzeuges ändern",
        new ItemsCollection(["Rahmen Std.", "Rahmen 1", "Rahmen 2", "Rahmen 3", "Rahmen 4", "Rahmen 5", "Rahmen 6", "Rahmen 7", "Rahmen 8", "Rahmen 9", "Rahmen 10", "Rahmen 11"])
    ));
    ui.AddItem(new UIMenuListItem(
        "Gitter",
        "Das Gitter des Fahrzeuges ändern",
        new ItemsCollection(["Gitter Std.", "Gitter 1", "Gitter 2", "Gitter 3", "Gitter 4", "Gitter 5", "Gitter 6", "Gitter 7", "Gitter 8", "Gitter 9", "Gitter 10", "Gitter 11"])
    ));
    ui.AddItem(new UIMenuListItem(
        "Xenon",
        "Die Xeon Scheinwärfer des Fahrzeuges ändern",
        new ItemsCollection(["Kein Xenon", "Xenon"])
    ));
    ui.AddItem(new UIMenuListItem(
        "Hupe",
        "Die Hupe des Fahrzeuges ändern",
        new ItemsCollection(["Hupe Std.", "Hupe 1", "Hupe 2", "Hupe 3", "Hupe 4", "Hupe 5", "Hupe 6", "Hupe 7", "Hupe 8", "Hupe 9", "Hupe 10", "Hupe 11", "Hupe 12", "Hupe 13", "Hupe 14", "Hupe 15", "Hupe 16", "Hupe 17", "Hupe 18", "Hupe 19", "Hupe 20", "Hupe 21", "Hupe 22", "Hupe 23", "Hupe 23", "Hupe 24", "Hupe 25", "Hupe 26", "Hupe 27", "Hupe 28", "Hupe 29", "Hupe 30", "Hupe 31", "Hupe 32", "Hupe 33", "Hupe 34", "Hupe 35", "Hupe 36", "Hupe 37", "Hupe 38", "Hupe 39", "Hupe 40", "Hupe 41", "Hupe 42", "Hupe 43", "Hupe 44", "Hupe 45", "Hupe 46", "Hupe 47", "Hupe 48", "Hupe 49", "Hupe 50", "Hupe 51", "Hupe 52"])
    ));
    ui.AddItem(new UIMenuListItem(
        "Nummernschild",
        "Das Nummernschilddesign wählen",
        new ItemsCollection(["Std. Schild", "Schild 1", "Schild 2", "Schild 3", "Schild 4", "Schild 5", "Schild 6", "Schild 7", "Schild 8", "Schild 9", "Schild 10"])
    ));
    ui.AddItem(new UIMenuListItem(
        "Innenausstattung",
        "Innenausstattung wählen",
        new ItemsCollection(["Std. Innenraum", "Innenraum 1", "Innenraum 2", "Innenraum 3"])
    ));
    ui.AddItem(new UIMenuListItem(
        "Ornamente",
        "Ornamente wählen",
        new ItemsCollection(["Std. Ornamente", "Ornament 1", "Ornament 2", "Ornament 3"])
    ));
    ui.AddItem(new UIMenuItem(
        "Reparieren",
        "Repariert das Auto"
    ));

ui.ItemSelect.on((item, index, value) => {
    let position = mp.players.local.position;
	let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
    let vehicle = mp.vehicles.atHandle(vehHandle);
    // REPAIR
    if(item.Text == 'Reparieren') {
        mp.events.callRemote("repair", vehicle);
    }
});

ui.ListChange.on((item, index, value) => {
		let position = mp.players.local.position;
		let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
        let vehicle = mp.vehicles.atHandle(vehHandle);

        // PEARL
        if (item.SelectedItem.DisplayText == 'weißlich') {
        mp.events.callRemote("modpearl", vehicle, 4);
    }   else if (item.SelectedItem.DisplayText == 'silbern') {
        mp.events.callRemote("modpearl", vehicle, 3);

    }
		// PRIMARY
		else if (item.SelectedItem.DisplayText == 'Schwarz~g~$1.250.00') {
		mp.events.callRemote("modcolor1", vehicle, 0);
	}   else if (item.SelectedItem.DisplayText == 'Graphit~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 1);
	}   else if (item.SelectedItem.DisplayText == 'Stahl Schw.~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 2);
	}   else if (item.SelectedItem.DisplayText == 'Dunkelsilber~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 3);
	}   else if (item.SelectedItem.DisplayText == 'Silber~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 4);
	}   else if (item.SelectedItem.DisplayText == 'Blau-Silber~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 5);
	}   else if (item.SelectedItem.DisplayText == 'Graustahl~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 6);
	}   else if (item.SelectedItem.DisplayText == 'Schatten Silber~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 7);
	}   else if (item.SelectedItem.DisplayText == 'Stein Silber~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 8);
	}   else if (item.SelectedItem.DisplayText == 'Mitternachts Silber~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 9);
	}   else if (item.SelectedItem.DisplayText == 'Gun Metal~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 10);
	}   else if (item.SelectedItem.DisplayText == 'Anthrazit Grau~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 11);
	}   else if (item.SelectedItem.DisplayText == 'Matt Schwarz') {
        mp.events.callRemote("modcolor1", vehicle, 12);
	}   else if (item.SelectedItem.DisplayText == 'Matt Grau') {
        mp.events.callRemote("modcolor1", vehicle, 13);
	}   else if (item.SelectedItem.DisplayText == 'Matt Hellgrau') {
        mp.events.callRemote("modcolor1", vehicle, 14);
	}   else if (item.SelectedItem.DisplayText == 'Shiny Schwarz') {
        mp.events.callRemote("modcolor1", vehicle, 15);
	}   else if (item.SelectedItem.DisplayText == 'Shiny Schwarz 2') {
        mp.events.callRemote("modcolor1", vehicle, 16);
	}   else if (item.SelectedItem.DisplayText == 'Shiny Silber') {
        mp.events.callRemote("modcolor1", vehicle, 17);
	}   else if (item.SelectedItem.DisplayText == 'Shiny Silber 2') {
        mp.events.callRemote("modcolor1", vehicle, 18);
	}   else if (item.SelectedItem.DisplayText == 'Shiny Gun Metal') {
        mp.events.callRemote("modcolor1", vehicle, 19);
	}   else if (item.SelectedItem.DisplayText == 'Shiny Schatten Silber') {
        mp.events.callRemote("modcolor1", vehicle, 20);
	}   else if (item.SelectedItem.DisplayText == 'Matt Schwarz') {
        mp.events.callRemote("modcolor1", vehicle, 21);
	}   else if (item.SelectedItem.DisplayText == 'Matt Graphit') {
        mp.events.callRemote("modcolor1", vehicle, 22);
	}   else if (item.SelectedItem.DisplayText == 'Matt Silber Grau') {
        mp.events.callRemote("modcolor1", vehicle, 23);
	}   else if (item.SelectedItem.DisplayText == 'Matt Silber') {
        mp.events.callRemote("modcolor1", vehicle, 24);
	}   else if (item.SelectedItem.DisplayText == 'Matt Blau Silber') {
        mp.events.callRemote("modcolor1", vehicle, 25);
	}   else if (item.SelectedItem.DisplayText == 'Matt Schatten Silber') {
        mp.events.callRemote("modcolor1", vehicle, 26);
	}   else if (item.SelectedItem.DisplayText == 'Rot~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 27);
	}   else if (item.SelectedItem.DisplayText == 'Torino rot~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 28);
	}   else if (item.SelectedItem.DisplayText == 'Formula rot~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 29);
	}   else if (item.SelectedItem.DisplayText == 'Blaze rot~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 30);
	}   else if (item.SelectedItem.DisplayText == 'Anmutiges rot~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 31);
	}   else if (item.SelectedItem.DisplayText == 'Granatrot~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 32);
	}   else if (item.SelectedItem.DisplayText == 'Wüstenrot~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 33);
	}   else if (item.SelectedItem.DisplayText == 'Cabernet rot~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 34);
	}   else if (item.SelectedItem.DisplayText == 'Bonbonrot~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 35);
	}   else if (item.SelectedItem.DisplayText == 'Sunrise orange~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 36);
	}   else if (item.SelectedItem.DisplayText == 'Klassisches Gold') {
        mp.events.callRemote("modcolor1", vehicle, 37);
	}   else if (item.SelectedItem.DisplayText == 'Orange~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 38);
	}   else if (item.SelectedItem.DisplayText == 'Matt Rot') {
        mp.events.callRemote("modcolor1", vehicle, 39);
	}   else if (item.SelectedItem.DisplayText == 'Matt Dunkelrot') {
        mp.events.callRemote("modcolor1", vehicle, 40);
	}   else if (item.SelectedItem.DisplayText == 'Matt Orange') {
        mp.events.callRemote("modcolor1", vehicle, 41);
	}   else if (item.SelectedItem.DisplayText == 'Matt Gelb') {
        mp.events.callRemote("modcolor1", vehicle, 42);
	}   else if (item.SelectedItem.DisplayText == 'Shiny Rot') {
        mp.events.callRemote("modcolor1", vehicle, 43);
	}   else if (item.SelectedItem.DisplayText == 'Hellrot') {
        mp.events.callRemote("modcolor1", vehicle, 44);
	}   else if (item.SelectedItem.DisplayText == 'Shiny Granatrot') {
        mp.events.callRemote("modcolor1", vehicle, 45);
	}   else if (item.SelectedItem.DisplayText == 'Abgenutztes Rot') {
        mp.events.callRemote("modcolor1", vehicle, 46);
	}   else if (item.SelectedItem.DisplayText == 'Goldenes Rot~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 47);
	}   else if (item.SelectedItem.DisplayText == 'Abgenutztes Dunkelrot') {
        mp.events.callRemote("modcolor1", vehicle, 48);
	}   else if (item.SelectedItem.DisplayText == 'Dunkelgrün~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 49);
	}   else if (item.SelectedItem.DisplayText == 'Renngrün~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 50);
	}   else if (item.SelectedItem.DisplayText == 'Meeresgrün~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 51);
	}   else if (item.SelectedItem.DisplayText == 'Olivengrün~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 52);
	}   else if (item.SelectedItem.DisplayText == 'Grün~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 53);
	}   else if (item.SelectedItem.DisplayText == 'Blaugrün~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 54);
	}   else if (item.SelectedItem.DisplayText == 'Limettengrün~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 55);
	}   else if (item.SelectedItem.DisplayText == 'Dunkelgrün 2~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 56);
	}   else if (item.SelectedItem.DisplayText == 'Shiny Grün') {
        mp.events.callRemote("modcolor1", vehicle, 57);
	}   else if (item.SelectedItem.DisplayText == 'Abgenutztes Dunkelgrün') {
        mp.events.callRemote("modcolor1", vehicle, 58);
	}   else if (item.SelectedItem.DisplayText == 'Abgenutztes Grün') {
        mp.events.callRemote("modcolor1", vehicle, 59);
	}   else if (item.SelectedItem.DisplayText == 'Abgenutztes Meeresgrün') {
        mp.events.callRemote("modcolor1", vehicle, 60);
	}   else if (item.SelectedItem.DisplayText == 'Mitternachtsblau~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 61);
	}   else if (item.SelectedItem.DisplayText == 'Dunkelblau~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 62);
	}   else if (item.SelectedItem.DisplayText == 'Sächsischblau~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 63);
	}   else if (item.SelectedItem.DisplayText == 'Blau~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 64);
	}   else if (item.SelectedItem.DisplayText == 'Marineblau~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 65);
	}   else if (item.SelectedItem.DisplayText == 'Hafenblau~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 66);
	}   else if (item.SelectedItem.DisplayText == 'Diamantblau~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 67);
	}   else if (item.SelectedItem.DisplayText == 'Surferblau~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 68);
	}   else if (item.SelectedItem.DisplayText == 'Nautischesblau~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 69);
	}   else if (item.SelectedItem.DisplayText == 'Hellblau~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 70);
	}   else if (item.SelectedItem.DisplayText == 'Violettblau~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 71);
	}   else if (item.SelectedItem.DisplayText == 'Spinnakerblau~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 72);
	}   else if (item.SelectedItem.DisplayText == 'Ultrablau~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 73);
	}   else if (item.SelectedItem.DisplayText == 'Hellblau 2~g~$1.250.00') {
        mp.events.callRemote("modcolor1", vehicle, 74);
	}   else if (item.SelectedItem.DisplayText == 'Glänzend Dunkelblau') {
        mp.events.callRemote("modcolor1", vehicle, 75);
	}   else if (item.SelectedItem.DisplayText == 'Glänzend Mitternachtsblau') {
        mp.events.callRemote("modcolor1", vehicle, 76);
	}   else if (item.SelectedItem.DisplayText == 'Glänzend Blau') {
        mp.events.callRemote("modcolor1", vehicle, 77);
	}   else if (item.SelectedItem.DisplayText == 'Meerschaumblau') {
        mp.events.callRemote("modcolor1", vehicle, 78);
	}   else if (item.SelectedItem.DisplayText == 'Blitzblau') {
        mp.events.callRemote("modcolor1", vehicle, 79);
	}   else if (item.SelectedItem.DisplayText == 'Mauiblau') {
        mp.events.callRemote("modcolor1", vehicle, 80);
	}   else if (item.SelectedItem.DisplayText == 'Glänzend Hellblau') {
        mp.events.callRemote("modcolor1", vehicle, 81);
	}   else if (item.SelectedItem.DisplayText == 'Matt Dunkelblau') {
        mp.events.callRemote("modcolor1", vehicle, 82);
	}   else if (item.SelectedItem.DisplayText == 'Matt Blau') {
        mp.events.callRemote("modcolor1", vehicle, 83);
	}   else if (item.SelectedItem.DisplayText == 'Matt Mitternachtsblau') {
        mp.events.callRemote("modcolor1", vehicle, 84);
	}   else if (item.SelectedItem.DisplayText == 'Abgenutztes Dunkelblau') {
        mp.events.callRemote("modcolor1", vehicle, 85);
	}   else if (item.SelectedItem.DisplayText == 'Abgenutztes Blau') {
        mp.events.callRemote("modcolor1", vehicle, 86);
	}   else if (item.SelectedItem.DisplayText == 'Abgenutztes Hellblau') {
        mp.events.callRemote("modcolor1", vehicle, 87);
	}   else if (item.SelectedItem.DisplayText == 'Taxi Gelb') {
        mp.events.callRemote("modcolor1", vehicle, 88);
	}   else if (item.SelectedItem.DisplayText == 'Renngelb') {
        mp.events.callRemote("modcolor1", vehicle, 89);
	}   else if (item.SelectedItem.DisplayText == 'Bronze') {
        mp.events.callRemote("modcolor1", vehicle, 90);
	}   else if (item.SelectedItem.DisplayText == 'Vogelgelb') {
        mp.events.callRemote("modcolor1", vehicle, 91);
	}   else if (item.SelectedItem.DisplayText == 'Citrusgelb') {
        mp.events.callRemote("modcolor1", vehicle, 92);
	}   else if (item.SelectedItem.DisplayText == 'Champagnier') {
        mp.events.callRemote("modcolor1", vehicle, 93);
	}   else if (item.SelectedItem.DisplayText == 'Beige') {
        mp.events.callRemote("modcolor1", vehicle, 94);
	}   else if (item.SelectedItem.DisplayText == 'Elfenbein') {
        mp.events.callRemote("modcolor1", vehicle, 95);
	}   else if (item.SelectedItem.DisplayText == 'Schokobraun') {
        mp.events.callRemote("modcolor1", vehicle, 96);
	}   else if (item.SelectedItem.DisplayText == 'Goldbraun') {
        mp.events.callRemote("modcolor1", vehicle, 97);
	}   else if (item.SelectedItem.DisplayText == 'Hellbraun') {
        mp.events.callRemote("modcolor1", vehicle, 98);
	}   else if (item.SelectedItem.DisplayText == 'Strohbeige') {
        mp.events.callRemote("modcolor1", vehicle, 99);
	}   else if (item.SelectedItem.DisplayText == 'Moosbraun') {
        mp.events.callRemote("modcolor1", vehicle, 100);
	}   else if (item.SelectedItem.DisplayText == 'Bostonbraun') {
        mp.events.callRemote("modcolor1", vehicle, 101);
	}   else if (item.SelectedItem.DisplayText == 'Buchenholz') {
        mp.events.callRemote("modcolor1", vehicle, 102);
	}   else if (item.SelectedItem.DisplayText == 'Dunkles Buchenholz') {
        mp.events.callRemote("modcolor1", vehicle, 103);
	}   else if (item.SelectedItem.DisplayText == 'Schoko Orange') {
        mp.events.callRemote("modcolor1", vehicle, 104);
	}   else if (item.SelectedItem.DisplayText == 'Sandfarbend') {
        mp.events.callRemote("modcolor1", vehicle, 105);
	}   else if (item.SelectedItem.DisplayText == 'Sonnengebleicht') {
        mp.events.callRemote("modcolor1", vehicle, 106);
	}   else if (item.SelectedItem.DisplayText == 'Cremefarbend') {
        mp.events.callRemote("modcolor1", vehicle, 107);
	}   else if (item.SelectedItem.DisplayText == 'Glänzend Braun') {
        mp.events.callRemote("modcolor1", vehicle, 108);
	}   else if (item.SelectedItem.DisplayText == 'Glänzend Mittelbraun') {
        mp.events.callRemote("modcolor1", vehicle, 108);
	}   else if (item.SelectedItem.DisplayText == 'Glänzend Hellbraun') {
        mp.events.callRemote("modcolor1", vehicle, 110);
	}   else if (item.SelectedItem.DisplayText == 'Weiß') {
        mp.events.callRemote("modcolor1", vehicle, 111);
	}   else if (item.SelectedItem.DisplayText == 'Frostweiß') {
        mp.events.callRemote("modcolor1", vehicle, 112);
	}   else if (item.SelectedItem.DisplayText == 'Honigbeige') {
        mp.events.callRemote("modcolor1", vehicle, 113);
	}   else if (item.SelectedItem.DisplayText == 'Abgenutztes Braun') {
        mp.events.callRemote("modcolor1", vehicle, 114);
	}   else if (item.SelectedItem.DisplayText == 'Abgenutztes Dunkelbraun') {
        mp.events.callRemote("modcolor1", vehicle, 115);
	}   else if (item.SelectedItem.DisplayText == 'Abgenutztes Strohbeige') {
        mp.events.callRemote("modcolor1", vehicle, 116);
	}   else if (item.SelectedItem.DisplayText == 'Gebürsteter Stahl') {
        mp.events.callRemote("modcolor1", vehicle, 117);
	}   else if (item.SelectedItem.DisplayText == 'Gebürsteter Schwarzstahl') {
        mp.events.callRemote("modcolor1", vehicle, 118);
	}   else if (item.SelectedItem.DisplayText == 'Gebürstetes Aluminium') {
        mp.events.callRemote("modcolor1", vehicle, 119);
	}   else if (item.SelectedItem.DisplayText == 'Chrome') {
        mp.events.callRemote("modcolor1", vehicle, 120);
	}   else if (item.SelectedItem.DisplayText == 'Grauweiß') {
        mp.events.callRemote("modcolor1", vehicle, 121);
	}   else if (item.SelectedItem.DisplayText == 'Glänzend Grauweiß') {
        mp.events.callRemote("modcolor1", vehicle, 122);
	}   else if (item.SelectedItem.DisplayText == 'Abgenutztes Orange') {
        mp.events.callRemote("modcolor1", vehicle, 123);
	}   else if (item.SelectedItem.DisplayText == 'Hellorange') {
        mp.events.callRemote("modcolor1", vehicle, 124);
	}   else if (item.SelectedItem.DisplayText == 'Grünstich') {
        mp.events.callRemote("modcolor1", vehicle, 125);
	}   else if (item.SelectedItem.DisplayText == 'Abgenutztes Taxigelb') {
        mp.events.callRemote("modcolor1", vehicle, 126);
	}   else if (item.SelectedItem.DisplayText == 'Polizei Blau') {
        mp.events.callRemote("modcolor1", vehicle, 127);
	}   else if (item.SelectedItem.DisplayText == 'Matt Grün') {
        mp.events.callRemote("modcolor1", vehicle, 128);
	}   else if (item.SelectedItem.DisplayText == 'Matt Braun') {
        mp.events.callRemote("modcolor1", vehicle, 129);
	}   else if (item.SelectedItem.DisplayText == 'Abgenutztes Orange 2') {
        mp.events.callRemote("modcolor1", vehicle, 130);
	}   else if (item.SelectedItem.DisplayText == 'Matt Weiß') {
        mp.events.callRemote("modcolor1", vehicle, 131);
	}   else if (item.SelectedItem.DisplayText == 'Abgenutztes Weiß') {
        mp.events.callRemote("modcolor1", vehicle, 132);
	}   else if (item.SelectedItem.DisplayText == 'Abgenutztes Armeegrün') {
        mp.events.callRemote("modcolor1", vehicle, 133);
	}   else if (item.SelectedItem.DisplayText == 'Reines Weiß') {
        mp.events.callRemote("modcolor1", vehicle, 134);
	}   else if (item.SelectedItem.DisplayText == 'Heißes Pink') {
        mp.events.callRemote("modcolor1", vehicle, 135);
	}   else if (item.SelectedItem.DisplayText == 'Lachsrosa') {
        mp.events.callRemote("modcolor1", vehicle, 136);
	}   else if (item.SelectedItem.DisplayText == 'Vermillion Pink') {
        mp.events.callRemote("modcolor1", vehicle, 137);
	}   else if (item.SelectedItem.DisplayText == 'Orange 2') {
        mp.events.callRemote("modcolor1", vehicle, 138);
	}   else if (item.SelectedItem.DisplayText == 'Grün 2') {
        mp.events.callRemote("modcolor1", vehicle, 139);
	}   else if (item.SelectedItem.DisplayText == 'Blau 2') {
        mp.events.callRemote("modcolor1", vehicle, 140);
	}   else if (item.SelectedItem.DisplayText == 'Schwarzblau') {
        mp.events.callRemote("modcolor1", vehicle, 141);
	}   else if (item.SelectedItem.DisplayText == 'Schwarzlila') {
        mp.events.callRemote("modcolor1", vehicle, 142);
	}   else if (item.SelectedItem.DisplayText == 'Schwarzrot') {
        mp.events.callRemote("modcolor1", vehicle, 143);
	}   else if (item.SelectedItem.DisplayText == 'Jägergrün') {
        mp.events.callRemote("modcolor1", vehicle, 144);
	}   else if (item.SelectedItem.DisplayText == 'Lila') {
        mp.events.callRemote("modcolor1", vehicle, 145);
	}   else if (item.SelectedItem.DisplayText == 'Matt Lila') {
        mp.events.callRemote("modcolor1", vehicle, 148);
	}   else if (item.SelectedItem.DisplayText == 'Matt Dunkellila') {
        mp.events.callRemote("modcolor1", vehicle, 149);
	}   else if (item.SelectedItem.DisplayText == 'Lavarot') {
        mp.events.callRemote("modcolor1", vehicle, 150);
	}   else if (item.SelectedItem.DisplayText == 'Waldgrün') {
        mp.events.callRemote("modcolor1", vehicle, 151);
	}   else if (item.SelectedItem.DisplayText == 'Olivegrün') {
        mp.events.callRemote("modcolor1", vehicle, 152);
	}   else if (item.SelectedItem.DisplayText == 'Wüstenbraun') {
        mp.events.callRemote("modcolor1", vehicle, 153);
	}   else if (item.SelectedItem.DisplayText == 'Wüstenbräune') {
        mp.events.callRemote("modcolor1", vehicle, 154);
	}   else if (item.SelectedItem.DisplayText == 'Laubgrün') {
        mp.events.callRemote("modcolor1", vehicle, 155);
	}   else if (item.SelectedItem.DisplayText == 'Legierung') {
        mp.events.callRemote("modcolor1", vehicle, 156);
	}   else if (item.SelectedItem.DisplayText == 'Epsilonblau') {
        mp.events.callRemote("modcolor1", vehicle, 157);
	}   else if (item.SelectedItem.DisplayText == 'Pures Gold') {
        mp.events.callRemote("modcolor1", vehicle, 158);
	}   else if (item.SelectedItem.DisplayText == 'Gebürstetes Gold') {
        mp.events.callRemote("modcolor1", vehicle, 159);
        // SECONDARY
    }   else if (item.SelectedItem.DisplayText == 'Schwarz ') {
        mp.events.callRemote("modcolor2", vehicle, 0);
    }   else if (item.SelectedItem.DisplayText == 'Graphit ') {
        mp.events.callRemote("modcolor2", vehicle, 1);
    }   else if (item.SelectedItem.DisplayText == 'Stahl Schw.  ') {
        mp.events.callRemote("modcolor2", vehicle, 2);
    }   else if (item.SelectedItem.DisplayText == 'Dunkelsilber ') {
        mp.events.callRemote("modcolor2", vehicle, 3);
    }   else if (item.SelectedItem.DisplayText == 'Silber ') {
        mp.events.callRemote("modcolor2", vehicle, 4);
    }   else if (item.SelectedItem.DisplayText == 'Blau-Silber ') {
        mp.events.callRemote("modcolor2", vehicle, 5);
    }   else if (item.SelectedItem.DisplayText == 'Graustahl ') {
        mp.events.callRemote("modcolor2", vehicle, 6);
    }   else if (item.SelectedItem.DisplayText == 'Schatten Silber ') {
        mp.events.callRemote("modcolor2", vehicle, 7);
    }   else if (item.SelectedItem.DisplayText == 'Stein Silber ') {
        mp.events.callRemote("modcolor2", vehicle, 8);
    }   else if (item.SelectedItem.DisplayText == 'Mitternachts Silber ') {
        mp.events.callRemote("modcolor2", vehicle, 9);
    }   else if (item.SelectedItem.DisplayText == 'Gun Metal ') {
        mp.events.callRemote("modcolor2", vehicle, 10);
    }   else if (item.SelectedItem.DisplayText == 'Anthrazit Grau ') {
        mp.events.callRemote("modcolor2", vehicle, 11);
    }   else if (item.SelectedItem.DisplayText == 'Matt Schwarz ') {
        mp.events.callRemote("modcolor2", vehicle, 12);
    }   else if (item.SelectedItem.DisplayText == 'Matt Grau ') {
        mp.events.callRemote("modcolor2", vehicle, 13);
    }   else if (item.SelectedItem.DisplayText == 'Matt Hellgrau ') {
        mp.events.callRemote("modcolor2", vehicle, 14);
    }   else if (item.SelectedItem.DisplayText == 'Shiny Schwarz ') {
        mp.events.callRemote("modcolor2", vehicle, 15);
    }   else if (item.SelectedItem.DisplayText == 'Shiny Schwarz 2 ') {
        mp.events.callRemote("modcolor2", vehicle, 16);
    }   else if (item.SelectedItem.DisplayText == 'Shiny Silber ') {
        mp.events.callRemote("modcolor2", vehicle, 17);
    }   else if (item.SelectedItem.DisplayText == 'Shiny Silber 2 ') {
        mp.events.callRemote("modcolor2", vehicle, 18);
    }   else if (item.SelectedItem.DisplayText == 'Shiny Gun Metal ') {
        mp.events.callRemote("modcolor2", vehicle, 19);
    }   else if (item.SelectedItem.DisplayText == 'Shiny Schatten Silber ') {
        mp.events.callRemote("modcolor2", vehicle, 20);
    }   else if (item.SelectedItem.DisplayText == 'Matt Schwarz ') {
        mp.events.callRemote("modcolor2", vehicle, 21);
    }   else if (item.SelectedItem.DisplayText == 'Matt Graphit ') {
        mp.events.callRemote("modcolor2", vehicle, 22);
    }   else if (item.SelectedItem.DisplayText == 'Matt Silber Grau ') {
        mp.events.callRemote("modcolor2", vehicle, 23);
    }   else if (item.SelectedItem.DisplayText == 'Matt Silber ') {
        mp.events.callRemote("modcolor2", vehicle, 24);
    }   else if (item.SelectedItem.DisplayText == 'Matt Blau Silber ') {
        mp.events.callRemote("modcolor2", vehicle, 25);
    }   else if (item.SelectedItem.DisplayText == 'Matt Schatten Silber ') {
        mp.events.callRemote("modcolor2", vehicle, 26);
    }   else if (item.SelectedItem.DisplayText == 'Rot ') {
        mp.events.callRemote("modcolor2", vehicle, 27);
    }   else if (item.SelectedItem.DisplayText == 'Torino rot ') {
        mp.events.callRemote("modcolor2", vehicle, 28);
    }   else if (item.SelectedItem.DisplayText == 'Formula rot ') {
        mp.events.callRemote("modcolor2", vehicle, 29);
    }   else if (item.SelectedItem.DisplayText == 'Blaze rot ') {
        mp.events.callRemote("modcolor2", vehicle, 30);
    }   else if (item.SelectedItem.DisplayText == 'Anmutiges rot ') {
        mp.events.callRemote("modcolor2", vehicle, 31);
    }   else if (item.SelectedItem.DisplayText == 'Granatrot ') {
        mp.events.callRemote("modcolor2", vehicle, 32);
    }   else if (item.SelectedItem.DisplayText == 'Wüstenrot ') {
        mp.events.callRemote("modcolor2", vehicle, 33);
    }   else if (item.SelectedItem.DisplayText == 'Cabernet rot ') {
        mp.events.callRemote("modcolor2", vehicle, 34);
    }   else if (item.SelectedItem.DisplayText == 'Bonbonrot ') {
        mp.events.callRemote("modcolor2", vehicle, 35);
    }   else if (item.SelectedItem.DisplayText == 'Sunrise orange ') {
        mp.events.callRemote("modcolor2", vehicle, 36);
    }   else if (item.SelectedItem.DisplayText == 'Klassisches Gold ') {
        mp.events.callRemote("modcolor2", vehicle, 37);
    }   else if (item.SelectedItem.DisplayText == 'Orange ') {
        mp.events.callRemote("modcolor2", vehicle, 38);
    }   else if (item.SelectedItem.DisplayText == 'Matt Rot ') {
        mp.events.callRemote("modcolor2", vehicle, 39);
    }   else if (item.SelectedItem.DisplayText == 'Matt Dunkelrot ') {
        mp.events.callRemote("modcolor2", vehicle, 40);
    }   else if (item.SelectedItem.DisplayText == 'Matt Orange ') {
        mp.events.callRemote("modcolor2", vehicle, 41);
    }   else if (item.SelectedItem.DisplayText == 'Matt Gelb ') {
        mp.events.callRemote("modcolor2", vehicle, 42);
    }   else if (item.SelectedItem.DisplayText == 'Shiny Rot ') {
        mp.events.callRemote("modcolor2", vehicle, 43);
    }   else if (item.SelectedItem.DisplayText == 'Hellrot ') {
        mp.events.callRemote("modcolor2", vehicle, 44);
    }   else if (item.SelectedItem.DisplayText == 'Shiny Granatrot ') {
        mp.events.callRemote("modcolor2", vehicle, 45);
    }   else if (item.SelectedItem.DisplayText == 'Abgenutztes Rot ') {
        mp.events.callRemote("modcolor2", vehicle, 46);
    }   else if (item.SelectedItem.DisplayText == 'Goldenes Rot ') {
        mp.events.callRemote("modcolor2", vehicle, 47);
    }   else if (item.SelectedItem.DisplayText == 'Abgenutztes Dunkelrot ') {
        mp.events.callRemote("modcolor2", vehicle, 48);
    }   else if (item.SelectedItem.DisplayText == 'Dunkelgrün ') {
        mp.events.callRemote("modcolor2", vehicle, 49);
    }   else if (item.SelectedItem.DisplayText == 'Renngrün ') {
        mp.events.callRemote("modcolor2", vehicle, 50);
    }   else if (item.SelectedItem.DisplayText == 'Meeresgrün ') {
        mp.events.callRemote("modcolor2", vehicle, 51);
    }   else if (item.SelectedItem.DisplayText == 'Olivengrün ') {
        mp.events.callRemote("modcolor2", vehicle, 52);
    }   else if (item.SelectedItem.DisplayText == 'Grün ') {
        mp.events.callRemote("modcolor2", vehicle, 53);
    }   else if (item.SelectedItem.DisplayText == 'Blaugrün ') {
        mp.events.callRemote("modcolor2", vehicle, 54);
    }   else if (item.SelectedItem.DisplayText == 'Limettengrün ') {
        mp.events.callRemote("modcolor2", vehicle, 55);
    }   else if (item.SelectedItem.DisplayText == 'Dunkelgrün 2 ') {
        mp.events.callRemote("modcolor2", vehicle, 56);
    }   else if (item.SelectedItem.DisplayText == 'Shiny Grün ') {
        mp.events.callRemote("modcolor2", vehicle, 57);
    }   else if (item.SelectedItem.DisplayText == 'Abgenutztes Dunkelgrün ') {
        mp.events.callRemote("modcolor2", vehicle, 58);
    }   else if (item.SelectedItem.DisplayText == 'Abgenutztes Grün ') {
        mp.events.callRemote("modcolor2", vehicle, 59);
    }   else if (item.SelectedItem.DisplayText == 'Abgenutztes Meeresgrün ') {
        mp.events.callRemote("modcolor2", vehicle, 60);
    }   else if (item.SelectedItem.DisplayText == 'Mitternachtsblau ') {
        mp.events.callRemote("modcolor2", vehicle, 61);
    }   else if (item.SelectedItem.DisplayText == 'Dunkelblau ') {
        mp.events.callRemote("modcolor2", vehicle, 62);
    }   else if (item.SelectedItem.DisplayText == 'Sächsischblau ') {
        mp.events.callRemote("modcolor2", vehicle, 63);
    }   else if (item.SelectedItem.DisplayText == 'Blau ') {
        mp.events.callRemote("modcolor2", vehicle, 64);
    }   else if (item.SelectedItem.DisplayText == 'Marineblau ') {
        mp.events.callRemote("modcolor2", vehicle, 65);
    }   else if (item.SelectedItem.DisplayText == 'Hafenblau ') {
        mp.events.callRemote("modcolor2", vehicle, 66);
    }   else if (item.SelectedItem.DisplayText == 'Diamantblau ') {
        mp.events.callRemote("modcolor2", vehicle, 67);
    }   else if (item.SelectedItem.DisplayText == 'Surferblau ') {
        mp.events.callRemote("modcolor2", vehicle, 68);
    }   else if (item.SelectedItem.DisplayText == 'Nautischesblau ') {
        mp.events.callRemote("modcolor2", vehicle, 69);
    }   else if (item.SelectedItem.DisplayText == 'Hellblau ') {
        mp.events.callRemote("modcolor2", vehicle, 70);
    }   else if (item.SelectedItem.DisplayText == 'Violettblau ') {
        mp.events.callRemote("modcolor2", vehicle, 71);
    }   else if (item.SelectedItem.DisplayText == 'Spinnakerblau ') {
        mp.events.callRemote("modcolor2", vehicle, 72);
    }   else if (item.SelectedItem.DisplayText == 'Ultrablau ') {
        mp.events.callRemote("modcolor2", vehicle, 73);
    }   else if (item.SelectedItem.DisplayText == 'Hellblau 2 ') {
        mp.events.callRemote("modcolor2", vehicle, 74);
    }   else if (item.SelectedItem.DisplayText == 'Glänzend Dunkelblau ') {
        mp.events.callRemote("modcolor2", vehicle, 75);
    }   else if (item.SelectedItem.DisplayText == 'Glänzend Mitternachtsblau ') {
        mp.events.callRemote("modcolor2", vehicle, 76);
    }   else if (item.SelectedItem.DisplayText == 'Glänzend Blau ') {
        mp.events.callRemote("modcolor2", vehicle, 77);
    }   else if (item.SelectedItem.DisplayText == 'Meerschaumblau ') {
        mp.events.callRemote("modcolor2", vehicle, 78);
    }   else if (item.SelectedItem.DisplayText == 'Blitzblau ') {
        mp.events.callRemote("modcolor2", vehicle, 79);
    }   else if (item.SelectedItem.DisplayText == 'Mauiblau ') {
        mp.events.callRemote("modcolor2", vehicle, 80);
    }   else if (item.SelectedItem.DisplayText == 'Glänzend Hellblau ') {
        mp.events.callRemote("modcolor2", vehicle, 81);
    }   else if (item.SelectedItem.DisplayText == 'Matt Dunkelblau ') {
        mp.events.callRemote("modcolor2", vehicle, 82);
    }   else if (item.SelectedItem.DisplayText == 'Matt Blau ') {
        mp.events.callRemote("modcolor2", vehicle, 83);
    }   else if (item.SelectedItem.DisplayText == 'Matt Mitternachtsblau ') {
        mp.events.callRemote("modcolor2", vehicle, 84);
    }   else if (item.SelectedItem.DisplayText == 'Abgenutztes Dunkelblau ') {
        mp.events.callRemote("modcolor2", vehicle, 85);
    }   else if (item.SelectedItem.DisplayText == 'Abgenutztes Blau ') {
        mp.events.callRemote("modcolor2", vehicle, 86);
    }   else if (item.SelectedItem.DisplayText == 'Abgenutztes Hellblau ') {
        mp.events.callRemote("modcolor2", vehicle, 87);
    }   else if (item.SelectedItem.DisplayText == 'Taxi Gelb ') {
        mp.events.callRemote("modcolor2", vehicle, 88);
    }   else if (item.SelectedItem.DisplayText == 'Renngelb ') {
        mp.events.callRemote("modcolor2", vehicle, 89);
    }   else if (item.SelectedItem.DisplayText == 'Bronze ') {
        mp.events.callRemote("modcolor2", vehicle, 90);
    }   else if (item.SelectedItem.DisplayText == 'Vogelgelb ') {
        mp.events.callRemote("modcolor2", vehicle, 91);
    }   else if (item.SelectedItem.DisplayText == 'Citrusgelb ') {
        mp.events.callRemote("modcolor2", vehicle, 92);
    }   else if (item.SelectedItem.DisplayText == 'Champagnier ') {
        mp.events.callRemote("modcolor2", vehicle, 93);
    }   else if (item.SelectedItem.DisplayText == 'Beige ') {
        mp.events.callRemote("modcolor2", vehicle, 94);
    }   else if (item.SelectedItem.DisplayText == 'Elfenbein ') {
        mp.events.callRemote("modcolor2", vehicle, 95);
    }   else if (item.SelectedItem.DisplayText == 'Schokobraun ') {
        mp.events.callRemote("modcolor2", vehicle, 96);
    }   else if (item.SelectedItem.DisplayText == 'Goldbraun ') {
        mp.events.callRemote("modcolor2", vehicle, 97);
    }   else if (item.SelectedItem.DisplayText == 'Hellbraun ') {
        mp.events.callRemote("modcolor2", vehicle, 98);
    }   else if (item.SelectedItem.DisplayText == 'Strohbeige ') {
        mp.events.callRemote("modcolor2", vehicle, 99);
    }   else if (item.SelectedItem.DisplayText == 'Moosbraun ') {
        mp.events.callRemote("modcolor2", vehicle, 100);
    }   else if (item.SelectedItem.DisplayText == 'Bostonbraun ') {
        mp.events.callRemote("modcolor2", vehicle, 101);
    }   else if (item.SelectedItem.DisplayText == 'Buchenholz ') {
        mp.events.callRemote("modcolor2", vehicle, 102);
    }   else if (item.SelectedItem.DisplayText == 'Dunkles Buchenholz ') {
        mp.events.callRemote("modcolor2", vehicle, 103);
    }   else if (item.SelectedItem.DisplayText == 'Schoko Orange ') {
        mp.events.callRemote("modcolor2", vehicle, 104);
    }   else if (item.SelectedItem.DisplayText == 'Sandfarbend ') {
        mp.events.callRemote("modcolor2", vehicle, 105);
    }   else if (item.SelectedItem.DisplayText == 'Sonnengebleicht ') {
        mp.events.callRemote("modcolor2", vehicle, 106);
    }   else if (item.SelectedItem.DisplayText == 'Cremefarbend ') {
        mp.events.callRemote("modcolor2", vehicle, 107);
    }   else if (item.SelectedItem.DisplayText == 'Glänzend Braun ') {
        mp.events.callRemote("modcolor2", vehicle, 108);
    }   else if (item.SelectedItem.DisplayText == 'Glänzend Mittelbraun ') {
        mp.events.callRemote("modcolor2", vehicle, 108);
    }   else if (item.SelectedItem.DisplayText == 'Glänzend Hellbraun ') {
        mp.events.callRemote("modcolor2", vehicle, 110);
    }   else if (item.SelectedItem.DisplayText == 'Weiß ') {
        mp.events.callRemote("modcolor2", vehicle, 111);
    }   else if (item.SelectedItem.DisplayText == 'Frostweiß ') {
        mp.events.callRemote("modcolor2", vehicle, 112);
    }   else if (item.SelectedItem.DisplayText == 'Honigbeige ') {
        mp.events.callRemote("modcolor2", vehicle, 113);
    }   else if (item.SelectedItem.DisplayText == 'Abgenutztes Braun ') {
        mp.events.callRemote("modcolor2", vehicle, 114);
    }   else if (item.SelectedItem.DisplayText == 'Abgenutztes Dunkelbraun ') {
        mp.events.callRemote("modcolor2", vehicle, 115);
    }   else if (item.SelectedItem.DisplayText == 'Abgenutztes Strohbeige ') {
        mp.events.callRemote("modcolor2", vehicle, 116);
    }   else if (item.SelectedItem.DisplayText == 'Gebürsteter Stahl ') {
        mp.events.callRemote("modcolor2", vehicle, 117);
    }   else if (item.SelectedItem.DisplayText == 'Gebürsteter Schwarzstahl ') {
        mp.events.callRemote("modcolor2", vehicle, 118);
    }   else if (item.SelectedItem.DisplayText == 'Gebürstetes Aluminium ') {
        mp.events.callRemote("modcolor2", vehicle, 119);
    }   else if (item.SelectedItem.DisplayText == 'Chrome ') {
        mp.events.callRemote("modcolor2", vehicle, 120);
    }   else if (item.SelectedItem.DisplayText == 'Grauweiß ') {
        mp.events.callRemote("modcolor2", vehicle, 121);
    }   else if (item.SelectedItem.DisplayText == 'Glänzend Grauweiß ') {
        mp.events.callRemote("modcolor2", vehicle, 122);
    }   else if (item.SelectedItem.DisplayText == 'Abgenutztes Orange ') {
        mp.events.callRemote("modcolor2", vehicle, 123);
    }   else if (item.SelectedItem.DisplayText == 'Hellorange ') {
        mp.events.callRemote("modcolor2", vehicle, 124);
    }   else if (item.SelectedItem.DisplayText == 'Grünstich ') {
        mp.events.callRemote("modcolor2", vehicle, 125);
    }   else if (item.SelectedItem.DisplayText == 'Abgenutztes Taxigelb ') {
        mp.events.callRemote("modcolor2", vehicle, 126);
    }   else if (item.SelectedItem.DisplayText == 'Polizei Blau ') {
        mp.events.callRemote("modcolor2", vehicle, 127);
    }   else if (item.SelectedItem.DisplayText == 'Matt Grün ') {
        mp.events.callRemote("modcolor2", vehicle, 128);
    }   else if (item.SelectedItem.DisplayText == 'Matt Braun ') {
        mp.events.callRemote("modcolor2", vehicle, 129);
    }   else if (item.SelectedItem.DisplayText == 'Abgenutztes Orange 2 ') {
        mp.events.callRemote("modcolor2", vehicle, 130);
    }   else if (item.SelectedItem.DisplayText == 'Matt Weiß ') {
        mp.events.callRemote("modcolor2", vehicle, 131);
    }   else if (item.SelectedItem.DisplayText == 'Abgenutztes Weiß ') {
        mp.events.callRemote("modcolor2", vehicle, 132);
    }   else if (item.SelectedItem.DisplayText == 'Abgenutztes Armeegrün ') {
        mp.events.callRemote("modcolor2", vehicle, 133);
    }   else if (item.SelectedItem.DisplayText == 'Reines Weiß ') {
        mp.events.callRemote("modcolor2", vehicle, 134);
    }   else if (item.SelectedItem.DisplayText == 'Heißes Pink ') {
        mp.events.callRemote("modcolor2", vehicle, 135);
    }   else if (item.SelectedItem.DisplayText == 'Lachsrosa ') {
        mp.events.callRemote("modcolor2", vehicle, 136);
    }   else if (item.SelectedItem.DisplayText == 'Vermillion Pink ') {
        mp.events.callRemote("modcolor2", vehicle, 137);
    }   else if (item.SelectedItem.DisplayText == 'Orange 2 ') {
        mp.events.callRemote("modcolor2", vehicle, 138);
    }   else if (item.SelectedItem.DisplayText == 'Grün 2 ') {
        mp.events.callRemote("modcolor2", vehicle, 139);
    }   else if (item.SelectedItem.DisplayText == 'Blau 2 ') {
        mp.events.callRemote("modcolor2", vehicle, 140);
    }   else if (item.SelectedItem.DisplayText == 'Schwarzblau ') {
        mp.events.callRemote("modcolor2", vehicle, 141);
    }   else if (item.SelectedItem.DisplayText == 'Schwarzlila ') {
        mp.events.callRemote("modcolor2", vehicle, 142);
    }   else if (item.SelectedItem.DisplayText == 'Schwarzrot ') {
        mp.events.callRemote("modcolor2", vehicle, 143);
    }   else if (item.SelectedItem.DisplayText == 'Jägergrün ') {
        mp.events.callRemote("modcolor2", vehicle, 144);
    }   else if (item.SelectedItem.DisplayText == 'Lila ') {
        mp.events.callRemote("modcolor2", vehicle, 145);
    }   else if (item.SelectedItem.DisplayText == 'Matt Lila ') {
        mp.events.callRemote("modcolor2", vehicle, 148);
    }   else if (item.SelectedItem.DisplayText == 'Matt Dunkellila ') {
        mp.events.callRemote("modcolor2", vehicle, 149);
    }   else if (item.SelectedItem.DisplayText == 'Lavarot ') {
        mp.events.callRemote("modcolor2", vehicle, 150);
    }   else if (item.SelectedItem.DisplayText == 'Waldgrün ') {
        mp.events.callRemote("modcolor2", vehicle, 151);
    }   else if (item.SelectedItem.DisplayText == 'Olivegrün ') {
        mp.events.callRemote("modcolor2", vehicle, 152);
    }   else if (item.SelectedItem.DisplayText == 'Wüstenbraun ') {
        mp.events.callRemote("modcolor2", vehicle, 153);
    }   else if (item.SelectedItem.DisplayText == 'Wüstenbräune ') {
        mp.events.callRemote("modcolor2", vehicle, 154);
    }   else if (item.SelectedItem.DisplayText == 'Laubgrün ') {
        mp.events.callRemote("modcolor2", vehicle, 155);
    }   else if (item.SelectedItem.DisplayText == 'Legierung ') {
        mp.events.callRemote("modcolor2", vehicle, 156);
    }   else if (item.SelectedItem.DisplayText == 'Epsilonblau ') {
        mp.events.callRemote("modcolor2", vehicle, 157);
    }   else if (item.SelectedItem.DisplayText == 'Pures Gold ') {
        mp.events.callRemote("modcolor2", vehicle, 158);
    }   else if (item.SelectedItem.DisplayText == 'Gebürstetes Gold ') {
        mp.events.callRemote("modcolor2", vehicle, 159);

		// WHEELCOLOR
	}	else if (item.SelectedItem.DisplayText == 'Metallic Rot') {
		mp.events.callRemote("modwheelcolor", vehicle, 27, 27);
	}	else if (item.SelectedItem.DisplayText == 'Metallic Blau') {
		mp.events.callRemote("modwheelcolor", vehicle, 64, 64);
	}	else if (item.SelectedItem.DisplayText == 'Metallic Grün') {
		mp.events.callRemote("modwheelcolor", vehicle, 53, 53);
	}	else if (item.SelectedItem.DisplayText == 'Metallic Gelb') {
		mp.events.callRemote("modwheelcolor", vehicle, 91, 91);
	}	else if (item.SelectedItem.DisplayText == 'Metallic Weiß') {
		mp.events.callRemote("modwheelcolor", vehicle, 111, 111);
	}	else if (item.SelectedItem.DisplayText == 'Metallic Lila') {
        mp.events.callRemote("modwheelcolor", vehicle, 145, 145);

        // DESIGN
    }   else if (item.SelectedItem.DisplayText == 'Kein Design') {
        mp.events.callRemote("mod", vehicle, 48, 0);
	}	else if (item.SelectedItem.DisplayText == 'Design 1') {
		mp.events.callRemote("mod", vehicle, 48, 1);
	}	else if (item.SelectedItem.DisplayText == 'Design 2') {
		mp.events.callRemote("mod", vehicle, 48, 2);
	}	else if (item.SelectedItem.DisplayText == 'Design 3') {
		mp.events.callRemote("mod", vehicle, 48, 3);
	}	else if (item.SelectedItem.DisplayText == 'Design 4') {
		mp.events.callRemote("mod", vehicle, 48, 4);
	}	else if (item.SelectedItem.DisplayText == 'Design 5') {
		mp.events.callRemote("mod", vehicle, 48, 5);
	}	else if (item.SelectedItem.DisplayText == 'Design 6') {
		mp.events.callRemote("mod", vehicle, 48, 6);
	}	else if (item.SelectedItem.DisplayText == 'Design 7') {
		mp.events.callRemote("mod", vehicle, 48, 7);
	}	else if (item.SelectedItem.DisplayText == 'Design 8') {
        mp.events.callRemote("mod", vehicle, 48, 8);

		// NEON TOGGLE
	}   else if (item.SelectedItem.DisplayText == 'Neon aus') {
        mp.events.callRemote("modneon", vehicle, false);
	}   else if (item.SelectedItem.DisplayText == 'Neon an') {
        mp.events.callRemote("modneon", vehicle, true);

		// NEONCOLOR
        mp.events.callRemote("modneoncolor", vehicle, 255, 0, 0);
	}   else if (item.SelectedItem.DisplayText == 'Neon Rot') {
        mp.events.callRemote("modneoncolor", vehicle, 255, 0, 0);
	}   else if (item.SelectedItem.DisplayText == 'Neon Grün') {
        mp.events.callRemote("modneoncolor", vehicle, 0, 255, 0);
	}   else if (item.SelectedItem.DisplayText == 'Neon Blau') {
        mp.events.callRemote("modneoncolor", vehicle, 0, 0, 255);
	}   else if (item.SelectedItem.DisplayText == 'Neon Pink') {
        mp.events.callRemote("modneoncolor", vehicle, 255, 0, 255);
	}   else if (item.SelectedItem.DisplayText == 'Neon Lila') {
        mp.events.callRemote("modneoncolor", vehicle, 128, 0, 255);
	}   else if (item.SelectedItem.DisplayText == 'Neon Lime') {
        mp.events.callRemote("modneoncolor", vehicle, 128, 255, 0);
	}   else if (item.SelectedItem.DisplayText == 'Neon Gelb') {
        mp.events.callRemote("modneoncolor", vehicle, 255, 255, 0);
	}   else if (item.SelectedItem.DisplayText == 'Neon Weiß') {
        mp.events.callRemote("modneoncolor", vehicle, 255, 255, 255);
	}   else if (item.SelectedItem.DisplayText == 'Neon Hellblau') {
        mp.events.callRemote("modneoncolor", vehicle, 0, 191, 255);
	}   else if (item.SelectedItem.DisplayText == 'Neon Orange') {
        mp.events.callRemote("modneoncolor", vehicle, 255, 128, 0);


		// Spoiler
	}   else if (item.SelectedItem.DisplayText == 'Spoiler Std.') {
		mp.events.callRemote("mod", vehicle, 0, -1);
    }   else if (item.SelectedItem.DisplayText == 'Spoiler 1') {
        mp.events.callRemote("mod", vehicle, 0, 0);
    }   else if (item.SelectedItem.DisplayText == 'Spoiler 2') {
        mp.events.callRemote("mod", vehicle, 0, 1);
    }   else if (item.SelectedItem.DisplayText == 'Spoiler 3') {
        mp.events.callRemote("mod", vehicle, 0, 2);
    }   else if (item.SelectedItem.DisplayText == 'Spoiler 4') {
        mp.events.callRemote("mod", vehicle, 0, 3);
    }   else if (item.SelectedItem.DisplayText == 'Spoiler 5') {
        mp.events.callRemote("mod", vehicle, 0, 4);
    }   else if (item.SelectedItem.DisplayText == 'Spoiler 6') {
        mp.events.callRemote("mod", vehicle, 0, 5);
    }   else if (item.SelectedItem.DisplayText == 'Spoiler 7') {
        mp.events.callRemote("mod", vehicle, 0, 6);
    }   else if (item.SelectedItem.DisplayText == 'Spoiler 8') {
        mp.events.callRemote("mod", vehicle, 0, 7);
    }   else if (item.SelectedItem.DisplayText == 'Spoiler 9') {
        mp.events.callRemote("mod", vehicle, 0, 8);
	}	else if (item.SelectedItem.DisplayText == 'Spoiler 10') {
		mp.events.callRemote("mod", vehicle, 0, 9);
	}	else if (item.SelectedItem.DisplayText == 'Spoiler 11') {
		mp.events.callRemote("mod", vehicle, 0, 10);
	}	else if (item.SelectedItem.DisplayText == 'Spoiler 12') {
		mp.events.callRemote("mod", vehicle, 0, 11);
        // Front Bumper
    }   else if (item.SelectedItem.DisplayText == 'Front Std.') {
        mp.events.callRemote("mod", vehicle, 1, -1);
    }   else if (item.SelectedItem.DisplayText == 'Front 1') {
        mp.events.callRemote("mod", vehicle, 1, 0);
    }   else if (item.SelectedItem.DisplayText == 'Front 2') {
        mp.events.callRemote("mod", vehicle, 1, 1);
    }   else if (item.SelectedItem.DisplayText == 'Front 3') {
        mp.events.callRemote("mod", vehicle, 1, 2);
    }   else if (item.SelectedItem.DisplayText == 'Front 4') {
        mp.events.callRemote("mod", vehicle, 1, 3);
    }   else if (item.SelectedItem.DisplayText == 'Front 5') {
        mp.events.callRemote("mod", vehicle, 1, 4);
    }   else if (item.SelectedItem.DisplayText == 'Front 6') {
		mp.events.callRemote("mod", vehicle, 1, 5);
    }   else if (item.SelectedItem.DisplayText == 'Front 7') {
        mp.events.callRemote("mod", vehicle, 1, 6);
    }   else if (item.SelectedItem.DisplayText == 'Front 8') {
        mp.events.callRemote("mod", vehicle, 1, 7);
    }   else if (item.SelectedItem.DisplayText == 'Front 9') {
        mp.events.callRemote("mod", vehicle, 1, 8);
    }   else if (item.SelectedItem.DisplayText == 'Front 10') {
        mp.events.callRemote("mod", vehicle, 1, 9);
    }   else if (item.SelectedItem.DisplayText == 'Front 11') {
        mp.events.callRemote("mod", vehicle, 1, 10);
        // Rear Bumper
    }   else if (item.SelectedItem.DisplayText == 'Heck Std.') {
        mp.events.callRemote("mod", vehicle, 2, -1);
    }   else if (item.SelectedItem.DisplayText == 'Heck 1') {
		mp.events.callRemote("mod", vehicle, 2, 0);
    }   else if (item.SelectedItem.DisplayText == 'Heck 2') {
        mp.events.callRemote("mod", vehicle, 2, 1);
    }   else if (item.SelectedItem.DisplayText == 'Heck 3') {
        mp.events.callRemote("mod", vehicle, 2, 2);
    }   else if (item.SelectedItem.DisplayText == 'Heck 4') {
        mp.events.callRemote("mod", vehicle, 2, 3);
    }   else if (item.SelectedItem.DisplayText == 'Heck 5') {
        mp.events.callRemote("mod", vehicle, 2, 4);
    }   else if (item.SelectedItem.DisplayText == 'Heck 6') {
		mp.events.callRemote("mod", vehicle, 2, 5);
    }   else if (item.SelectedItem.DisplayText == 'Heck 7') {
        mp.events.callRemote("mod", vehicle, 2, 6);
    }   else if (item.SelectedItem.DisplayText == 'Heck 8') {
        mp.events.callRemote("mod", vehicle, 2, 7);
    }   else if (item.SelectedItem.DisplayText == 'Heck 9') {
        mp.events.callRemote("mod", vehicle, 2, 8);
    }   else if (item.SelectedItem.DisplayText == 'Heck 10') {
        mp.events.callRemote("mod", vehicle, 2, 9);
    }   else if (item.SelectedItem.DisplayText == 'Heck 11') {
        mp.events.callRemote("mod", vehicle, 2, 10);
        // Side Bumper
    }   else if (item.SelectedItem.DisplayText == 'Schürze Std.') {
        mp.events.callRemote("mod", vehicle, 3, -1);
    }   else if (item.SelectedItem.DisplayText == 'Schürze 1') {
        mp.events.callRemote("mod", vehicle, 3, 0);
    }   else if (item.SelectedItem.DisplayText == 'Schürze 2') {
        mp.events.callRemote("mod", vehicle, 3, 1);
    }   else if (item.SelectedItem.DisplayText == 'Schürze 3') {
        mp.events.callRemote("mod", vehicle, 3, 2);
    }   else if (item.SelectedItem.DisplayText == 'Schürze 4') {
        mp.events.callRemote("mod", vehicle, 3, 3);
    }   else if (item.SelectedItem.DisplayText == 'Schürze 5') {
        mp.events.callRemote("mod", vehicle, 3, 4);
    }   else if (item.SelectedItem.DisplayText == 'Schürze 6') {
		mp.events.callRemote("mod", vehicle, 3, 5);
    }   else if (item.SelectedItem.DisplayText == 'Schürze 7') {
        mp.events.callRemote("mod", vehicle, 3, 6);
    }   else if (item.SelectedItem.DisplayText == 'Schürze 8') {
        mp.events.callRemote("mod", vehicle, 3, 7);
    }   else if (item.SelectedItem.DisplayText == 'Schürze 9') {
        mp.events.callRemote("mod", vehicle, 3, 8);
    }   else if (item.SelectedItem.DisplayText == 'Schürze 10') {
        mp.events.callRemote("mod", vehicle, 3, 9);
    }   else if (item.SelectedItem.DisplayText == 'Schürze 11') {
        mp.events.callRemote("mod", vehicle, 3, 10);
        // Exhaust
    }   else if (item.SelectedItem.DisplayText == 'Auspuff Std.') {
        mp.events.callRemote("mod", vehicle, 4, -1);
    }   else if (item.SelectedItem.DisplayText == 'Auspuff 1') {
        mp.events.callRemote("mod", vehicle, 4, 0);
    }   else if (item.SelectedItem.DisplayText == 'Auspuff 2') {
        mp.events.callRemote("mod", vehicle, 4, 1);
    }   else if (item.SelectedItem.DisplayText == 'Auspuff 3') {
        mp.events.callRemote("mod", vehicle, 4, 2);
    }   else if (item.SelectedItem.DisplayText == 'Auspuff 4') {
        mp.events.callRemote("mod", vehicle, 4, 3);
    }   else if (item.SelectedItem.DisplayText == 'Auspuff 5') {
        mp.events.callRemote("mod", vehicle, 4, 4);
    }   else if (item.SelectedItem.DisplayText == 'Auspuff 6') {
		mp.events.callRemote("mod", vehicle, 4, 5);
    }   else if (item.SelectedItem.DisplayText == 'Auspuff 7') {
        mp.events.callRemote("mod", vehicle, 4, 6);
    }   else if (item.SelectedItem.DisplayText == 'Auspuff 8') {
        mp.events.callRemote("mod", vehicle, 4, 7);
    }   else if (item.SelectedItem.DisplayText == 'Auspuff 9') {
        mp.events.callRemote("mod", vehicle, 4, 8);
    }   else if (item.SelectedItem.DisplayText == 'Auspuff 10') {
        mp.events.callRemote("mod", vehicle, 4, 9);
    }   else if (item.SelectedItem.DisplayText == 'Auspuff 11') {
        mp.events.callRemote("mod", vehicle, 4, 10);
        // Frame
    }   else if (item.SelectedItem.DisplayText == 'Rahmen Std.') {
        mp.events.callRemote("mod", vehicle, 5, -1);
    }   else if (item.SelectedItem.DisplayText == 'Rahmen 1') {
        mp.events.callRemote("mod", vehicle, 5, 0);
    }   else if (item.SelectedItem.DisplayText == 'Rahmen 2') {
        mp.events.callRemote("mod", vehicle, 5, 1);
    }   else if (item.SelectedItem.DisplayText == 'Rahmen 3') {
        mp.events.callRemote("mod", vehicle, 5, 2);
    }   else if (item.SelectedItem.DisplayText == 'Rahmen 4') {
        mp.events.callRemote("mod", vehicle, 5, 3);
    }   else if (item.SelectedItem.DisplayText == 'Rahmen 5') {
        mp.events.callRemote("mod", vehicle, 5, 4);
    }   else if (item.SelectedItem.DisplayText == 'Rahmen 6') {
		mp.events.callRemote("mod", vehicle, 5, 5);
    }   else if (item.SelectedItem.DisplayText == 'Rahmen 7') {
        mp.events.callRemote("mod", vehicle, 5, 6);
    }   else if (item.SelectedItem.DisplayText == 'Rahmen 8') {
        mp.events.callRemote("mod", vehicle, 5, 7);
    }   else if (item.SelectedItem.DisplayText == 'Rahmen 9') {
        mp.events.callRemote("mod", vehicle, 5, 8);
    }   else if (item.SelectedItem.DisplayText == 'Rahmen 10') {
        mp.events.callRemote("mod", vehicle, 5, 9);
    }   else if (item.SelectedItem.DisplayText == 'Rahmen 11') {
        mp.events.callRemote("mod", vehicle, 5, 10);
        // Grille
    }   else if (item.SelectedItem.DisplayText == 'Gitter Std.') {
        mp.events.callRemote("mod", vehicle, 6, -1);
    }   else if (item.SelectedItem.DisplayText == 'Gitter 1') {
        mp.events.callRemote("mod", vehicle, 6, 0);
    }   else if (item.SelectedItem.DisplayText == 'Gitter 2') {
        mp.events.callRemote("mod", vehicle, 6, 1);
    }   else if (item.SelectedItem.DisplayText == 'Gitter 3') {
        mp.events.callRemote("mod", vehicle, 6, 2);
    }   else if (item.SelectedItem.DisplayText == 'Gitter 4') {
        mp.events.callRemote("mod", vehicle, 6, 3);
    }   else if (item.SelectedItem.DisplayText == 'Gitter 5') {
        mp.events.callRemote("mod", vehicle, 6, 4);
    }   else if (item.SelectedItem.DisplayText == 'Gitter 6') {
		mp.events.callRemote("mod", vehicle, 6, 5);
    }   else if (item.SelectedItem.DisplayText == 'Gitter 7') {
        mp.events.callRemote("mod", vehicle, 6, 6);
    }   else if (item.SelectedItem.DisplayText == 'Gitter 8') {
        mp.events.callRemote("mod", vehicle, 6, 7);
    }   else if (item.SelectedItem.DisplayText == 'Gitter 9') {
        mp.events.callRemote("mod", vehicle, 6, 8);
    }   else if (item.SelectedItem.DisplayText == 'Gitter 10') {
        mp.events.callRemote("mod", vehicle, 6, 9);
    }   else if (item.SelectedItem.DisplayText == 'Gitter 11') {
        mp.events.callRemote("mod", vehicle, 6, 10);
        // Hood
    }   else if (item.SelectedItem.DisplayText == 'Motorhaube Std.') {
        mp.events.callRemote("mod", vehicle, 7, -1);
    }   else if (item.SelectedItem.DisplayText == 'Motorhaube 1') {
        mp.events.callRemote("mod", vehicle, 7, 0);
    }   else if (item.SelectedItem.DisplayText == 'Motorhaube 2') {
        mp.events.callRemote("mod", vehicle, 7, 1);
    }   else if (item.SelectedItem.DisplayText == 'Motorhaube 3') {
        mp.events.callRemote("mod", vehicle, 7, 2);
    }   else if (item.SelectedItem.DisplayText == 'Motorhaube 4') {
        mp.events.callRemote("mod", vehicle, 7, 3);
    }   else if (item.SelectedItem.DisplayText == 'Motorhaube 5') {
        mp.events.callRemote("mod", vehicle, 7, 4);
    }   else if (item.SelectedItem.DisplayText == 'Motorhaube 6') {
		mp.events.callRemote("mod", vehicle, 7, 5);
    }   else if (item.SelectedItem.DisplayText == 'Motorhaube 7') {
        mp.events.callRemote("mod", vehicle, 7, 6);
    }   else if (item.SelectedItem.DisplayText == 'Motorhaube 8') {
        mp.events.callRemote("mod", vehicle, 7, 7);
    }   else if (item.SelectedItem.DisplayText == 'Motorhaube 9') {
        mp.events.callRemote("mod", vehicle, 7, 8);
    }   else if (item.SelectedItem.DisplayText == 'Motorhaube 10') {
        mp.events.callRemote("mod", vehicle, 7, 9);
    }   else if (item.SelectedItem.DisplayText == 'Motorhaube 11') {
        mp.events.callRemote("mod", vehicle, 7, 10);
        // Fender
    }   else if (item.SelectedItem.DisplayText == 'Kotflügel Std.') {
        mp.events.callRemote("mod", vehicle, 8, -1);
    }   else if (item.SelectedItem.DisplayText == 'Kotflügel 1') {
        mp.events.callRemote("mod", vehicle, 8, 0);
    }   else if (item.SelectedItem.DisplayText == 'Kotflügel 2') {
        mp.events.callRemote("mod", vehicle, 8, 1);
    }   else if (item.SelectedItem.DisplayText == 'Kotflügel 3') {
        mp.events.callRemote("mod", vehicle, 8, 2);
    }   else if (item.SelectedItem.DisplayText == 'Kotflügel 4') {
        mp.events.callRemote("mod", vehicle, 8, 3);
    }   else if (item.SelectedItem.DisplayText == 'Kotflügel 5') {
        mp.events.callRemote("mod", vehicle, 8, 4);
    }   else if (item.SelectedItem.DisplayText == 'Kotflügel 6') {
		mp.events.callRemote("mod", vehicle, 8, 5);
    }   else if (item.SelectedItem.DisplayText == 'Kotflügel 7') {
        mp.events.callRemote("mod", vehicle, 8, 6);
    }   else if (item.SelectedItem.DisplayText == 'Kotflügel 8') {
        mp.events.callRemote("mod", vehicle, 8, 7);
    }   else if (item.SelectedItem.DisplayText == 'Kotflügel 9') {
        mp.events.callRemote("mod", vehicle, 8, 8);
    }   else if (item.SelectedItem.DisplayText == 'Kotflügel 10') {
        mp.events.callRemote("mod", vehicle, 8, 9);
    }   else if (item.SelectedItem.DisplayText == 'Kotflügel 11') {
        mp.events.callRemote("mod", vehicle, 8, 10);
        // Roof
    }   else if (item.SelectedItem.DisplayText == 'Dach Std.') {
        mp.events.callRemote("mod", vehicle, 10, -1);
    }   else if (item.SelectedItem.DisplayText == 'Dach 1') {
        mp.events.callRemote("mod", vehicle, 10, 0);
    }   else if (item.SelectedItem.DisplayText == 'Dach 2') {
        mp.events.callRemote("mod", vehicle, 10, 1);
    }   else if (item.SelectedItem.DisplayText == 'Dach 3') {
        mp.events.callRemote("mod", vehicle, 10, 2);
    }   else if (item.SelectedItem.DisplayText == 'Dach 4') {
        mp.events.callRemote("mod", vehicle, 10, 3);
    }   else if (item.SelectedItem.DisplayText == 'Dach 5') {
        mp.events.callRemote("mod", vehicle, 10, 4);
    }   else if (item.SelectedItem.DisplayText == 'Dach 6') {
		mp.events.callRemote("mod", vehicle, 10, 5);
    }   else if (item.SelectedItem.DisplayText == 'Dach 7') {
        mp.events.callRemote("mod", vehicle, 10, 6);
    }   else if (item.SelectedItem.DisplayText == 'Dach 8') {
        mp.events.callRemote("mod", vehicle, 10, 7);
    }   else if (item.SelectedItem.DisplayText == 'Dach 9') {
        mp.events.callRemote("mod", vehicle, 10, 8);
    }   else if (item.SelectedItem.DisplayText == 'Dach 10') {
        mp.events.callRemote("mod", vehicle, 10, 9);
    }   else if (item.SelectedItem.DisplayText == 'Dach 11') {
        mp.events.callRemote("mod", vehicle, 10, 10);
        // Engine
    }   else if (item.SelectedItem.DisplayText == 'Motor Std.') {
        mp.events.callRemote("mod", vehicle, 11, -1);
    }   else if (item.SelectedItem.DisplayText == 'Motor 1') {
        mp.events.callRemote("mod", vehicle, 11, 0);
    }   else if (item.SelectedItem.DisplayText == 'Motor 2') {
        mp.events.callRemote("mod", vehicle, 11, 1);
    }   else if (item.SelectedItem.DisplayText == 'Motor 3') {
        mp.events.callRemote("mod", vehicle, 11, 2);
    }   else if (item.SelectedItem.DisplayText == 'Motor 4') {
        mp.events.callRemote("mod", vehicle, 11, 3);
        //Brakes
    }   else if (item.SelectedItem.DisplayText == 'Bremsen Std.') {
        mp.events.callRemote("mod", vehicle, 12, -1);
    }   else if (item.SelectedItem.DisplayText == 'Bremsen 1') {
        mp.events.callRemote("mod", vehicle, 12, 0);
    }   else if (item.SelectedItem.DisplayText == 'Bremsen 2') {
        mp.events.callRemote("mod", vehicle, 12, 1);
    }   else if (item.SelectedItem.DisplayText == 'Bremsen 3') {
        mp.events.callRemote("mod", vehicle, 12, 2);
    }   else if (item.SelectedItem.DisplayText == 'Bremsen 4') {
        // Transmission
    }   else if (item.SelectedItem.DisplayText == 'Getriebe Std.') {
        mp.events.callRemote("mod", vehicle, 13, -1);
    }   else if (item.SelectedItem.DisplayText == 'Getriebe 1') {
		mp.events.callRemote("mod", vehicle, 13, 0);
    }   else if (item.SelectedItem.DisplayText == 'Getriebe 2') {
        mp.events.callRemote("mod", vehicle, 13, 1);
    }   else if (item.SelectedItem.DisplayText == 'Getriebe 3') {
        mp.events.callRemote("mod", vehicle, 13, 2);
    }   else if (item.SelectedItem.DisplayText == 'Getriebe 4') {
        // Horn
    }   else if (item.SelectedItem.DisplayText == 'Hupe Std.') {
        mp.events.callRemote("mod", vehicle, 14, -1);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 1') {
		mp.events.callRemote("mod", vehicle, 14, 0);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 2') {
        mp.events.callRemote("mod", vehicle, 14, 1);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 3') {
        mp.events.callRemote("mod", vehicle, 14, 2);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 4') {
        mp.events.callRemote("mod", vehicle, 14, 3);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 5') {
        mp.events.callRemote("mod", vehicle, 14, 4);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 6') {
		mp.events.callRemote("mod", vehicle, 14, 5);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 7') {
        mp.events.callRemote("mod", vehicle, 14, 6);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 8') {
        mp.events.callRemote("mod", vehicle, 14, 7);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 9') {
        mp.events.callRemote("mod", vehicle, 14, 8);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 10') {
        mp.events.callRemote("mod", vehicle, 14, 9);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 11') {
        mp.events.callRemote("mod", vehicle, 14, 10);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 12') {
		mp.events.callRemote("mod", vehicle, 14, 11);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 13') {
        mp.events.callRemote("mod", vehicle, 14, 12);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 14') {
        mp.events.callRemote("mod", vehicle, 14, 13);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 15') {
        mp.events.callRemote("mod", vehicle, 14, 14);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 16') {
        mp.events.callRemote("mod", vehicle, 14, 15);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 17') {
		mp.events.callRemote("mod", vehicle, 14, 16);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 18') {
        mp.events.callRemote("mod", vehicle, 14, 17);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 19') {
        mp.events.callRemote("mod", vehicle, 14, 18);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 20') {
        mp.events.callRemote("mod", vehicle, 14, 19);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 21') {
        mp.events.callRemote("mod", vehicle, 14, 20);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 22') {
        mp.events.callRemote("mod", vehicle, 14, 21);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 23') {
		mp.events.callRemote("mod", vehicle, 14, 22);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 24') {
        mp.events.callRemote("mod", vehicle, 14, 23);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 25') {
        mp.events.callRemote("mod", vehicle, 14, 24);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 26') {
        mp.events.callRemote("mod", vehicle, 14, 25);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 27') {
        mp.events.callRemote("mod", vehicle, 14, 26);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 28') {
		mp.events.callRemote("mod", vehicle, 14, 27);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 30') {
        mp.events.callRemote("mod", vehicle, 14, 28);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 31') {
        mp.events.callRemote("mod", vehicle, 14, 29);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 32') {
        mp.events.callRemote("mod", vehicle, 14, 30);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 33') {
        mp.events.callRemote("mod", vehicle, 14, 31);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 34') {
        mp.events.callRemote("mod", vehicle, 14, 32);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 35') {
		mp.events.callRemote("mod", vehicle, 14, 33);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 36') {
        mp.events.callRemote("mod", vehicle, 14, 34);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 37') {
        mp.events.callRemote("mod", vehicle, 14, 35);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 38') {
        mp.events.callRemote("mod", vehicle, 14, 36);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 39') {
        mp.events.callRemote("mod", vehicle, 14, 37);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 40') {
		mp.events.callRemote("mod", vehicle, 14, 38);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 41') {
        mp.events.callRemote("mod", vehicle, 14, 39);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 42') {
        mp.events.callRemote("mod", vehicle, 14, 40);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 43') {
        mp.events.callRemote("mod", vehicle, 14, 41);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 44') {
        mp.events.callRemote("mod", vehicle, 14, 42);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 45') {
        mp.events.callRemote("mod", vehicle, 14, 43);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 46') {
		mp.events.callRemote("mod", vehicle, 14, 44);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 47') {
        mp.events.callRemote("mod", vehicle, 14, 45);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 48') {
        mp.events.callRemote("mod", vehicle, 14, 46);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 49') {
        mp.events.callRemote("mod", vehicle, 14, 47);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 50') {
        mp.events.callRemote("mod", vehicle, 14, 48);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 51') {
		mp.events.callRemote("mod", vehicle, 14, 49);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 52') {
        mp.events.callRemote("mod", vehicle, 14, 50);
    }   else if (item.SelectedItem.DisplayText == 'Hupe 53') {
        mp.events.callRemote("mod", vehicle, 14, 51);
        // Suspension
    }   else if (item.SelectedItem.DisplayText == 'Federung Std.') {
		mp.events.callRemote("mod", vehicle, 15, -1);
    }   else if (item.SelectedItem.DisplayText == 'Federung 1') {
        mp.events.callRemote("mod", vehicle, 15, 0);
    }   else if (item.SelectedItem.DisplayText == 'Federung 2') {
        mp.events.callRemote("mod", vehicle, 15, 1);
    }   else if (item.SelectedItem.DisplayText == 'Federung 3') {
        mp.events.callRemote("mod", vehicle, 15, 2);
    }   else if (item.SelectedItem.DisplayText == 'Federung 4') {
        mp.events.callRemote("mod", vehicle, 15, 3);
        // Turbo
    }   else if (item.SelectedItem.DisplayText == 'Kein Turbo') {
		mp.events.callRemote("mod", vehicle, 18, -1);
    }   else if (item.SelectedItem.DisplayText == 'Turbo') {
        mp.events.callRemote("mod", vehicle, 18, 0);
        // Xeon
    }   else if (item.SelectedItem.DisplayText == 'Kein Xenon') {
		mp.events.callRemote("mod", vehicle, 22, -1);
    }   else if (item.SelectedItem.DisplayText == 'Xenon') {
        mp.events.callRemote("mod", vehicle, 22, 0);
        // Front Wheels
    }   else if (item.SelectedItem.DisplayText == 'Felgen Std.') {
        mp.events.callRemote("mod", vehicle, 23, -1);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 0') {
		mp.events.callRemote("mod", vehicle, 23, 0);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 1') {
        mp.events.callRemote("mod", vehicle, 23, 1);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 2') {
        mp.events.callRemote("mod", vehicle, 23, 2);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 3') {
        mp.events.callRemote("mod", vehicle, 23, 3);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 4') {
        mp.events.callRemote("mod", vehicle, 23, 4);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 5') {
		mp.events.callRemote("mod", vehicle, 23, 5);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 6') {
        mp.events.callRemote("mod", vehicle, 23, 6);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 7') {
        mp.events.callRemote("mod", vehicle, 23, 7);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 8') {
        mp.events.callRemote("mod", vehicle, 23, 8);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 9') {
        mp.events.callRemote("mod", vehicle, 23, 9);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 10') {
        mp.events.callRemote("mod", vehicle, 23, 10);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 11') {
		mp.events.callRemote("mod", vehicle, 23, 11);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 12') {
        mp.events.callRemote("mod", vehicle, 23, 12);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 13') {
        mp.events.callRemote("mod", vehicle, 23, 13);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 14') {
        mp.events.callRemote("mod", vehicle, 23, 14);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 15') {
        mp.events.callRemote("mod", vehicle, 23, 15);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 16') {
		mp.events.callRemote("mod", vehicle, 23, 16);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 17') {
        mp.events.callRemote("mod", vehicle, 23, 17);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 18') {
        mp.events.callRemote("mod", vehicle, 23, 18);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 19') {
        mp.events.callRemote("mod", vehicle, 23, 19);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 22') {
        mp.events.callRemote("mod", vehicle, 23, 20);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 21') {
        mp.events.callRemote("mod", vehicle, 23, 21);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 22') {
		mp.events.callRemote("mod", vehicle, 23, 22);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 23') {
        mp.events.callRemote("mod", vehicle, 23, 23);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 24') {
        mp.events.callRemote("mod", vehicle, 23, 24);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 25') {
        mp.events.callRemote("mod", vehicle, 23, 25);
    }   else if (item.SelectedItem.DisplayText == 'Felgen -1') {
        mp.events.callRemote("mod", vehicle, 23, -1);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 0') {
		mp.events.callRemote("mod", vehicle, 23, 0);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 1') {
        mp.events.callRemote("mod", vehicle, 23, 1);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 2') {
        mp.events.callRemote("mod", vehicle, 23, 2);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 3') {
        mp.events.callRemote("mod", vehicle, 23, 3);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 4') {
        mp.events.callRemote("mod", vehicle, 23, 4);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 5') {
		mp.events.callRemote("mod", vehicle, 23, 5);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 6') {
        mp.events.callRemote("mod", vehicle, 23, 6);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 7') {
        mp.events.callRemote("mod", vehicle, 23, 7);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 8') {
        mp.events.callRemote("mod", vehicle, 23, 8);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 9') {
        mp.events.callRemote("mod", vehicle, 23, 9);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 10') {
        mp.events.callRemote("mod", vehicle, 23, 10);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 11') {
		mp.events.callRemote("mod", vehicle, 23, 11);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 12') {
        mp.events.callRemote("mod", vehicle, 23, 12);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 13') {
        mp.events.callRemote("mod", vehicle, 23, 13);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 14') {
        mp.events.callRemote("mod", vehicle, 23, 14);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 15') {
        mp.events.callRemote("mod", vehicle, 23, 15);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 16') {
		mp.events.callRemote("mod", vehicle, 23, 16);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 17') {
        mp.events.callRemote("mod", vehicle, 23, 17);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 18') {
        mp.events.callRemote("mod", vehicle, 23, 18);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 19') {
        mp.events.callRemote("mod", vehicle, 23, 19);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 22') {
        mp.events.callRemote("mod", vehicle, 23, 20);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 21') {
        mp.events.callRemote("mod", vehicle, 23, 21);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 22') {
		mp.events.callRemote("mod", vehicle, 23, 22);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 23') {
        mp.events.callRemote("mod", vehicle, 23, 23);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 24') {
        mp.events.callRemote("mod", vehicle, 23, 24);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 25') {
        mp.events.callRemote("mod", vehicle, 23, 25);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 26') {
        mp.events.callRemote("mod", vehicle, 23, 26);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 28') {
		mp.events.callRemote("mod", vehicle, 23, 27);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 29') {
        mp.events.callRemote("mod", vehicle, 23, 28);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 30') {
        mp.events.callRemote("mod", vehicle, 23, 29);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 31') {
        mp.events.callRemote("mod", vehicle, 23, 30);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 32') {
        mp.events.callRemote("mod", vehicle, 23, 31);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 33') {
        mp.events.callRemote("mod", vehicle, 23, 32);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 34') {
		mp.events.callRemote("mod", vehicle, 23, 33);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 35') {
        mp.events.callRemote("mod", vehicle, 23, 34);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 36') {
        mp.events.callRemote("mod", vehicle, 23, 35);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 37') {
        mp.events.callRemote("mod", vehicle, 23, 36);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 38') {
        mp.events.callRemote("mod", vehicle, 23, 37);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 39') {
		mp.events.callRemote("mod", vehicle, 23, 38);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 40') {
        mp.events.callRemote("mod", vehicle, 23, 39);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 41') {
        mp.events.callRemote("mod", vehicle, 23, 40);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 42') {
        mp.events.callRemote("mod", vehicle, 23, 41);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 43') {
        mp.events.callRemote("mod", vehicle, 23, 42);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 44') {
        mp.events.callRemote("mod", vehicle, 23, 43);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 45') {
		mp.events.callRemote("mod", vehicle, 23, 44);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 46') {
        mp.events.callRemote("mod", vehicle, 23, 45);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 47') {
        mp.events.callRemote("mod", vehicle, 23, 46);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 48') {
        mp.events.callRemote("mod", vehicle, 23, 47);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 49') {
        mp.events.callRemote("mod", vehicle, 23, 48);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 50') {
		mp.events.callRemote("mod", vehicle, 23, 49);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 51') {
        mp.events.callRemote("mod", vehicle, 23, 50);
    }   else if (item.SelectedItem.DisplayText == 'Felgen 52') {
        mp.events.callRemote("mod", vehicle, 23, 51);

        // BENNYS PLATEHOLDER
    }   else if (item.SelectedItem.DisplayText == 'Std. Schild') {
        mp.events.callRemote("mod", vehicle, 25, -1);
    }   else if (item.SelectedItem.DisplayText == 'Schild 1') {
        mp.events.callRemote("mod", vehicle, 25, 1);
    }   else if (item.SelectedItem.DisplayText == 'Schild 2') {
        mp.events.callRemote("mod", vehicle, 25, 2);
    }   else if (item.SelectedItem.DisplayText == 'Schild 3') {
        mp.events.callRemote("mod", vehicle, 25, 3);
    }   else if (item.SelectedItem.DisplayText == 'Schild 4') {
        mp.events.callRemote("mod", vehicle, 25, 4);
    }   else if (item.SelectedItem.DisplayText == 'Schild 5') {
        mp.events.callRemote("mod", vehicle, 25, 5);
    }   else if (item.SelectedItem.DisplayText == 'Schild 6') {
        mp.events.callRemote("mod", vehicle, 25, 6);
    }   else if (item.SelectedItem.DisplayText == 'Schild 7') {
        mp.events.callRemote("mod", vehicle, 25, 7);
    }   else if (item.SelectedItem.DisplayText == 'Schild 8') {
        mp.events.callRemote("mod", vehicle, 25, 8);
    }   else if (item.SelectedItem.DisplayText == 'Schild 9') {
        mp.events.callRemote("mod", vehicle, 25, 9);
    }   else if (item.SelectedItem.DisplayText == 'Schild 10') {
        mp.events.callRemote("mod", vehicle, 25, 10);

        // TRIM
    }   else if (item.SelectedItem.DisplayText == 'Std. Innenraum') {
        mp.events.callRemote("mod", vehicle, 27, -1);
    }   else if (item.SelectedItem.DisplayText == 'Innenraum 1') {
        mp.events.callRemote("mod", vehicle, 27, 0);
    }   else if (item.SelectedItem.DisplayText == 'Innenraum 2') {
        mp.events.callRemote("mod", vehicle, 27, 1);
    }   else if (item.SelectedItem.DisplayText == 'Innenraum 3') {
        mp.events.callRemote("mod", vehicle, 27, 2);

        // ORNAMENTS
    }   else if (item.SelectedItem.DisplayText == 'Std. Ornamente') {
        mp.events.callRemote("mod", vehicle, 28, -1)
    }   else if (item.SelectedItem.DisplayText == 'Ornament 1') {
        mp.events.callRemote("mod", vehicle, 28, 0)
    }   else if (item.SelectedItem.DisplayText == 'Ornament 2') {
        mp.events.callRemote("mod", vehicle, 28, 1)
    }   else if (item.SelectedItem.DisplayText == 'Ornament 3') {
        mp.events.callRemote("mod", vehicle, 28, 2)

		// WINDOWTINT
    }   else if (item.SelectedItem.DisplayText == 'Toenung Std.') {
        mp.events.callRemote("modwindowtint", vehicle, 0);
	}   else if (item.SelectedItem.DisplayText == 'Toenung Stark') {
        mp.events.callRemote("modwindowtint", vehicle, 1);
	}   else if (item.SelectedItem.DisplayText == 'Toenung Mittel') {
        mp.events.callRemote("modwindowtint", vehicle, 2);
	}   else if (item.SelectedItem.DisplayText == 'Toenung Leicht') {
        mp.events.callRemote("modwindowtint", vehicle, 3);
	}
    });

mp.events.add("client:Bennys:openTuningMenu", () => {
	if (ui.Visible) ui.Close();
	else ui.Open();
});

/*
mp.events.add("modpearl", (vehicle, pearlescentColor, color) => {
    mp.game.graphics.notify(""+parseInt(pearlescentColor));
	  vehicle.setModColor1(2, parseInt(color), parseInt(pearlescentColor));
    mp.players.forEachInStreamRange(
  		(player, id) => {
        mp.events.callRemote("modpearl1sync", player, vehicle, pearlescentColor);
  		}
  	);
});
*/
