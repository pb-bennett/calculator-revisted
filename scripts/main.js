const btnElements = document.querySelectorAll(".btn");
const screenUpperElement = document.querySelector(".screen-upper");
const screenLowerElement = document.querySelector(".screen-lower");

const data = {};

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
  console.log(input);
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
      data.lowerString = data.lowerString.slice(0, -1);
      console.log(data);
      break;
    }
    case "±": {
    }
    case ".": {
      if (data.lowerString.includes(".")) break;
      data.lowerString = `${data.lowerString}.`;
      break;
    }
    case "=": {
    }
    default: {
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
