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
let storedNumber = '';
let waitingForFirstNumber = true;
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

//number button entry logic for display
numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', () => {
        if (presentNumber.length <= 10) {
        presentNumber += numberButton.textContent;
        } else {
            Number(presentNumber);
        }
        currentDisplay(presentNumber);
        console.log(typeof presentNumber)
    });
});


// stores first number entered to storedNumber when operator is pressed
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', () => {
        operatingOperator = operatorButton.textContent;
        if (presentNumber === '') {
            operatingOperator = operatorButton.textContent;
            return;
        }
        if (waitingForFirstNumber === true) {
            storedNumber = Number(presentNumber);
            presentNumber = '';
            waitingForFirstNumber = false;
            console.log({presentNumber});
            console.log({storedNumber});
            console.log(waitingForFirstNumber)
        } else if (waitingForFirstNumber === false) {
            let result = operate(storedNumber, operatingOperator, presentNumber);
            storedNumber = Number(result);
            let roundedResult = roundResult(result);
            presentNumber = '';
            currentDisplay(roundedResult);
            console.log({result});
            console.log({storedNumber})
            console.log({presentNumber})
            
        }
        // currentDisplay(operatingOperator);
        presentNumber = '';
    });
});

//equals button
equalsButton.addEventListener('click', () => {
    if (waitingForFirstNumber === true) {
        presentNumber;
    } else if (waitingForFirstNumber === false && (presentNumber === 0 || presentNumber === '')) {
        presentNumber;
    } else if (waitingForFirstNumber === false) {
            let result = operate(storedNumber, operatingOperator, presentNumber);
            storedNumber = Number(result);
            presentNumber = '';
            let roundedResult = roundResult(result);
            currentDisplay(roundedResult);
            waitingForFirstNumber = true;
            console.log({result});
            console.log({presentNumber});
            console.log({storedNumber});
            console.log({waitingForFirstNumber})
    } else {
        presentNumber;
    }
  //  storedNumber = roundedResult;
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
    storedNumber = '';
    operatingOperator = '';
    waitingForFirstNumber = true;
    currentDisplay('0');
    console.log({storedNumber})
    console.log({presentNumber})
    console.log(waitingForFirstNumber)
})

//clear current number
clearCurrent.addEventListener('click', () => {
    presentNumber = '';
    currentDisplay('0');
})

// basic operation functions
const add = function(x, y) {
    return sum = (Number(x) + Number(y));
};

const multiply = function(x, y) {
    return sum = (x * y);
};

const divide = function(x, y) {
    if ( y === '0' || y === 0) {
        currentDisplay("You can't divide by 0, ya nut!");
    } else {
    return sum = (x / y);
}};

const subtract = function(x, y) {
    return sum = (x - y);
};

