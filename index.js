
let runningTotal = 0;
let buffer = "0";
let previousOperator = null;
let screen = document.querySelector(".screen");

/*examining what hapens when any button is clicked ion our aplication*/

function buttonClick(value) {
    if(isNaN(value)){
        //this is not a number
        handleSymbol(value)
    }else{
        //this is a number
        handleNumber(value)
    }screen.innerText = buffer
}
function handleSymbol(symbol){
    console.log('handleSymbol', symbol)
    switch(symbol){
        case 'C':
        buffer = '0'
        runningTotal = 0
            break;
        case '=':
            if(previousOperator === null){
                return 
            } 
            flushOperation(parseInt(buffer))
            previousOperator = null
            buffer = runningTotal
            runningTotal = 0
            break;
            /*case '←':
                if(buffer.length === 1){
                    buffer = '0'
                } else {
                    buffer = buffer.substring(0, buffer.length - 1)
                }
                break;*/
        case '+':
        case '÷':
        case '×':
        case '-':
        handleMath(symbol)
            break;
}}

 function handleMath(symbol) {
    const realBuffer = parseInt(buffer)
    if(buffer ==='0'){
     return 0
    }else if(runningTotal === 0){
        runningTotal = realBuffer
    }else{
        flushOperation(realBuffer)
    }
    previousOperator = symbol
    buffer = '0'
}

function flushOperation (realBuffer){
    console.log(runningTotal)
    if(previousOperator === '+'){
        runningTotal += realBuffer
    } else if (previousOperator === '-'){
        runningTotal -= realBuffer
    } else if (previousOperator === '×'){
        runningTotal *= realBuffer
    } else {
        runningTotal /= realBuffer
    }
    
}










function handleNumber(numberString){
    if (buffer === "0"){
        buffer = numberString
    }else{
        buffer = buffer + numberString
    }
    
}
//create a function that sets everything up 
function startUp() {
    document.querySelector('.calc-buttons')
        .addEventListener('click', function (event) {
            console.log(event)
            buttonClick(event.target.innerText)
        })
}
startUp()