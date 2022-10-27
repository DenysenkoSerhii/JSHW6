let counterValue = 0;
const remuveListenerBtn = document.querySelector('[data-action="decrement"]');
const addListenerBtn = document.querySelector('[data-action="increment"]');
const total = document.querySelector("#value");

remuveListenerBtn.addEventListener("click", () => {
  counterValue -= 1;
  total.textContent = counterValue;
});

addListenerBtn.addEventListener("click", () => {
  counterValue += 1;
  total.textContent = counterValue;
});
