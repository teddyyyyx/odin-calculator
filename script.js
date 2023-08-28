const buttons = document.querySelectorAll('[data-number]');
const currentOperand = document.querySelector('.currentNumDisplay');
const previousOperand = document.querySelector('.previousNumDisplay');
const operatorButton = document.querySelectorAll('[data-operator]')
const allClearButton = document.querySelector('[data-all-clear]')
const equalButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const decimalButton = document.querySelector('[data-decimal]') 
const changeSignButton = document.querySelector('[data-change-sign]') 

let operator = null;
let firstNum = null;
let secondNum = null;
let operatorIsClick = false;

// Event Listeners
buttons.forEach(button => {
    button.addEventListener("click", numberDisplay)
})

operatorButton.forEach(button => {
    button.addEventListener("click", operatorFunction)
})

allClearButton.addEventListener("click", allClear)

equalButton.addEventListener("click", equal)

deleteButton.addEventListener("click", del)

decimalButton.addEventListener("click", decimal)


// Functions
function equal(){
    if(secondNum === null) return
    secondNum = currentOperand.textContent;
    
    if(operator === '/' && (firstNum == 0 || secondNum == 0)) alert('Cannot divide with zero!')

                                                                                            console.log(`first num: ${firstNum}`)
                                                                                            console.log(`second num: ${secondNum}`)
                                                                                            console.log(`operator: ${operator}`)
                                                                                            console.log(`              `);


    currentOperand.textContent = operate(operator, parseInt(firstNum), parseInt(secondNum));

}

function operate(operatorSymbol, a, b){

    switch(operatorSymbol) {
        case '+' : return a + b

        case '-' : return a - b

        case '*' : return a * b

        case '/' : return a / b

        default : return null
    }
}

function del(){
    currentOperand.textContent = currentOperand.textContent.slice(0, -1)
    operatorIsClick = false;
}

function allClear(){
    console.log("working")
    currentOperand.textContent = '';
    previousOperand.textContent = '';
    firstNum = null;
    secondNum = null;
    operator = null;
    operatorIsClick = false;

                                                                                                console.log(`first num: ${firstNum}`)
                                                                                                console.log(`second num: ${secondNum}`)
                                                                                                console.log(`operator: ${operator}`)
                                                                                                console.log(`              `);
}

function operatorFunction(){
    // if(currentOperand.textContent === '') return;
    operator = this.textContent;
    firstNum = currentOperand.textContent;
    
    if(operatorIsClick) {
        let test = previousOperand.textContent.slice(0, -1);
        previousOperand.textContent = test + operator;
        firstNum = test;
        console.log(test);

        return
    }
    
    if(secondNum === null) return

    operatorIsClick = true;
    previousOperand.textContent = currentOperand.textContent + ' ' + operator;
    currentOperand.textContent = '';
    secondNum = null;

    console.log(`first num: ${firstNum}`)
    console.log(`second num: ${secondNum}`)
    console.log(`operator: ${operator}`)
    console.log(`              `);

}

function numberDisplay(){
    currentOperand.textContent += this.textContent;
    operatorIsClick = false;
    secondNum = currentOperand.textContent;


                                                                                            console.log(`first num: ${firstNum}`)
                                                                                            console.log(`second num: ${secondNum}`)
                                                                                            console.log(`operator: ${operator}`)
                                                                                            console.log(`              `);


}

function decimal(){
    if(currentOperand.textContent.includes('.')) return;
    currentOperand.textContent += this.textContent;
}

