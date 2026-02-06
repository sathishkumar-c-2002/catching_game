class BootScene extends Phaser.Scene {
    constructor() {
        super('BootScene');
    }

    preload() {

    }

    create() {
        this.add.text(180, 320, 'Hello World', { fontSize: '32px', fill: '#000000' }).setOrigin(0.5);
    }
}
