document.addEventListener("DOMContentLoaded", function () {
  const options = document.querySelectorAll(".option");
  options.forEach((option) => {
    option.addEventListener("click", function () {
      options.forEach((opt) => opt.classList.remove("selected"));
      option.classList.add("selected");
      option.querySelector("input").checked = true;
    });
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const displayName = document.getElementById("displayName");

  const name = localStorage.getItem("submittedName");

  if (name) {
    displayName.textContent = name;
  } else {
    displayName.textContent = "Guest";
  }
});
