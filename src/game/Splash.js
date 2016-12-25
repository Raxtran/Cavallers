var Splash = function () { };

Splash.prototype = {

    loadScripts: function () {
        //game.load.script('gameMenu', 'pantalles/GameMenu.js');
        game.load.script('game', 'src/game/Game.js');
        game.load.script('gameover', 'src/game/GameOver.js');
    },

    loadImages: function () {
        game.load.image('logo', 'img/13c1.jpg');
    },

    init: function () {
        game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    },

    preload: function () {
        this.loadImages();
        this.loadScripts();
    },

    addGameStates: function () {

        // game.state.add("GameMenu", GameMenu);
        game.state.add('Game', Game);
        game.state.add("GameOver", GameOver);
    },

    create: function () {

        this.addGameStates();

        setTimeout(function () {
            game.state.start("Game");
        }, 1000);
    }
};

