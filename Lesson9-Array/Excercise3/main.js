function typeText() {
    let fake = ['H','A','P','P','Y',' ','N','E','W',' ','Y','E','A','R','!','!','!'];
    let n = "";
    
    let t = document.f.txt.value;
    let j = t.length;
    // console.log(j) ;
    if (j > 0) {
        for (let i = 0; i < j; i++) {
            n += fake[i];
            if (i == 17) {
                document.f.txt.value = "";
                n = "";
            }
        }
    }
    document.f.txt.value = n;

    n = "";
    setTimeout("typeText()", 1);
    //return false;
}