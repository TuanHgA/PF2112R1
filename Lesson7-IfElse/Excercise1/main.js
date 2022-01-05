function checkPrice () {
    let x=document.getElementById("optionFrt").value;
    switch (x) {
        case "oi":
            document.getElementById("result").innerHTML = "20.000 vnd/kg";
            break;
        case "duah":
            document.getElementById("result").innerHTML = "20.000 vnd/kg";
            break;
        case "tao":
            document.getElementById("result").innerHTML = "30.000 vnd/kg";
            break;
        case "xoai":
            document.getElementById("result").innerHTML = "30.000 vnd/kg";
            break;
        case "cam":
            document.getElementById("result").innerHTML = "40.000 vnd/kg";
            break;    
        case "chomc":
            document.getElementById("result").innerHTML = "40.000 vnd/kg";
            break; 
        case "mangc":
            document.getElementById("result").innerHTML = "50.000 vnd/kg";
            break;                         
        default: document.getElementById("result").innerHTML = "!! chon loai hoa qua !!";
            break;
    }
    // switch (x) {
    //     case ("Mang cut" || "mang cut"):
    //         document.getElementById("result").innerHTML = "20.000 vnd/kg";
    //         break;
    
    //     default: document.getElementById("result").innerHTML = "Nhap vao loai trai cay";
    //         break;
    // }

    
}