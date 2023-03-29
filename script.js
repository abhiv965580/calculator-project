function add (num1,num2) {
    return num1 + num2;
}
function subtract (num1,num2) {
    return num1 - num2;
}
function divide (num1,num2) {
    return num1 / num2;
}
function multiply (num1,num2) {
    return num1 * num2;
}
// console.log(add (2,7));
// console.log(subtract (89,33));
// console.log(divide (32,8));
// console.log(multiply (32,4));
let firstNumber;
let operator;
let secondNumber;
let prevValue;
let currValue = '';
const display = document.querySelector('.display');
const numBtns = document.querySelectorAll('.btn.numbers');
const oprBtns = document.querySelectorAll('.btn.operators');
const eqlBtn = document.querySelector('.btn.equal');
const clrBtn = document.querySelector('.btn.clr');

function operate(firstNumber,secondNumber,operator) {
    if (operator == '+'){
        return(add(firstNumber,secondNumber));
    }
    else if(operator == '-'){
        return(subtract(firstNumber,secondNumber));
    }
    else if (operator == '*') {
        return(multiply(firstNumber,secondNumber));
    }
    else if (operator == '/'){
        return(divide(firstNumber,secondNumber));
    }
    else{
        return "INVALID_OPERATOR"
    }
}
function clearScreen(value){
    // console.log(prevValue);
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
numBtns.forEach(btn => {
    btn.addEventListener('click',() => {
        storeValue(btn.textContent);
        display.textContent = currValue;
    });
});
oprBtns.forEach(opBtn => {
    opBtn.addEventListener('click',() => {
        storeOperator(opBtn.textContent);
        display.textContent = opBtn.textContent;
    });
});
clrBtn.addEventListener('click',() => {
    clearScreen();
})