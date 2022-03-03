"use strict";

let slideElements = document.querySelectorAll(".slide-content");
let countElement = 1;

setInterval(() => {

    countElement++;

    let currentElement = document.querySelector('.current');

    currentElement.classList.remove('current');

    if (countElement > slideElements.length) {

        countElement = 1;
        slideElements[0].classList.add('current');


    } else {
        currentElement.nextElementSibling.classList.add('current');
    }

}, 3000);