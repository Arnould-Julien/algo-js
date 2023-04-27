const prompt = require("prompt-sync")({
    sigint: true
});

let numberArray1 = [1, 2, 3, 5];
let numberArray2 = [ 100, 101, 102];
let total = 0;

for(let number1 of numberArray1){
    total =+ number1;
}

let averageValue = total/(numberArray1.length);
console.log(numberArray1);
console.log("La moyenne du 1er tableau est de : " + averageValue);
total = 0;

for (let number2 of numberArray2){
    total += number2;
}

averageValue = total/(numberArray2.length);
console.log("La moyenne du 2ème tableau est de : " + averageValue);