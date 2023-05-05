(function () {
  const numberButtonsAll = document.querySelectorAll(".number");
  const operatorButtonsAll = document.querySelectorAll(".operator");
  const clearButton = document.querySelector(".clear");
  const equalButton = document.querySelector(".equal-sign");

  function pushNumber() {
    numberButtonsAll.forEach((button) =>
      button.addEventListener("click", () => alert(button.value))
    );
  }

  function pushOperator() {
    operatorButtonsAll.forEach((button) =>
      button.addEventListener("click", () => alert(button.value))
    );
    clearButton.addEventListener("click", () => alert(clearButton.value));
  }

  function calculate() {
    equalButton.addEventListener("click", () => alert(equalButton.value));
  }

  pushNumber();
  pushOperator();
  calculate();
})();
