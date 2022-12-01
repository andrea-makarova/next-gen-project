const modal = document.querySelector(".modal");
const containers = document.querySelectorAll(".container.card");
const closeButton = document.querySelector(".close-icon");
const followButton = document.querySelector(".modal .secondary-button");
const continueButton = document.querySelector(".primary-button");
const dropdown = document.querySelector(".dropdown");
const input = document.querySelector("input");
const rows = document.querySelectorAll(".row");
const loginContainers = document.querySelectorAll(".container.login");

for (var i = 0; i < loginContainers.length; i++) {
    var loginContainer = loginContainers[i];

loginContainer.addEventListener("click", () => {
    event.target.classList.toggle("selected");
    continueButton.classList.toggle("disabled");
});
}

for (var i = 0; i < containers.length; i++) {
    var container = containers[i];

container.addEventListener("click", () => {
    modal.classList.remove("hidden");
});
}

closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
});

followButton.addEventListener("click", () => {
    if (followButton.innerHTML === "Follow the user") {
        followButton.innerHTML = "Unfollow";
      } else {
        followButton.innerHTML = "Follow the user";
      }
});

input.addEventListener("focus", () => {
    dropdown.classList.toggle("hidden");
});

for (var i = 0; i < rows.length; i++) {
    var row = rows[i];

row.addEventListener("click", () => {
    modal.classList.remove("hidden");
});
}

