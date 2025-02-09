document.getElementById('testForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let totalScore = 0;
    for (let i = 1; i <= 8; i++) {
        let answer = parseFloat(document.getElementById('q' + i).value);
        if (!isNaN(answer)) {
            totalScore += answer;
        }
    }

    let averageScore = totalScore / 8;
    document.getElementById('result').innerText = 'Your final test score is: ' + averageScore.toFixed(2);
});
