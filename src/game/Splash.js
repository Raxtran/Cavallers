var Splash = function () { };

Splash.prototype = {

    create: function () {
        var sprite = game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        sprite.anchor.setTo(.5, .5);
        sprite.height = game.world.height;
        sprite.width = game.world.width;

        setTimeout(function () {
            game.state.start("Preload");
        }, 1000);
    }
};

