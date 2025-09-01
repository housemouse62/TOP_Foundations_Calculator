const calcBody = document.querySelector("#container");
const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number")
const operatorButtons = document.querySelectorAll(".operator")
const equalsButton = document.querySelector("#equals")
const clearDisplay = document.querySelector("#C")
const clearCurrent = document.querySelector("#CE")
const decimal = document.querySelector("dot")


let presentNumber = '';
let storedNumber = '';
let operatingOperator = '';
let lastOperator;
let lastSecondNumber;
let waitingForFirstNumber = true;
let sumDisplay;

//current display
function currentDisplay(value) {
    display.textContent = value;
};

// Rounding Function
function formatResult(num) {
    let str = String(num);

    if (str.length < 11) return str;

    if (str.includes('.')) {
        const [intPart, decPart] = str.split('.');
        const availableDecimals = 11 - (intPart.length + 1);
        if (availableDecimals > 0) {
            return Number(num).toFixed(availableDecimals).slice(0, 11);
        }
    }

    return Number(num).toExponential(5);
};

//number button entry logic for display
numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', () => {
        if (presentNumber.length <= 10) {
        presentNumber += numberButton.textContent;
        } else {
            Number(presentNumber);
        };

        if (presentNumber.includes('.')) {
            document.getElementById("dot").disabled = true;
        };

        currentDisplay(presentNumber);
        console.log(typeof presentNumber)
    });
});


// stores first number entered to storedNumber when operator is pressed
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', () => {
        const op = operatorButton.textContent;

        if (waitingForFirstNumber && presentNumber === '') {
            operatingOperator = operatorButton.textContent;
            return;
        };

        if (waitingForFirstNumber && presentNumber !== '') {
            storedNumber = Number(presentNumber);
            presentNumber = '';
            operatingOperator = op;
            waitingForFirstNumber = false;

            lastOperator = '';
            lastSecondNumber = '';
            return;
        };
        
        if (presentNumber === '') {
            operatingOperator = op;
            lastOperator = '';
            lastSecondNumber = '';
            return;
        }

        const b = Number(presentNumber);
        const opUsed = operatingOperator || op;
        const result = operate(storedNumber, opUsed, b);

        storedNumber = Number(result);
        presentNumber = '';
        currentDisplay(formatResult(result));

        operatingOperator = op;
            
        }
)});

//equals button
equalsButton.addEventListener('click', () => {
    if (waitingForFirstNumber) return;

    if (presentNumber !== '') {
        const b = Number(presentNumber);
        const opUsed = operatingOperator || lastOperator;
        if (!opUsed) return;

        const result = operate(storedNumber, opUsed, b);
            storedNumber = Number(result);
            presentNumber = '';
            currentDisplay(formatResult(result));
            lastOperator = opUsed;
            lastSecondNumber = b;
            return;
    };

    if (lastOperator !== '' && lastSecondNumber !== '') {
            const result = operate(storedNumber, lastOperator, lastSecondNumber);
            storedNumber = Number(result);
            currentDisplay(formatResult(result));
    };

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

