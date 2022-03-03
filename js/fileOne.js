/*

"""this is code had been written to animate the number in html file 
Author: Mostafa sayed (26 of Feb 2022)
Don't text me to ask about it i will forget about it forSure, bro 
try to dicover how this is working idiot, 
follow me up there https://twitter.com/Eng_MostafaSayd
""""

*/
function goGoGo(element, initVal, lastVal, duration) {
    let startTime = null;
    let TimeNow = Date.now();
    const step = (TimeNow) => {
        //if the start time is null, assign the current time to startTime
        if (!startTime) {
            startTime = TimeNow;
        }
        const progress = Math.min((TimeNow - startTime) / duration, 1);
        element.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
    };
    //start animating
    window.requestAnimationFrame(step);
}

let counterOne = document.getElementById("counter-one");
let counterTwo = document.getElementById("counter-two");
let counterThree = document.getElementById("counter-three");
let counterFour = document.getElementById("counter-four");

const nowBoom = () => {
    goGoGo(counterOne, 0, 907, 5000);
    goGoGo(counterTwo, 0, 432, 5000);
    goGoGo(counterThree, 0, 50, 5000);
    goGoGo(counterFour, 0, 1200, 5000);
};
document.addEventListener("DOMContentLoaded", nowBoom);