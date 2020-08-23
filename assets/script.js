const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
var shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
function startGame() {
    console.log('Started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
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
    })
}

function selectAnswer() {

}

const questions = [
    {
        question: 'Which of the following is not a JavaScipt Data type?',
        answers: [
            { text: 'Number', correct: false },
            { text: 'String', correct: false },
            { text: 'Booleon', correct: false },
            { text: 'Cork', correct: true },
        ]
    }
]