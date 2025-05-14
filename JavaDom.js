document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message");

    if (name === "" || email === "") {
      message.textContent = "Please fill in all fields.";
      message.className = "error";
    } else {
      message.textContent = `Welcome, ${name}! Your email is ${email}.`;
      message.className = "success";
    }
  });

document
  .getElementById("changeColorBtn")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = getRandomColor();
  });

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
