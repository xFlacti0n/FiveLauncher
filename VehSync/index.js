mp.events.add("entityStreamIn", (entity) => {
    if (entity.type === "vehicle") {
        // Fahrzeuge beim StreamIn syncen und am ausflippen hindern :)
        mp.game.streaming.requestCollisionAtCoord(entity.position.x, entity.position.y, entity.position.z);

        //mp.game.invoke('0x199640F55E0F7596', entity.position.x, entity.position.y, entity.position.z);
        //Native nicht mehr verfügbar, war mal REQUEST_ADDITIONAL_COLLISION_AT_COORD - wurde in RageMP übernommen als ...
        mp.game.streaming.requestAdditionalCollisionAtCoord(entity.position.x, entity.position.y, entity.position.z);

        entity.setLoadCollisionFlag(true);
        entity.trackVisibility();

        // Pearl Tuning
        if (entity.getVariable("pearlColor")) {
          entity.setExtraColours(parseInt(entity.getVariable("pearlColor")), parseInt(entity.wheelColor));
        }

        /*// Sync Sirene
        if (entity.getVariable("isSirenOn") === true){
            entity.setSiren(true);
        } else {
            entity.setSiren(false);
        }*/

        // Sync Silent
        if (entity.getVariable("isSilent") === true){
            entity.setSilent(true);
        } else {
            entity.setSilent(false);
        }

        // Motor Sync
        if (entity.getVariable("isEngineRunning") === true){
            entity.setEngineOn(true, true, false);
        } else {
            entity.setEngineOn(false, true, false);
        }
    }
});

mp.events.add("updatePearlForVehicle", (vehicle, wheelColor, pearlColor) => {
    if (vehicle !== undefined){
        vehicle.setExtraColours(parseInt(pearlColor), parseInt(wheelColor));
    } else {
        mp.game.graphics.notify("Client hat undifined vehicle");
    }
});