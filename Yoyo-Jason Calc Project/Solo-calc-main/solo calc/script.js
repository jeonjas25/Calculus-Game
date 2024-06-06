const sampleQuestions = {

    rates_of_change: [
    { 
        question: "A ladder is leaning against a wall. If the bottom of the ladder is sliding away from the wall at a rate of 2 feet per second, and the top of the ladder is sliding down the wall at a rate of 1 foot per second, how fast is the length of the ladder changing when the bottom is 4 feet from the wall and the top is 3 feet above the ground?", 
        options: ["√5 ft/s", "5 ft/s", "3 ft/s", "2√5 ft/s"], 
        answer: "√5 ft/s", 
        hint: "Use the Pythagorean theorem to relate the sides of the triangle formed by the ladder, wall, and ground.",
        explanation: "Let x be the distance from the wall to the bottom of the ladder, and y be the height of the ladder above the ground. Then, the length of the ladder is given by L = √(x^2 + y^2)."
    },
    { 
        question: "Water is pouring into a conical tank at a rate of 5 cubic feet per minute. If the radius of the tank is 3 feet and the height is 10 feet, how fast is the water level rising when the water is 6 feet deep?", 
        options: ["5/3 ft/min", "10/3 ft/min", "15/3 ft/min", "20/3 ft/min"], 
        answer: "5/3 ft/min", 
        hint: "Use similar triangles to relate the rates of change of height and radius to the rate of change of volume.",
        explanation: "Let V be the volume of water in the tank and h be the height of the water. The volume of a cone is given by V = (1/3)πr^2h."
    },
    { 
        question: "A boat is pulled into a dock by a rope attached to the bow. If the rope is being pulled in at a rate of 4 feet per second and the rope is initially 25 feet long, how fast is the boat approaching the dock when the rope is 24 feet long?", 
        options: ["3 ft/s", "4 ft/s", "5 ft/s", "6 ft/s"], 
        answer: "3 ft/s", 
        hint: "Use the Pythagorean theorem to relate the sides of the triangle formed by the rope, water, and dock.",
        explanation: "Let x be the distance from the dock to the boat, and y be the distance from the boat to the point where the rope is attached to the dock. Then, the length of the rope is given by L = √(x^2 + y^2)."
    },
    { 
        question: "A particle moves along the curve y = x^3 + 2x^2. At what point on the curve is the rate of change of y with respect to x equal to 6?", 
        options: ["(-1, 1)", "(0, 2)", "(1, 3)", "(2, 6)"], 
        answer: "(1, 3)", 
        hint: "Find the derivative of the given function and set it equal to 6.",
        explanation: "Find dy/dx = 3x^2 + 4x and solve 3x^2 + 4x = 6 for x."
    },
    { 
        question: "A particle moves along the x-axis so that its position at time t is given by x(t) = t^3 - 6t^2 + 9t + 2. At what time is the velocity of the particle equal to 4?", 
        options: ["1", "2", "3", "4"], 
        answer: "1", 
        hint: "Find the derivative of the position function to get the velocity function.",
        explanation: "Find v(t) = dx/dt and solve v(t) = 4 for t."
    },
    { 
        question: "A spherical balloon is being inflated so that its volume is increasing at a rate of 100 cubic inches per minute. How fast is the radius of the balloon increasing when the radius is 5 inches?", 
        options: ["1/10 in/min", "1/5 in/min", "1/2 in/min", "1 in/min"], 
        answer: "1/10 in/min", 
        hint: "Use the formula for the volume of a sphere and differentiate with respect to time.",
        explanation: "Let V be the volume of the balloon and r be the radius. The volume of a sphere is given by V = (4/3)πr^3."
    },
    { 
        question: "A ladder is sliding down a vertical wall. At the instant when the bottom of the ladder is 4 feet from the wall, the bottom is moving away from the wall at a rate of 1 foot per second. How fast is the top of the ladder sliding down the wall when the top is 5 feet above the ground?", 
        options: ["(2/√3) ft/s", "(1/√3) ft/s", "(3/√3) ft/s", "(4/√3) ft/s"], 
        answer: "(2/√3) ft/s", 
        hint: "Use the Pythagorean theorem to relate the sides of the triangle formed by the ladder, wall, and ground.",
        explanation: "Let x be the distance from the wall to the bottom of the ladder, and y be the height of the ladder above the ground. Then, the length of the ladder is given by L = √(x^2 + y^2)."
    },
    { 
        question: "A 10-foot ladder is leaning against a vertical wall. If the bottom of the ladder is sliding away from the wall at a rate of 3 feet per second, how fast is the top of the ladder sliding down the wall when the bottom is 6 feet from the wall?", 
        options: ["1.5 ft/s", "2 ft/s", "2.5 ft/s", "3 ft/s"], 
        answer: "2 ft/s", 
        hint: "Use the Pythagorean theorem to relate the sides of the triangle formed by the ladder, wall, and ground.",
        explanation: "Let x be the distance from the wall to the bottom of the ladder, and y be the height of the ladder above the ground. Then, the length of the ladder is given by L = √(x^2 + y^2)."
    },
        { 
        question: "A particle moves along the curve y = 2x^3 - 3x^2 + 4. At what point on the curve is the tangent line parallel to the line y = 6x - 3?", 
        options: ["(1, 3)", "(2, 7)", "(3, 13)", "(4, 21)"], 
        answer: "(2, 7)", 
        hint: "Find the derivative of the given function and set it equal to the slope of the given line.",
        explanation: "Find dy/dx = 6x^2 - 6x and set it equal to the slope of the given line, which is 6."
    },
    { 
        question: "A boat is pulled into a dock by a rope attached to the bow. If the rope is being pulled in at a rate of 2 feet per second and the rope is initially 20 feet long, how fast is the boat approaching the dock when the rope is 18 feet long?", 
        options: ["√5 ft/s", "2√5 ft/s", "3 ft/s", "4 ft/s"], 
        answer: "√5 ft/s", 
        hint: "Use the Pythagorean theorem to relate the sides of the triangle formed by the rope, water, and dock.",
        explanation: "Let x be the distance from the dock to the boat, and y be the distance from the boat to the point where the rope is attached to the dock. Then, the length of the rope is given by L = √(x^2 + y^2)."
    }
],
    
    integralAPP: [
    { 
        question: "Determine the area enclosed by the curves y = e^x and y = ln(x) between x = 1 and x = e.", 
        options: ["e", "e^2 - 1", "e - 1", "e^2"], 
        answer: "e^2 - 1", 
        hint: "Consider the properties of exponential and logarithmic functions.",
        explanation: "The area is given by the definite integral ∫(e^x - ln(x)) dx from 1 to e."
    },
    { 
        question: "Calculate the volume of the solid formed by revolving the region bounded by y = ln(x), y = 0, and x = e about the y-axis.", 
        options: ["e^2/2", "e^2", "2e^2", "e^3"], 
        answer: "e^2/2", 
        hint: "Use the shell method.",
        explanation: "The volume is given by the definite integral ∫(2π*x*ln(x)) dx from 1 to e."
    },
    { 
        question: "Find the volume of the solid generated by rotating the region bounded by y = x^3, y = 0, and x = 1 about the line y = 2.", 
        options: ["(π/8) * (5^2 + 1)", "(π/8) * (5^3 + 1)", "(π/8) * (5^2 - 1)", "(π/8) * (5^3 - 1)"], 
        answer: "(π/8) * (5^2 + 1)", 
        hint: "Use the method of cylindrical shells.",
        explanation: "The volume is given by the definite integral ∫(2π*x*(2 - x^3)) dx from 0 to 1."
    },
    { 
        question: "Determine the area enclosed by the curves y = x^2 and y = 2x - x^2.", 
        options: ["8/3", "5/3", "7/3", "10/3"], 
        answer: "8/3", 
        hint: "Find the points of intersection of the curves.",
        explanation: "The area is given by the definite integral ∫(2x - x^2 - x^2) dx from 0 to 2."
    },
    { 
        question: "Calculate the volume of the solid generated by revolving the region bounded by y = e^x, y = 0, and x = 1 about the line y = -1.", 
        options: ["e^2 * π", "e^3 * π", "e^4 * π", "e^5 * π"], 
        answer: "e^2 * π", 
        hint: "Use the disk method.",
        explanation: "The volume is given by the definite integral ∫(π*(e^x + 1)^2) dx from 0 to 1."
    },
    { 
        question: "Find the volume of the solid obtained by rotating the region bounded by y = x^2, y = 0, and x = 2 about the line y = -1.", 
        options: ["(16π)/3", "(22π)/3", "(20π)/3", "(26π)/3"], 
        answer: "(16π)/3", 
        hint: "Consider the region between the curve and the line of rotation.",
        explanation: "The volume is given by the definite integral ∫(π*(x^2 + 1)^2) dx from 0 to 2."
    },
    { 
        question: "Calculate the volume of the solid generated by revolving the region bounded by y = sin(x), y = 0, and x = π/2 about the y-axis.", 
        options: ["π", "2π", "π/2", "3π/2"], 
        answer: "π", 
        hint: "Consider the periodic nature of the sine function.",
        explanation: "The volume is given by the definite integral ∫(π*(sin(x))^2) dx from 0 to π/2."
    },
    { 
        question: "Find the volume of the solid obtained by rotating the region bounded by y = x^2, y = 1, and x = 0 about the line y = 2.", 
        options: ["(7π)/3", "(8π)/3", "(9π)/3", "(10π)/3"], 
        answer: "(7π)/3", 
        hint: "Visualize the region and the line of rotation.",
        explanation: "The volume is given by the definite integral ∫(π*(1 - x^2)^2) dx from 0 to 1."
    },
    { 
        question: "Calculate the volume of the solid formed by revolving the region bounded by y = 1/x, y = 0, and x = 1 about the line y = 1.", 
        options: ["π/2", "π", "2π", "3π/2"], 
        answer: "π/2", 
        hint: "Use the method of cylindrical shells.",
        explanation: "The volume is given by the definite integral ∫(2π*(1/x)*(1 - 1/x)) dx from 1 to ∞."
    },
    { 
        question: "Determine the area enclosed by the curves y = e^x, y = 1, and x = 0.", 
        options: ["e - 1", "e", "e^2 - 1", "e^2"], 
        answer: "e^2 - 1", 
        hint: "Use definite integrals to find the area under the curves.",
        explanation: "The area is given by the definite integral ∫(e^x - 1) dx from 0 to 1."
    }
],
    
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
], 
    
    diffEQ: [
    { 
        "question": "Solve the first-order linear differential equation dy/dx = (3x^2 - 2xy)/y.", 
        "options": ["y = x^3 + C", "y = 2x^3 + C", "y = e^(x^3) + C", "y = x^3 - 2x + C"], 
        "answer": "y = x^3 + C", 
        "hint": "This is a first-order linear differential equation. Solve using integrating factor method.",
        "explanation": "First, transform the equation into standard form, then find the integrating factor, and finally solve for y."
    },
    { 
        "question": "Find the solution to the differential equation (x^2 + 1)dy/dx + 2xy = 2x.", 
        "options": ["y = x^2 + 1 + C", "y = e^(-x^2) + C", "y = x + C", "y = x^2 + C"], 
        "answer": "y = x^2 + 1 + C", 
        "hint": "This is a first-order linear differential equation. Solve using integrating factor method.",
        "explanation": "First, transform the equation into standard form, then find the integrating factor, and finally solve for y."
    },
    { 
        "question": "Solve the differential equation dy/dx = (3x - 2y)/(2x + y).", 
        "options": ["y = 2x^2 + C", "y = 3x^2 + C", "y = x^3 + C", "y = 2x^3 + C"], 
        "answer": "y = x^3 + C", 
        "hint": "This is a separable differential equation. Separate variables and integrate both sides.",
        "explanation": "After separating variables and integrating, the solution is obtained in the form y = x^3 + C, where C is the constant of integration."
    },
    { 
        "question": "Solve the differential equation dy/dx = (2y - x)/(2x + y).", 
        "options": ["y = x^2 + C", "y = 2x^2 + C", "y = e^(2x) + C", "y = x^3 + C"], 
        "answer": "y = x^2 + C", 
        "hint": "This is a first-order linear differential equation. Solve using integrating factor method.",
        "explanation": "First, transform the equation into standard form, then find the integrating factor, and finally solve for y."
    },
    { 
        "question": "Find the solution to the differential equation dy/dx = 2x + y + e^(2x).", 
        "options": ["y = 2x + x^2 + e^(2x) + C", "y = 3x^2 + e^(2x) + C", "y = 2x + e^(2x) + C", "y = x^2 + e^(2x) + C"], 
        "answer": "y = 2x + x^2 + e^(2x) + C", 
        "hint": "This is a first-order linear differential equation. Solve using integrating factor method.",
        "explanation": "First, transform the equation into standard form, then find the integrating factor, and finally solve for y."
    },
    { 
        "question": "Solve the differential equation dy/dx = 2x + y^2.", 
        "options": ["y = x^2 + C", "y = e^(2x) + C", "y = x^3 + C", "y = e^(x^2) + C"], 
        "answer": "y = e^(x^2) + C", 
        "hint": "This is a separable differential equation. Separate variables and integrate both sides.",
        "explanation": "After separating variables and integrating, the solution is obtained in the form y = e^(x^2) + C, where C is the constant of integration."
    },
    { 
        "question": "Solve the differential equation dy/dx = y^2 - x.", 
        "options": ["y = x^2 + C", "y = e^(-x) + C", "y = x^3 + C", "y = e^(x) + C"], 
        "answer": "y = e^(-x) + C", 
        "hint": "This is a separable differential equation. Separate variables and integrate both sides.",
        "explanation": "After separating variables and integrating, the solution is obtained in the form y = e^(-x) + C, where C is the constant of integration."
    },
    { 
        "question": "Find the solution to the differential equation dy/dx = (2x + y)^2.", 
        "options": ["y = x^2 + C", "y = e^(2x) + C", "y = x^3 + C", "y = -1/(2x) + C"], 
        "answer": "y = e^(2x) + C", 
        "hint": "This is a separable differential equation. Separate variables and integrate both sides.",
        "explanation": "After separating variables and integrating, the solution is obtained in the form y = e^(2x) + C, where C is the constant of integration."
    },
    { 
        "question": "Solve the differential equation dy/dx = y^2 + y + x.", 
        "options": ["y = x^2 + C", "y = e^(-x) + C", "y = x^3 + C", "y = e^(x) + C"], 
        "answer": "y = e^(x) + C", 
        "hint": "This is a separable differential equation. Separate variables and integrate both sides.",
        "explanation": "After separating variables and integrating, the solution is obtained in the form y = e^(x) + C, where C is the constant of integration."
    },
    { 
        "question": "Find the solution to the differential equation dy/dx = (3x + y)/(2x + y).", 
        "options": ["y = x^2 + C", "y = 2x^2 + C", "y = e^(2x) + C", "y = x^3 + C"], 
        "answer": "y = x^2 + C", 
        "hint": "This is a first-order linear differential equation. Solve using integrating factor method.",
        "explanation": "First, transform the equation into standard form, then find the integrating factor, and finally solve for y."
    }
],
    SequenceAndSeries : [
    { 
        "question": "Find the sum of the first 10 terms of the geometric sequence: 3, 6, 12, 24, ...", 
        "options": ["30720", "30750", "30780", "30810"], 
        "answer": "30750", 
        "hint": "Use the formula for the sum of a geometric series.",
        "explanation": "The sum of the first n terms of a geometric series is given by S_n = a * (1 - r^n) / (1 - r), where a is the first term and r is the common ratio."
    },
    { 
        "question": "Determine if the series ∑(1/n) from n = 1 to ∞ converges or diverges.", 
        "options": ["Converges", "Diverges"], 
        "answer": "Diverges", 
        "hint": "Consider the Harmonic series and its divergence.",
        "explanation": "The series ∑(1/n) is known as the Harmonic series, which diverges. This can be shown using various convergence tests."
    },
    { 
        "question": "Find the sum of the infinite series ∑(1/2^n) from n = 0 to ∞.", 
        "options": ["1", "2", "3", "4"], 
        "answer": "2", 
        "hint": "This is a geometric series with common ratio less than 1.",
        "explanation": "The sum of an infinite geometric series with |r| < 1 is given by S = a / (1 - r), where a is the first term and r is the common ratio."
    },
    { 
        "question": "Determine the convergence of the series ∑(n^2 / 2^n) from n = 1 to ∞.", 
        "options": ["Converges", "Diverges"], 
        "answer": "Converges", 
        "hint": "Use the ratio test to test for convergence.",
        "explanation": "Apply the ratio test: lim (n^2 / 2^(n+1)) / (n^2 / 2^n) as n approaches infinity. If the limit is less than 1, the series converges."
    },
    { 
        "question": "Find the sum of the series ∑(3n / 4^n) from n = 0 to ∞.", 
        "options": ["3", "4", "5", "6"], 
        "answer": "4", 
        "hint": "Rewrite the series as a geometric series.",
        "explanation": "Rewrite the series as ∑(3/4)^n from n = 0 to ∞, which is a geometric series with a = 3/4 and r = 3/4. Then use the formula for the sum of a geometric series."
    },
    { 
        "question": "Determine the convergence of the series ∑(n^n / n!) from n = 1 to ∞.", 
        "options": ["Converges", "Diverges"], 
        "answer": "Diverges", 
        "hint": "Use the ratio test to test for convergence.",
        "explanation": "Apply the ratio test: lim ((n+1)^n / (n+1)!) / (n^n / n!) as n approaches infinity. If the limit is less than 1, the series converges."
    },
    { 
        "question": "Find the sum of the series ∑((-1)^n * n) from n = 1 to ∞.", 
        "options": ["ln(2)", "-ln(2)", "1/ln(2)", "-1/ln(2)"], 
        "answer": "-ln(2)", 
        "hint": "This is an alternating series; use the alternating series test.",
        "explanation": "Apply the alternating series test to determine convergence. Then use appropriate methods to find the sum."
    },
    { 
        "question": "Find the sum of the series ∑(1/(n * (n + 1))) from n = 1 to ∞.", 
        "options": ["1", "1/2", "2", "1/4"], 
        "answer": "1", 
        "hint": "Rewrite the series and use partial fraction decomposition.",
        "explanation": "Rewrite the series as ∑(1/n - 1/(n + 1)). Then sum the telescoping series."
    },
    { 
        "question": "Determine the convergence of the series ∑(2^n / n!) from n = 0 to ∞.", 
        "options": ["Converges", "Diverges"], 
        "answer": "Converges", 
        "hint": "Use the ratio test to test for convergence.",
        "explanation": "Apply the ratio test: lim (2^(n+1) / (n+1)!) / (2^n / n!) as n approaches infinity. If the limit is less than 1, the series converges."
    },
    { 
        "question": "Find the sum of the series ∑(n / 3^n) from n = 0 to ∞.", 
        "options": ["1", "2", "3", "4"], 
        "answer": "3", 
        "hint": "Rewrite the series as a geometric series.",
        "explanation": "Rewrite the series as ∑(n/3)^n from n = 0 to ∞, which is a geometric series with a = 1/3 and r = n/3. Then use the formula for the sum of a geometric series."
    }
],
    vectorCalc : [
    { 
        "question": "Find the curl of the vector field F(x, y, z) = ⟨2xyz, x^2z, xy^2⟩.", 
        "options": ["curl F = ⟨0, 0, 0⟩", "curl F = ⟨yz^2 - z^2, xz - x, -2xyz + 2y⟩", "curl F = ⟨yz^2 - z^2, xz - x, 2xyz - 2y⟩", "curl F = ⟨0, 0, -2xyz + 2y⟩"], 
        "answer": "curl F = ⟨yz^2 - z^2, xz - x, 2xyz - 2y⟩", 
        "hint": "Use the formula for the curl of a vector field.",
        "explanation": "The curl of a vector field F = ⟨P, Q, R⟩ is given by ∇ × F = (∂R/∂y - ∂Q/∂z) i + (∂P/∂z - ∂R/∂x) j + (∂Q/∂x - ∂P/∂y) k."
    },
    { 
        "question": "Evaluate the line integral ∫C F · dr, where F(x, y, z) = ⟨y^2, xz, z⟩ and C is the curve defined by r(t) = ⟨t^2, t^3, t⟩ for 0 ≤ t ≤ 1.", 
        "options": ["5/6", "7/6", "1/3", "5/3"], 
        "answer": "5/6", 
        "hint": "Parameterize the curve r(t) and use the definition of line integral.",
        "explanation": "The line integral of a vector field F along a curve C parametrized by r(t) is given by ∫C F · dr = ∫[a, b] F(r(t)) · r'(t) dt."
    },
    { 
        "question": "Find the divergence of the vector field F(x, y, z) = ⟨x^2, y^2, z^2⟩.", 
        "options": ["div F = 3(x + y + z)", "div F = 2(x + y + z)", "div F = x + y + z", "div F = 3xyz"], 
        "answer": "div F = 3(x + y + z)", 
        "hint": "Use the formula for the divergence of a vector field.",
        "explanation": "The divergence of a vector field F = ⟨P, Q, R⟩ is given by div F = ∂P/∂x + ∂Q/∂y + ∂R/∂z."
    },
    { 
        "question": "Find the flux of the vector field F(x, y, z) = ⟨x^2, y^2, z^2⟩ across the surface S, where S is the portion of the plane z = 1 - x - y above the region R bounded by the lines x = 0, y = 0, and x + y = 1.", 
        "options": ["5/12", "1/3", "1/6", "1/2"], 
        "answer": "5/12", 
        "hint": "Parameterize the surface S and use the definition of flux.",
        "explanation": "The flux of a vector field F across a surface S is given by ∬S F · dS = ∬R F(r(u, v)) · (ru × rv) dA, where r(u, v) parameterizes S."
    },
    { 
        "question": "Find the work done by the force field F(x, y, z) = ⟨x^2, y^2, z^2⟩ in moving a particle along the curve C given by r(t) = ⟨t, t^2, t^3⟩ from (0, 0, 0) to (1, 1, 1).", 
        "options": ["15/14", "1/14", "5/14", "5/7"], 
        "answer": "5/7", 
        "hint": "Use the definition of work done by a force field along a curve.",
        "explanation": "The work done by a force field F along a curve C parametrized by r(t) from a to b is given by ∫[a, b] F(r(t)) · r'(t) dt."
    },
    { 
        "question": "Find the parametric equations for the tangent line to the curve r(t) = ⟨t, t^2, t^3⟩ at the point (1, 1, 1).", 
        "options": ["x = t + 1, y = t^2 + 1, z = t^3 + 1", "x = t - 1, y = t^2 - 1, z = t^3 - 1", "x = t, y = t^2, z = t^3", "x = t + 1, y = t^2 + 1, z = t^3 + 1"], 
        "answer": "x = t + 1, y = t^2 + 1, z = t^3 + 1", 
        "hint": "Find the derivative of the curve r(t) and use the point (1, 1, 1) to find the equation of the tangent line.",
        "explanation": "The parametric equations for the tangent line to a curve r(t) at a point (x0, y0, z0) are given by x = x0 + at, y = y0 + bt, z = z0 + ct, where a, b, and c are the components of the derivative of r(t) at that point."
    },
    { 
        "question": "Find the area enclosed by the curves y = x^2 and y = x^3.", 
        "options": ["1/20", "1/10", "1/5", "1/4"], 
        "answer": "1/20", 
        "hint": "Find the intersection points of the curves and use the formula for the area between curves.",
        "explanation": "The area enclosed by two curves y = f(x) and y = g(x) from x = a to x = b is given by ∫[a, b] |f(x) - g(x)| dx."
    },
    { 
        "question": "Evaluate the surface integral ∬S F · dS, where F(x, y, z) = ⟨x^2, y^2, z^2⟩ and S is the part of the surface z = x^2 + y^2 bounded by the cylinder x^2 + y^2 = 1 and the plane z = 1.", 
        "options": ["5π/6", "2π/3", "π/2", "π"], 
        "answer": "5π/6", 
        "hint": "Parameterize the surface S and use the definition of surface integral.",
        "explanation": "The surface integral of a vector field F across a surface S is given by ∬S F · dS = ∬R F(r(u, v)) · (ru × rv) dA, where r(u, v) parameterizes S."
    },
    { 
        "question": "Find the flux of the vector field F(x, y, z) = ⟨y^2, z^2, x^2⟩ across the surface S, where S is the part of the sphere x^2 + y^2 + z^2 = 1 in the first octant.", 
        "options": ["π/8", "π/4", "π/2", "π"], 
        "answer": "π/8", 
        "hint": "Parameterize the surface S and use the definition of flux.",
        "explanation": "The flux of a vector field F across a surface S is given by ∬S F · dS = ∬R F(r(u, v)) · (ru × rv) dA, where r(u, v) parameterizes S."
    },
     { 
        "question": "Find the volume enclosed by the cone z = √(x^2 + y^2) and the plane z = 1.", 
        "options": ["π/6", "π/3", "π/4", "π/2"], 
        "answer": "π/6", 
        "hint": "Set up the triple integral in cylindrical coordinates.",
        "explanation": "The volume enclosed by two surfaces can be found using a triple integral over the region shared by the surfaces."
    }
],
    multipleInt : [
    { 
        "question": "Evaluate the triple integral ∭E (x^2 + y^2 + z^2) dV, where E is the region bounded by the cylinder x^2 + y^2 = 1 and the planes z = 0 and z = 2.", 
        "options": ["(16π/3)", "(8π/3)", "(4π/3)", "(2π/3)"], 
        "answer": "(8π/3)", 
        "hint": "Use cylindrical coordinates.",
        "explanation": "For cylindrical coordinates, the triple integral becomes ∭E f(x, y, z) dV = ∫[0, 2π] ∫[0, 1] ∫[0, 2] (r^2 + z^2) r dz dr dθ."
    },
    { 
        "question": "Evaluate the double integral ∬R (x^2 + y^2) dA, where R is the region bounded by the curves y = x^2 and y = 2x.", 
        "options": ["25/12", "5/6", "7/6", "25/6"], 
        "answer": "25/12", 
        "hint": "Use polar coordinates.",
        "explanation": "For polar coordinates, the double integral becomes ∬R f(x, y) dA = ∫[0, 2π] ∫[0, 1] (r^3 cos^2(θ) + r^3 sin^2(θ)) dr dθ."
    },
    { 
        "question": "Evaluate the triple integral ∭E (x + y + z) dV, where E is the solid tetrahedron bounded by the planes x = 0, y = 0, z = 0, and x + y + z = 1.", 
        "options": ["1/8", "1/6", "1/4", "1/3"], 
        "answer": "1/6", 
        "hint": "Set up the limits of integration for each variable.",
        "explanation": "Set up the triple integral with appropriate limits of integration: ∭E (x + y + z) dV = ∫[0, 1] ∫[0, 1 - x] ∫[0, 1 - x - y] (x + y + z) dz dy dx."
    },
    { 
        "question": "Evaluate the triple integral ∭E (x^2 + y^2 + z^2) dV, where E is the region enclosed by the sphere x^2 + y^2 + z^2 = 4.", 
        "options": ["256π/15", "128π/15", "64π/15", "32π/15"], 
        "answer": "128π/15", 
        "hint": "Use spherical coordinates.",
        "explanation": "For spherical coordinates, the triple integral becomes ∭E f(x, y, z) dV = ∫[0, 2π] ∫[0, π] ∫[0, 2] (ρ^4 sin^3(θ)) dρ dθ dφ."
    },
    { 
        "question": "Evaluate the double integral ∬R y^2 e^(xy) dA, where R is the region bounded by the curves y = x^2 and y = 2x.", 
        "options": ["5/3", "4/3", "7/3", "8/3"], 
        "answer": "5/3", 
        "hint": "Use polar coordinates.",
        "explanation": "For polar coordinates, the double integral becomes ∬R f(x, y) dA = ∫[0, 2π] ∫[0, 1] (r^3 sin^2(θ) e^(r^2 cos(θ))) dr dθ."
    },
    { 
        "question": "Evaluate the triple integral ∭E z^2 dV, where E is the region bounded by the cylinders x^2 + y^2 = 1 and y^2 + z^2 = 1.", 
        "options": ["(16π/9)", "(8π/9)", "(4π/9)", "(2π/9)"], 
        "answer": "(8π/9)", 
        "hint": "Use cylindrical coordinates.",
        "explanation": "For cylindrical coordinates, the triple integral becomes ∭E f(x, y, z) dV = ∫[0, 2π] ∫[0, 1] ∫[0, √(1 - y^2)] (z^2 r) dz dr dθ."
    },
    { 
        "question": "Evaluate the double integral ∬R xy dA, where R is the region bounded by the curves y = x^2 and y = √(2x).", 
        "options": ["5/12", "5/6", "7/6", "5/4"], 
        "answer": "5/12", 
        "hint": "Set up the limits of integration for each variable.",
        "explanation": "Set up the double integral with appropriate limits of integration: ∬R xy dA = ∫[0, 2] ∫[0, √(2x)] (xy) dy dx."
    },
    { 
        "question": "Evaluate the triple integral ∭E xyz dV, where E is the region bounded by the planes x = 0, y = 0, z = 0, and x + y + z = 1.", 
        "options": ["1/96", "1/48", "1/32", "1/24"], 
        "answer": "1/24", 
        "hint": "Set up the limits of integration for each variable.",
        "explanation": "Set up the triple integral with appropriate limits of integration: ∭E xyz dV = ∫[0, 1] ∫[0, 1 - x] ∫[0, 1 - x - y] (xyz) dz dy dx."
    },
    { 
        "question": "Evaluate the double integral ∬R (x + y) dA, where R is the region bounded by the curves y = √(x), y = 1, and x = 0.", 
        "options": ["(4/3)", "(5/3)", "(7/3)", "(8/3)"], 
        "answer": "(5/3)", 
        "hint": "Set up the limits of integration for each variable.",
        "explanation": "Set up the double integral with appropriate limits of integration: ∬R (x + y) dA = ∫[0, 1] ∫[0, y^2] (x + y) dx dy."
    },
    { 
        "question": "Evaluate the double integral ∬R y^2 e^(xy) dA, where R is the region bounded by the curves y = x^2 and y = 2x.", 
        "options": ["5/3", "4/3", "7/3", "8/3"], 
        "answer": "5/3", 
        "hint": "Use polar coordinates.",
        "explanation": "For polar coordinates, the double integral becomes ∬R f(x, y) dA = ∫[0, 2π] ∫[0, 1] (r^3 sin^2(θ) e^(r^2 cos(θ))) dr dθ."
    }
] 

};

