	mp.events.add('doorNotify', (message) => {
		mp.game.ui.setNotificationTextEntry("STRING");
		mp.game.ui.setNotificationMessage("CHAR_ACTING_UP", "CHAR_ACTING_UP", false, 4, 'Tür-System', message);
		mp.game.ui.drawNotification(true, false);
	});

	mp.events.add("notification", function(id, text) {
		if(id == 1) {//Info Notification
			mp.game.audio.playSoundFrontend(-1, "Out_Of_Bounds_Timer", "DLC_HEISTS_GENERAL_FRONTEND_SOUNDS", true);
			mp.game.ui.setNotificationTextEntry("STRING");
			mp.game.ui.setNotificationMessage("CHAR_ACTING_UP", "CHAR_ACTING_UP", false, 4, 'Information', text);
			mp.game.ui.drawNotification(true, false);
		} else if (id == 2) {//Success Notification
			mp.game.audio.playSoundFrontend(-1, "CHECKPOINT_PERFECT", "HUD_MINI_GAME_SOUNDSET", true);
			mp.game.ui.setNotificationTextEntry("STRING");
			mp.game.ui.setNotificationMessage("CHAR_PLANESITE", "CHAR_PLANESITE", false, 4, 'Erfolgreich', text);
			mp.game.ui.drawNotification(true, false);
		} else if (id == 3) {//Warning Notification
			mp.game.audio.playSoundFrontend(-1, "5_SEC_WARNING", "HUD_MINI_GAME_SOUNDSET", true);
			mp.game.ui.setNotificationTextEntry("STRING");
			mp.game.ui.setNotificationMessage("CHAR_MILSITE", "CHAR_MILSITE", false, 4, 'Warnung', text);
			mp.game.ui.drawNotification(true, false);
		} else if (id == 4) {//Error Notification
			mp.game.audio.playSoundFrontend(-1, "ERROR", "HUD_FRONTEND_CLOTHESSHOP_SOUNDSET", true);
			mp.game.ui.setNotificationTextEntry("STRING");
			mp.game.ui.setNotificationMessage("CHAR_BLOCKED", "CHAR_BLOCKED", false, 4, 'Fehler', text);
			mp.game.ui.drawNotification(true, false);
		};
	});