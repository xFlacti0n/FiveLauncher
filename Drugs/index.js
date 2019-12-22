mp.events.add("smokeJointEffect", () =>{

    mp.game.graphics.startScreenEffect("DrugsTrevorClownsFightIn", 60000, false);
    
    setTimeout(_ => {
        mp.game.graphics.stopScreenEffect("DrugsTrevorClownsFightIn");
        mp.game.graphics.startScreenEffect("DrugsTrevorClownsFightOut", 10000, false);
    }, 30000);

});

mp.events.add("MagicMushroomEffect", () => {
    
    mp.game.graphics.startScreenEffect("DrugsMichaelAliensFightIn", 60000, false);

    setTimeout(_ => {
        mp.game.graphics.stopScreenEffect("DrugsMichaelAliensFightIn");
        mp.game.graphics.startScreenEffect("DrugsMichaelAliensFightOut", 10000, false);
    }, 30000);
});