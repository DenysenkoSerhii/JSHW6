const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsEl = [];
const listEl = document.querySelector("#ingredients");
ingredients.forEach((ingredient) => {
  const itemEL = document.createElement("li");
  itemEL.classList.add("item");
  itemEL.textContent = ingredient;
  ingredientsEl.push(itemEL);
});
listEl.append(...ingredientsEl);
