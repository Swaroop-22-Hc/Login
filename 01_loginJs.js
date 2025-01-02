function login() {
  // Get username and password values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Basic validation (you should add more robust checks)
  if (username === "" || password === "") {
    alert("Please enter both username and password.");
    return;
  }

  // Here you would typically make an AJAX request to your server
  // to verify the credentials and handle the login process.

  // For this example, we'll just display a success message
  alert("Login successful!");
}
