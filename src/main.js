let config = {
    type: Phaser.CANVAS, 
    width: 640, 
    height: 480, 
    scene: [ Menu, Play, Intro, Gameover, Instructions], 
    physics: {
        default: "arcade", 
        arcade: {
            debug: true,
        }
    }
}

//uncomment if tutorial code below is deleted
let game = new Phaser.Game(config);

let highscore = 0;

//will keep track if its your first time playing so the instructions are displayed
let tutorial = 0;

// reserve keyboard vars
let keyLEFT;

let keySpace;





