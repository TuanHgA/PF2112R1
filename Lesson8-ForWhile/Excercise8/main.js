//Excercise 1: counT100
function counT100() {
    let count = 0;
    while (count<100) {
        count++;
        if (count==99) {
            document.write("finish!"); 
        } else document.write(count + ", ");
    }
    document.write("<br/>" + "<br/>");
    document.write("Nhấn phím f5 để quay lại.");
}

//Excercise 2: temperCheck
function temperCheck() {
    let temPer;
    while (temPer != "Q") {
        temPer = prompt("Nhập nhiệt độ hiện tại, chọn Q để thoát");
        if (parseInt(temPer)<20) {
            alert("Nhiet do qua thap, vui long TANG NHIET DO.");
        } else {
            if (parseInt(temPer)>100) {
                alert("Nhiet do qua cao, vui long GIAM NHIET DO.");
            } else {
                if (temPer == "Q") {
                    alert("Have a nice day! See you late!");
                    break;
                } else {
                    alert("Nhiet do binh thuong, khong can dieu chinh them");
                }
            }
        }
    }
}

// Excercise 3:
function makeFibo(numBer) {
    let numN, i=1, num1=1, temP=0;

    while (i<=parseInt(numBer)){
        if (i==1) {
            document.write(i + ":   " + num1 + "</br>");
        } else {
            numN = num1 + temP;
            temP = num1;
            num1 = numN;
            document.write(i + ":   " + numN + "</br>");
        }
        i++;
    }
    document.write("<br/>" + "<br/>");
    document.write("Nhấn phím f5 để quay lại.");
}

// Excercise 4:
function makeFibo_divisible5() {
    let numN, i, num1=1, temP=0, range = 500;
    let n = +prompt("Input n ");

    for (i = 1; i<=range;){
        numN = num1 + temP;
        temP = num1;
        num1 = numN;
        if(numN % n ==0) {
            document.write("So đầu tiên của dãy Fibonacci chia hết cho "+ n +" là:  " + numN);
            break;
        }
        i++;
    }
    document.write("<br/>" + "<br/>");
    document.write("Nhấn phím f5 để quay lại.");
}

// Excercise 5:
function sumOfFrt20_fibo() {
    let numN, i=1, num1=1, temP=0, range = 20, sum = 0;

    while (i<=range){
        if (i==1) {
            numN = num1;
            document.write(i + ":   " + numN + "</br>");
        } else {
            numN = num1 + temP;
            temP = num1;
            num1 = numN;
            document.write(i + ":   " + numN + "</br>");
        }
        sum += numN;
        i++;
    }
    document.write("<br/>" + "<br/>");
    document.write("Tổng bằng: " + sum);
    document.write("<br/>" + "<br/>");
    document.write("Nhấn phím f5 để quay lại.");
}

// Exercise 6:
function sumOfFrt30_divisible7num() {
    let i, sum = 0, range = 500, count = 0;
    document.write("30 số tự nhiên đầu tiên chia hết cho 7 là: ")
    for (i = 1; i < range; i++){
        if (i % 7 == 0){
            document.write(i + ", ");
            count++;
            sum += i;
        }
        if (count == 30) {
            document.write("<br/>" + "<br/>");
            document.write("Tổng của 30 số trên là: " + sum);
            break;
        }
    }
    document.write("<br/>" + "<br/>");
    document.write("Nhấn phím f5 để quay lại.");
}

//// Exercise 7:
function fizzBuzz() {
    for (let i=1; i<=100; i++) {
        if (i % 3 == 0 && i % 5 != 0) {
            document.write("Fizz" + "</br>");
        } else 
            if (i % 3 != 0 && i % 5 == 0) {
                document.write("Buzz" + "</br>");
            } else 
                if (i % 3 == 0 && i % 5 == 0) {
                    document.write("FizzBuzz" + "</br>");
                } else document.write(i + "</br>");
    

    }
    document.write("<br/>" + "<br/>");
    document.write("Nhấn phím f5 để quay lại.");
}