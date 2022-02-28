let gameSt = "begin";
let score = 0;
let canvas = document.querySelector("#gameZone");
let context = canvas.getContext("2d");

canvas.height = 600;
canvas.width = 400;
canvas.style.border = "solid";

let road = document.querySelector("#picRoad");
let gameImg = document.querySelector("#picGame");
let gameover = document.querySelector("#picOver");
let winer = document.querySelector("#picWin");

class Road {
    constructor (x,y) {
        this.x = x;
        this.y = y;
        this.speed = 12;
    }
    draw () {
        context.beginPath();
        context.drawImage(road, this.x, this.y);
    }
}

let arrayRoad = [];
arrayRoad[0] = new Road(0,0);
arrayRoad[1] = new Road(0,-600);
arrayRoad[2] = new Road(0,-1200);

character = {
    x: 220,
    y: 450,
}

//Character control
document.addEventListener("keydown", function(event) {
    switch (event.code) {
        case "ArrowLeft": //turn left 
            if (character.x == 220) character.x = 100;    
            break;
        case "ArrowRight":
            if (character.x == 100) character.x = 220; 
            break;
    }
})

class obstacle {
    constructor(sx,sy,sw,sh,x,y){
        this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh;
        this.x = x;
        this.y = y;
        this.speed = 5;
    }
    draw() {
        context.drawImage(gameImg,this.sx,this.sy,this.sw,this.sh,this.x,this.y,this.sw,this.sh); 
    }
}
//Yellow: 380,90,80,100
//Red: 380,190,80,150
//Finish: 50,450,400,150
let arrayObs = []; 
arrayObs[0] = new obstacle(380,90,80,100,100,-120);

let yTemp = arrayObs[0].y;
let yObs, xObs, distance;
let countObs = 0;
for (i = 1; i < 20; i++) {
    distance = (Math.floor(Math.random() * 250) + 250); //250 < From obs(i) to obs(i+1) < 500
    yObs = yTemp - distance;
    if (distance%2==0) {
        xObs = 100;
        arrayObs.push(new obstacle(380,90,80,100,xObs,yObs));
    } else {
        xObs = 220;
        arrayObs.push(new obstacle(380,190,80,100,xObs,yObs));
    }
    if (i == 19) arrayObs.push(new obstacle(50,450,400,150,0,yObs-400)); 
    yTemp = arrayObs[i].y;
} // create 20 obstacle in game.
console.log(arrayObs, arrayObs.length);

let impactX, impactY;
let frame = 0;
class explosion {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.status = 0;
        this.animate = [
            {sx: 0, sy:0},
            {sx: 0, sy: 100},
            {sx: 0, sy: 200},
            {sx: 0, sy: 300}
        ]
    }
    draw() {
        if (frame%6 == 0) {
            this.status++;
            if (this.status > 3) {
                this.status = 0;
            }
        }

        context.drawImage(gameImg, this.animate[this.status].sx, this.animate[this.status].sy, 100, 100, this.x, this.y, 100, 100);
    }
}

function beginGame() {
    let bg = new Road(0,0);
    bg.draw();
    context.drawImage(gameImg,130,0,231,115,30,180,345,172); //Character IMAGE draw 
    context.drawImage(gameImg,130,115,231,69,30,420,345,98); //guild draw
}

beginGame(); //display begin screen

// convert to play
canvas.addEventListener("click", function(){
    if (gameSt == "begin") {
        gameSt = "play";
        context.clearRect(0,0,canvas.width,canvas.height);        
        playGame();
    }
})

function playGame() {
    function moveBackground() {
        if (gameSt != "play") return;
        context.clearRect(0,0,canvas.width,canvas.height);

        for (i = 0; i < arrayRoad.length; i++) {
            arrayRoad[i].draw();
            arrayRoad[i].y += arrayRoad[i].speed;
            if (arrayRoad[i].y==600) {
                arrayRoad.push(new Road(0,-1200));
            }
        }
        
        requestAnimationFrame(moveBackground); 
        context.drawImage(gameImg,380,340,80,100,character.x,character.y,80,100);
    }
    moveBackground();

    // function moveX(x) {   
    //     if (x < 220) {
    //         console.log("ok1")
    //         // do {
    //             x += 40; 
    //             console.log(x);
    //             if (x==100) return;   
    //         // } while (x == 220);
    //     }
    //     if (x > 100) {
    //         console.log("ok2")
    //         // do {
    //             x -= 40;    
    //             console.log(x); 
    //             if (x==220) return;     
    //         // } while (x == 100);
    //     }
    //     requestAnimationFrame(moveX);
    // }

    function displayObs() {
        if (gameSt != "play") return;

        for (j = 0; j < arrayObs.length; j++) {
            let random =  (Math.floor(Math.random() * 6));
            arrayObs[j].draw();
            arrayObs[j].y += arrayObs[j].speed;
            if (random%2 != 0 && j < arrayObs.length-1 ) {
                if (arrayObs[j].y == 30) {
                    console.log("yes");
                    if (arrayObs[j].x == 100) {
                        arrayObs[j].x = 220;
                    } else arrayObs[j].x =100;
                    // moveX(arrayObs[j].x);
                }
            }

            //Set condition  ---  Character(x,y,80,100)  ---  Obstacle(x,y,80,100) ==> check impact
            let Cond1 = Math.abs((character.x + 80/2) - (arrayObs[j].x + 80/2)) <= Math.abs((80+80)/2); 
            let Cond2 = Math.abs((character.y + 100/2) - (arrayObs[j].y + 100/2)) <= Math.abs((100+100)/2);
            if (Cond1 && Cond2) {
                //get impact position to make explosion
                impactX = character.x;
                impactY = character.y;
                gameOver();
            } 
            let finishY = arrayObs[arrayObs.length-1].y;
            switch (finishY) {
                case 500:
                case 501:
                case 502:
                case 504:
                case 503:
                    win();
                    break;
            }

        }
        requestAnimationFrame(displayObs);
    }
    displayObs();
}

function gameOver() {
    if (gameSt == "play") {
        gameSt = "finish";
    }
    context.clearRect(0,0,canvas.width,canvas.height);
    
    let Explo = new explosion(impactX,impactY);

    function moveBackground() {
        context.clearRect(0,0,canvas.width,canvas.height);

        for (i = 0; i < arrayRoad.length; i++) {
            arrayRoad[i].draw();
            // arrayRoad[i].y += arrayRoad[i].speed;
            if (arrayRoad[i].y==600) {
                arrayRoad.push(new Road(0,-1200));
            }
        }
        
        requestAnimationFrame(moveBackground);
        context.drawImage(gameover,0,0);
        Explo.draw();
        frame++;
    }
    moveBackground();
}

function win() {
    if (gameSt == "play") {
        gameSt = "finish";
    }
    function moveBackground() {
        context.clearRect(0,0,canvas.width,canvas.height);

        for (i = 0; i < arrayRoad.length; i++) {
            arrayRoad[i].draw();
            arrayRoad[i].y += arrayRoad[i].speed;
            if (arrayRoad[i].y==600) {
                arrayRoad.push(new Road(0,-1200));
            }
        }
        
        requestAnimationFrame(moveBackground); 
        context.drawImage(winer, 0,0);
        context.drawImage(gameImg, 380, 340, 80, 100, character.x, character.y, 80, 100);
    }
    moveBackground();
}