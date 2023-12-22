function validateLogin() {
  var email = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;

  // Perform your validation here
  if (email === "") {
      alert("Please enter your email.");
  } else if (password === "") {
      alert("Please enter your password.");
  } else {
      // You can perform further validation or submit the form
      // For demonstration purposes, redirect to main.html on successful login
      window.location.href = "index.html";
  }
}

function validateSignup() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var signupEmail = document.getElementById("signupEmail").value;
  var signupPassword = document.getElementById("signupPassword").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  // Perform your validation here
  if (firstName === "" || lastName === "") {
      alert("Please enter your full name.");
  } else if (signupEmail === "") {
      alert("Please enter your email.");
  } else if (signupPassword === "" || confirmPassword === "") {
      alert("Please enter and confirm your password.");
  } else if (signupPassword !== confirmPassword) {
      alert("Passwords do not match.");
  } else if (signupPassword.length < 8) {
      alert("Password should be at least 8 characters long.");
  } else {
      // You can perform further validation or submit the form
      alert("Signup successful!");
  }
}
