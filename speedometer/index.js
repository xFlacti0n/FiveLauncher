let speedo = mp.browsers.new("package://speedometer/CEF/speedometer.html");
let showed = false;
let player = mp.players.local;


let newkm = 0;
var vehPos1 = null;
var vehPos2 = null;
let timeNow = Date.now();
let distance = 0;

mp.events.add('render', () =>
{
	if (player.vehicle && player.vehicle.getPedInSeat(-1) === player.handle) // Check if player is in vehicle and is driver
	{

		
		if(showed === false) // Check if speedo is already showed
		{
			speedo.execute("showSpeedo();");
			showed = true;
		}
		/*Get vehicle infos*/
		let vel = player.vehicle.getSpeed() * 3.6 ;  	//Doc: https://wiki.rage.mp/index.php?title=Entity::getSpeed
		let rpm = player.vehicle.rpm * 1000; 			//Doc: https://wiki.rage.mp/index.php?title=Vehicle::rpm
		//let gas = player.vehicle.getPetrolTankHealth(); //Doc: https://wiki.rage.mp/index.php?title=Vehicle::getPetrolTankHealth
		//let gas2 = gas < 0 ? 0: gas / 10;


		let gas = player.vehicle.getVariable('Tank');
		kmS = player.vehicle.getVariable('Kilometer');
		speedo.execute(`update(${vel}, ${rpm}, ${gas}, ${kmS});`); // Send data do CEF
	}
	else
	{
		if(showed)
		{
			speedo.execute("hideSpeedo();");
			showed = false;
		}
	}
});

setInterval(function(){_intervalFunction();},1000);

function _intervalFunction() {
//all your stuff goes here
	let player = mp.players.local;
		if (player.vehicle && player.vehicle.getPedInSeat(-1) === player.handle) // Check if player is in vehicle and is driver
		{
			let speed = mp.players.local.vehicle.getSpeed();
			let veh_data = JSON.stringify({"speedofcar":speed});
			mp.events.callRemote('calc_km', (player, veh_data));
		}
};

mp.events.add('isInCar', () =>
{

});

