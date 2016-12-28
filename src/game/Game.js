var Game = function (game) { };

Game.prototype = {


    preload: function () {
        this.optionCount = 1;
        game.stage.backgroundColor = '#000';
        var background = game.add.sprite(0,0,'background');
        background.height = game.world.height;
        background.width = game.world.width;
        // game.load.image("vermell", "img/vermell.png");
        // game.load.image("groc", "img/groc.png");

        game.stage.disableVisibilityChange = true;

    },

    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        soldats = game.add.group();
        soldats.enableBody = true;
        soldats.physicsBodyType = Phaser.Physics.ARCADE;
        // soldats.setAll('outOfBoundsKill', true);
        soldats.setAll('checkWorldBounds', true);
        // soldats.setAll('body.bounce.y', 1);
        // soldats.setAll('body.bounce.x', 1);

        scoreString = 'Score : ';
        punts = 0;
        escaped = 0;
        scoreText = game.add.text(10, 10, "Score: " + punts + " - Escapats: " + escaped,
         { font: '20px Arial', fill: '#fff' });
    },

    createSoldats: function () {
        var heDeCrear = game.rnd.integerInRange(0, 100);
        if (heDeCrear < 2) {
            var costat = game.rnd.integerInRange(0, 1);
            var llocx = costat * game.width;
            if (costat == 0) {
                llocx = -game.cache.getImage("vermell").width/2;
            }
            var maxY = game.height - game.cache.getImage("vermell").height;
            var llocy = game.rnd.integerInRange(game.cache.getImage("vermell").height / 2, maxY);
            if ((quin = game.rnd.integerInRange(0, 1)) == 0) {
                var soldat = soldats.create(llocx, llocy, 'vermell');
                soldat.tipus = "dolent";
                soldat.events.onOutOfBounds.add(this.enemicScaped, this);
                soldat.checkWorldBounds = true;
            } else {
                var soldat = soldats.create(llocx, llocy, 'groc');
                soldat.tipus = "amic";
                soldat.checkWorldBounds = true;
                soldat.events.onOutOfBounds.add(this.soldatOut, this);
            }
            soldat.anchor.setTo(.5, .5);
            soldat.inputEnabled = true;
            soldat.events.onInputDown.add(mata, this);

            function mata(sprite, pointer) {
                if (sprite.tipus == "amic") {
                    game.state.start("GameOver");
                } else {
                    punts++;
                    scoreText.setText("Score: " + punts + " - Escapats: " + escaped);
                }
                sprite.destroy();
            };

            if (costat == 0) {
                soldat.body.velocity.x = 120 + game.rnd.integerInRange(0, 80);
            } else {
                soldat.scale.x *= -1;
                soldat.body.velocity.x = -120 - + game.rnd.integerInRange(0, 80);
            }

            // Fem que cavalquin...
            game.add.tween(soldat).to({angle: -3}, 100, Phaser.Easing.Bounce.InOut)
                                  .to({angle:3}, 100, Phaser.Easing.Bounce.Out)
                                  .loop().start();

        }
    },

    enemicScaped: function(soldat) {
        escaped++;
        scoreText.setText("Score: " + punts + " - Escapats: " + escaped);
        soldat.destroy();
    },

    soldatOut: function(soldat) {
        soldat.destroy();
    },

    update: function () {
        this.createSoldats();
        // game.physics.arcade.collide(soldats);
    }

};