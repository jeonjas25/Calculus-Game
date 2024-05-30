const sampleQuestions = {
    limits: [
        { question: "What is the limit of (x^2 - 1)/(x - 1) as x approaches 1?", options: ["1", "2", "3", "4"], answer: "2" },
        { question: "Evaluate lim (x->0) (sin(x)/x).", options: ["0", "1", "Infinity", "Undefined"], answer: "1" },
        { question: "Find the limit of (3x^2 - x + 4)/(2x^2 + x - 1) as x approaches infinity.", options: ["3/2", "1/2", "2", "Infinity"], answer: "3/2" },
        { question: "Evaluate lim (x->0) (1-cos(x))/x.", options: ["0", "1", "Infinity", "Undefined"], answer: "0" },
        { question: "Find the limit of ln(x) as x approaches infinity.", options: ["0", "1", "Infinity", "-Infinity"], answer: "Infinity" },
        { question: "Evaluate lim (x->0+) ln(x).", options: ["0", "1", "Infinity", "-Infinity"], answer: "-Infinity" },
        { question: "Find the limit of (e^x - 1)/x as x approaches 0.", options: ["0", "1", "e", "-e"], answer: "1" },
        { question: "Evaluate lim (x->0) (e^x - 1 - x)/x^2.", options: ["0", "1/2", "1", "2"], answer: "1/2" },
        { question: "Find the limit of (tan(x) - x)/x^3 as x approaches 0.", options: ["0", "1", "1/3", "1/6"], answer: "1/3" },
        { question: "Evaluate lim (x->infinity) (x - sqrt(x^2 + 1)).", options: ["0", "-1/2", "-1", "Infinity"], answer: "-1/2" }
    ],
    derivatives: [
        { question: "What is the derivative of x^2?", options: ["x", "2x", "x^2", "2"], answer: "2x" },
        { question: "Find the derivative of sin(x).", options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"], answer: "cos(x)" },
        { question: "What is the derivative of e^x?", options: ["e", "x", "xe^(x-1)", "e^x"], answer: "e^x" },
        { question: "Find the derivative of ln(x).", options: ["1/x", "x", "ln(x)", "0"], answer: "1/x" },
        { question: "What is the derivative of tan(x)?", options: ["sec(x)", "sec^2(x)", "tan^2(x)", "cot(x)"], answer: "sec^2(x)" },
        { question: "Find the derivative of arcsin(x).", options: ["1/sqrt(1-x^2)", "1/(1+x^2)", "arccos(x)", "1/(1-x^2)"], answer: "1/sqrt(1-x^2)" },
        { question: "What is the derivative of x^x?", options: ["x^x", "x^x(1 + ln(x))", "x^(x-1)", "ln(x) * x^x"], answer: "x^x(1 + ln(x))" },
        { question: "Find the derivative of ln(ln(x)).", options: ["1/(x*ln(x))", "1/(ln(x))", "ln(x)/x", "1/x"], answer: "1/(x*ln(x))" },
        { question: "What is the derivative of cos(x^2)?", options: ["-2x*sin(x^2)", "-sin(x^2)", "-2cos(x)", "-x*sin(x^2)"], answer: "-2x*sin(x^2)" },
        { question: "Find the derivative of x^3 * e^x.", options: ["3x^2 * e^x", "e^x * (x^3 + 3x^2)", "x^3 * e^(x-1)", "3x * e^(x+2)"], answer: "e^x * (x^3 + 3x^2)" }
    ],
    integrals: [
        { question: "What is the integral of 1/x dx?", options: ["ln|x| + C", "x^2/2 + C", "e^x + C", "1/x + C"], answer: "ln|x| + C" },
        { question: "Evaluate ∫ x dx.", options: ["x^2 + C", "x^2/2 + C", "x + C", "1/x + C"], answer: "x^2/2 + C" },
        { question: "What is the integral of cos(x) dx?", options: ["sin(x) + C", "-sin(x) + C", "cos(x) + C", "-cos(x) + C"], answer: "sin(x) + C" },
        { question: "Evaluate ∫ e^x dx.", options: ["e^x + C", "x^e + C", "1/x + C", "x^2/2 + C"], answer: "e^x + C" },
        { question: "What is the integral of sec^2(x) dx?", options: ["tan(x) + C", "sec(x) + C", "cot(x) + C", "csc(x) + C"], answer: "tan(x) + C" },
        { question: "Evaluate ∫ x^2 dx.", options: ["x^3/3 + C", "x^2/2 + C", "x^3 + C", "x + C"], answer: "x^3/3 + C" },
        { question: "What is the integral of 1/(1 + x^2) dx?", options: ["arctan(x) + C", "ln|x| + C", "arcsin(x) + C", "1/x + C"], answer: "arctan(x) + C" },
        { question: "Evaluate ∫ (ln(x))/x dx.", options: ["(ln(x))^2/2 + C", "ln(x) + C", "1/(x ln(x)) + C", "x ln(x) + C"], answer: "(ln(x))^2/2 + C" },
        { question: "What is the integral of 1/sqrt(1 - x^2) dx?", options: ["arcsin(x) + C", "arccos(x) + C", "arctan(x) + C", "ln|x| + C"], answer: "arcsin(x) + C" },
        { question: "Evaluate ∫ e^(2x) dx.", options: ["e^(2x)/2 + C", "2e^(2x) + C", "e^(x^2) + C", "1/2 e^(2x) + C"], answer: "e^(2x)/2 + C" }
    ],
    trigSubstitution: [
        { question: "Evaluate ∫ dx / sqrt(x^2 - a^2).", options: ["arccos(x/a) + C", "ln|x + sqrt(x^2 - a^2)| + C", "arctan(x/a) + C", "arcsec(x/a) + C"], answer: "ln|x + sqrt(x^2 - a^2)| + C" },
        { question: "Evaluate ∫ dx / sqrt(a^2 - x^2).", options: ["arcsin(x/a) + C", "ln|x + sqrt(a^2 - x^2)| + C", "arctan(x/a) + C", "arcsec(x/a) + C"], answer: "arcsin(x/a) + C" },
        { question: "Evaluate ∫ dx / sqrt(a^2 + x^2).", options: ["arcsin(x/a) + C", "ln|x + sqrt(a^2 + x^2)| + C", "arctan(x/a) + C", "arcsec(x/a) + C"], answer: "arctan(x/a) + C" },
        { question: "Evaluate ∫ x dx / sqrt(x^2 - a^2).", options: ["sqrt(x^2 - a^2) + C", "arcsin(x/a) + C", "ln|x + sqrt(x^2 - a^2)| + C", "arcsec(x/a) + C"], answer: "sqrt(x^2 - a^2) + C" },
        { question: "Evaluate ∫ x dx / sqrt(a^2 + x^2).", options: ["sqrt(a^2 + x^2) + C", "arcsin(x/a) + C", "ln|x + sqrt(a^2 + x^2)| + C", "arcsec(x/a) + C"], answer: "sqrt(a^2 + x^2) + C" },
        { question: "Evaluate ∫ x dx / sqrt(a^2 - x^2).", options: ["sqrt(a^2 - x^2) + C", "arcsin(x/a) + C", "ln|x + sqrt(a^2 - x^2)| + C", "arcsec(x/a) + C"], answer: "sqrt(a^2 - x^2) + C" },
        { question: "Evaluate ∫ dx / (a^2 + x^2).", options: ["1/a arctan(x/a) + C", "ln|x + sqrt(a^2 + x^2)| + C", "arcsin(x/a) + C", "arcsec(x/a) + C"], answer: "1/a arctan(x/a) + C" },
        { question: "Evaluate ∫ dx / (x^2 - a^2).", options: ["1/(2a) ln| (x - a)/(x + a) | + C", "ln|x + sqrt(x^2 - a^2)| + C", "arcsin(x/a) + C", "arcsec(x/a) + C"], answer: "1/(2a) ln| (x - a)/(x + a) | + C" },
        { question: "Evaluate ∫ x^2 dx / sqrt(x^2 - a^2).", options: ["(x/2) sqrt(x^2 - a^2) - (a^2/2) ln| x + sqrt(x^2 - a^2) | + C", "arcsin(x/a) + C", "ln|x + sqrt(x^2 - a^2)| + C", "arcsec(x/a) + C"], answer: "(x/2) sqrt(x^2 - a^2) - (a^2/2) ln| x + sqrt(x^2 - a^2) | + C" },
        { question: "Evaluate ∫ x^2 dx / sqrt(a^2 + x^2).", options: ["(x/2) sqrt(a^2 + x^2) + (a^2/2) ln| x + sqrt(a^2 + x^2) | + C", "arcsin(x/a) + C", "ln|x + sqrt(a^2 + x^2)| + C", "arcsec(x/a) + C"], answer: "(x/2) sqrt(a^2 + x^2) + (a^2/2) ln| x + sqrt(a^2 + x^2) | + C" }
    ],
    trigIntegralsDerivatives: [
        { question: "Find the derivative of sin(x)cos(x).", options: ["cos^2(x) - sin^2(x)", "1 - sin^2(x)", "cos^2(x)", "sin^2(x)"], answer: "cos^2(x) - sin^2(x)" },
        { question: "Evaluate ∫ cos(x)^2 dx.", options: ["1/2 (x + sin(x)cos(x)) + C", "1/2 (x - sin(x)cos(x)) + C", "sin(x) + C", "cos(x) + C"], answer: "1/2 (x + sin(x)cos(x)) + C" },
        { question: "Evaluate ∫ sin^2(x) dx.", options: ["1/2 (x - sin(x)cos(x)) + C", "1/2 (x + sin(x)cos(x)) + C", "cos(x) + C", "sin(x) + C"], answer: "1/2 (x - sin(x)cos(x)) + C" },
        { question: "Find the derivative of sec(x).", options: ["sec(x)tan(x)", "cos(x)sec(x)", "sec^2(x)", "sec(x)"], answer: "sec(x)tan(x)" },
        { question: "Evaluate ∫ sec(x)tan(x) dx.", options: ["sec(x) + C", "tan(x) + C", "cos(x) + C", "sin(x) + C"], answer: "sec(x) + C" },
        { question: "Find the derivative of arctan(x).", options: ["1/(1 + x^2)", "1/(sqrt(1 - x^2))", "1/(1 - x^2)", "1/(sqrt(1 + x^2))"], answer: "1/(1 + x^2)" },
        { question: "Evaluate ∫ csc^2(x) dx.", options: ["-cot(x) + C", "-csc(x) + C", "cot(x) + C", "csc(x) + C"], answer: "-cot(x) + C" },
        { question: "Find the derivative of arcsin(x).", options: ["1/sqrt(1 - x^2)", "-1/sqrt(1 - x^2)", "1/(1 - x^2)", "-1/(1 - x^2)"], answer: "1/sqrt(1 - x^2)" },
        { question: "Evaluate ∫ tan(x) dx.", options: ["-ln|cos(x)| + C", "ln|sin(x)| + C", "ln|cos(x)| + C", "1/(cos(x)) + C"], answer: "-ln|cos(x)| + C" },
        { question: "Find the derivative of arccos(x).", options: ["-1/sqrt(1 - x^2)", "1/sqrt(1 - x^2)", "-1/(1 - x^2)", "1/(1 - x^2)"], answer: "-1/sqrt(1 - x^2)" }
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
