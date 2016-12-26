var
  game = new Phaser.Game(960, 640, Phaser.AUTO, 'game'),
  Main = function () { },
  gameOptions = {
    playSound: false,
    playMusic: false
  },
  musicPlayer;



Main.prototype = {

  preload: function () {
    //    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    //    game.scale.minWidth = 480;
    //    game.scale.minHeight = 260;
    //    game.scale.maxWidth = 960;
    //    game.scale.maxHeight = 640;
    //    game.scale.setShowAll();
    //    game.scale.pageAlignHorizontally = true;
    //    game.scale.pageAlignVeritcally = true;
    //    game.scale.refresh();

    game.load.image('logo', 'img/sir.png');
    // game.load.script('polyfill',   'lib/polyfill.js');
    // game.load.script('utils',   'lib/utils.js');
    game.load.script('splash', 'src/game/Splash.js');
    game.load.script('game', 'src/game/Game.js');
    game.load.script('gameover', 'src/game/GameOver.js');
    game.load.script('preload', 'src/game/Preload.js');
  },

  addGameStates: function () {

    // game.state.add("GameMenu", GameMenu);
    game.state.add('Game', Game);
    game.state.add("GameOver", GameOver);
    game.state.add('Splash', Splash);
    game.state.add('Preload', Preload);
  },

  create: function () {
    this.addGameStates();

    if (this.game.device.desktop) {
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.scale.minWidth = 480;
      this.scale.minHeight = 260;
      this.scale.maxWidth = 960;
      this.scale.maxHeight = 640;
      this.scale.pageAlignHorizontally = true;
      this.scale.pageAlignVertically = true;
      // this.scale.setScreenSize(true);
      game.scale.refresh();
    }
    else {
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.scale.minWidth = 480;
      this.scale.minHeight = 320;
      this.scale.maxWidth = 1024;
      this.scale.maxHeight = 600;
      this.scale.pageAlignHorizontally = true;
      this.scale.pageAlignVertically = true;
      this.scale.forceOrientation(true, false);
      this.scale.hasResized.add(this.gameResized, this);
      this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
      this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
      // this.scale.setScreenSize(true);
      game.scale.refresh();
    }
    game.state.start('Splash');

  },

  gameResized: function (width, height) {

  },

  enterIncorrectOrientation: function () {

    Witch.orientated = false;
    document.getElementById('orientation').style.display = 'block';

  },

  leaveIncorrectOrientation: function () {

    Witch.orientated = true;
    document.getElementById('orientation').style.display = 'none';

  }


};

game.state.add('Main', Main);
game.state.start('Main');