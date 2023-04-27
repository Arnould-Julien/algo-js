const prompt = require("prompt-sync")({
    sigint: true
});


let i = 1;
let result = 0;
let entriesArray = [];
let numbEntries = prompt("Please enter a number of entries that you want to input in the array :  ")

console.log("You must input " + numbEntries + " entries.")

while(i<numbEntries){
    entriesArray.push(parseInt(prompt("Please add a number")));
    i++
}

console.log("Here is the saved array : ");
console.log(entriesArray);

for(let entry of entriesArray){
    result += entry;

}
console.log ("the addition of the different number is : " + result);