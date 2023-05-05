(function () {
  const numberButtonsAll = document.querySelectorAll(".number");
  const operatorButtonsAll = document.querySelectorAll(".operator");
  const clearButton = document.querySelector(".clear");
  const equalButton = document.querySelector(".equal-sign");

  let calculationArr = [];

  function pushNumber() {
    numberButtonsAll.forEach((button) =>
      button.addEventListener("click", () => {
        alert(button.value);
        calculationArr.push(button.value);
      })
    );
    console.log(calculationArr);
  }

  function pushOperator() {
    operatorButtonsAll.forEach((button) =>
      button.addEventListener("click", () => {
        alert(button.value);
        calculationArr.push(button.value);
      })
    );
    clearButton.addEventListener("click", () => alert(clearButton.value));
  }

  function calculate() {
    equalButton.addEventListener("click", () => alert(equalButton.value));
  }

  pushNumber();
  pushOperator();
  calculate();
  setInterval(console.log(calculationArr), 1000);
})();
