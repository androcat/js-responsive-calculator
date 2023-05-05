(function () {
  const numberButtonsAll = document.querySelectorAll(".number");
  const operatorButtonsAll = document.querySelectorAll(".operator");
  const clearButton = document.querySelector(".clear");
  console.log(operatorButtonsAll);

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

  pushNumber();
  pushOperator();
})();
