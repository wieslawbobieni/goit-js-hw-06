let counterValue = 0;
const buttonDec = document.querySelector('[data-action="decrement"]');
const buttonInc = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector("#value");

const clickButtonDec = () => {
  counterValue -= 1;
  spanValue.textContent = counterValue;
};
const clickButtonInc = () => {
  counterValue += 1;
  spanValue.textContent = counterValue;
};

buttonDec.addEventListener("click", clickButtonDec);
buttonInc.addEventListener("click", clickButtonInc);
