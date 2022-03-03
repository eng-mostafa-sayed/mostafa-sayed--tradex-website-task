/*
"""
Author: Mostafa sayed (26 of Feb 2022)
Don't text me to ask about it i will forget it forSure, bro 
try to dicover how this is working
""""
*/

let listItemOne = document.querySelector("#pm");
let listItemTwo = document.querySelector("#py");
let spanItemOne = document.getElementById("#pm-i");
let spanItemTwo = document.getElementById("#py-i");
let divOfPlanOne = document.querySelector("#planOne");
let divOfPlanTwo = document.querySelector("#planTwo");

listItemOne.classList.add("activeNow");
divOfPlanOne.classList.add("isActive");
divOfPlanTwo.classList.add("isNotActive");

const secondOption = () => {
    // to change the style of buttons
    listItemOne.classList.remove("activeNow");
    listItemTwo.classList.add("activeNow");
    //hide and appear div of plan
    divOfPlanTwo.classList.add("isActive");
    divOfPlanTwo.classList.remove("isNotActive");
    divOfPlanOne.classList.remove("isActive");
    divOfPlanOne.classList.add("isNotActive");
};

const FirstOption = () => {
    // to change the style of buttons
    listItemTwo.classList.remove("activeNow");
    listItemOne.classList.add("activeNow");
    //hide and appear div of plan
    divOfPlanTwo.classList.remove("isActive");
    divOfPlanTwo.classList.add("isNotActive");
    divOfPlanOne.classList.add("isActive");
    divOfPlanOne.classList.remove("isNotActive");
};

listItemOne.addEventListener("click", FirstOption);
listItemTwo.addEventListener("click", secondOption);

function newFunction() {
    spanItemTwo.classList.add("text-white");
}