const itemEL = document.querySelectorAll(".item");
console.log(`Number of categories: `, itemEL.length);
console.log(``);
itemEL.forEach((item) => {
  console.log(`Category: `, item.firstElementChild.textContent);
  const listEL = item.lastElementChild;
  console.log(`Elements: `, listEL.children.length);
  console.log(``);
});
