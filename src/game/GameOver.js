var GameOver = function (game) { };

GameOver.prototype = {
    preload: function () {
        game.load.image('preso', 'img/preso.png');
    },

    create: function () {
        scoreText = game.add.text(10, 10, "Has mort un amic!", { font: '20px Arial', fill: '#fff' });
        var sprite = game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preso');
        sprite.anchor.setTo(.5, .5);
    }

};
