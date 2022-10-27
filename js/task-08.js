const formLogin = document.querySelector(".login-form");

formLogin.addEventListener("submit", loginSubmit);

function loginSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены!!!");
  }
  console.log({ Login: email.value, Password: password.value });
  event.currentTarget.reset();
}
