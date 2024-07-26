const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const display = document.getElementById("display");

let displayX = "";
let displayY = "";
let displayOp = "";
let nextOperator = "";

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (displayOp === "") {
      displayX += e.target.textContent;
      displayFill();
    } else {
      displayY += e.target.textContent;
      displayFill();
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (displayX !== "" && displayY === "") {
      displayOp = e.target.textContent;
      displayFill();
    } else if (displayY !== "") {
      nextOperator = e.target.textContent;
      displayFill();
    }
  });
});

clear.addEventListener("click", () => clearData());

equals.addEventListener("click", () => {
  if (displayX !== "" && displayY !== "" && displayOp !== "") {
    let res = operate(Number(displayX), Number(displayY), displayOp);
    let next = nextOperator;
    clearData();
    displayX = res;
    displayOp = next;
    displayFill();
  }
});

const displayFill = () => {
  clearError()
  display.textContent = `${displayX} ${displayOp} ${displayY} ${nextOperator}`;
  adjustFontSize()
};

const clearError = () => {
  if (display.textContent.trim() === 'ERROR') {
    resetValues()
  }
}

const clearData = () => {
  resetValues()
  displayFill();
};

const resetValues = () => {
  displayX = "";
  displayY = "";
  displayOp = "";
  nextOperator = "";
}
const adjustFontSize = () => {

  const thresholds = [
    { limit: 10, fontSize: 2 },
    { limit: 15, fontSize: 1.5 },
    { limit: 20, fontSize: 1.25 },
    { limit: 25, fontSize: 1}
  ];

  const characterCount = display.textContent.trim().length;

  const { fontSize } = thresholds.find(threshold => characterCount <= threshold.limit);

  display.style.fontSize = `${fontSize}rem`;
};


const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => (y === 0 ? "ERROR" : x / y);

const operate = (x, y, op) => {
  switch (op) {
    case "+":
      return add(x, y);
    case "-":
      return subtract(x, y);
    case "*":
      return multiply(x, y);
    case "/":
      return divide(x, y);
    default:
      break;
  }
};
