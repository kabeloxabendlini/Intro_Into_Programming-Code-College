// function printMyName(firstName, surname) {
//     alert("Hello." + firstName + " " + surname)
// };

// printMyName(prompt("What is your first name"), prompt("What is your surname ?"));

// **************************** Line 9 - 17 ***********************************************// 

// function printOut() {
//     alert("My Name Is Kabelo Xabendlini.")
// };

// let greetings= "Hello{alert}."

// greetings.toUpperCase()

// console.log()

// **************************** Line 19 - 25 ************************************************//

// function printThis() {
//     for (var i = 0; i < firstParse; i++) {
//         console.log("You printed" + secondParse)
//     }
// };

// **************************** Line 29 - 31 ************************************************//

// function doMath(x, y) {
//     x + y
// };

// **************************** Line 35 - 37 ************************************************//

// var ourFirstFunction = function () {
//  console.log("Hello world!");
// };

// *************************** Line 41 - 45 ************************************************//

// var drawCats = function (howManyTimes) {
//  for (var i = 0; i < howManyTimes; i++) {
//  console.log(i + " =^.^=");
//  }
// };

// *************************** Line 49 - 45 ************************************************//

// function multiply(x, y){

//     return x * y;

// }

// function add(x, y){
//     return x * y

// }

// var result =add(777,multiply(36325,9824));
// alert(result);

// *************************** Line 49 - 45 ************************************************//

var x = [1,2,3]
var y = [1,2,4]

function add(x,y){
    if (x === y){



    }
}

// *************************** Line 49 - 45 ************************************************//

// var x = [1, 2, 3];
// var y = [1, 2, 4];

// function add(x, y) {
//     // Random index for each array
//     var indexX = Math.floor(Math.random() * x.length);
//     var indexY = Math.floor(Math.random() * y.length);

//     var valX = x[indexX];
//     var valY = y[indexY];

//     console.log(`Randomly selected: x[${indexX}] = ${valX}, y[${indexY}] = ${valY}`);

//     if (valX === valY) {
//         var sum = valX + valY;
//         console.log(`Match found! ${valX} + ${valY} = ${sum}`);
//         return sum;
//     } else {
//         console.log("No match. Try again.");
//         return null;
//     }
// }

// // Run the function
// add(x, y);

// *************************** Line 106 - 125 ************************************************//

var x = [1, 2, 3];
var y = [1, 2, 4];

function add(x, y) {
    // Random index for each array
    var randIndexX = Math.floor(Math.random() * x.length);
    var randIndexY = Math.floor(Math.random() * y.length);

    var valX = x[randIndexX];
    var valY = y[randIndexY];

    console.log(`Random values: x[${randIndexX}] = ${valX}, y[${randIndexY}] = ${valY}`);

    // Return true if values match, else false
    return valX === valY;
}

// Example usage
var result = add(x, y);
console.log("Result:", result);