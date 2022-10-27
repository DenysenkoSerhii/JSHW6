function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.body;
const btnChangeColor = body.querySelector(".change-color");
const spanEL = body.querySelector(".color");

btnChangeColor.addEventListener("click", onClickBtnChangeColor);

function onClickBtnChangeColor(event) {
  const colorText = getRandomHexColor();
  document.body.style.backgroundColor = spanEL.textContent = colorText;
}
