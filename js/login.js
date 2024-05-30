function tryLogin() {
    // Get the email and password input fields
    const usernameInput = document.querySelector('input[name="username"]');
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const repeatPasswordInput = document.querySelector('input[name="repeated-password"]');
    const email = emailInput.value;
    const username = usernameInput.value;
    const password = passwordInput.value;
    const repeatedPassword = repeatPasswordInput.value;
    //const loginForm = document.querySelector('#form'); // assuming your form has an id of 'loginForm'

    const cb_register = document.querySelector('input[name="show-register-new-user-checkbox"]').value;
    if (!email || !password) {

        if (!username)
            usernameInput.classList.add('empty-field');

        if (!email)
            emailInput.classList.add('empty-field');

        if (!password)
            passwordInput.classList.add('empty-field');

        if (!repeatedPassword)
            repeatPasswordInput.classList.add('empty-field');

        // Remove the shake class after the animation completes
        setTimeout(() => {
            usernameInput.classList.remove('empty-field');
            emailInput.classList.remove('empty-field');
            passwordInput.classList.remove('empty-field');
            repeatPasswordInput.classList.remove('empty-field');
        }, 2000);

        return;
    }

    const data = {
        email: email,
        password: password,
    };

    // Endpoint URL
    var url = '';

    // Fetch options
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };

    if (cb_register)
        url = "https://localhost:7261/api/users/register";
    else
        url = "https://localhost:7261/api/login";

    // Make the HTTP Api request
    fetch(url, fetchOptions)
        .then((response) => {
            if (!response.ok) {
                // If response is not ok, throw an error
                throw new Error(
                    "Network response was not ok " + response.statusText
                );
            }
            return response.json(); // Parse JSON response
        })
        .then((data) => {
            console.log("Success:", data); // Success data
        })
        .catch((error) => {
            console.error("Error:", error); // Log any error
        });
}