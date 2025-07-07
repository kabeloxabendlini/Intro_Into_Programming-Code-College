// Let printableBtn variable

let printableBtn = document.getElementById("printable");
printableBtn.addEventListener("click", printView);

let addItButtons = document.querySelectorAll("addIt");
addItButtons.addEventListener("click", addTheThing);


let myListing = [];
let myList = document.getElementById("myList");



function addTheThing() {

    let theThing = document.getElementById("iWant");

    addToTheList(theThing);
    resetInput(theThing);

}

function addToTheList(thingToAdd) {
    myList.push(thingToAdd.value);
    let newListItem = document.createElement("li");
    newListItem.innerHTML = myList[myList.length - 1];

    myListArea.appendChild(newListItem);

}

function resetInput(inputToReset) {
    inputToReset.value = "";
}

function printView() {
    let listPage = document.getElementById("wishList");
    let formArea = document.getElementById("formArea");

    formArea.style.display = "none";
    wishList.className = "print";
    myListArea.innerHTML = "";
    myList.sort();

    for (let i = 0; i < myList.length; i++) {
        wishList.innerHTML += "<li>" + myList[i] + "</li>";
    }
    window.print();
};

// let iWantInput = document.getElementById("iWant");
// let sheWantInput = document.getElementById("sheWant");
// let addItButtons = document.querySelectorAll("#addIt");
// let printableBtn = document.getElementById("printable");

// let wishList = document.getElementById("wishList");
// let myList = document.getElementById("myList");

// // First "Add It!" for iWant
// addItButtons[0].addEventListener("click", () => {
//   let item = iWantInput.value.trim();
//   if (item) {
//     const li = document.createElement("li");
//     li.textContent = item;
//     wishList.appendChild(li);
//     iWantInput.value = "";
//   }
// });

// // Second "Add It!" for sheWant
// addItButtons[1].addEventListener("click", () => {
//   let item = sheWantInput.value.trim();
//   if (item) {
//     let li = document.createElement("li");
//     li.textContent = item;
//     myList.appendChild(li);
//     sheWantInput.value = "";
//   }
// });

// printableBtn.addEventListener("click", () => {
//   window.print();
// });