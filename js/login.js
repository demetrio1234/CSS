function tryLogin() {
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const cb_register = document.querySelector('input[name="show-register-new-user-checkbox"]').checked;
    if (!email || !password) {
        alert("Please fill in all fields");
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