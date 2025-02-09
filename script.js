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
            if (input.value == 1) {
                score++;
            }
            currentQuestion.style.display = 'none';
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                questions[currentQuestionIndex].style.display = 'block';
            } else {
                form.style.display = 'none';
                resultDiv.style.display = 'block';
                resultDiv.innerHTML = `Your test score is: ${score}`;
            }
        } else {
            input.reportValidity();
        }
    });

    questions[currentQuestionIndex].style.display = 'block';
});
