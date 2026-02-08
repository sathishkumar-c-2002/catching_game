var config = {
    type: Phaser.AUTO,
    width: 360,
    height: 640,
    backgroundColor: '#cccccc',
    scene: [BootScreen, GameScreen],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

var game = new Phaser.Game(config);
