document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('testForm');
    const questions = document.querySelectorAll('.question');
    const resultDiv = document.getElementById('result');
    const nextButton = document.getElementById('nextButton');
    let currentQuestionIndex = 0;
    let score = 0;

    nextButton.addEventListener('click', () => {
        const currentQuestion = questions[currentQuestionIndex];
        const input = currentQuestion.querySelector('input');
        if (input.checkValidity()) {
            const value = parseInt(input.value);
            if (currentQuestionIndex === 0 || currentQuestionIndex === 1 || currentQuestionIndex === 3 || currentQuestionIndex === 4) {
                score += value === 1 ? 1 : -1;
            } else if (currentQuestionIndex === 2 || currentQuestionIndex === 5) {
                score += value === 0 ? 1 : -1;
            }
            currentQuestion.style.display = 'none';
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                questions[currentQuestionIndex].style.display = 'block';
            } else {
                form.style.display = 'none';
                resultDiv.style.display = 'block';
                let resultMessage;
                if (score <= -2) {
                    resultMessage = "You have the test of a girl.";
                } else if (score <= 2) {
                    resultMessage = "You have the test of my little brother.";
                } else {
                    resultMessage = "You have the test of Hercules.";
                }
                resultDiv.innerHTML = resultMessage;
            }
        } else {
            input.reportValidity();
        }
    });

    questions[currentQuestionIndex].style.display = 'block';
});
