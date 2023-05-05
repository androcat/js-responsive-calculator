(function () {
  const numberButtonsAll = document.querySelectorAll(".number");
  const operatorButtonsAll = document.querySelectorAll(".operator");
  console.log(operatorButtonsAll);

  function pushNumber() {
    numberButtonsAll.forEach((button) =>
      button.addEventListener("click", function () {
        alert(button.value);
      })
    );
  }

  function pushOperator() {
    operatorButtonsAll.forEach((button) =>
      button.addEventListener("click", function () {
        alert(button.value);
      })
    );
  }

  pushNumber();
  pushOperator();
})();
