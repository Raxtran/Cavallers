var GameMenu = function () { };

GameMenu.prototype = {
    preload: function () {
        var background = game.add.sprite(0, 0, 'background');
        background.height = game.world.height;
        background.width = game.world.width;

        mig = + this.game.world.centerY * 0.5;

        var comensar = game.add.sprite(this.game.world.centerX, this.game.world.centerY + mig, 'comensar');
        comensar.anchor.setTo(.5, .5);

        comensar.inputEnabled = true;
        // Now every time we click on it, it says "You did it!" in the console!
        comensar.events.onInputUp.add(function () {
            game.state.start("Game");
        });

        comensar.events.onInputOver.add(function (target) {
            moviment = game.add.tween(comensar).to({ angle: -5 }, 200, Phaser.Easing.Bounce.In)
                .to({ angle: 5 }, 200, Phaser.Easing.Bounce.Out)
                .loop().start();
        });

        comensar.events.onInputOut.add(function (target) {
            moviment.stop();
        });

        var mata = game.add.sprite(this.game.world.centerX, this.game.world.centerY - mig, 'mata');
        mata.anchor.setTo(.5, .5);
    }
};