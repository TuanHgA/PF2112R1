let carArr = [
    'Subaru Forester',
    'Mazda CX-5',
    'Honda CR-V'
]

function tdCreate(className, value) {
    let td = document.createElement("td");
    td.className = className;
    td.innerHTML = value
    return td;
}

function showCar() {
    document.getElementById("tbodyData").innerHTML = "";
    
    for (let i = 0; i < carArr.length; i++ ) {
        let trCar = document.createElement("tr");
            let tdCar = tdCreate("Car"+i,carArr[i]);
            let tdButton = tdCreate("","");
                let butClick = document.createElement("button")
                    butClick.innerHTML = "Delete";
                    butClick.onclick = function() {
                        delOption(i);
                    };
        tdButton.appendChild(butClick);
        trCar.appendChild(tdCar);
        trCar.appendChild(tdButton);
        document.getElementById("tbodyData").appendChild(trCar)
    }
}

function addNew() {
    let newName = document.getElementById("inputText").value;
    carArr.push(newName);
    showCar();
    document.getElementById("inputText").innerHTML = "";
}

function delOption(index) {
    carArr.splice(index,1);
    showCar();
}

