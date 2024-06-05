const sampleQuestions = {
    limits: [
        { 
            question: "What is the limit of (x^2 - 1)/(x - 1) as x approaches 1?", 
            options: ["1", "2", "3", "4"], 
            answer: "2", 
            hint: "Try factoring the numerator.",
            explanation: "Factor (x^2 - 1) to (x-1)(x+1). Then cancel out the (x-1) term."
        },
        { 
            question: "Evaluate lim (x->0) (sin(x)/x).", 
            options: ["0", "1", "Infinity", "Undefined"], 
            answer: "1",
            hint: "Use the small angle approximation for sin(x).",
            explanation: "For small angles, sin(x) ≈ x, so sin(x)/x ≈ 1."
        },
        { 
            question: "Find the limit of (3x^2 - x + 4)/(2x^2 + x - 1) as x approaches infinity.", 
            options: ["3/2", "1/2", "2", "Infinity"], 
            answer: "3/2",
            hint: "Divide numerator and denominator by x^2.",
            explanation: "Divide each term by x^2 and take the limit as x approaches infinity."
        },
        { 
            question: "Evaluate lim (x->0) (1-cos(x))/x.", 
            options: ["0", "1", "Infinity", "Undefined"], 
            answer: "0",
            hint: "Use the Taylor series expansion for cos(x).",
            explanation: "cos(x) ≈ 1 - x^2/2, so (1 - cos(x))/x ≈ x/2 which goes to 0 as x approaches 0."
        },
        { 
            question: "Find the limit of ln(x) as x approaches infinity.", 
            options: ["0", "1", "Infinity", "-Infinity"], 
            answer: "Infinity",
            hint: "Think about the graph of ln(x).",
            explanation: "As x approaches infinity, ln(x) increases without bound."
        },
        { 
            question: "Evaluate lim (x->0+) ln(x).", 
            options: ["0", "1", "Infinity", "-Infinity"], 
            answer: "-Infinity",
            hint: "Think about the graph of ln(x).",
            explanation: "As x approaches 0 from the positive side, ln(x) decreases without bound."
        },
        { 
            question: "Find the limit of (e^x - 1)/x as x approaches 0.", 
            options: ["0", "1", "e", "-e"], 
            answer: "1",
            hint: "Use the Taylor series expansion for e^x.",
            explanation: "e^x ≈ 1 + x, so (e^x - 1)/x ≈ x/x = 1."
        },
        { 
            question: "Evaluate lim (x->0) (e^x - 1 - x)/x^2.", 
            options: ["0", "1/2", "1", "2"], 
            answer: "1/2",
            hint: "Use the Taylor series expansion for e^x.",
            explanation: "e^x ≈ 1 + x + x^2/2, so (e^x - 1 - x)/x^2 ≈ x^2/2 / x^2 = 1/2."
        },
        { 
            question: "Find the limit of (tan(x) - x)/x^3 as x approaches 0.", 
            options: ["0", "1", "1/3", "1/6"], 
            answer: "1/3",
            hint: "Use the Taylor series expansion for tan(x).",
            explanation: "tan(x) ≈ x + x^3/3, so (tan(x) - x)/x^3 ≈ x^3/3 / x^3 = 1/3."
        },
        { 
            question: "Evaluate lim (x->infinity) (x - sqrt(x^2 + 1)).", 
            options: ["0", "-1/2", "-1", "Infinity"], 
            answer: "-1/2",
            hint: "Rationalize the expression.",
            explanation: "Multiply by the conjugate to get (x - sqrt(x^2 + 1))(x + sqrt(x^2 + 1)) / (x + sqrt(x^2 + 1))."
        }
    ],
    derivatives: [
        { 
            question: "What is the derivative of x^2?", 
            options: ["x", "2x", "x^2", "2"], 
            answer: "2x",
            hint: "Use the power rule.",
            explanation: "The power rule states that the derivative of x^n is nx^(n-1)."
        },
        { 
            question: "Find the derivative of sin(x).", 
            options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"], 
            answer: "cos(x)",
            hint: "Recall the basic derivatives of trigonometric functions.",
            explanation: "The derivative of sin(x) is cos(x)."
        },
        { 
            question: "What is the derivative of e^x?", 
            options: ["e", "x", "xe^(x-1)", "e^x"], 
            answer: "e^x",
            hint: "e^x is a special function.",
            explanation: "The derivative of e^x is e^x."
        },
        { 
            question: "Find the derivative of ln(x).", 
            options: ["1/x", "x", "ln(x)", "0"], 
            answer: "1/x",
            hint: "Use the derivative rules for logarithms.",
            explanation: "The derivative of ln(x) is 1/x."
        },
        { 
            question: "What is the derivative of tan(x)?", 
            options: ["sec(x)", "sec^2(x)", "tan^2(x)", "cot(x)"], 
            answer: "sec^2(x)",
            hint: "Recall the basic derivatives of trigonometric functions.",
            explanation: "The derivative of tan(x) is sec^2(x)."
        },
        { 
            question: "Find the derivative of arcsin(x).", 
            options: ["1/sqrt(1-x^2)", "1/(1+x^2)", "arccos(x)", "1/(1-x^2)"], 
            answer: "1/sqrt(1-x^2)",
            hint: "Use the derivative rules for inverse trigonometric functions.",
            explanation: "The derivative of arcsin(x) is 1/sqrt(1-x^2)."
        },
        { 
            question: "What is the derivative of x^x?", 
            options: ["x^x", "x^x(1 + ln(x))", "x^(x-1)", "ln(x) * x^x"], 
            answer: "x^x(1 + ln(x))",
            hint: "Use logarithmic differentiation.",
            explanation: "Taking the natural log of both sides, we get ln(y) = x ln(x). Differentiating gives 1/y dy/dx = x ln(x) + x, or dy/dx = x^x (1 + ln(x))."
        },
        { 
            question: "Find the derivative of ln(ln(x)).", 
            options: ["1/(x*ln(x))", "1/(ln(x))", "ln(x)/x", "1/x"], 
            answer: "1/(x*ln(x))",
            hint: "Use the chain rule.",
            explanation: "Let u = ln(x). Then the derivative is 1/u * 1/x = 1/(x ln(x))."
        },
        { 
            question: "What is the derivative of cos(x^2)?", 
            options: ["-2x*sin(x^2)", "-sin(x^2)", "-2cos(x)", "-x*sin(x^2)"], 
            answer: "-2x*sin(x^2)",
            hint: "Use the chain rule.",
            explanation: "Let u = x^2. The derivative of cos(u) is -sin(u), then multiply by the derivative of u which is 2x."
        },
        { 
            question: "Find the derivative of x^3 * e^x.", 
            options: ["3x^2 * e^x", "e^x * (x^3 + 3x^2)", "x^3 * e^(x-1)", "3x * e^(x+2)"], 
            answer: "e^x * (x^3 + 3x^2)",
            hint: "Use the product rule.",
            explanation: "The derivative of f(x)g(x) is f'(x)g(x) + f(x)g'(x). Here f(x) = x^3 and g(x) = e^x."
        }
    ],
    integrals: [
        { 
            question: "What is the integral of 1/x dx?", 
            options: ["ln|x| + C", "x^2/2 + C", "e^x + C", "1/x + C"], 
            answer: "ln|x| + C",
            hint: "This is a standard integral.",
            explanation: "The integral of 1/x is ln|x| + C."
        },
        { 
            question: "Evaluate ∫ x dx.", 
            options: ["x^2 + C", "x^2/2 + C", "x + C", "1/x + C"], 
            answer: "x^2/2 + C",
            hint: "Use the power rule for integration.",
            explanation: "The integral of x^n is x^(n+1)/(n+1). Here n = 1."
        },
        { 
            question: "What is the integral of cos(x) dx?", 
            options: ["sin(x) + C", "-sin(x) + C", "cos(x) + C", "-cos(x) + C"], 
            answer: "sin(x) + C",
            hint: "This is a standard integral.",
            explanation: "The integral of cos(x) is sin(x) + C."
        },
        { 
            question: "Evaluate ∫ e^x dx.", 
            options: ["e^x + C", "x^e + C", "1/x + C", "x^2/2 + C"], 
            answer: "e^x + C",
            hint: "This is a standard integral.",
            explanation: "The integral of e^x is e^x + C."
        },
        { 
            question: "What is the integral of sec^2(x) dx?", 
            options: ["tan(x) + C", "sec(x) + C", "cot(x) + C", "csc(x) + C"], 
            answer: "tan(x) + C",
            hint: "Recall the derivative of tan(x).",
            explanation: "The integral of sec^2(x) is tan(x) + C."
        },
        { 
            question: "Evaluate ∫ x^2 dx.", 
            options: ["x^3/3 + C", "x^2/2 + C", "x^3 + C", "x + C"], 
            answer: "x^3/3 + C",
            hint: "Use the power rule for integration.",
            explanation: "The integral of x^n is x^(n+1)/(n+1). Here n = 2."
        },
        { 
            question: "What is the integral of 1/(1 + x^2) dx?", 
            options: ["arctan(x) + C", "ln|x| + C", "arcsin(x) + C", "1/x + C"], 
            answer: "arctan(x) + C",
            hint: "This is a standard integral.",
            explanation: "The integral of 1/(1 + x^2) is arctan(x) + C."
        },
        { 
            question: "Evaluate ∫ (ln(x))/x dx.", 
            options: ["(ln(x))^2/2 + C", "ln(x) + C", "1/(x ln(x)) + C", "x ln(x) + C"], 
            answer: "(ln(x))^2/2 + C",
            hint: "Use integration by parts.",
            explanation: "Let u = ln(x) and dv = 1/x dx. Then du = 1/x dx and v = ln(x). The integral becomes (ln(x))^2/2 + C."
        },
        { 
            question: "What is the integral of 1/sqrt(1 - x^2) dx?", 
            options: ["arcsin(x) + C", "arccos(x) + C", "arctan(x) + C", "ln|x| + C"], 
            answer: "arcsin(x) + C",
            hint: "This is a standard integral.",
            explanation: "The integral of 1/sqrt(1 - x^2) is arcsin(x) + C."
        },
        { 
            question: "Evaluate ∫ e^(2x) dx.", 
            options: ["e^(2x)/2 + C", "2e^(2x) + C", "e^(x^2) + C", "1/2 e^(2x) + C"], 
            answer: "e^(2x)/2 + C",
            hint: "Use substitution.",
            explanation: "Let u = 2x. Then du = 2 dx and the integral becomes (1/2)e^(2x) + C."
        }
    ],
    trigSubstitution: [
    { 
        question: "Evaluate ∫ dx / sqrt(x^2 - a^2).", 
        options: ["arccos(x/a) + C", "ln|x + sqrt(x^2 - a^2)| + C", "arctan(x/a) + C", "arcsec(x/a) + C"], 
        answer: "ln|x + sqrt(x^2 - a^2)| + C",
        hint: "Use trigonometric substitution.",
        explanation: "Substitute x = a sec(θ) and use the identity sec^2(θ) - 1 = tan^2(θ)."
    },
    { 
        question: "Evaluate ∫ dx / sqrt(a^2 - x^2).", 
        options: ["arcsin(x/a) + C", "ln|x + sqrt(a^2 - x^2)| + C", "arctan(x/a) + C", "arcsec(x/a) + C"], 
        answer: "arcsin(x/a) + C",
        hint: "Use trigonometric substitution.",
        explanation: "Substitute x = a sin(θ) and use the identity 1 - sin^2(θ) = cos^2(θ)."
    },
    { 
        question: "Evaluate ∫ dx / sqrt(a^2 + x^2).", 
        options: ["arcsin(x/a) + C", "ln|x + sqrt(a^2 + x^2)| + C", "arctan(x/a) + C", "arcsec(x/a) + C"], 
        answer: "arctan(x/a) + C",
        hint: "Use trigonometric substitution.",
        explanation: "Substitute x = a tan(θ) and use the identity 1 + tan^2(θ) = sec^2(θ)."
    },
    { 
        question: "Evaluate ∫ x dx / sqrt(x^2 - a^2).", 
        options: ["sqrt(x^2 - a^2) + C", "arcsin(x/a) + C", "ln|x + sqrt(x^2 - a^2)| + C", "arcsec(x/a) + C"], 
        answer: "sqrt(x^2 - a^2) + C",
        hint: "Use trigonometric substitution.",
        explanation: "Substitute x = a sec(θ) and use the identity sec^2(θ) - 1 = tan^2(θ)."
    },
    { 
        question: "Evaluate ∫ x dx / sqrt(a^2 + x^2).", 
        options: ["sqrt(a^2 + x^2) + C", "arcsin(x/a) + C", "ln|x + sqrt(a^2 + x^2)| + C", "arcsec(x/a) + C"], 
        answer: "sqrt(a^2 + x^2) + C",
        hint: "Use trigonometric substitution.",
        explanation: "Substitute x = a tan(θ) and use the identity 1 + tan^2(θ) = sec^2(θ)."
    },
    { 
        question: "Evaluate ∫ x dx / sqrt(a^2 - x^2).", 
        options: ["sqrt(a^2 - x^2) + C", "arcsin(x/a) + C", "ln|x + sqrt(a^2 - x^2)| + C", "arcsec(x/a) + C"], 
        answer: "sqrt(a^2 - x^2) + C",
        hint: "Use trigonometric substitution.",
        explanation: "Substitute x = a sin(θ) and use the identity 1 - sin^2(θ) = cos^2(θ)."
    },
    { 
        question: "Evaluate ∫ dx / (a^2 + x^2).", 
        options: ["1/a arctan(x/a) + C", "ln|x + sqrt(a^2 + x^2)| + C", "arcsin(x/a) + C", "arcsec(x/a) + C"], 
        answer: "1/a arctan(x/a) + C",
        hint: "Use trigonometric substitution.",
        explanation: "Substitute x = a tan(θ) and use the identity 1 + tan^2(θ) = sec^2(θ)."
    },
    { 
        question: "Evaluate ∫ dx / (x^2 - a^2).", 
        options: ["1/(2a) ln| (x - a)/(x + a) | + C", "ln|x + sqrt(x^2 - a^2)| + C", "arcsin(x/a) + C", "arcsec(x/a) + C"], 
        answer: "1/(2a) ln| (x - a)/(x + a) | + C",
        hint: "Use trigonometric substitution.",
        explanation: "Substitute x = a sec(θ) and use the identity sec^2(θ) - 1 = tan^2(θ)."
    },
    { 
        question: "Evaluate ∫ x^2 dx / sqrt(x^2 - a^2).", 
        options: ["(x/2) sqrt(x^2 - a^2) - (a^2/2) ln| x + sqrt(x^2 - a^2) | + C", "arcsin(x/a) + C", "ln|x + sqrt(x^2 - a^2)| + C", "arcsec(x/a) + C"], 
        answer: "(x/2) sqrt(x^2 - a^2) - (a^2/2) ln| x + sqrt(x^2 - a^2) | + C",
        hint: "Use trigonometric substitution.",
        explanation: "Substitute x = a sec(θ) and use the identity sec^2(θ) - 1 = tan^2(θ)."
    },
    { 
        question: "Evaluate ∫ x^2 dx / sqrt(a^2 + x^2).", 
        options: ["(x/2) sqrt(a^2 + x^2) + (a^2/2) ln| x + sqrt(a^2 + x^2) | + C", "arcsin(x/a) + C", "ln|x + sqrt(a^2 + x^2)| + C", "arcsec(x/a) + C"], 
        answer: "(x/2) sqrt(a^2 + x^2) + (a^2/2) ln| x + sqrt(a^2 + x^2) | + C",
        hint: "Use trigonometric substitution.",
        explanation: "Substitute x = a tan(θ) and use the identity 1 + tan^2(θ) = sec^2(θ)."
    }
],
    trigIntegralsDerivatives: [
    { 
        question: "Find the derivative of sin(x)cos(x).", 
        options: ["cos^2(x) - sin^2(x)", "1 - sin^2(x)", "cos^2(x)", "sin^2(x)"], 
        answer: "cos^2(x) - sin^2(x)",
        hint: "Use the product rule for differentiation.",
        explanation: "Apply the product rule: (u'v + uv') where u = sin(x) and v = cos(x)."
    },
    { 
        question: "Evaluate ∫ cos(x)^2 dx.", 
        options: ["1/2 (x + sin(x)cos(x)) + C", "1/2 (x - sin(x)cos(x)) + C", "sin(x) + C", "cos(x) + C"], 
        answer: "1/2 (x + sin(x)cos(x)) + C",
        hint: "Use a trigonometric identity to rewrite cos^2(x).",
        explanation: "Use the identity cos^2(x) = (1 + cos(2x))/2 and then integrate term by term."
    },
    { 
        question: "Evaluate ∫ sin^2(x) dx.", 
        options: ["1/2 (x - sin(x)cos(x)) + C", "1/2 (x + sin(x)cos(x)) + C", "cos(x) + C", "sin(x) + C"], 
        answer: "1/2 (x - sin(x)cos(x)) + C",
        hint: "Use a trigonometric identity to rewrite sin^2(x).",
        explanation: "Use the identity sin^2(x) = (1 - cos(2x))/2 and then integrate term by term."
    },
    { 
        question: "Find the derivative of sec(x).", 
        options: ["sec(x)tan(x)", "cos(x)sec(x)", "sec^2(x)", "sec(x)"], 
        answer: "sec(x)tan(x)",
        hint: "Remember that sec(x) = 1/cos(x).",
        explanation: "Apply the chain rule and the derivative of cos(x) to get the result."
    },
    { 
        question: "Evaluate ∫ sec(x)tan(x) dx.", 
        options: ["sec(x) + C", "tan(x) + C", "cos(x) + C", "sin(x) + C"], 
        answer: "sec(x) + C",
        hint: "Use a substitution to rewrite sec(x)tan(x).",
        explanation: "Let u = sec(x) and then apply u-substitution to simplify the integral."
    },
    { 
        question: "Find the derivative of arctan(x).", 
        options: ["1/(1 + x^2)", "1/(sqrt(1 - x^2))", "1/(1 - x^2)", "1/(sqrt(1 + x^2))"], 
        answer: "1/(1 + x^2)",
        hint: "Differentiate the arctan function with respect to x.",
        explanation: "Apply the chain rule to differentiate the arctan function."
    },
    { 
        question: "Evaluate ∫ csc^2(x) dx.", 
        options: ["-cot(x) + C", "-csc(x) + C", "cot(x) + C", "csc(x) + C"], 
        answer: "-cot(x) + C",
        hint: "Use the reciprocal identity for csc(x).",
        explanation: "Rewrite csc^2(x) as 1/sin^2(x) and integrate term by term."
    },
    { 
        question: "Find the derivative of arcsin(x).", 
        options: ["1/sqrt(1 - x^2)", "-1/sqrt(1 - x^2)", "1/(1 - x^2)", "-1/(1 - x^2)"], 
        answer: "1/sqrt(1 - x^2)",
        hint: "Differentiate the arcsin function with respect to x.",
        explanation: "Apply the chain rule to differentiate the arcsin function."
    },
    { 
        question: "Evaluate ∫ tan(x) dx.", 
        options: ["-ln|cos(x)| + C", "ln|sin(x)| + C", "ln|cos(x)| + C", "1/(cos(x)) + C"], 
        answer: "-ln|cos(x)| + C",
        hint: "Rewrite tan(x) using trigonometric identities.",
        explanation: "Rewrite tan(x) as sin(x)/cos(x) and then integrate using substitution."
    },
    { 
        question: "Find the derivative of arccos(x).", 
        options: ["-1/sqrt(1 - x^2)", "1/sqrt(1 - x^2)", "-1/(1 - x^2)", "1/(1 - x^2)"], 
        answer: "-1/sqrt(1 - x^2)",
        hint: "Differentiate the arccos function with respect to x.",
        explanation: "Apply the chain rule to differentiate the arccos function."
    }
]
};

