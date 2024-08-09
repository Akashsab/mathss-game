let score = 0;
let currentQuestion = {};

function generateQuestion() {
    const operators = ['+', '-', '*', '/'];
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let questionText;
    let correctAnswer;

    if (operator === '/') {
        correctAnswer = (num1 * num2) / num2;
        questionText = `${num1 * num2} / ${num2}`;
    } else {
        questionText = `${num1} ${operator} ${num2}`;
        correctAnswer = eval(questionText);
    }

    currentQuestion = { questionText, correctAnswer };
    document.getElementById('question').innerText = questionText;
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById('answer').value);
    if (userAnswer === currentQuestion.correctAnswer) {
        document.getElementById('feedback').innerText = "Correct!";
        score++;
    } else {
        document.getElementById('feedback').innerText = `Wrong! The correct answer was ${currentQuestion.correctAnswer}`;
    }
    document.getElementById('score').innerText = `Score: ${score}`;
    document.getElementById('answer').value = "";
    generateQuestion();
}

window.onload = generateQuestion;
