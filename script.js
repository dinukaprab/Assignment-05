window.addEventListener("load", () => {
  const overlay = document.getElementById("overlay");
  const loader = document.getElementById("loader");
  const loginSection = document.getElementById("loginSection");

  if (loader) {
    loader.style.display = "block";
    overlay.style.display = "block";

    loginSection.style.display = "none";

    setTimeout(() => {
      loader.style.display = "none";
      overlay.style.display = "none";
      loginSection.style.display = "block";
    }, 500);
  }
});

if (window.location.href.endsWith("/index.html")) {
  var newUrl = window.location.href.replace("/index.html", "");
  history.replaceState({}, document.title, newUrl);
} else if (window.location.href.endsWith("/")) {
  var newUrl = window.location.href.slice(0, -1);
  history.replaceState({}, document.title, newUrl);
}

document.querySelectorAll(".sub-btn").forEach((button) => {
  button.addEventListener("mouseenter", function (e) {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    button.style.setProperty("--x", `${x}px`);
    button.style.setProperty("--y", `${y}px`);
  });
});

function submitForm(button) {
  const submitText = button.querySelector(".sub-text");
  const loader = button.querySelector(".sub-loader");

  submitText.style.opacity = 0;
  loader.style.display = "block";

  setTimeout(() => {
    submitText.style.opacity = 1;
    loader.style.display = "none";

    submit();
  }, 2000);
}

function submit() {
  const cardContainer = document.getElementById("cardContainer");
  const successfully = document.getElementById("successfully");

  cardContainer.style.opacity = "0";

  setTimeout(() => {
    cardContainer.style.display = "none";
    successfully.style.display = "block";

    setTimeout(() => {
      window.location.href = "./quiz/index.html";
    }, 2000);
  }, 1000);
}
