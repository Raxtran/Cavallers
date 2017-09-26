var Preload = function () { };

Preload.prototype = {

    preload: function () {
        game.stage.backgroundColor = '#000';

        var loadingBar = game.add.sprite(game.world.centerX, 400, "load");
         // Tell phaser to use laodingBar as our preload progess bar
        this.load.setPreloadSprite(loadingBar);

        // var sprite = game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        // sprite.anchor.setTo(.5, .5);

        game.add.text(game.world.centerX, 566, "Loading...", { fill: "#FFCC00", align: "center" });

        // Carregar les imatges que necessita el joc
        game.load.image("background", "img/fons.png");
        game.load.image("vermell", "img/vermell.png");
        game.load.image("groc", "img/groc.png");
        game.load.image('preso', 'img/preso.png');
        game.load.image('comensar', 'img/comensar.png');
        game.load.image('mata', 'img/mata.png');

    },

    create: function () {
        game.state.start("GameMenu");
    }
};
