let expression = '';

function appendNumber(num) {
  expression += num;
  updateScreen();
}

function appendOperator(op) {
  expression += op;
  updateScreen();
}

function clearScreen() {
  expression = '';
  updateScreen();
}

function calculate() {
  try {
    const result = eval(expression);
    expression = result.toString();
    updateScreen();
  } catch (error) {
    expression = 'Error';
    updateScreen();
  }
}

function updateScreen() {
  document.getElementById('screen').value = expression;
}
