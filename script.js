function loadQuiz() {
    const topic = document.getElementById('topic').value;
    const questionsContainer = document.getElementById('questions');
    const quizContainer = document.getElementById('quiz-container');

    // Clear any existing questions
    questionsContainer.innerHTML = '';

    // Sample questions (Replace with API call or dynamic content) I cant find this stuff tho lil bro
    const sampleQuestions = {
        limits: [
            { question: "What is the limit of (x^2 - 1)/(x - 1) as x approaches 1?", options: ["1", "2", "3", "4"], answer: "2" },// we need more questions lil bro
            { question: "Evaluate lim (x->0) (sin(x)/x).", options: ["0", "1", "Infinity", "Undefined"], answer: "1" }
        ],
        derivatives: [
            { question: "What is the derivative of x^2?", options: ["x", "2x", "x^2", "2"], answer: "2x" },
            { question: "Find the derivative of sin(x).", options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"], answer: "cos(x)" }
        ],
        integrals: [
            { question: "What is the integral of 1/x dx?", options: ["ln|x| + C", "x^2/2 + C", "e^x + C", "1/x + C"], answer: "ln|x| + C" },
            { question: "Evaluate ∫ x dx.", options: ["x^2 + C", "x^2/2 + C", "x + C", "1/x + C"], answer: "x^2/2 + C" }
        ]
    };

    const questions = sampleQuestions[topic] || [];

    // Generate questions HTML
    questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            ${q.options.map((option, i) => `
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
    let score = 0;

    questions.forEach((q, index) => {
        const selectedOption = q.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === sampleQuestions.limits[index].answer) { // Change 'limits' to dynamic category
            score++;
        }
    });

    alert(`You scored ${score} out of ${questions.length}`);
}
