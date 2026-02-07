class BootScene extends Phaser.Scene {
    constructor() {
        super('BootScene');
    }

    preload() {
        this.load.image('background', 'asset/background.png');

    }

    create() {
        console.log("Boot Scene");
        this.scene.start('StartScene');
    }
}
