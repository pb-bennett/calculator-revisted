const btnElements = document.querySelectorAll(".btn");
const screenUpperElement = document.querySelector(".screen-upper");
const screenLowerElement = document.querySelector(".screen-lower");

const data = {};

const operatorArr = ["÷", "+", "×", "-"];

const resetData = () => {
  data.upperString = "";
  data.lowerString = "0";
  data.currentOperator = "";
  data.currentFirstNumber = 0;
  data.currentSecondNumber = 0;
  data.max = 15;
};
resetData();

const updateScreen = () => {
  screenUpperElement.innerText = data.upperString;
  screenLowerElement.innerText = data.lowerString;
};

const operatorClickHandler = (input) => {
  // console.log(input);
  switch (input) {
    case "C": {
      resetData();
      break;
    }
    case "←": {
      if (data.lowerString.length <= 1) {
        data.lowerString = "0";
        break;
      }
      if (operatorArr.includes(data.lowerString[data.lowerString.length - 1]))
        data.currentOperator = "";
      data.lowerString = data.lowerString.slice(0, -1);
      console.log(data);
      break;
    }
    case "±": {
      if (data.lowerString === "0") return;
      if (data.lowerString[0] === "-") {
        data.lowerString = data.lowerString.substr(1);
        break;
      }
      data.lowerString = `-${data.lowerString}`;
      break;
    }
    case ".": {
      if (data.lowerString.includes(".")) break;
      data.lowerString = `${data.lowerString}.`;
      break;
    }
    case "=": {
      break;
    }
    default: {
      if (data.lowerString === "0") return;
      if (data.lowerString[data.lowerString.length - 1] === ".")
        data.lowerString = data.lowerString.slice(0, -1);
      if (operatorArr.includes(data.lowerString[data.lowerString.length - 1]))
        data.lowerString = `${data.lowerString.slice(0, -1)}${input}`;
      else {
        data.lowerString = `${data.lowerString}${input}`;
      }
      data.currentOperator = input;
    }
  }
  console.log(data);
  updateScreen();
};
const numberClickHandler = (input) => {
  if (data.lowerString === "0") data.lowerString = "";
  data.lowerString = `${data.lowerString}${input}`;
  updateScreen();
};

const clickHandler = (input) => {
  if (isNaN(parseInt(input))) return operatorClickHandler(input);
  numberClickHandler(input);
};

btnElements.forEach((btn) =>
  btn.addEventListener("click", (el) => clickHandler(el.target.innerText))
);

updateScreen();
