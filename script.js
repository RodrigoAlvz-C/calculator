let x;
let y;
let op;

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => (y === 0 ? "ERROR" : x / y);

const operate = (x, y, op) => {
  switch (op) {
    case '+':
      return add(x, y)
    case '-':
      return subtract(x, y)
    case '*':
      return multiply(x, y)
    case '/':
      return divide(x, y)
    default:
      break;
  }
};
