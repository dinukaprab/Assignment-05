let namesArray = [];

function submitForm(button) {
  const submitText = button.querySelector(".sub-text");
  const loader = button.querySelector(".sub-loader");
  const nameInput = document.getElementById("nameInput");
  const nameDisplay = document.getElementById("nameDisplay");

  const name = nameInput.value.trim();

  if (/^[a-zA-Z]+$/.test(name)) {
    namesArray.push(name);

    nameDisplay.textContent = namesArray.join(", ");

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
    alert("Only letters are allowed.");
  }
}

function submit() {
  const cardContainer = document.getElementById("cardContainer");
  const successfully = document.getElementById("successfully");

  cardContainer.style.opacity = "0";

  setTimeout(() => {
    cardContainer.style.display = "none";
    successfully.style.display = "block";

    setTimeout(() => {
      window.location.href = "../quiz/index.html";
    }, 2000);
  }, 1000);
}
