let n, chiaDu = 0, chiaNguyen = 0;
n = +prompt("Input your Num");
document.write("So ban vua nhap la: " + n);
document.write("</br>");
document.write("---> Số đảo ngược: ");
do {
    chiaDu = n%10;
    chiaNguyen = n/10;
    
    n = parseInt(chiaNguyen);
    console.log(chiaDu, chiaNguyen, n);
    document.write(chiaDu);
} while (chiaNguyen>=1)