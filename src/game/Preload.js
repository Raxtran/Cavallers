var Preload = function () { };

Preload.prototype = {

    preload: function () {
        game.stage.backgroundColor = '#000';
        var sprite = game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        sprite.anchor.setTo(.5, .5);
        game.add.text(10, 566, "Loading...", { fill: "#FFCC00", align: "center" });

        // Carregar les imatges que necessita el joc
        game.load.image("vermell", "img/vermell.png");
        game.load.image("groc", "img/groc.png");
    },

    create: function () {

        game.state.start("Game");
    }
};

