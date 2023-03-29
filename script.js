function add (number1,number2) {
    return number1 + number2;
}
function subtract (number1,number2) {
    return number1 - number2;
}
function divide (number1,number2) {
    return number1 / number2;
}
function multiply (number1,number2) {
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

function operate(firstNumber,secondNumber,operator) {
    if (operator === '+'){
        return(add(firstNumber,secondNumber));
    }
    else if(operator === '-'){
        return(subtract(firstNumber,secondNumber));
    }
    else if (operator === '*') {
        return(multiply(firstNumber,secondNumber));
    }
    else if (operator === '/'){
        return(divide(firstNumber,secondNumber));
    }
    else{
        return "INVALID_OPERATOR"
    }
}
function clearScreen(value){
    display.innerHTML = '';
    prevValue = '';
    currValue = '';
    operator = '';
}
function storeValue(value){
    if (currValue.length<=10){
        currValue += value;
    }
}
function storeOperator(op){
    prevValue = currValue;
    operator = op;
    currValue = '';
}
function operation(){
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
})
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
