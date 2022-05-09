var userName = document.querySelector("#userName");
var userAnne = document.querySelector(".anne");
var userJane = document.querySelector(".jane");

var counter1 = 2;
var counter2 = 500;

var counter1Element = document.querySelector(".requests");
var counter2Element = document.querySelector(".connections");

function changeText() {
    userName.innerText = "マイヤーブラッドリー";
    console.log("Name Changed");
}

function addUser1() {
    userAnne.remove();
    counter1--;
    counter1Element.innerText = counter1;
    counter2++;
    counter2Element.innerText = counter2;
    console.log("User Added");
}

function addUser2() {
    userJane.remove();
    counter1--;
    counter1Element.innerText = counter1;
    counter2++;
    counter2Element.innerText = counter2;
    console.log("User Added");
}

function removeUser1() {
    userAnne.remove();
    counter1--;
    counter1Element.innerText = counter1;
    console.log("User Removed");
}

function removeUser2() {
    userJane.remove();
    counter1--;
    counter1Element.innerText = counter1;
    console.log("User Removed");
}
