//Baitap1
function exc1Check(num1, num2) {
    if (num1 > num2) {
        alert ("So thu I ban nhap (" + num1 + ") lon hon so thu II(" + num2 + ")");
    }   else alert ("Tong cua hai so vua nhap: " + (num1+num2));
}

function exc1() {
    let num1 = +prompt("Nhap vao so thu I");
    let num2 = +prompt("Nhap vao so thu II");
    exc1Check(num1, num2);
}

//Baitap2
function exc2() {
    let ngoiSao = ["Polaris", "Aldebaran", "Deneb", "Vega"," Altair", "Dubhe", "Regulus"];
    let chomSao = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];

    let check = prompt("Nhap ten ngoi sao can kiem tra");
    let getIndex = 0;
    for(let i = 0; i < ngoiSao.length; i++) {
        if (check == ngoiSao[i]) {
            getIndex = i;
        }
    }
    if (getIndex == 0) {
        alert ("Chung toi khong co du lieu ve ngoi sao ban can tim (" + check + ")");       
    }   else alert("Ngoi sao " + check + " ban can tim, thuoc chom sao " + chomSao[getIndex]);
}

//Baitap3
function exc3() {
    let Num = +prompt("Nhap vao so can tinh binh phuong");
    alert("Gia tri binh phuong cua so vua nhap la: " + (Num*Num));
}

//Baitap4
function exc4() {
    var radius=prompt("Nhap vao ban kinh hinh tron");
    const pi=3.14159265359;  // estimated to 11 decimal places
    alert("Chu vi va ban kinh lan luot la: " + (2*radius*pi) + " và " + (radius*radius*pi));
}


//Baitap5
function giaiThua(num){
    if (num == 0){
        return 1;
    }

    return num * giaiThua(num - 1); 
}

function exc5() {
    let num = +prompt("Nhap vao so can tinh Giai thua.");
    alert(num + "!  =  " + giaiThua(num));

}

//Baitap6
function exc6() {
    let inputNum = prompt("write character down");
    let arrNum = [0,1,2,3,4,5,6,7,8,9,'.','-'];
    let arrCheck = Array.from(inputNum);
    let output = false;
    for (let i = 0; i < arrCheck.length; i++) {
        for (let j = 0; j < arrNum.length; j++) {
            if (arrCheck[i] == arrNum[j]) {
                output = true;
                break;
            }   else output = false;
        }
    }
    for (let i = 1; i < arrCheck.length; i++) {
        if (arrCheck[i] == '-' || arrCheck[0] == '.' || arrCheck[arrCheck.length-1] == '.')
        output = false; 
    }
    if (output == true) {alert("Your input is a number!")};
    if (output == false) {alert("Your input is NOT a number!")}
}


//Baitap7
function maxArr(numberArr) {
    let max = +numberArr[0];
    for (let i = 1; i < numberArr.length; i++) {
        if (max < +numberArr[i]) {
            max = +numberArr[i];
        }
    }
    return max;
}

function exc7() {
    let numberArr = Array.from(prompt("Nhap vao 3 so bat ky de tim so lon nhat(vd: 359)"));
    alert ("So lon nhat trong 3 so vua nhap la: " + maxArr(numberArr));
}


//Baitap8
function isInt(value){
    return (Number.isInteger(value) && value > 0);
}

function exc8() {
    let checkNumber = +prompt("Kiem tra so nguyen duong!!! ---> Nhap vao so can kiem tra:");
    if (checkNumber == 0) {alert("Ban vua nhap so 0 la SO KHONG AM")}
        else if (isInt(checkNumber)) {alert(checkNumber + " vua nhap la so nguyen duong")}
                else alert(checkNumber + " vua nhap khong phai so nguyen duong")
}

//Baitap9
let temp = "";
function daoNguoc(arrayZ) {
    if (arrayZ.length == 0) {
        return temp;
    }
    temp += arrayZ.pop();
    daoNguoc(arrayZ);
}

function exc9() {
    let inputString = prompt("Nhap vao mot mang bat ki (vd: 1,5,a,g,4,h,9,k)")
    let checkArr = inputString.split(",");
    temp = "";
    let outputString = daoNguoc(checkArr);
    alert ("Mang dao nguoc la: " + temp);
}

//Baitap10 
function exc10() {
    let checkArr = Array.from(prompt("Nhap vao mang ky tu bat ky (vd: eZh1lf8)"));
    let checkNumber = prompt("Nhap vao ky tu can kiem tra");
    let count = 0;
    for (let i = 0; i < checkArr.length; i++) {
        if (checkNumber == checkArr[i]) count++;
    }
    if (count == 0) {
        alert("Ky tu ban tim khong co trong mang. <<<< -1 >>>>");
    } else alert("So lan ky tu ban tim xuat hien trong mang la: <<<< " + count + " lan >>>>");
} 