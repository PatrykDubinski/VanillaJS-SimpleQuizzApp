// Data

const quizData = [
  {
    question: "What's the biggest animal in the world?",
    a: "Lion",
    b: "Elephant",
    c: "Blue Whale",
    d: "Girraffe",
    correct: "c",
  },
  {
    question: "Which country is brie cheese originally from?",
    a: "Poland",
    b: "France",
    c: "Italy",
    d: "Germany",
    correct: "b",
  },
  {
    question: "What is the capital of Iceland?",
    a: "Selfoss",
    b: "Reykjavík",
    c: "Akureyri",
    d: "Keflavik",
    correct: "b",
  },
  {
    question: "Who painted the Mona Lisa?",
    a: "Donald Trump",
    b: "Van Gogh",
    c: "Michael Angelo",
    d: "Leonardo Da Vinci",
    correct: "d",
  },
  {
    question: "Which planet is closest to the sun?",
    a: "Mercury",
    b: "Earth",
    c: "Moon",
    d: "Wenus",
    correct: "a",
  },
  {
    question: "What is the largest country in the world?",
    a: "North America",
    b: "Russia",
    c: "China",
    d: "Italy",
    correct: "b",
  },
];

// DOM elements
const activeQuestion = document.getElementById("active__question");
const questionsLength = document.getElementById("quetions__length");
const questionBar = document.getElementById("bar");
const question = document.getElementById("question");
const a_answer = document.getElementById("a_answer");
const b_answer = document.getElementById("b_answer");
const c_answer = document.getElementById("c_answer");
const d_answer = document.getElementById("d_answer");
const submitBtn = document.getElementById("submitBtn");
const answers = document.querySelectorAll(".input");

// variables
let currentQuiz = 0;
let score = 0;

// Functions

function initializeQuiz() {
  unselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  activeQuestion.innerText = currentQuiz + 1;
  questionsLength.innerText = quizData.length;
  question.innerText = currentQuizData.question;
  a_answer.innerText = currentQuizData.a;
  b_answer.innerText = currentQuizData.b;
  c_answer.innerText = currentQuizData.c;
  d_answer.innerText = currentQuizData.d;
}

function getAnswer() {
  let answer = undefined;

  answers.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl;
    }
  });

  return answer;
}

function unselectAnswers() {
  answers.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

// Event listeners

submitBtn.addEventListener("click", () => {
  const answer = getAnswer();

  if (answer) {
    console.log(answer);
    if (answer.id === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      initializeQuiz();
    } else {
      question.innerText = `You finished with ${score}/${quizData.length}!`;
    }
  }
});

// initialize
initializeQuiz();
