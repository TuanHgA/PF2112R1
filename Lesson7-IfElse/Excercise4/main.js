function bmiCheck () {
    let cN = Number(document.getElementById("weight").value);
    let cC = Number(document.getElementById("hight").value);
    let cHeck = cN/(cC*cC);
    console.log(cN, cC, cHeck);

    if (cHeck < 16) { 
        document.getElementById("result").innerHTML = "Gầy độ III.";
        document.getElementById("result").style.color="red";
    } else {
        if (cHeck < 17) {
            document.getElementById("result").innerHTML = "Gầy độ II.";
            document.getElementById("result").style.color="red";
        } else {
            if (cHeck < 18.5) {
                document.getElementById("result").innerHTML = "Gầy độ I.";
                document.getElementById("result").style.color="red";
            } else {
                if (cHeck < 25) {
                    document.getElementById("result").innerHTML = "Cân nặng bình thường.";
                    document.getElementById("result").style.color="red";
                } else {
                    if (cHeck < 30) {
                        document.getElementById("result").innerHTML = "Thừa cân";
                        document.getElementById("result").style.color="red";
                    } else {
                        if (cHeck < 35) {
                            document.getElementById("result").innerHTML = "Béo phì độ I.";
                            document.getElementById("result").style.color="red";
                        } else {
                            if (cHeck < 40) {
                                document.getElementById("result").innerHTML = "Gầy độ II.";
                                document.getElementById("result").style.color="red";
                            } else {
                                document.getElementById("result").innerHTML = "Gầy độ III.";
                                document.getElementById("result").style.color="red";
                            }
                        }
                    }
                }
            }
        }
    }

}