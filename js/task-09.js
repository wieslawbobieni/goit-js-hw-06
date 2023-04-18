function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const widget = document.querySelector(".widget");
const spanColor = widget.querySelector(".color");
const buttonChangeColor = widget.querySelector(".change-color");

const clickButtonChangeColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = document.body.style.backgroundColor;
};

buttonChangeColor.addEventListener("click", clickButtonChangeColor);
