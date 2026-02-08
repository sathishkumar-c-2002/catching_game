class GameScreen extends Phaser.Scene {
    constructor() {
        super('GameScreen');
    }

    preload() {

    }


    create() {
        console.log("Game Screen")

        let touch_side;
        let ball_x;
        let ball_y;
        let touch_state = false;

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
                duration: 1500,
                ease: 'Cubic.out'
            }
            return return_map;
        }

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        // // Player Character - Left angle
        // let char_left = this.add.image(400, 330, 'char_left');
        // char_left.setScale(0.8);
        // this.tweens.add({
        //     targets: char_left,
        //     x: 200,
        //     duration: 1000,
        //     ease: 'Power2',
        //     onComplete: () => {
        //         // Ball kick animation
        //         // this.tweens.add(BallRotation(left_ball, 70, 500));
        //         let random_x = getRandomInt(30, 150);
        //         let random_y = getRandomInt(400, 600);

        //         this.tweens.add(BallRotation(left_ball, random_x, random_y));

        //         score += 1;
        //         score_text.setText(score.toString().padStart(2, '0'));
        //     }
        // });

        // let left_ball = this.add.image(160, 400, 'ball');
        // left_ball.setScale(0.3);

        // // Player Character - Right angle
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
                // this.tweens.add(BallRotation(left_ball, 70, 500));
                let random_x = getRandomInt(210, 350);
                let random_y = getRandomInt(400, 600);

                this.tweens.add(BallRotation(right_ball, random_x, random_y));

                score += 1;
                score_text.setText(score.toString().padStart(2, '0'));
            }
        });




        this.input.on('pointerdown', (pointer) => {
            touch_side = "left"
            if (pointer.x > 180) {
                touch_side = "right"
            }
            ball_x = pointer.x;
            ball_y = pointer.y;
            // alert(`X: ${pointer.x}, Y: ${pointer.y}`);
            // alert(`side = ${touch_side} points x: ${pointer.x} y: ${pointer.y}`)
        });

        let gloves = this.add.image(180, 530, 'gloves');
        gloves.setScale(0.3);
        this.input.on('pointerdown', () => {

            if (ball_x != null && ball_y != null && touch_side != null) {
                this.tweens.add({
                    targets: gloves,
                    x: ball_x,
                    y: ball_y,
                    angle: touch_side === 'left' ? -20 : 20,
                    duration: 200,
                    ease: 'Power2'
                });
            }

        });


    }
}