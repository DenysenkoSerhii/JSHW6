const inputEl = document.querySelector("#font-size-control");
const spanEL = document.querySelector("#text");
const inputGen = document.querySelector("input");

const onChangeFontSize = (event) => {
  spanEL.style.fontSize = String(event.currentTarget.value) + "px";
};

inputEl.addEventListener("input", onChangeFontSize);

inputEl.style.padding = 0;
