var GameOver = function (game) { };

GameOver.prototype = {
    preload: function () {

    },

    create: function () {
        scoreText = game.add.text(10, 10, "Has mort un amic!", { font: '20px Arial', fill: '#fff' });
    }

};
