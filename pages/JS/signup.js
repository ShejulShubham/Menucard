const storageKey = "Arpita-users";
const userLoggedKey = "loggedInUser";
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let roleInput = document.getElementById("role");
let form = document.getElementById("newForm");
let userArr = JSON.parse(localStorage.getItem(storageKey)) || [];
const anchor = document.createElement("a");
document.body.appendChild(anchor);

function reset() {
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
}

function checkUserExist(email) {

  for(let i = 0; i < userArr.length; i++){
    const user = userArr[i];

    if(user.email == email){
        return true;
    }
  }

  return false;
}

function redirectUser(role) {
  if (role == "admin") {
    anchor.href = "./admin.html";
    anchor.click();
  } else {
    anchor.href = "./user.html";
    anchor.click();
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const role = roleInput.value.toLowerCase();

  if (!name || !email || !password) {
    alert("All fields are required!");
    return;
  }

  // TODO: Not working
  if (checkUserExist(email)) {
    alert("User already exist!, try with different email");
    return;
  }

  let id = 1;

  if (userArr) {
    id = userArr.length + 1;
  }

  const newUser = {
    id,
    name,
    email,
    password,
    role,
  };

  userArr.push(newUser);

  localStorage.setItem(storageKey, JSON.stringify(userArr));

  reset();
  redirectUser(newUser.role);
});
