//display
const calcBody = document.querySelector("#container")

// Basic functions

const add = function(x, y) {
    return sum = (x + y);
};

const multiply = function(x, y) {
    return sum = (x * y);
};

const divide = function(x, y) {
    return sum = (x / y);
};

const subtract = function(x, y) {
    return sum = (x - y);
};

// Variables

let numOne;
let numTwo;
let operator;

// basic function 

function operate(numOne, operator, numTwo) {
    console.log(typeof operator)
    if (operator === '+') {
        add(numOne, numTwo)
    } else if (operator === '-') {
        subtract(numOne, numTwo)
    } else if (operator === '*') {
        multiply(numOne, numTwo)
    } else {
        divide(numOne, numTwo)
    };
    return sum;
};
let value = operate(1, '/', 3)
console.log(value)