const frqQuestions = {
    frq1: {
        question: "FRQ 1: Evaluate the following:",
        parts: {
            a: {
                question: "What is the integral of x dx?",
                answer: "0.5 * x^2 + C",
                hint: "Use the power rule for integration.",
                explanation: "The integral of x with respect to x is (1/2)x^2 + C."
            },
            b: {
                question: "What is the derivative of x^2?",
                answer: "2x",
                hint: "Use the power rule for differentiation.",
                explanation: "The derivative of x^2 with respect to x is 2x."
            }
        }
    },
    // Add more FRQ questions as needed
    frq2: {
        question: "Problem 2: ",
        parts: {
            a: {
                question: "What is the integral of cosh(x) dx?",
                answer: "sinh(x) + C",
                hint: "Think about the function whose derivative is cosh(x).",
                explanation: "The integral of cosh(x) is sinh(x) because the derivative of sinh(x) is cosh(x)."
            },
            b: {
                question: "Find the derivative of sinh(x).",
                answer: "cosh(x)",
                hint: "Use the hyperbolic function differentiation rules.",
                explanation: "The derivative of sinh(x) is cosh(x) as per the standard rules."
            },
            c: {
                question: "Evaluate the integral of 2x dx.",
                answer: "x^2 + C",
                hint: "Apply the basic integration rule for polynomials.",
                explanation: "The integral of 2x is x^2, as you increase the power by one and divide by the new power."
            },
            d: {
                question: "Find the derivative of x^2.",
                answer: "2x",
                hint: "Use the power rule for differentiation.",
                explanation: "The derivative of x^2 is 2x as per the basic differentiation rules."
            }
        }
    }
};

