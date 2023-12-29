function login() {
    // Get values from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform your login logic here
    // For simplicity, let's just show an alert
    alert("Login successful!\nUsername: " + username);
}

document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();

        if (result.success) {
            alert(result.message);
            // Redirect or perform further actions after successful login
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
});
