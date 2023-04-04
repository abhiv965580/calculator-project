const add = (number1,number2) => {
    return number1 + number2;
}

const subtract = (number1,number2) => {
    return number1 - number2;
}

const divide = (number1,number2) => {
    return number1 / number2;
}

const multiply = (number1,number2) => {
    return number1 * number2;
}

let firstNumber;
let operator;
let secondNumber;
let prevValue;
let currValue = '';
let result = 0;
const display = document.querySelector('.display');
const numberBtns = document.querySelectorAll('.btn.numbers');
const operatorBtns = document.querySelectorAll('.btn.operators');
const equalBtn = document.querySelector('.btn.equal');
const clearBtn = document.querySelector('.btn.clear');
const decimalBtn = document.querySelector('.btn.decimal');

const operate = (firstNumber,secondNumber,operator) => {
    switch (operator) {
        case '+':
            return add(firstNumber,secondNumber);
        case '-':
            return subtract(firstNumber,secondNumber);
        case '*':
            return multiply(firstNumber,secondNumber);
        case '/':
            return divide(firstNumber,secondNumber);
        default:
            return "INVALID_OPERATOR";
    }
}

const clearScreen = (value) =>{
    display.innerHTML = '';
    prevValue = '';
    currValue = '';
    operator = '';
}

const storeValue = (value) =>{
    if (currValue.length<=10){
        currValue += value;
    }
}

const storeOperator = (op) => {
    prevValue = currValue;
    operator = op;
    currValue = '';
}

const operation = () => {
    currValue = Number(currValue);
    prevValue = Number(prevValue);
    prevValue = operate(prevValue,currValue,operator);
    prevValue = Math.round(prevValue*1000) / 1000
    prevValue = prevValue.toString();
    currValue = prevValue;
}

numberBtns.forEach(btn => {
    btn.addEventListener('click',() => {
        storeValue(btn.textContent);
        display.textContent = currValue;
    });
});

operatorBtns.forEach(opBtn => {
    opBtn.addEventListener('click',() => {
        storeOperator(opBtn.textContent);
        display.textContent = opBtn.textContent;
    });
});

clearBtn.addEventListener('click',() => {
    clearScreen();
});

equalBtn.addEventListener('click',() => {
    operation();
    display.textContent = prevValue;
});

decimalBtn.addEventListener('click',() => {
    if (!(currValue.includes('.'))){
        currValue += '.';
    }
    display.textContent = currValue;
});
