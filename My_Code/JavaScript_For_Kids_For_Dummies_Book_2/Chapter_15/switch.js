//Listing 15.1

// ************************************ Line 1 - 31 ********************************************//

// var myNumber = prompt("Please can you name the favourite day of the week !").toUpperCase;

// var theResponse;

// switch (myNumber) {
//     case "MONDAY":
//         theResponse = "Ack!";
//         break;
//     case "TUESDAY":
//         theResponse = "Taco day!";
//         break;
//     case "WEDNESDAY":
//         theResponse = "Halfway there!";
//         break;
//     case "THURSDAY":
//         theResponse = "It's the new Friday!";
//         break;
//     case "FRIDAY":
//         theResponse = "TGIF! Yeah!";
//         break;
//     case "SATURDAY":
//         theResponse = "What a day!";
//         break;
//     case "SUNDAY":
//         theResponse = "Sunday = Funday!";
//         break;
//     default:
//         theResponse = "I haven't heard of that one!";
//         break;
// }

// ************************************ Line 1 - 31 ********************************************//

// ************************************ Line 36 - 56 ********************************************//

var myNumber = prompt("Please can you name the favourite day of the week !").toUpperCase()

var theResponse;

if (myNumber === "MONDAY") {
    theResponse = "Ack!";
} else if (myNumber === "TUESDAY") {
    theResponse = "Taco day!";
} else if (myNumber === "WEDNESDAY") {
    theResponse = "Halfway there!";
} else if (myNumber === "THURSDAY") {
    theResponse = "It's the new Friday!";
} else if (myNumber === "FRIDAY") {
    theResponse = "TGIF! Yeah!";
} else if (myNumber === "SATURDAY") {
    theResponse = "What a day!";
} else if (myNumber === "SUNDAY") {
    theResponse = "Sunday = Funday!";
} else {
    theResponse = "I haven't heard of that one!";
}

alert(theResponse);

// ************************************ Line 36 - 56 ********************************************//