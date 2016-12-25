var
  game = new Phaser.Game(800, 600, Phaser.AUTO, 'game'),
  Main = function () {},
  gameOptions = {
    playSound: false,
    playMusic: false
  },
  musicPlayer;



Main.prototype = {

  preload: function () {
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setShowAll();
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVeritcally = true;
    game.scale.refresh();

    game.load.image('logo', 'img/13c1.jpg');
    // game.load.script('polyfill',   'lib/polyfill.js');
    // game.load.script('utils',   'lib/utils.js');
    game.load.script('splash', 'src/game/Splash.js');
  },

  create: function () {
    game.state.add('Splash', Splash);
    game.state.start('Splash');
  }

};

game.state.add('Main', Main);
game.state.start('Main');