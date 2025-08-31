const calcBody = document.querySelector("#container");
const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number")
const operatorButtons = document.querySelectorAll(".operator")
const equalsButton = document.querySelector("#equals")
const clearDisplay = document.querySelector("#C")
const clearCurrent = document.querySelector("#CE")

let firstNumber = '';
let secondNumber = '';
let presentNumber = '';
let operatingOperator = '';
let sumDisplay;

//current display
function currentDisplay(value) {
    display.textContent = value;
}

// Rounding Function
function roundResult(nmbr) {
    console.log({nmbr})
    return roundedNumber = Math.round((nmbr * 1000000000)/1000000000)
}

//number button entry logic
numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', () => {
        if (presentNumber.length <= 10) {
        presentNumber += numberButton.textContent;
        } else {
            presentNumber;
        }
        currentDisplay(presentNumber);
    });
});


// stores first number entered when operator is pressed
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', () => {
        firstNumber = Number(presentNumber);
        operatingOperator = operatorButton.textContent;
        currentDisplay(operatingOperator);
        presentNumber = '';
    });
});

//equals button
equalsButton.addEventListener('click', () => {
    secondNumber = Number(presentNumber);
    let result = operate(firstNumber, operatingOperator, secondNumber);
    console.log(result)
    let roundedResult = roundResult(result);
    currentDisplay(roundedResult);

    presentNumber = roundedResult;
    firstNumber = '';
    secondNumber = '';
    operatingOperator = '';
});

// operation function
function operate(numOne, operator, numTwo) {
    if (operator === '+') {
        return add(numOne, numTwo)
    } else if (operator === '-') {
        return subtract(numOne, numTwo)
    } else if (operator === 'X') {
        return multiply(numOne, numTwo)
    } else {
        return divide(numOne, numTwo)
    }
};

//clear math & display
clearDisplay.addEventListener('click', () => {
    presentNumber = '';
    firstNumber = '';
    secondNumber = '';
    operatingOperator = '';
    currentDisplay('0');
})

//clear current number
clearCurrent.addEventListener('click', () => {
    presentNumber = '';
    currentDisplay('0');
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

