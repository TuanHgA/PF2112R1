function dayCheck () {
    
    let d = document.getElementById("day").value;
    let y = parseInt(document.getElementById("year").value);
    let m = parseInt(document.getElementById("month").value);
    console.log(y,typeof(y));
    
    switch (m) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("result").innerHTML = "Thời gian bạn chọn (" + m +"/"+y + ") co 31 ngay.";
            document.getElementById("result").style.color="red";
            break;
        case 11:
        case 4:
        case 6:
        case 9:
            document.getElementById("result").innerHTML = "Thời gian bạn chọn (" + m +"/"+y + ") co 30 ngay.";
            document.getElementById("result").style.color="red";
            break;
        case 2:
            if ( (y%4==0 && y%100!=0) || (y%400==0) ) {
                document.getElementById("result").innerHTML = "Năm bạn chọn (" + y + ") nhuận, tháng 2 co 29 ngay.";
                document.getElementById("result").style.color="red";
                } else {
                    document.getElementById("result").innerHTML = "Thời gian bạn chọn (" + m +"/"+y + ") co 28 ngay.";
                    document.getElementById("result").style.color="red";
                }
            break;
        default: document.getElementById("result").innerHTML = document.getElementById("result").innerHTML = "Vui lòng nhập đầy đủ dữ liệu!";
            break;
    }
    
    

}