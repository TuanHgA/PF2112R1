//declare variable
let fieldArray = [];
let fieldShow = "";
let z = document.getElementById("caroGame");
for (let i = 0; i < 7; i++) {
        fieldArray[i] = ['--','--','--','--','--','--','--'];
}
 //Making shape
console.log("ok1",fieldShow);

function makingField () {
    for (let i = 0; i < fieldArray.length; i++){
        fieldShow += "</br>";
        for (j = 0; j < fieldArray[i].length; j++) {
            if (j == (fieldArray[i].length-1)) {
                fieldShow += fieldArray[i][j];
            } else fieldShow += (fieldArray[i][j] + "&nbsp;&nbsp;&nbsp")
        }
    } 
}
makingField();
document.getElementById("caroGame").innerHTML = fieldShow;

//Is the WINNER
function checkingGoal() {
    for (let i = 0; i < fieldArray.length; i++){
        for (j = 0; j < fieldArray[i].length; j++){
            if (
                (fieldArray[i][j] == 'X' && fieldArray[i+1][j] == 'X' && fieldArray[i+2][j] == 'X') ||
                (fieldArray[i][j] == 'X' && fieldArray[i][j+1] == 'X' && fieldArray[i][j+2] == 'X') ||
                (fieldArray[i][j] == 'X' && fieldArray[i+1][j+1] == 'X' && fieldArray[i+2][j+2] == 'X')
                ) {
                    document.getElementById("result").innerHTML = "Player" + fieldArray[i][j] + " is the Winner!";
                    alert("Player" + fieldArray[i][j] + " is the Winner!");
                }
            if (
                (fieldArray[i][j] == 'O' && fieldArray[i+1][j] == 'O' && fieldArray[i+2][j] == 'O') ||
                (fieldArray[i][j] == 'O' && fieldArray[i][j+1] == 'O' && fieldArray[i][j+2] == 'O') ||
                (fieldArray[i][j] == 'O' && fieldArray[i+1][j+1] == 'O' && fieldArray[i+2][j+2] == 'O')
                ) {
                    document.getElementById("result").innerHTML = "Player" + fieldArray[i][j] + " is the Winner!";
                    alert("Player" + fieldArray[i][j] + " is the Winner!");
                }
        }
    }
}

function playerX () {
    fieldShow = "";
    let positionX = +document.getElementById("Oy").value;
    let positionY = +document.getElementById("Ox").value;
    // fieldArray[positionY][positionX] = 'X';
    for (let i = 0;i < fieldArray.length; i++) {
        for (let j = 0; j < fieldArray[i].length; j++) {
            if (i == positionY && j == positionX) {
                fieldArray[i].splice(j,1,'X');
            }
            
        }
    }
    makingField();
    document.getElementById("caroGame").innerHTML = fieldShow;
    checkingGoal();
}

function playerO () {
    fieldShow = "";
    let positionX = +document.getElementById("Oy").value;
    let positionY = +document.getElementById("Ox").value;
    for (let i = 0;i < fieldArray.length; i++) {
        for (let j = 0; j < fieldArray[i].length; j++) {
            if (i == positionY && j == positionX) {
                fieldArray[i].splice(j,1,'O');
            }
        }
    }
    makingField();
    document.getElementById("caroGame").innerHTML = fieldShow;
    checkingGoal();
}

