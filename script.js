document.getElementById('q1').addEventListener('change', function() {
    const gymScreams = document.getElementById('gymScreams');
    if (this.value == 1) {
        gymScreams.style.display = 'block';
    } else {
        gymScreams.style.display = 'none';
    }
});

document.getElementById('q2').addEventListener('change', function() {
    const readingMinutes = document.getElementById('readingMinutes');
    if (this.value == 1) {
        readingMinutes.style.display = 'block';
    } else {
        readingMinutes.style.display = 'none';
    }
});

document.getElementById('testForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let totalScore = 0;

    // Question 1
    const q1 = parseInt(document.getElementById('q1').value);
    if (q1 === 1) {
        totalScore += 100;
        const q1a = parseInt(document.getElementById('q1a').value) || 0;
        totalScore += q1a * 5;
    }

    // Question 2
    const q2 = parseInt(document.getElementById('q2').value);
    if (q2 === 1) {
        const q2a = parseInt(document.getElementById('q2a').value) || 0;
        totalScore += q2a * 2;
    }

    // Question 3
    const q3 = parseInt(document.getElementById('q3').value);
    if (q3 === 1) {
        totalScore -= 100;
    }

    // Question 4
    const q4 = parseInt(document.getElementById('q4').value);
    if (q4 === 1) {
        totalScore += 100;
    } else {
        totalScore -= 100;
    }

    // Question 5
    const q5 = parseInt(document.getElementById('q5').value);
    if (q5 === 1) {
        totalScore += 100;
    } else {
        totalScore -= 100;
    }

    // Question 6
    const q6 = parseInt(document.getElementById('q6').value);
    if (q6 === 1) {
        totalScore -= 100;
    }

    // Determine the result based on the total score
    let resultMessage;
    if (totalScore < 0) {
        resultMessage = 'You have the test of a woman.';
    } else if (totalScore >= 0 && totalScore <= 200) {
        resultMessage = 'You have the test of my little brother.';
    } else {
        resultMessage = 'You have the test of Hercules.';
    }

    document.getElementById('result').innerText = resultMessage;
});
