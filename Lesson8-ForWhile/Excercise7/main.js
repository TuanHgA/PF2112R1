// Function ktra SNT lơn hon 2
function checkSNT(n) {
    let count = 0;
    for (let j = 2; j <= Math.sqrt(n); j++) {
        if (n%j==0) {
            count++;
        }
    }
    if (count == 0) {
        return 1;
    }   else return 0;

}

//20 SNT ĐẦU TIÊN
let i, countSNT = 1, sumSNT = 0;
document.write("20 so nguyen to dau tien la: " + ("</br>"));
for (i = 2; countSNT <= 20; i++) {
    if (i == 2) {
        document.write("S"+countSNT+ " = " + i  + "</br>");
        sumSNT += i;
        countSNT++;
    } else if (checkSNT(i) == true) {
            document.write("S"+countSNT+ " = " + i  + "</br>");
            sumSNT += i;
            countSNT++;
        } 
}
document.write("</br>" + "</br>")
document.write("Tổng của các số trên bằng: " + sumSNT);