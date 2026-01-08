const loginbtn = document.getElementById("loginbtn");
loginbtn.addEventListener("click", login);

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function login() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    alert("All fields are required");
    return;
  }

  if (!isValidEmail(email)) {
    alert("Enter a valid email");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    alert("Invalid email or password");
    return;
  }

  // ✅ store logged-in user
  localStorage.setItem("loggedInUser", JSON.stringify(user));

  // ✅ redirect to dashboard
  window.location.href = "../dashboardpage/dashboard.html";
}

