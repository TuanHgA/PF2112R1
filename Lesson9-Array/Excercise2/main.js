function baiTap1() {
    let myColors = ["Red", "Green", "White", "Black"];
    console.log('Mang ban dau la: ', myColors);
    alert ('Xem ket qua bai tap trong tab Consloe')
    let strColor = myColors.toString();
    console.log('Ket qua: ', strColor);
}

function baiTap2() {
    let input = prompt('Nhap vao day so bat ky');
    console.log('Day so ban nhap la: ', input);
    let arrayNums = input.split('');
    
    alert('Xem ket qua trong tab Console');
    
    for (let i = 0; i < arrayNums.length;) {
        let check = +arrayNums[i];
        if  (check%2==0) {
            arrayNums.splice(i+1, 0, "-")
            i=i+2;
        } else  i++;
    }
    console.log('ket qua la: ', arrayNums.toString());
}

function baiTap3 () {
    let str = prompt('Nhap vao ten cua ban, in hoa chu cai dau tien');
    console.log('Ban vua nhap vao: ', str);
    alert('Xem ket qua trong tab Console');
    let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let LOWER = 'abcdefghijklmnopqrstuvwxyz';
    let result = [];
    
      for(let x=0; x<str.length; x++)
      {
        if(UPPER.indexOf(str[x]) !== -1)
        {
          result.push(str[x].toLowerCase());
        }
        else if(LOWER.indexOf(str[x]) !== -1)
        {
          result.push(str[x].toUpperCase());
        }
        else 
        {
          result.push(str[x]);
        }
      }
    console.log('Ket qua la: ',result.toString());
}
