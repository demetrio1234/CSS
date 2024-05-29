function tryLogin() {
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    if (!email || !password) {
        alert("Please fill in all fields");
        return;
    }

    const data = {
        email: email,
        password: password,
    };

    // Endpoint URL
    const url = "https://localhost:7261/api/login";

    // Fetch options
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };

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