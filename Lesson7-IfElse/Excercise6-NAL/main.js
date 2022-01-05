function checkYear () {
    let ktYear = Number(document.getElementById("year").value);
    let ktCan = ktYear%10;
    let ktChi = ktYear%12;
    let Can = 0;
    let Chi = 0;
    switch (ktCan) {
        case 0: Can = "Canh" 
            break;
        case 1: Can = "Tân" 
            break;
        case 2: Can = "Nhâm" 
            break;
        case 3: Can = "Quý" 
            break;
        case 4: Can = "Giáp" 
            break;
        case 5: Can = "Ất" 
            break;
        case 6: Can = "Bính" 
            break;
        case 7: Can = "Đinh" 
            break;
        case 8: Can = "Mậu" 
            break;
        default: Can = "Kỷ" 
            break;
    }
    switch (ktChi) {
        case 0: Chi = "Thân" 
            break;
        case 1: Chi = "Dậu" 
            break;
        case 2: Chi = "Tuất" 
            break;
        case 3: Chi = "Hợi" 
            break;
        case 4: Chi = "Tý" 
            break;
        case 5: Chi = "Sửu" 
            break;
        case 6: Chi = "Dần" 
            break;
        case 7: Chi = "Mão" 
            break;
        case 8: Chi = "Thìn" 
            break;
        case 9: Chi = "Tỵ" 
            break;
        case 10: Chi = "Ngọ" 
            break;
        default: Chi = "Mùi" 
            break;
    }
    console.log(ktCan, ktChi, ktYear, Can, Chi);
    document.getElementById("result").innerHTML = Can + " " + Chi;
}