const frqQuestions = {
    frq1: {
        question: "Solve the differential equation dy/dx = xy with the intial condition y(0) = 3. ",
        parts: {
            a: {
                question: "Solve the differential equation.",
                answer: "y = Ce^x^2/2",
                hint: "Use seperation of variables.",
                explanation: "By seperating the variables and integrating each side, then solving for y, you get y = Ce^x^2/2."
            },
            b: {
                question: "Find the particular solution using the initial condition.",
                answer: "y = 3e^x^2/2",
                hint: "Solve for C using the differentiated equation.",
                explanation: "Plugging in x = 0 and y = 3, you get C = 3."
            },
            c: {
                question: "Determine the value of the solution at x = 1.",
                answer: "3e^1/2",
                hint: "Solve for y when x = 1.",
                explanation: "Plugging in x = 1 into the particular solution, the answer is 3e^1/2."
            },
            d: {
                question: "Find the equation of the tangent line to the curve at x = 1 (point-slope form).",
                answer: "y - 3e^1/2 = 3e^1/2(x - 1)",
                hint: "Solve for dy/dx at x = 1.",
                explanation: "By plugginig in x = 1 and y = 3e^1/2 into the equation for dy/dx, the slope is 3e^1/2. Then plug these values into point-slope form."
            }
        }
    },
    frq2: {
        question: "Consider the function f(x) = x^3-3x^2+4 ",
        parts: {
            a: {
                question: "Find the first derivative f'(x).",
                answer: "f'(x) = 3x^2 - 6x",
                hint: "Use the power rule for derivatives.",
                explanation: "Using the power rule the derivative is 3x^2 - 6x."
            },
            b: {
                question: "Determine the critical points of f(x).",
                answer: "x = 0, x = 2",
                hint: "The critical points of a function are where f'(x) = 0.",
                explanation: "Solving for when 3x^2 - 6x = 0, the critical points are x = 0 and x = 2."
            },
            c: {
                question: "Find the local maxima of f(x).",
                answer: "(0, 4)",
                hint: "Use the first or second derivative test.",
                explanation: "Using the first derivative test, you can see f'(x) changes from positive to negative at x = 0. Using the second derivative test, you can see f''(x) < 0 at x = 0."
            },
            d: {
                question: "Find the coordinates of the inflection points of f(x).",
                answer: "(1, 2)",
                hint: "The inflection points of f(x) are when f''(x) changes signs.",
                explanation: "By solving for when f''(x) is equal to 0, you get x = 1. Then, testing this point shows that f''(x) changes signs on the point, making it a point of inflection."
            }
        }
    },
    frq3: {
        question: "Problem 3: ",
        parts: {
            a: {
                question: "What is the integral of 3x^2 dx?",
                answer: "x^3 + C",
                hint: "Apply the power rule for integration.",
                explanation: "The integral of 3x^2 is x^3, as you increase the power by one and divide by the new power."
            },
            b: {
                question: "Find the derivative of e^(2x).",
                answer: "2e^(2x)",
                hint: "Use the chain rule for differentiation.",
                explanation: "The derivative of e^(2x) is 2e^(2x) because of the chain rule."
            },
            c: {
                question: "Evaluate the integral of sin(x) dx.",
                answer: "-cos(x) + C",
                hint: "Think about the function whose derivative is sin(x).",
                explanation: "The integral of sin(x) is -cos(x) because the derivative of -cos(x) is sin(x)."
            },
            d: {
                question: "Find the derivative of ln|x|.",
                answer: "1/x",
                hint: "This is similar to the derivative of ln(x).",
                explanation: "The derivative of ln|x| is 1/x, similar to ln(x)."
            }
        }
    },
    frq4: {
        question: "Problem 4: ",
        parts: {
            a: {
                question: "What is the integral of sec^2(x) dx?",
                answer: "tan(x) + C",
                hint: "Think about the function whose derivative is sec^2(x).",
                explanation: "The integral of sec^2(x) is tan(x) because the derivative of tan(x) is sec^2(x)."
            },
            b: {
                question: "Find the derivative of cos(x).",
                answer: "-sin(x)",
                hint: "Recall the basic differentiation rule for cosine.",
                explanation: "The derivative of cos(x) is -sin(x) as per the standard differentiation rules."
            },
            c: {
                question: "Evaluate the integral of 1/(1 + x^2) dx.",
                answer: "arctan(x) + C",
                hint: "This is a standard integral result for inverse trigonometric functions.",
                explanation: "The integral of 1/(1 + x^2) is arctan(x) because the derivative of arctan(x) is 1/(1 + x^2)."
            },
            d: {
                question: "Find the derivative of sinh(x).",
                answer: "cosh(x)",
                hint: "Recall the hyperbolic function differentiation rules.",
                explanation: "The derivative of sinh(x) is cosh(x) based on the standard differentiation rules for hyperbolic functions."
            }
        }
    },
    frq5: {
        question: "Problem 5: ",
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
            <p>${index + 1}. ${q.question} <button type="button" class="btn btn-link p-0" onclick="showHint(${index})">(Hint)</button></p>
            ${q.options.map(option => `
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="question${index}" value="${option}">
                    <label class="form-check-label">
                        ${option}
                    </label>
                </div>
            `).join('')}
            <div class="modal fade" id="hintModal${index}" tabindex="-1" role="dialog" aria-labelledby="hintModalLabel${index}" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="hintModalLabel${index}">Hint</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            ${q.hint}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        questionsContainer.appendChild(questionElement);
    });

    // Show the quiz container
    quizContainer.style.display = 'block';
}

