function working() {
    console.log("Hey, this works!");
};

working();

function addSeven(num) {
    return num + 7;
}

function subtractTwo(num) {
    return num - 2;
}

function multiplyEight(num) {
    return num * 8;
}

console.log(multiplyEight(addSeven(subtractTwo(3))))