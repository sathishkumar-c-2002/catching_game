class StartScreen extends Phaser.Scene {
    constructor() {
        super('StartScreen');
    }

    preload() {

    }
    create() {
        console.log("Start Screen")
        let background = this.add.image(180, 265, 'background');
        background.setScale(0.81);

        let game_title = this.add.image(180, 230, 'game_title');
        game_title.setScale(0.7)

        let start_button = this.add.image(180, 500, 'start_button');
        start_button.setScale(0.8)
        start_button.setInteractive();
        start_button.on('pointerdown', () => {
            this.scene.start('GameScreen')
            console.log("LetsPlay_Click")
        })

    }
}