function showHint(index) {
    $(`#hintModal${index}`).modal('show');
}

function submitQuiz() {
    const topic = document.getElementById('topic').value;
    const questions = document.querySelectorAll('.question');
    let score = 0;
    let resultHTML = '<h2>Quiz Result</h2>';

    questions.forEach((q, index) => {
        const selectedOption = q.querySelector(`input[name="question${index}"]:checked`);
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
                <hr>
            </div>`;
        }
    });

    resultHTML += `<p>Your score is ${score} out of ${questions.length}</p>`;
    document.getElementById('result-container').innerHTML = resultHTML;
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('quiz-container').style.display = 'none';
}

function loadFRQ() {
    const frqTopic = document.getElementById('frq-topic').value;
    const frqQuestionContainer = document.getElementById('frq-question');
    const frqContainer = document.getElementById('frq-container');
    const frqResultContainer = document.getElementById('frq-result-container');

    // Clear previous FRQ
    frqQuestionContainer.innerHTML = '';
    frqResultContainer.innerHTML = '';

    // Get the FRQ for the selected topic
    const frqQuestion = frqQuestions[frqTopic];

    // Display the FRQ question
    frqQuestionContainer.innerHTML = `<p>${frqQuestion.question}</p>`;

    for (const part in frqQuestion.parts) {
        const partQuestion = frqQuestion.parts[part];
        frqQuestionContainer.innerHTML += `
            <p>${part}. ${partQuestion.question} <button type="button" class="btn btn-link p-0" onclick="showFrqHint('${frqTopic}', '${part}')">(Hint)</button></p>
            <div class="modal fade" id="frqHintModal-${frqTopic}-${part}" tabindex="-1" role="dialog" aria-labelledby="frqHintModalLabel-${frqTopic}-${part}" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="frqHintModalLabel-${frqTopic}-${part}">Hint</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            ${partQuestion.hint}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <input type="text" id="frq-answer-${frqTopic}-${part}" class="form-control mb-3">
        `;
    }

    // Show the FRQ container
    frqContainer.style.display = 'block';
}

function showFrqHint(frqTopic, part) {
    $(`#frqHintModal-${frqTopic}-${part}`).modal('show');
}

function normalizeString(str) {
    return str.replace(/\s+/g, '').toLowerCase();
}

function areNumbersClose(num1, num2, tolerance = 0.01) {
    return Math.abs(parseFloat(num1) - parseFloat(num2)) <= tolerance;
}

function submitFRQ() {
    const frqTopic = document.getElementById('frq-topic').value;
    const frqQuestion = frqQuestions[frqTopic];
    const frqResultContainer = document.getElementById('frq-result-container');
    let score = 0;
    let resultHTML = '<h2>FRQ Result</h2>';

    for (const part in frqQuestion.parts) {
        const partQuestion = frqQuestion.parts[part];
        let userAnswer = document.getElementById(`frq-answer-${frqTopic}-${part}`).value.trim();
        let correctAnswer = partQuestion.answer.trim();
        
        const normalizedUserAnswer = normalizeString(userAnswer);
        const normalizedCorrectAnswer = normalizeString(correctAnswer);

        const isCorrect = normalizedUserAnswer === normalizedCorrectAnswer || 
                          (!isNaN(userAnswer) && !isNaN(correctAnswer) && 
                          areNumbersClose(userAnswer, correctAnswer));

        if (isCorrect) {
            score++;
        } else {
            resultHTML += `<div class="frq-result">
                <p><strong>Part ${part}:</strong> ${partQuestion.question}</p>
                <p><strong>Your Answer:</strong> ${userAnswer}</p>
                <p><strong>Correct Answer:</strong> ${correctAnswer}</p>
                <p><strong>Explanation:</strong> ${partQuestion.explanation}</p>
                <hr>
            </div>`;
        }
    }

    resultHTML += `<p>Your score is ${score} out of ${Object.keys(frqQuestion.parts).length}</p>`;
    frqResultContainer.innerHTML = resultHTML;
    frqResultContainer.style.display = 'block';
    document.getElementById('frq-container').style.display = 'none';
}


function restartFRQ() {
    const frqForm = document.getElementById('frq-form');
    const frqContainer = document.getElementById('frq-container');
    const frqResultContainer = document.getElementById('frq-result-container');

    // Reset the FRQ form
    frqForm.reset();

    // Hide the FRQ result container and show the FRQ selection container
    frqResultContainer.style.display = 'none';
    frqContainer.style.display = 'block';
}
    
