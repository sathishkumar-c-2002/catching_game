class GameOverScreen extends Phaser.Scene {
    constructor() {
        super('GameOverScreen');
    }

    init(data) {
        this.finalScore = data.score || 0;
    }

    preload() {

    }

    create() {
        console.log("Game Over Screen");
        let overlay = this.add.rectangle(180, 320, 360, 640, 0x000000);
        overlay.setAlpha(0.9);

        let win_text = this.add.image(180, 200, 'win_text');
        win_text.setScale(0.8);


        let scoreLabel = this.add.text(180, 310, `SCORE : ${this.finalScore}`, {
            fontFamily: 'Poppins',
            fontSize: '18px',
            fill: '#ffffff'
        });
        scoreLabel.setOrigin(0.5);

        let Text1 = this.add.text(180, 370, `Claim your prize`, {
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 'bold',
            fill: '#ffffff'
        });
        Text1.setOrigin(0.5);

        let Text2 = this.add.text(180, 395, `Use code GLOV10 for 10% off when`, {
            fontFamily: 'Poppins',
            fontSize: '14px',
            fill: '#ffffff'
        });
        Text2.setOrigin(0.5);

        let Text3 = this.add.text(180, 420, `you spend on your next purchase.`, {
            fontFamily: 'Poppins',
            fontSize: '14px',
            fill: '#ffffff'
        });
        Text3.setOrigin(0.5);

        // Play Again Button
        let play_again_button = this.add.image(180, 520, 'play_again_button');
        play_again_button.setScale(0.8);
        play_again_button.setInteractive();

        let play_again_text = this.add.text(180, 518, "Play Again", {
            fontFamily: 'Poppins',
            fontSize: '24px',
            fill: '#00a2ff'
        });
        play_again_text.setOrigin(0.5);

        play_again_button.on('pointerdown', () => {
            this.scene.stop('GameOverScreen');
            this.scene.start('GameScreen');
            console.log("LetsPlay_Click");
        });
    }

    //     Claim your prize.
    // Use code GLOV10 for 10% off when
    // you spend on your next purchase.
}