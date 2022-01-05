function ketQua() {

    let t = parseInt(document.getElementById("Toan").value);
    let v = parseInt(document.getElementById("Van").value);
    let a = parseInt(document.getElementById("Anh").value);
    let x = document.getElementById("result");
    let kv = document.getElementById("khuV").value;

    switch (kv) {
        case "kV1":
            document.getElementById("result").innerHTML = "Diem so cua ban la  " + (t + v + a + 0.75);
            x.style.color = "red";
            x.style.fontWeight = "bold";
            break;
        case "kV2":
            document.getElementById("result").innerHTML = "Diem so cua ban la  " + (t + v + a + 0.5);
            x.style.color = "red";
            x.style.fontWeight = "bold";
            break;
        case "kV3":
            document.getElementById("result").innerHTML = "Diem so cua ban la  " + (t + v + a + 0.25);
            x.style.color = "red";
            x.style.fontWeight = "bold";
            break;
        case "kV4":
            document.getElementById("result").innerHTML = "Diem so cua ban la  " + (t + v + a);
            x.style.color = "red";
            x.style.fontWeight = "bold";
            break;
    
        default: 
            document.getElementById("result").innerHTML = "Vui long nhap day du thong tin!";
            x.style.color = "black";
            break;
    }

}