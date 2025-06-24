var bttn = document.getElementById("myButton");

var itemOne = document.getElementById("one");
var itemTwo = document.getElementById("two");
var itemThree = document.getElementById("three");
var itemFour = document.getElementById("four");
var itemFive = document.getElementById("five");

var colData1;
var colData2;
var colData3;
var colData4;
var colData5;

function fetchData() {
    colData1 = prompt("List something for first item");
    colData2 = prompt("List something for second item");
    colData3 = prompt("List something for third item");
    colData4 = prompt("List something for fourth item");
    colData5 = prompt("List something for fifth item");

    updateList();

};

function updateList() {
    itemOne.innerHTML = colData1;
    itemTwo.innerHTML = colData2;
    itemThree.innerHTML = colData3;
    itemFour.innerHTML = colData4;
    itemFive.innerHTML = colData5;

};