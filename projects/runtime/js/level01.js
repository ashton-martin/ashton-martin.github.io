var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:350},
                {type: 'sawblade',x:900,y:groundY},
                {type: 'sawblade',x:1200,y:250},
                {type: 'sawblade',x:1900,y:groundY}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
        var hitZoneSize = 25; 
        var damageFromObstacle = 10; 
        
        
        
        
        //generates multiple sawblades
        function createSawBlade(x, y){
              var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle); 
                myObstacle.x = x;
                myObstacle.y = y;
                game.addGameItem(myObstacle)
           //adding sawblade obstacle
            var obstacleImage = draw.bitmap("img/sawblade.png");
                myObstacle.addChild(obstacleImage); 
                obstacleImage.x = -25;
                obstacleImage.y =-25;            
        }
//        createSawBlade(300,300);
//        createSawBlade(500,300);
//        createSawBlade(800,300);
        
        for (var i = 0; i < levelData.gameItems.length; i++){
            var gameItem = levelData.gameItems[i];
            for (var key in gameItem){
                if (gameItem.type === "sawblade"){
                 createSawBlade(gameItem.x, gameItem.y);   
                }
                
            }
        }
        function createBox(x, y){
            var myObstacle2 = game.createObstacle(hitZoneSize, damageFromObstacle); 
                myObstacle2.x = x;
                myObstacle2.y = y;
                game.addGameItem(myObstacle2)
        }
        createBox(200, 500);
        
        //create an enemy
        function createEnemy(x, y) {
            var enemy =  game.createGameItem('enemy',25);
            var redSquare = draw.rect(50,50,'red');
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            //positions the enemy on the screen 
            enemy.x = x;
            enemy.y = y;
            //shows the enemy on the screen 
            game.addGameItem(enemy);
            
            enemy.velocityX = -1;
            enemy.rotationalVelocity = 10; 
           
           enemy.onPlayerCollision = function() {
               game.changeIntegrity(-10);
               enemy.fadeOut();
            };
            enemy.onProjectileCollision = function() {
                game.increaseScore(100);
                enemy.fadeOut();
            }            
            }
//            createEnemy(400, groundY-10);
//            createEnemy(800,groundY-100);
//            createEnemy(1200,groundY-50);
            
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}