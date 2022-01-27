let key = false;

function isSymmetry(textArray) {
    if (textArray.length <= 1) {
        return key;
    }

    let Z = (textArray.length - 1);
    let firstWord = textArray[0];
    let lastWord = textArray[Z];

    if (firstWord == lastWord) {
        key = true;
        textArray.pop();
        textArray.shift();
        isSymmetry(textArray);
    } else {
        key = false;
        return key;
    }
}

function checkSymmetry() {
    let getText = document.getElementById("inputText").value;
    let textArray = Array.from(getText);
    
    isSymmetry(textArray);

    if (isSymmetry(textArray) == true) {
        document.getElementById("resultHTML").innerHTML = "PALINDROME!!!"
    } else {
        document.getElementById("resultHTML").innerHTML = "NOT palindrome!!!"
    }
}
