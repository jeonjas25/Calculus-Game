const sampleQuestions = {
    limits: [
        { question: "What is the limit of (x^2 - 1)/(x - 1) as x approaches 1?", options: ["1", "2", "3", "4"], answer: "2" },
        { question: "Evaluate lim (x->0) (sin(x)/x).", options: ["0", "1", "Infinity", "Undefined"], answer: "1" },
        { question: "Find the limit of (3x^2 - x + 4)/(2x^2 + x - 1) as x approaches infinity.", options: ["3/2", "1/2", "2", "Infinity"], answer: "3/2" }
    ],
    derivatives: [
        { question: "What is the derivative of x^2?", options: ["x", "2x", "x^2", "2"], answer: "2x" },
        { question: "Find the derivative of sin(x).", options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"], answer: "cos(x)" },
        { question: "What is the derivative of e^x?", options: ["e", "x", "xe^(x-1)", "e^x"], answer: "e^x" }
    ],
    integrals: [
        { question: "What is the integral of 1/x dx?", options: ["ln|x| + C", "x^2/2 + C", "e^x + C", "1/x + C"], answer: "ln|x| + C" },
        { question: "Evaluate ∫ x dx.", options: ["x^2 + C", "x^2/2 + C", "x + C", "1/x + C"], answer: "x^2/2 + C" },
        { question: "What is the integral of cos(x) dx?", options: ["sin(x) + C", "-sin(x) + C", "cos(x) + C", "-cos(x) + C"], answer: "sin(x) + C" }
    ]
};

function loadQuiz() {
    const topic = document.getElementById('topic').value;
    const questionsContainer = document.getElementById('questions');
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result-container');

    // Clear any existing questions
    questionsContainer.innerHTML = '';
    resultContainer.style.display = 'none';

    // Get the questions for the selected topic
    const questions = sampleQuestions[topic] || [];

    // Generate questions HTML
    questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            ${q.options.map(option => `
                <label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label>
            `).join('')}
        `;
        questionsContainer.appendChild(questionElement);
    });

    // Show the quiz container
    quizContainer.style.display = 'block';
}

function submitQuiz() {
    const questions = document.querySelectorAll('.question');
    const topic = document.getElementById('topic').value;
    let score = 0;

    questions.forEach((q, index) => {
        const selectedOption = q.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === sampleQuestions[topic][index].answer) {
            score++;
        }
    });

    const resultContainer = document.getElementById('result-container');
    const result = document.getElementById('result');
    result.innerText = `You scored ${score} out of ${questions.length}`;

    // Hide the quiz container and show the result container
    document.getElementById('quiz-container').style.display = 'none';
    resultContainer.style.display = 'block';
}

function restartQuiz() {
    document.getElementById('quiz-selection').style.display = 'block';
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    window.loadQuiz = loadQuiz;
    window.submitQuiz = submitQuiz;
    window.restartQuiz = restartQuiz;
});
