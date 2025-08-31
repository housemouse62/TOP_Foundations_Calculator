

const calcBody = document.querySelector("#container");
const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number")
const operatorButtons = document.querySelectorAll(".operator")
const equalsButton = document.querySelector("#equals")
const clearDisplay = document.querySelector("#C")

console.log(operatorButtons)
let firstNumber = '';
let secondNumber = '';
let presentNumber = '';
let operatingOperator = '';
let sum;

//number button entry logic
numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', () => {
        presentNumber += numberButton.textContent;
        display.textContent = presentNumber;
    });
});

// stores first number entered when operator is pressed
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', () => {
        firstNumber = Number(presentNumber);
        operatingOperator = operatorButton.textContent;
        display.textContent = operatingOperator;
        presentNumber = '';
    });
});

//equals button
equalsButton.addEventListener('click', () => {
    secondNumber = Number(presentNumber);
    operate(firstNumber, operatingOperator, secondNumber);
    display.textContent = sum;
});

// operation function
function operate(numOne, operator, numTwo) {
    if (operator === '+') {
        add(numOne, numTwo)
    } else if (operator === '-') {
        subtract(numOne, numTwo)
    } else if (operator === 'X') {
        multiply(numOne, numTwo)
    } else {
        divide(numOne, numTwo)
    };
    display.textContent = sum;
    presentNumber = '';
    firstNumber = '';
    secondNumber = '';
    operatingOperator = '';
};

clearDisplay.addEventListener('click', () => {
    presentNumber = '';
    firstNumber = '';
    secondNumber = '';
    operatingOperator = '';
    display.textContent = '0';
})

// basic operation functions
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

