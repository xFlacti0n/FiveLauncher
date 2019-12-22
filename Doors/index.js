var doors = [];
var doorStates = [];

/*var doorsToRemove = [
    {
        hash: mp.game.joaat("v_ilev_lostdoor"),
        posX: 984.1553,
        posY: -95.36626,
        posZ: 75.9326,
        radius: 10,
    },
    {
        hash: mp.game.joaat("hei_hw1_13_biker_aux_door"),
        posX: 981.793,
        posY: -117.7915,
        posZ: 79.14375,
        radius: 10
    }
];*/

/*function removeDoors(){
    doorsToRemove.forEach((door) => {
        mp.game.entity.createModelHide(door.posX, door.posY, door.posZ, door.radius, door.hash, true);
    });
}
removeDoors();*/

mp.events.add("receiveDoors", (namesJSON, statesJSON) => {
    doors = JSON.parse(namesJSON);
    doorStates = JSON.parse(statesJSON); 
   
    doors.forEach((door) =>
    {
        mp.game.object.doorControl(door.hash, door.position.x, door.position.y, door.position.z, doorStates[door.id], 0.0, 0.0, 0);
    });
});

mp.events.add("changeDoorState", (door) => {
    var doorObj = JSON.parse(door);
    mp.game.object.doorControl(doorObj.hash, doorObj.position.x, doorObj.position.y, doorObj.position.z, doorObj.locked, 0.0, 0.0, 0.0);
    mp.events.callRemote("getDoors", mp.players.local);
});

mp.keys.bind(0x45, true, () =>
{
    doors.forEach((door) =>
    {
        if(mp.game.gameplay.getDistanceBetweenCoords(door.controlposition.x, door.controlposition.y, door.controlposition.z, mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z, true) < 2.1)
        {
            mp.events.callRemote("checkDoorPermission", JSON.stringify(door));
        }
    });
});


mp.events.add('doorNotify', (message) => {
	mp.game.ui.setNotificationTextEntry("STRING");
    mp.game.ui.setNotificationMessage("CHAR_ACTING_UP", "CHAR_ACTING_UP", false, 4, 'Tür-System', message);
    mp.game.ui.drawNotification(true, false);
});