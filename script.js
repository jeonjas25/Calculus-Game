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

        frqs: [
        { question: "Given the function f(x) = 3x^2 - 2x + 5, find the critical points and determine whether they are relative maxima, relative minima, or saddle points.", answer: "Critical points are x = 1/3 and x = -1/3. f(1/3) is a relative minimum, and f(-1/3) is a relative maximum." },
        { question: "Find the area enclosed by the curves y = x^2 - 4x and y = 2x - 1.", answer: "The area enclosed by the curves is 10 square units." },
        { question: "Evaluate the integral ∫(2x + 3) dx from x = 1 to x = 5.", answer: "The value of the integral is 28." },
        { question: "Find the average value of the function f(x) = x^2 on the interval [0, 2].", answer: "The average value of the function is 4/3." },
        { question: "Solve the initial value problem dy/dx = 2x, y(0) = 3.", answer: "The solution to the initial value problem is y = x^2 + 3." },
        { question: "Using Simpson's Rule with n = 4, approximate the value of the integral ∫(x^2 + 2x + 3) dx from x = 0 to x = 2.", answer: "The approximate value of the integral is 10.67." },
        { question: "Determine whether the series Σ(1/n) from n = 1 to ∞ converges or diverges.", answer: "The series diverges." },
        { question: "Find the volume of the solid generated by revolving the region bounded by y = x^2, y = 0, and x = 2 about the y-axis.", answer: "The volume of the solid is (16π)/3 cubic units." },
        { question: "Determine the radius and interval of convergence for the power series Σ((3n^2 + 1)x^n) from n = 0 to ∞.", answer: "The radius of convergence is 1/3, and the interval of convergence is (-1/3, 1/3)." }
    ]
};

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

        frqs: [
        { question: "Given the function f(x) = 3x^2 - 2x + 5, find the critical points and determine whether they are relative maxima, relative minima, or saddle points.", answer: "Critical points are x = 1/3 and x = -1/3. f(1/3) is a relative minimum, and f(-1/3) is a relative maximum." },
        { question: "Find the area enclosed by the curves y = x^2 - 4x and y = 2x - 1.", answer: "The area enclosed by the curves is 10 square units." },
        { question: "Evaluate the integral ∫(2x + 3) dx from x = 1 to x = 5.", answer: "The value of the integral is 28." },
        { question: "Find the average value of the function f(x) = x^2 on the interval [0, 2].", answer: "The average value of the function is 4/3." },
        { question: "Solve the initial value problem dy/dx = 2x, y(0) = 3.", answer: "The solution to the initial value problem is y = x^2 + 3." },
        { question: "Using Simpson's Rule with n = 4, approximate the value of the integral ∫(x^2 + 2x + 3) dx from x = 0 to x = 2.", answer: "The approximate value of the integral is 10.67." },
        { question: "Determine whether the series Σ(1/n) from n = 1 to ∞ converges or diverges.", answer: "The series diverges." },
        { question: "Find the volume of the solid generated by revolving the region bounded by y = x^2, y = 0, and x = 2 about the y-axis.", answer: "The volume of the solid is (16π)/3 cubic units." },
        { question: "Determine the radius and interval of convergence for the power series Σ((3n^2 + 1)x^n) from n = 0 to ∞.", answer: "The radius of convergence is 1/3, and the interval of convergence is (-1/3, 1/3)." }
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
            ${q.options ? q.options.map(option => `
                <label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label>
            `).join('') : `
                <textarea name="question${index}" placeholder="Your answer"></textarea>
            `}
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
    let resultHTML = '<h2>Quiz Result</h2>';

    questions.forEach((q, index) => {
        const selectedOption = q.querySelector(`input[name="question${index}"]:checked`);
        const correctAnswer = sampleQuestions[topic][index].answer;
        const userAnswer = selectedOption ? selectedOption.value : q.querySelector(`textarea[name="question${index}"]`).value;
        const isCorrect = userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
        if (isCorrect) {
            score++;
        }
        resultHTML += `<div class="question-result">
            <p><strong>Question ${index + 1}:</strong> ${q.innerText}</p>
            <p><strong>Your Answer:</strong> ${userAnswer}</p>
            <p><strong>Correct Answer:</strong> ${correctAnswer}</p>
            <p><strong>Result:</strong> ${isCorrect ? 'Correct' : 'Incorrect'}</p>
        </div>`;
    });

    const resultContainer = document.getElementById('result-container');
    const result = document.getElementById('result');
    result.innerHTML = `You scored ${score} out of ${questions.length}`;
    resultContainer.innerHTML = resultHTML;

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