function loadQuiz() {
    const topic = document.getElementById('topic').value;
    const questionsContainer = document.getElementById('questions');
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result-container');

    // Clear previous quiz
    questionsContainer.innerHTML = '';
    resultContainer.innerHTML = '';

    // Get the questions for the selected topic
    const questions = sampleQuestions[topic];

    questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <p>${index + 1}. ${q.question} <span class="hint" onclick="showHint(${index})">(Hint)</span></p>
            ${q.options.map(option => `
                <label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label>
            `).join('')}
            <p id="hint${index}" class="hint-text">Hint: ${q.hint}</p>
        `;
        questionsContainer.appendChild(questionElement);
    });

    // Show the quiz container with animation
    quizContainer.style.display = 'block';
    setTimeout(() => quizContainer.classList.add('visible'), 10);
}

function showHint(index) {
    document.getElementById(`hint${index}`).classList.toggle('visible');
}

function submitQuiz() {
    const topic = document.getElementById('topic').value;
    const questions = document.querySelectorAll('.question');
    let score = 0;
    let resultHTML = '<h2>Quiz Result</h2>';
    let unanswered = false;

    questions.forEach((q, index) => {
        const selectedOption = q.querySelector(`input[name="question${index}"]:checked`);
        if (!selectedOption) {
            unanswered = true;
            alert('Please answer all questions before submitting.');
            return false;
        }
        const correctAnswer = sampleQuestions[topic][index].answer;
        const userAnswer = selectedOption ? selectedOption.value : '';
        const isCorrect = userAnswer === correctAnswer;

        if (isCorrect) {
            score++;
        } else {
            resultHTML += `<div class="question-result">
                <p><strong>Question ${index + 1}:</strong> ${sampleQuestions[topic][index].question}</p>
                <p><strong>Your Answer:</strong> ${userAnswer}</p>
                <p><strong>Correct Answer:</strong> ${correctAnswer}</p>
                <p><strong>Explanation:</strong> ${sampleQuestions[topic][index].explanation}</p>
            </div>`;
        }
    });

    if (unanswered) return;

    resultHTML += `<p>Your score is ${score} out of ${questions.length}</p>`;
    document.getElementById('result-container').innerHTML = resultHTML;
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('quiz-container').style.display = 'none';
}

function loadFRQ() {
    const frqTopic = document.getElementById('frq-topic').value;
    const frqContainer = document.getElementById('frq-container');
    const frqQuestion = document.getElementById('frq-question');
    const frqResultContainer = document.getElementById('frq-result-container');

    // Clear previous FRQ
    frqQuestion.innerHTML = '';
    frqResultContainer.innerHTML = '';

    const frq = frqQuestions[frqTopic];

    frqQuestion.innerHTML = `
        <p>${frq.question}</p>
        ${Object.keys(frq.parts).map(key => `
            <div class="frq-part">
                <p>${key.toUpperCase()}: ${frq.parts[key].question} <span class="hint" onclick="showFRQHint('${key}')">(Hint)</span></p>
                <textarea id="frq-${key}-answer" rows="4" style="width: 100%;"></textarea>
                <p id="frq-hint-${key}" class="hint-text">Hint: ${frq.parts[key].hint}</p>
            </div>
        `).join('')}
    `;

    // Show the FRQ container with animation
    frqContainer.style.display = 'block';
    setTimeout(() => frqContainer.classList.add('visible'), 10);
}

function showFRQHint(part) {
    document.getElementById(`frq-hint-${part}`).classList.toggle('visible');
}

function submitFRQ() {
    const frqTopic = document.getElementById('frq-topic').value;
    const frq = frqQuestions[frqTopic];
    const frqResultContainer = document.getElementById('frq-result-container');
    let resultHTML = '<h2>FRQ Result</h2>';

    Object.keys(frq.parts).forEach(key => {
        const userAnswer = document.getElementById(`frq-${key}-answer`).value.trim();
        const correctAnswer = frq.parts[key].answer;
        const isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();

        resultHTML += `<div class="frq-result">
            <p><strong>Part ${key.toUpperCase()}:</strong> ${frq.parts[key].question}</p>
            <p><strong>Your Answer:</strong> ${userAnswer}</p>
            <p><strong>Correct Answer:</strong> ${correctAnswer}</p>
            <p><strong>Explanation:</strong> ${frq.parts[key].explanation}</p>
        </div>`;
    });

    frqResultContainer.innerHTML = resultHTML;
    frqResultContainer.style.display = 'block';
    document.getElementById('frq-container').style.display = 'none';
}

function restartFRQ() {
    document.getElementById('frq-form').reset();
    document.getElementById('frq-container').style.display = 'none';
    document.getElementById('frq-result-container').style.display = 'none';
}
