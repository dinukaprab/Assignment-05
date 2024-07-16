document.addEventListener("DOMContentLoaded", (event) => {
  const displayName = document.getElementById("displayName");

  const name = localStorage.getItem("submittedName");

  if (name) {
    displayName.textContent = name;
  } else {
    displayName.textContent = "Guest";
  }
});

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

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyper Text Preprocessor",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language",
    ],
    correctAnswer: 0,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet",
    ],
    correctAnswer: 3,
  },
  {
    question: "What does JS stand for?",
    options: ["JavaSource", "JavaScript", "JavaSuper", "JustScript"],
    correctAnswer: 1,
  },
  {
    question: "What does PHP stand for?",
    options: [
      "Hypertext Preprocessor",
      "Pre Hypertext Processor",
      "Preprocessor Hypertext",
      "Processor Hypertext Pre",
    ],
    correctAnswer: 0,
  },
  {
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Stylish Question Language",
    ],
    correctAnswer: 0,
  },
];

function Next() {
  const nextButton = document.querySelector(".next-btn");
  const nextText = document.querySelector(".next-text");
  const nextLoader = document.querySelector(".next-loader");

  nextText.style.opacity = 0;
  nextLoader.style.display = "block";

  setTimeout(() => {
    nextText.style.opacity = 1;
    nextLoader.style.display = "none";
    nextButton.addEventListener("click", showNextQuestion());
  }, 1000);
}

const TIMER_DURATION = 5;
let currentQuestionIndex = 0;
let timer;

function startCountdown() {
  let timeLeft = TIMER_DURATION;
  const timerElement = document.getElementById("timer");

  timer = setInterval(() => {
    timerElement.textContent = `00:${timeLeft < 10 ? "0" : ""}${timeLeft}`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);
      showNextQuestion();
    }
  }, 1000);
}

function showNextQuestion() {
  const nextText = document.querySelector(".next-text");
  const nextLoader = document.querySelector(".next-loader");
  const overlay = document.getElementById("overlay");
  const loader = document.getElementById("loader");

  nextText.style.opacity = 0;
  nextLoader.style.display = "block";

  setTimeout(() => {
    nextText.style.opacity = 1;
    nextLoader.style.display = "none";

    currentQuestionIndex++;
    
    if (currentQuestionIndex < 5 ) {
      loadQuestion();
      startCountdown();
      clearInterval(timer);
  
    } else {
      overlay.style.display = "block";
      loader.style.display = "block";

      setTimeout(() => {
        overlay.style.display = "none";
        loader.style.display = "none";
        document.getElementById("quizSection").style.display = "none";
        document.querySelector(".countdown").style.display = "none";
        document.querySelector(".performance").style.display = "block";
      }, 1500);
    }
  }, 1000);
}

function loadQuestion() {
  const question = questions[currentQuestionIndex];
  const questionElement = document.querySelector(".question");
  const optionsElements = document.querySelectorAll(".option label");

  document.querySelector(".question-count h2").textContent = `Question ${
    currentQuestionIndex + 1
  }/5`;

  questionElement.textContent = `${currentQuestionIndex + 1}. ${
    question.question
  }`;

  optionsElements.forEach((label, index) => {
    label.textContent = question.options[index];
  });

  document
  .querySelectorAll(".option input")
  .forEach((input) => (input.checked = false));
  // document.querySelector(".option.selected").classList.remove("selected");
  
  clearInterval(timer);
  startCountdown();
}

loadQuestion();
