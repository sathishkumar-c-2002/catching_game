class BootScreen extends Phaser.Scene {
    constructor() {
        super('BootScreen');
    }

    preload() {
        this.load.image('background', 'asset/background.png');
        this.load.image('gamescreen_background', 'asset/gamescreen_background.png');
        this.load.image('game_title', 'asset/game title.png')
        this.load.image('start_button', 'asset/start Button.png')
        this.load.image('score_board_bg', 'asset/scoreboard.png')
        this.load.image('initial_score', 'asset/score.png')
        this.load.image('life_icon', 'asset/life.png')
        this.load.image('char_left', 'asset/left side character.png')
        this.load.image('char_right', 'asset/right side Character.png')
        this.load.image('ball', 'asset/ball.png')
        this.load.image('gloves', 'asset/gloves.png')
    }

    create() {
        console.log("Boot Scene");

        WebFont.load({
            custom: {
                families: ['StickNoBills']
            },
            active: () => {
                console.log('Font loaded!');
                // this.scene.start('StartScreen');
                this.scene.start('GameScreen');
            },
            inactive: () => {
                console.log('Font failed to load');
                // this.scene.start('StartScreen');
                this.scene.start('GameScreen');
                console.log("GameScreen Calling")
            }
        });


    }
}
