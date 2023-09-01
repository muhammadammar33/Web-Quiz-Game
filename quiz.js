let currentQuestion = -1;
let score = 0;
let timer;

// Shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz() {
    shuffle(questions)
    document.getElementById("question-container").style.display = "block";
    document.getElementById("start-button").style.display = "none";
    document.getElementById("next-button").style.display = "block";
    document.getElementById("timer-container").style.display = "block";
    nextQuestion();
    startTimer(100);
}

function nextQuestion() {
    if (currentQuestion < 9) {
        currentQuestion++;
        updateQuestionNumber();
        displayQuestion();
    } else {
        endQuiz();
    }
}

function updateQuestionNumber() {
    const questionNumberElement = document.getElementById("current-question");
    questionNumberElement.textContent = currentQuestion + 1;
}

function displayQuestion() {
    const questionText = document.getElementById("question-text");
    const options = document.querySelectorAll(".option");

    questionText.textContent = questions[currentQuestion].question;

    options.forEach((option, index) => {
        option.textContent = questions[currentQuestion].options[index];
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (selectedOption === correctAnswer) {
        score++;
        document.getElementById("feedback-text").textContent = "Correct!";
    } else {
        document.getElementById("feedback-text").textContent = "Incorrect!";
    }

    document.querySelectorAll(".option").forEach((option) => {
        option.disabled = true;
    });

    setTimeout(() => {
        document.getElementById("feedback-text").textContent = "";
        document.querySelectorAll(".option").forEach((option) => {
            option.disabled = false;
        });
        nextQuestion();
    }, 1000);
}

function startTimer(seconds) {
    let timeLeft = seconds;
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        } else {
            document.getElementById("timer").textContent = timeLeft;
            timeLeft--;
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timer);
    document.getElementById("question-container").style.display = "none";
    document.getElementById("options-container").style.display = "none";
    document.getElementById("next-button").style.display = "none";
    document.getElementById("final-score-container").style.display = "block";
    document.getElementById("final-score").textContent = score;
    document.getElementById("retake-button").style.display = "block";
}

function retakeQuiz() {
    // Reset quiz variables and UI
    shuffle(questions)
    currentQuestion = -1;
    score = 0;
    clearInterval(timer);
    document.getElementById("timer").textContent = "100";
    document.getElementById("start-button").style.display = "none";
    document.getElementById("retake-button").style.display = "none";
    document.getElementById("final-score-container").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    document.getElementById("options-container").style.display = "block";
    document.getElementById("next-button").style.display = "block";
    document.getElementById("progress-container").style.display = "block";
    document.querySelectorAll(".option").forEach((option) => {
        option.disabled = false;
    });
    nextQuestion();
    startTimer(100);
}

// Initialize the quiz
// displayQuestion();