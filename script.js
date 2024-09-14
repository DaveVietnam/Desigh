const radioBtn = document.querySelectorAll(".form__radio-input");
const btnAgree = document.querySelectorAll(".form__btn");

let radioState = false;

radioBtn.forEach(function (radio) {
  radio.addEventListener("click", function () {
    if (radioState === false) {
      radioBtn.checked = true;
      radioState = true;
    } else {
      radioBtn.checked = false;
      radioState = false;
    }
  });
});

btnAgree.forEach(function (button) {
  button.addEventListener("click", () =>
    radioState === true ? radioState : alert("agree with terms below")
  );
});
