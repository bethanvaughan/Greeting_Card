let button = document.querySelector("#submit");
button.addEventListener("click", (e) => {
  handleValues(e);
});

function handleValues(e) {
  e.preventDefault();
  let greeting = document.querySelector("#greeting").value;
  let event = document.querySelector("#event").value;
  let message = document.querySelector("#message").value;

  displayOnCard(greeting, event, message);
}

function displayOnCard(greeting, event, message) {
  document.querySelector("#celeb").textContent = greeting;
  document.querySelector("#card_title").textContent = `It's your ${event}!`;
  document.querySelector("#card_msg").textContent = message;

  let imagelocation = document.querySelector("#img");
  let imagePath = `./static/Images/${event}.jpeg`;
  imagelocation.setAttribute("src", imagePath);

  document.querySelector("#myform").style.display = "none";
  document.querySelector("h1").style.display = "none";
}

module.exports = { handleValues };
