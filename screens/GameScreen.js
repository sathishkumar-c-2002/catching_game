class GameScreen extends Phaser.Scene {
    constructor() {
        super('GameScreen');
    }

    preload() {

    }


    create() {
        console.log("Game Screen")

        let background = this.add.image(180, 265, 'gamescreen_background');
        background.setScale(0.51);


        // // Left Top
        let score_board_bg = this.add.image(50, 50, 'score_board_bg');
        score_board_bg.setScale(0.6);

        // let initial_score = this.add.image(50, 50, 'initial_score');
        // initial_score.setScale(0.62);


        //Right Top
        let timer_board_bg = this.add.image(310, 50, 'score_board_bg');
        timer_board_bg.setScale(0.6);

        let timer = 15;
        let timer_text = this.add.text(295, 25, timer.toString().padStart(2, '0'), {
            fontSize: '50px',
            fill: '#fff',
            fontFamily: 'StickNoBills'
        });

        let score = 0;

        let score_text = this.add.text(25, 25, score.toString().padStart(2, '0'), {
            fontSize: '50px',
            fill: '#2e9137ff',
            fontFamily: 'StickNoBills',
        });
        let life_icon = this.add.image(310, 95, 'life_icon');
        life_icon.setScale(0.6);

        function BallRotation(ball_type, x, y) {
            let return_map = {
                targets: ball_type,
                x: x,
                y: y,
                scale: 0.6,
                angle: 360,
                duration: 1000,
                ease: 'Cubic.out'
            }
            return return_map;

        }
        // Player Character - Left angle
        let char_left = this.add.image(400, 330, 'char_left');
        char_left.setScale(0.8);
        this.tweens.add({
            targets: char_left,
            x: 200,
            duration: 1000,
            ease: 'Power2',
            onComplete: () => {
                // Ball kick animation
                this.tweens.add(BallRotation(left_ball, 70, 500));
                score += 1;
                score_text.setText(score.toString().padStart(2, '0'));
            }
        });

        let left_ball = this.add.image(160, 400, 'ball');
        left_ball.setScale(0.3);

        // Player Character - Right angle
        let char_right = this.add.image(-100, 330, 'char_right');
        char_right.setScale(0.8);
        let right_ball = this.add.image(210, 400, 'ball');
        right_ball.setScale(0.3);
        this.tweens.add({
            targets: char_right,
            x: 150,
            duration: 1000,
            ease: 'Power2',
            onComplete: () => {
                // Ball kick animation
                this.tweens.add({
                    targets: right_ball,
                    x: 310,
                    y: 500,
                    scale: 0.6,
                    angle: 360,
                    duration: 1000,
                    ease: 'Cubic.out'
                });
                score += 1;
                score_text.setText(score.toString().padStart(2, '0'));
            }
        });



        let gloves = this.add.image(180, 530, 'gloves');
        gloves.setScale(0.3);












    }
}