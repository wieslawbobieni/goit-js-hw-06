const validationInput = document.querySelector("#validation-input");
const acceptedInputLength = Number(validationInput.getAttribute("data-length"));
validationInput.addEventListener("blur", (event) => {
  const inputValue = event.target.value;
  if (inputValue.length === acceptedInputLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    // Jeśli nie, dodajemy klasę 'invalid' i usuwamy klasę 'valid' na polu input
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
