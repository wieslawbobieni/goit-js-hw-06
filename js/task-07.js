const fontSizeControl = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

fontSizeControl.addEventListener("input", (event) => {
  const fontSize = event.target.value + "px";
  spanText.style.fontSize = fontSize;
});
