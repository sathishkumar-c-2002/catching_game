class BootScreen extends Phaser.Scene {
    constructor() {
        super('BootScreen');
    }

    preload() {
        this.load.image('background', 'asset/background.png');
        this.load.image('game_title', 'asset/game title.png')
        this.load.image('start_button', 'asset/start Button.png')
    }

    create() {
        console.log("Boot Scene");
        this.scene.start('StartScreen');
    }
}
