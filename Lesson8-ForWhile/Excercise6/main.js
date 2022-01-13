let i, sum = 0;
let a = +prompt("Nhap vao so nho nhat");
let b = +prompt("Nhap vao so lon nhat");

document.write("Khoảng tính tổng bạn vừa nhập ( từ " + a + " đến " + b + "): ");
for (i = a; i <= b; i++) {
    document.write(i + ", ");
    sum += i;
      
}
document.write("</br>" + "</br>");
document.write ("Tổng các số trong khoảng trên là: " + sum + "</br>");
document.write("Nhấn f5 để thực hiện lại");