
function luckyNumber() {
    let Max = prompt("Nhap vao gioi han ban muon");
    let ranNum = Math.floor(Math.random() * parseInt(Max));
    let i = 0;

    do {
        i++;
        console.log(ranNum);
        let yourNum = prompt("So ma ban du doan tu 0 den " + Max);
        if (ranNum ==  parseInt(yourNum)) {
            alert("You have a LUCKY_NUMBER ---> " + yourNum + ". Congratulation!");
            break;
        };
        
        if (Number(i) < 2) {
            alert("Doan lai lan " + (i+1) + " nhe!")
        } else if (Number(i) == 2) {
                alert("Day la co hoi cuoi cung")
            } else alert("Game Over!");
        
    } while (Number(i) < 3);
}