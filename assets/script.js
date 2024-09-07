let password = document.querySelector(".auth-form__password-input");
let showPassword = document.querySelector(".auth-form__show-password");

showPassword.onclick = function() {
  showPassword.classList.toggle('close');
  if(password.getAttribute("type") == "password") {
    password.setAttribute("type", "text");
  }
  else if(password.getAttribute("type") == "text") {
    password.setAttribute("type", "password");
  }
}