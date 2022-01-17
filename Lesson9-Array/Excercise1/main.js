let carbrandsOf2021 = [
    {
        id: 1,
        name: "Mazda",
        country: "Japan",
        consumerRate: 80,
    },
    {
        id: 2,
        name: "BMW",
        country: "Germany",
        consumerRate: 78,
    },
    {
        id: 3,
        name: "Subaru",
        country: "Japan",
        consumerRate: 76,
    },
    {
        id: 4,
        name: "Porsche",
        country: "Germany",
        consumerRate: 76,
    },
    {
        id: 5,
        name: "Honda",
        country: "Japan",
        consumerRate: 75,
    },
    {
        id: 6,
        name: "Lexus",
        country: "Japan",
        consumerRate: 75,
    },
    {
        id: 7,
        name: "Toyota",
        country: "Japan",
        consumerRate: 74,
    }
]
let x = carbrandsOf2021.length;
function reset() {
    document.getElementById("result1").innerHTML = ' ';
    document.getElementById("result2").innerHTML = ' ';
    document.getElementById("result3").innerHTML = ' ';
}

function findBrand () {
    reset();
    let brandName = document.getElementById("input").value;
    for (let i = 0; i < x; i++){
        if (carbrandsOf2021[i]['name'] == brandName) {
            document.getElementById("result1").innerHTML = 'Consumer Rate: Number  ' + carbrandsOf2021[i]['id'] + '</br>';
            document.getElementById("result2").innerHTML = 'From : ' + carbrandsOf2021[i]['country'] + '</br>';
            document.getElementById("result3").innerHTML = 'Consumer Rate = ' + carbrandsOf2021[i]['consumerRate'] + '</br>';
            break;
        } else {
            document.getElementById("result1").innerHTML = 'Your input is not in rank';
            document.getElementById("result2").innerHTML = '---Check data in---';
            document.getElementById("result3").innerHTML = 'Mazda, BMW, Subaru, Porches, Honda, Lexus, Toyota. ';
        }
    }
}