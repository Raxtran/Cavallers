var Game = function (game) { };

Game.prototype = {


    preload: function () {
        this.optionCount = 1;
        // game.load.script('gameOver', 'src/game/GameOver.js');
        game.load.image("vermell", "img/vermell.png");
        game.load.image("groc", "img/groc.png");
    },

    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        soldats = game.add.group();
        soldats.enableBody = true;
        soldats.physicsBodyType = Phaser.Physics.ARCADE;
        soldats.setAll('outOfBoundsKill', true);
        soldats.setAll('checkWorldBounds', true);

        scoreString = 'Score : ';
        punts = 0;
        scoreText = game.add.text(10, 10, scoreString + punts, { font: '20px Arial', fill: '#fff' });
    },

    createSoldats: function () {
        var heDeCrear = game.rnd.integerInRange(0, 100);
        if (heDeCrear < 2) {
            var costat = game.rnd.integerInRange(0, 1);
            var llocx = costat * game.width;
            if (costat == 0) {
                llocx = -game.cache.getImage("vermell").width;
            }
            var maxY = game.height - game.cache.getImage("vermell").height;
            var llocy = game.rnd.integerInRange(game.cache.getImage("vermell").height / 2, maxY);
            console.log(llocy);
            if ((quin = game.rnd.integerInRange(0, 1)) == 0) {
                var soldat = soldats.create(llocx, llocy, 'vermell');
                soldat.tipus = "dolent";
            } else {
                var soldat = soldats.create(llocx, llocy, 'groc');
                soldat.tipus = "amic";
            }
            soldat.anchor.setTo(.5, .5);
            soldat.inputEnabled = true;
            soldat.events.onInputDown.add(mata, this);

            function mata(sprite, pointer) {
                if (sprite.tipus == "amic") {
                    game.state.start("GameOver");
                } else {
                    punts++;
                    scoreText.setText("Score: " + punts);
                }
                sprite.destroy();
            };

            if (costat == 0) {
                soldat.body.velocity.x = 100 + game.rnd.integerInRange(0, 50);
            } else {
                soldat.scale.x *= -1;
                soldat.body.velocity.x = -100 - + game.rnd.integerInRange(0, 50);
            }

            // function onDown(pointer) {
            // pointer will contain the pointer that
            // activated this event
            //    pointer.destroy();
            // }
        }
    },

    update: function () {
        this.createSoldats();
    }

};