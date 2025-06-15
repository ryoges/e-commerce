document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const inputs = document.querySelectorAll("#signupForm input");
  const firstName = inputs[0].value.trim();
  const lastName = inputs[1].value.trim();
  const email = inputs[2].value.trim();
  const password = inputs[3].value;
  const confirmPassword = inputs[4].value;

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // You can connect to backend or Firebase here
  alert(`Signup successful!\nWelcome, ${firstName} ${lastName}`);
});
