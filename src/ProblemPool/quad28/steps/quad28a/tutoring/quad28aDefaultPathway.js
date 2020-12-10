var hints = [{id: "quad28a-h1", type: "hint", dependencies: [], title: "Factoring", text: "Look for two numbers whose product equals -21 and whose sum equals -4."}, {id: "quad28a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-7, 3"], dependencies: ["quad28a-h1"], title: "Factoring", text: "Look at the possible factors of -21. Which pair of factors is equal -4?"}, {id: "quad28a-h3", type: "hint", dependencies: ["quad28a-h2"], title: "Factoring", text: "The factors will be $$\\left(x-7\\right) \\left(x+3\\right)=0$$ Solve the equation."}, {id: "quad28a-h4", type: "hint", dependencies: ["quad28a-h3"], title: "Zero-Product Property", text: "Use the zero-product property. Set each factor equal to zero and solve."}, {id: "quad28a-h5", type: "hint", dependencies: ["quad28a-h4"], title: "Zero-Product Property", text: "Solve $$x-7=0$$"}, {id: "quad28a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["7"], dependencies: ["quad28a-h5"], title: "Solving Equations", text: "What is x equal to?"}, {id: "quad28a-h7", type: "hint", dependencies: ["quad28a-h4"], title: "Zero-Product Property", text: "Solve $$x+3=0$$"}, {id: "quad28a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-3"], dependencies: ["quad28a-h7"], title: "Solving Equations", text: "What is x equal to?"}, {id: "quad28a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3, -3"], dependencies: ["quad28a-h6", "quad28a-h8"], title: "X-Intercepts", text: "What are the solutions?"}, ]; export {hints};