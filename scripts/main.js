const image = document.getElementById("mainimage");

image.addEventListener("click", function() {
  if (image.src.endsWith("image/logo.png")) {
    image.src = "image/cat.png";
  } else {
    image.src = "image/logo.png";
  }
});

const header = document.getElementById("header");
const clickMeButton = document.getElementById("clickMeButton");

clickMeButton.addEventListener("click", function() {
    const name = prompt("Enter your name: ");
    if (name !== null) {
        header.textContent = "Welcome, " + name;
    }
});