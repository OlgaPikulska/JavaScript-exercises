const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  event.currentTarget.reset();
});

//Nie jestem pewna, czy 4-6 to na pewno jest ten obiekt, o który oni proszą.
