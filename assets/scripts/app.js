const defaultValue = 0;
let currentResult = defaultValue;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const inicialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput( `+`, inicialResult, enteredNumber)
  logEntries.push(enteredNumber);
  console.log(logEntries);

}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const inicialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput( `-`, inicialResult, enteredNumber)
}


function multiply() {
  const enteredNumber = getUserNumberInput();
  const inicialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput( `*`, inicialResult, enteredNumber)
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const inicialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput( `/`, inicialResult, enteredNumber)
}

// We use the function made on vendor.js to call the functions over here
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
