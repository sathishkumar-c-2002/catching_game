class StartScene extends Phaser.Scene {
    constructor() {
        super('StartScene');
    }

    preload() {

    }
    create() {
        console.log("Start Scene")
        this.add.image(180, 180, 'background');
    }
}