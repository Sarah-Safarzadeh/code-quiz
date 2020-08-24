const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

var timerEl = document.getElementById('countdown');
var scores = [];

var shuffledQuestions, currentQuestionIndex;

// event listeners
startButton.addEventListener("click", startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})
// Start Game Function
function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
// Reset
function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart!'
        startButton.classList.remove('hide');
    }
}
// Wrong or Right Styles
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

// Questions
const questions = [
    {
        question: 'Which of the following is not a JavaScipt Data type?',
        answers: [
            { text: 'Number', correct: false },
            { text: 'String', correct: false },
            { text: 'Booleon', correct: false },
            { text: 'Cork', correct: true },
        ]
    },
    {
        question: 'What are variables used for in JavaScript Programs?',
        answers: [
            { text: 'Add styling to HTML', correct: false },
            { text: 'Nothing', correct: false },
            { text: 'Storing numbers, dates, or other values', correct: true },
            { text: 'None of the above', correct: false },
        ]
    },
    {
        question: "What is the correct JavaScript syntax to write 'Hello World'?",
        answers: [
            { text: 'response.write("Hello World")', correct: false },
            { text: 'println("Hello World")', correct: false },
            { text: 'document.write("Hello World")', correct: true },
            { text: 'cursive.input("Hello World")', correct: false },
        ]
    },
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            { text: '<js>', correct: false },
            { text: '<script>', correct: true },
            { text: '<javascript>', correct: false },
            { text: '<linkjs>', correct: false },
        ]
    },
    {
        question: 'Which of the following is not considered a JavaScript operator?',
        answers: [
            { text: 'this', correct: true },
            { text: 'delete', correct: false },
            { text: 'new', correct: false },
            { text: 'typeof', correct: false },
        ]
    }
];

// Timer
function countdown() {

    var timeLeft = 45;
    timerEl.textContent = timeLeft;
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  
    var timeInterval = setInterval(function() {
      
      if(timeLeft > 0) {
        timeLeft--;
        timerEl.textContent = timeLeft;
      }
      else
      {
        timeLeft = 0;
        timerEl.textContent = "";
        clearInterval(timeInterval);
        displayMessage();
      }
    }, 1000);
  }
  startButton.onclick = countdown;

// Save and Display Scores
// var saveScore = function () {
//     localStorage.setItem("scores", JSON.stringify(scores));
//   }
  
//   var showScore = function () {
//     var savedScores = localStorage.getItem("scores");
  
//     if (!savedScores) {
//       return false;
//     }
  
//     savedScores = JSON.parse(savedScores);
//   }