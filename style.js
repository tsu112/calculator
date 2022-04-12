class Calculator {
  constructor(prev_displayTexElment, displayTextElement) {
    this.prev_displayTexElment = prev_displayTexElment;
    this.displayTextElement = displayTextElement;
    this.clear();
  }
  clear() {
    this.display = "";
    this.prev_display = "";
    this.operation = undefined;
  }

  delete() {
    pass;
  }

  appendNumber(number) {
    this.display = number;
  }

  chooseOperation(operation) {
    pass;
  }

  compute() {
    pass;
  }

  updateDisplay() {
    this.displayTextElement.innerText = this.display;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const prev_displayTexElment = document.querySelector("[data-prev-display]");
const displayTexElment = document.querySelector("[data-prev-display]");

const calculator = new Calculator(prev_displayTexElment, displayTexElment);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
