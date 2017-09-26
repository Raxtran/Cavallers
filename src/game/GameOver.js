var GameOver = function (game) { };

GameOver.prototype = {
    preload: function () {

    },

    create: function () {
        scoreText = game.add.text(10, 10, "Has mort un amic!", { font: '20px Arial', fill: '#fff' });
        var sprite = game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preso');
        sprite.anchor.setTo(.5, .5);

        //var playButton = this.game.add.button(160,320,"play",this.tornarAJugar,this);
		// playButton.anchor.setTo(0.5,0.5);
    },

	tornarAJugar: function(){
		game.state.start("Game");
	}

};
