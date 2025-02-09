const questions = [
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4",
    "Question 5"
];

let currentQuestionIndex = 0;
let answers = [];

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById('question').innerText = questions[currentQuestionIndex];
        document.getElementById('answer').value = '';
    } else {
        showResult();
    }
}

function nextQuestion() {
    const answer = parseInt(document.getElementById('answer').value);
    if (!isNaN(answer)) {
        answers.push(answer);
        currentQuestionIndex++;
        showQuestion();
    } else {
        alert("Please enter a valid number.");
    }
}

function showResult() {
    const totalScore = answers.reduce((a, b) => a + b, 0);
    document.getElementById('total-score').innerText = totalScore;

    let customMessage = "";
    if (totalScore <= 10) {
        customMessage = "You had a low productivity day. Try to focus more tomorrow!";
    } else if (totalScore <= 20) {
        customMessage = "You had an average productivity day. Keep pushing!";
    } else {
        customMessage = "Great job! You had a highly productive day!";
    }
    document.getElementById('custom-message').innerText = customMessage;

    document.getElementById('question-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', showQuestion);