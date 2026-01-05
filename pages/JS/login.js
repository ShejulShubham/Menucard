const storageKey = "Arpita-users";
const userLoggedKey = "loggedInUser";
const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
let userArr = JSON.parse(localStorage.getItem(storageKey)) || [];
const anchor = document.createElement("a");
document.body.appendChild(anchor);

function reset() {
  emailInput.value = "";
  passwordInput.value = "";
}

function getUserDetails(email, password) {
  for(let i = 0; i < userArr.length; i++){
    const user = userArr[i];

    if(user.email == email && user.password == password){
        return user;
    }
  }

  return null;
}

function redirectUser(role) {
  if (role == "admin") {
    anchor.href = "./admin.html";
    anchor.click();
  } else {
    anchor.href = "./Menucard.html";
    anchor.click();
  }
}

function doesUserExist(email){
  for(let i = 0; i < userArr.length; i++){
    const user = userArr[i];

    if(user.email == email){
        return user;
    }
  }

    return false;
}

form.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const trimmedEmail = emailInput.value.trim();
  const trimmedPassword = passwordInput.value.trim();

  if (!trimmedEmail || !trimmedPassword) {
    alert("Email and Password required!");
    return;
  }

  if(!doesUserExist(trimmedEmail)){
    alert("user does not exist!");
    return;
  }

  const user = getUserDetails(trimmedEmail, trimmedPassword);

  console.table(user);

  if (!user) {
    alert("user credentials are wrong!");
    return;
  } else {
    localStorage.setItem(userLoggedKey, JSON.stringify(user));
    reset();
    redirectUser(user.role);
  }
}
