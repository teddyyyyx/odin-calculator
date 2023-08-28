const buttons = document.querySelectorAll('[data-number]');
const currentOperand = document.querySelector('.currentNumDisplay');
const previousOperand = document.querySelector('.previousNumDisplay');
const operatorButton = document.querySelectorAll('[data-operator]')
const allClearButton = document.querySelector('[data-all-clear]')
const equalButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const decimalButton = document.querySelector('[data-decimal]')

let operator = '';
let firstNum = '';
let secondNum = '';

// Event Listeners
buttons.forEach(button => {
    button.addEventListener("click", currentDisplay)
})

operatorButton.forEach(button => {
    button.addEventListener("click", operatorIsClicked)
})

allClearButton.addEventListener("click", allClear)

equalButton.addEventListener("click", equal)

deleteButton.addEventListener("click", del)

decimalButton.addEventListener("click", decimal)


// Functions
function equal(){
    secondNum = currentOperand.textContent;

    console.log(`first num: ${firstNum}`)
    console.log(`second num: ${secondNum}`)
    console.log(`operator: ${operator}`)

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
}
function allClear(){
    console.log("working")
    currentOperand.textContent = '';
    previousOperand.textContent = '';
}

function operatorIsClicked(){
    operator = this.textContent;
    previousOperand.textContent = currentOperand.textContent + ' ' + operator;
    firstNum = currentOperand.textContent;
    currentOperand.textContent = ' ';
}

function currentDisplay(){
    // console.log(this)
    currentOperand.textContent += this.textContent;
}

function decimal(){
    if(currentOperand.textContent.includes('.')) return;
    currentOperand.textContent += this.textContent;
}

