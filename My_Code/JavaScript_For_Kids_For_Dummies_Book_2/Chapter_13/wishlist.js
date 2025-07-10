// Get elements for your list
var myInput = document.getElementById("iWant");
var addMineBtn = document.getElementById("addMine");
var myList = document.getElementById("myList");
var printMineBtn = document.getElementById("printMine");

// Get elements for wife's list
var wifeInput = document.getElementById("sheWant");
var addWifeBtn = document.getElementById("addWife");
var wifeList = document.getElementById("wifeList");
var printWifeBtn = document.getElementById("printWife");

// Function to add item to a list
function addItem(inputField, listElement) {
  var item = inputField.value.trim();
  if (item !== "") {
    const li = document.createElement("li");
    li.textContent = item;
    listElement.appendChild(li);
    inputField.value = "";
    inputField.focus();
  }
}

// Add item to your wish list
addMineBtn.addEventListener("click", () => {
  addItem(myInput, myList);
});

// Add item to wife's wish list
addWifeBtn.addEventListener("click", () => {
  addItem(wifeInput, wifeList);
});

// Print your wish list
printMineBtn.addEventListener("click", () => {
  window.print();
});

// Print wife's wish list
printWifeBtn.addEventListener("click", () => {
  window.print();
});