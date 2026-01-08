const signupbtn = document.getElementById("signupbtn");
signupbtn.addEventListener("click", signup);

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function signup() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!name || !email || !password || !confirmPassword) {
    alert("All fields are required");
    return;
  }

  if (!isValidEmail(email)) {
    alert("Enter a valid email");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.some(u => u.email === email)) {
    alert("Email already registered");
    return;
  }

  const newUser = { name, email, password };
  users.push(newUser);

  // ✅ store users + auto-login
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("loggedInUser", JSON.stringify(newUser));

  // ✅ redirect to dashboard
  window.location.href = "../dashboardpage/dashboard.html";
}


