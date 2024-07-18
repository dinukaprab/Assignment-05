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
    }, 1500);
  }
});

function validateInput() {
  const nameInput = document.getElementById("nameInput");
  const errorMessage = document.getElementById("errorMessage");

  if (/^[a-zA-Z\s]*$/.test(nameInput.value)) {
    errorMessage.style.display = "none";
  } else {
    errorMessage.style.display = "block";
  }
}

function submitForm(button) {
  const submitText = button.querySelector(".sub-text");
  const loader = button.querySelector(".sub-loader");
  const nameInput = document.getElementById("nameInput");
  const nameDisplay = document.getElementById("nameDisplay");
  const errorMessage = document.getElementById("errorMessage");

  const name = nameInput.value.trim();

  submitText.style.opacity = 0;
  loader.style.display = "block";

  setTimeout(() => {
    if (!name) {
      errorMessage.textContent = "This input field is required";
      errorMessage.style.display = "block";
      submitText.style.opacity = 1;
      loader.style.display = "none";
      return;
    }

    if (/^[a-zA-Z\s]+$/.test(name)) {
      errorMessage.style.display = "none";
      nameDisplay.textContent = name;
      nameInput.value = "";
      localStorage.setItem("submittedName", name);
      submitText.style.opacity = 0;
      loader.style.display = "block";

      setTimeout(() => {
        submitText.style.opacity = 1;
        loader.style.display = "none";
        submit();
      }, 2000);
    } else {
      errorMessage.textContent = "Only letters are allowed";
      errorMessage.style.display = "block";
      submitText.style.opacity = 1;
      loader.style.display = "none";
    }
  }, 1000);
}

function submit() {
  const cardContainer = document.getElementById("cardContainer");
  const successfully = document.getElementById("successfully");

  cardContainer.style.opacity = "0";

  setTimeout(() => {
    cardContainer.style.display = "none";
    successfully.style.display = "block";

    setTimeout(() => {
      window.location.href = "../../quiz/index.html";
    }, 2000);
  }, 1000);
}
