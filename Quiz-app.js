const questions = [
  {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Berlin"],
      answer: "Paris"
  },
  {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars"
  },
  {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      answer: "Pacific Ocean"
  },
  {
    question: "Who wrote the play \"Romeo and Juliet\"?",
    options: ["Charles Dickens", "J.K. Rowling", "William Shakespeare", "George Orwell"],
    answer: "William Shakespeare"
  },
  {
  question: "What is the largest planet in our solar system?",
  options: ["Earth", "Jupiter", "Mars", "Venus"],
  answer: "Juipiter"
  },
  {
  question: "Which element has the chemical symbol 'O'?",
  options: ["Gold", "Oxygen", "Hydrogen", "Carbon"],
  answer: "Oxygen"
  },
  {
  question: "inWho is known as the \"Father of Computers\"?",
  options: ["Albert Einste", "Charles Babbage", "Isaac Newton", "Steve Jobs"],
  answer: "Charles Babbage"
  },
  {
  question: "In which year did World War II end?",
  options: ["1941", "1945", "1939", "1950"],
  answer: "1945"
  },
  {
  question: "What is the hardest natural substance on Earth?",
  options: ["Diamond", "Gold", "Iron", "Quartz"],
  answer: "Diamond"
  },
  {
  question: "What is the fastest land animal?",
  options: ["Elephant", "Lion", "Cheetah", "Tiger"],
  answer: "Cheetah"
  },
  {
  question: "Which language is the most spoken worldwide?",
  options: ["Spanish", "Hindi", "Mandarin Chinese", "English"],
  answer: "Mandarin Chinese"
  },
];

let currentQuestionIndex = 0;
let score = 0;
let questionNumber = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');
const questionNumElement = document.getElementById('question-number');

// Shuffle the questions only once
let shuffledQuestions = [];

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = '';
  questionNumberTracking();
 
  
  
  currentQuestion.options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.addEventListener('click', () => checkAnswer(option));
      optionsElement.appendChild(button);
  });
}

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]; // swap elements
    }
    return arr;
  }


  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]; // swap elements
    }
    return arr;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex <  shuffledQuestions.length) {
      loadQuestion();
  } else {
      showResult();
  }
}

function questionNumberTracking() {
  questionNumElement.textContent = `Question ${currentQuestionIndex + 1} of ${shuffledQuestions.length}`;  
}

function showResult() {
  questionElement.classList.add('hidden');
  optionsElement.classList.add('hidden');
  nextButton.classList.add('hidden');
  resultContainer.classList.remove('hidden');
  scoreElement.textContent = score;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  shuffledQuestions = shuffleArray([...questions]); // Shuffle questions once at the start
  questionElement.classList.remove('hidden');
  optionsElement.classList.remove('hidden');
  nextButton.classList.remove('hidden');
  resultContainer.classList.add('hidden');
  loadQuestion();
}

nextButton.addEventListener('click', loadQuestion);
restartButton.addEventListener('click', restartQuiz);

loadQuestion();




























