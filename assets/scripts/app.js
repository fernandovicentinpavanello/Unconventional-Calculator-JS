const defaultValue = 0;
let currentResult = defaultValue;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const inicialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput( `+`, inicialResult, enteredNumber)

}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const inicialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput( `-`, inicialResult, enteredNumber)
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const inicialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput( `*`, inicialResult, enteredNumber)
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const inicialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput( `/`, inicialResult, enteredNumber)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
