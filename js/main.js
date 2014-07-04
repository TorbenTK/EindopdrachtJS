///////////////////////////////////////////////
//////////////// / Variable /  ////////////////
///////////////////////////////////////////////

var timerInterval; // snelheid van de blokjes
var spawnInterval; // interval waarop de blokjes spawnen
var enemySpawnPosition; // px position where the enemies will start when they spawn
var enemyNr; // Current enemy number
var oldestEnemy; // Oldest enemy in existence
var newestEnemy; // Newest enemy in existence
var enemies = []; // list of Enemies

///////////////////////////////////////////////
/////////////// / Initialize /  ///////////////
///////////////////////////////////////////////

// Create new views - again Self Invoking!
(function () {
    site.init = function () {

        //new site.views.EnemyFigureView($(".enemy"));
        var slow = new site.models.SlowModel();
        new site.views.EnemyFigureView({el: ".enemy", model: slow});
        new site.views.PowerupFigureView({el: ".powerup", model: slow});


        Backbone.history.start();
    };


    timerInterval = 100;
    spawnInterval = 500;
    isRunning = true; //TODO
    enemySpawnPosition = "1350px";
    enemyNr = 1;
    oldestEnemy = 0;
    newestEnemy = 0;

    site.$document.on('ready', site.init);
})();


// Objects
var player = new Player(2);

// Factory functie om enemies te maken!
var createEnemies = function () {
    console.log(enemyNr);
    var enemyNrString = enemyNr.toString();
    var randomNr = Math.floor(Math.random() * 3) + 1;

    //var enemies = [];

    var enemy = new EnemyFigure(randomNr, "e" + enemyNrString);
    enemy.giveLanePosition();
    console.log(enemy.name + "'s lane: " + enemy.lane);

    // Creeër element
    var div = $("<div>", {id: enemy.name, class: "enemy lane"+enemy.lane});
    div.css("margin-left", enemySpawnPosition);
    $("#playground").append(div);


        enemies.push(enemy);
        //console.log(enemies);

    enemyNr++;
    newestEnemy++;
    console.log(newestEnemy);

    setTimeout(function(){
        createEnemies();
    }, spawnInterval);

    return enemies;
};


//var enemies = [];
//var enemy = new EnemyFigure(2, "e" + enemyNrString);

///////////////////////////////////////////////
/////////////// / Game setup /  ///////////////
///////////////////////////////////////////////

createEnemies(); // start het proces van het creeëren van der enemies!
player.toggleLanePosition(); // zet de positie bij de bijbehorende initialisatie


///////////////////////////////////////////////
////////////// / Game effects /  //////////////
///////////////////////////////////////////////

// TIMERS
window.setTimeout(moveAllFigures, timerInterval); // timer

// Handelt de toetseninput af
$(document).keypress(function(e) {
    var code = (e.keyCode ? e.keyCode : e.which);

        player.changeLane(code);
        player.toggleLanePosition();

    // Debug toetsen
    if (code == 115) // activeert de 'slow Powerup'
    {
        console.log(timerInterval);
        timerInterval *= 2;
        spawnInterval *= 2;

        setTimeout(function(){
            timerInterval /= 2;
            spawnInterval /= 2;
            console.log("Slow has been lifted!");
        }, 5000);
    }
});


function moveAllFigures() {
    // Effect Slow TEST
    //site.$document.trigger("showSlowedEffect");
    // Tijdelijke selector
    var position;

    for (var i = 1; i <= newestEnemy; i++) {
        var enemyDiv = $("#e" + i);

        // Beweeg alle figuurtjes
        position = enemyDiv.css("margin-left"); // Haal huidige positie op enemy

        var intPosition = parseInt(position);
        var newPosition = intPosition - 20 + "px";

        position = enemyDiv.css("margin-left", newPosition);

        checkPosition(enemies[i-1], intPosition);
    }

    // At the end, call again
    timerInterval -= 0.05;
    spawnInterval -= 0.05;
    window.setTimeout(moveAllFigures, timerInterval);

}

// Check of er objecten ergens mee botsen, waaronder zijkant scherm en player.
// Eerstgenoemde zorgt ervoor dat ik objecten uit het geheugen kan verwijderen,
//  waardoor het spel minder last heeft van een overkill aan RAM
function checkPosition(object, currentPos) {
    this.object = object;

    if (currentPos > 130 && currentPos < 200)
    {
        if (object.lane == player.lane)
        {
            console.log("HIT!!!!!!");
            timerInterval = 9999999999999; // Stopt alle blokjes
            spawnInterval = 9999999999999; // Stopt het spawnen
            alert("Je bent geraakt. Refresh de pagina en probeer het opnieuw");
        }
    }
}