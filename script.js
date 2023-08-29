// Benz Samson Tagle
// The Odin Project: Calculator Project Using HTML, CSS, VANILLA JAVASCRIPT

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

// Event Listeners  // Event Listeners  // Event Listeners  // Event Listeners  // Event Listeners
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

changeSignButton.addEventListener("click", changeSignFunction)

// Functions  // Functions  // Functions  // Functions  // Functions  // Functions  // Functions
// +-*/ operator button function
function operatorFunction(){
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
                                           /* Console.log firstNum, secondNum, operator*/   console.log(`first num: ${firstNum}`);  console.log(`second num: ${secondNum}`); console.log(`operator: ${operator}`);console.log(`              `);                                                      
}//end of operatorFunction() 

function changeSignFunction(){
     if(currentOperand.textContent.slice(0,1) === '-'){
        currentOperand.textContent = currentOperand.textContent.substring(1)
     } else if(!(currentOperand.textContent.slice(0,1) === '-')){
        currentOperand.textContent = '-' + currentOperand.textContent
     }
}//end of changeSignFunction()

// Equal button function
function equal(){       
    if(secondNum === null) return
    secondNum = currentOperand.textContent;
    
    if(operator === '/' && (firstNum == 0 || secondNum == 0)) alert('Cannot divide with zero!')
                                           /* Console.log firstNum, secondNum, operator*/   console.log(`first num: ${firstNum}`);  console.log(`second num: ${secondNum}`); console.log(`operator: ${operator}`);console.log(`              `);                                                      
 currentOperand.textContent = operate(operator, parseInt(firstNum), parseInt(secondNum));
}//end of equal()

// Main operation function. This checks what operator was used and returns the answer.
function operate(operatorSymbol, a, b){
    switch(operatorSymbol) {
        case '+' : return a + b

        case '-' : return a - b

        case '*' : return a * b

        case '/' : return a / b

        default : return null
    }                             // Notice that there is no 'break;' statement, it is because each case returns an answer, the return statement ends the process itself.
}//end of operate()

// Delete button function
function del(){
    currentOperand.textContent = currentOperand.textContent.slice(0, -1)
    operatorIsClick = false;
}

// AC button function
function allClear(){
    currentOperand.textContent = '';
    previousOperand.textContent = '';
    operatorIsClick = false;
    firstNum = null;
    secondNum = null;
    operator = null;
                                           /* Console.log firstNum, secondNum, operator*/   console.log(`first num: ${firstNum}`);  console.log(`second num: ${secondNum}`); console.log(`operator: ${operator}`);console.log(`              `);                                                     
}

// decimal button function
function decimal(){
    if(currentOperand.textContent.includes('.')) return;
    currentOperand.textContent += this.textContent;
}

    // Current number being displayed
function numberDisplay(){
    currentOperand.textContent += this.textContent;
    secondNum = currentOperand.textContent;
    operatorIsClick = false;
                                           /* Console.log firstNum, secondNum, operator*/   console.log(`first num: ${firstNum}`);  console.log(`second num: ${secondNum}`); console.log(`operator: ${operator}`);console.log(`              `);                                                      
}  
