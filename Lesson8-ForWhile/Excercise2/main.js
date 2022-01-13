
alert("Hien thi n so dau tien cua day so Fibonacci");

let n;

do {
    n = prompt("Nhap vao gia tri cua n ban muon (n phai la so nguyen duong)")
} while (n<1 || n%1!=0);

//Fibonacci
function makeFibo(numBer) {
    let numN, i=1, num1=1, temP=0;

    while (i<=parseInt(numBer)){
        if (i==1) {
            document.write(num1 + "     ");
        } else {
            numN = num1 + temP;
            temP = num1;
            num1 = numN;
            document.write(numN + "     ");
        }
        i++;
    }
}
//RESULT
document.write = makeFibo(n);

