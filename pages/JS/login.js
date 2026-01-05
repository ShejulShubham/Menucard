        const storageKey = "shubham-users";
        const form = document.getElementById("login-form");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");

        form.addEventListener("submit", formSubmit);

        function formSubmit(event){
            event.preventDefault();
            const trimmedEmail = emailInput.value.trim();
            const trimmedPassword = passwordInput.value.trim();

            if(!trimmedEmail || !trimmedPassword){
                alert("Email and Password required!");
                return;
            }

            const isUserExist = getUserDetails(trimmedEmail, trimmedEmail);

            if(isUserExist){

            }else {
                
            }
        }

        function getUserDetails(email, password){

        }