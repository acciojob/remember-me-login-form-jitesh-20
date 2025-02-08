document.addEventListener("DOMContentLoaded", function () {
    const usernameField = document.getElementById("username");
    const passwordField = document.getElementById("password");
    const rememberCheckbox = document.getElementById("checkbox");
    const submitButton = document.getElementById("submit");
    const existingButton = document.getElementById("existing");
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
            
    if (storedUsername && storedPassword) {
        existingButton.style.display = "block";
        existingButton.addEventListener("click", function () {
            alert(`Logged in as ${storedUsername}`);
        });
    }
            
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const username = usernameField.value;
        const password = passwordField.value;
        alert(`Logged in as ${username}`);
                
        if (rememberCheckbox.checked) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }
    });
});