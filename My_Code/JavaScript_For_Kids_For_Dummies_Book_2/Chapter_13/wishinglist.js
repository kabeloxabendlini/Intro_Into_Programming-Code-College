let iWantInput = document.getElementById("iWant");
let sheWantInput = document.getElementById("sheWant");
let addItButtons = document.querySelectorAll("#addIt");
let printableBtn = document.getElementById("printable");

let wishList = document.getElementById("wishList");
let myList = document.getElementById("myList");

// First "Add It!" for iWant
addItButtons[0].addEventListener("click", () => {
  let item = iWantInput.value.trim();
  if (item) {
    const li = document.createElement("li");
    li.textContent = item;
    wishList.appendChild(li);
    iWantInput.value = "";
  }
});

// Second "Add It!" for sheWant
addItButtons[1].addEventListener("click", () => {
  let item = sheWantInput.value.trim();
  if (item) {
    let li = document.createElement("li");
    li.textContent = item;
    myList.appendChild(li);
    sheWantInput.value = "";
  }
});

printableBtn.addEventListener("click", () => {
  window.print();
});