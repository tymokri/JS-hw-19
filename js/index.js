"use strict";

function myFunc(arr) {

    const positiveNumber = [];

    if (arr.length === 0) alert('The array arr is empty');

    for (let i = 0; i < arr.length; i += 1) {
        if( arr[i] > 0 ) positiveNumber.push(arr[i]);
    }

    if (positiveNumber.length === 0) return null;

    console.log(positiveNumber);
}

const arr = [1, 2, 3, -1, -2, -3];

myFunc(arr);