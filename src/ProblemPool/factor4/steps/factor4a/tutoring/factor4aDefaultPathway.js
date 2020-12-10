var hints = [{id: "factor4a-h1", type: "hint", dependencies: [], title: "Factor the expression", text: "A trinomial of the form $$x^2+bx+c$$ can be written in factored form as(x+p)(x+q)(x+p)(x+q) where $$pq=c$$ and p+q=b."}, {id: "factor4a-h2", type: "hint", dependencies: ["factor4a-h1"], title: "Factor the expression", text: "To factor a polynomial $$x^2+bx+c$$ the first step is to find two numbers with a product of c and a sum of b."}, {id: "factor4a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["6"], dependencies: ["factor4a-h2"], title: "Product of Numbers", text: "What is (-1)*(-6)?"}, {id: "factor4a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-7"], dependencies: ["factor4a-h3"], title: "Sum of Numbers", text: "What is (-1)+(-6)?"}, {id: "factor4a-h5", type: "hint", dependencies: ["factor4a-h4"], title: "In a polynomial $$x^2+bx+c$$ if $$f g=c$$ and $$f+g=b$$ then the polynomial can be factored as (x+f)(x+g).", text: "nan"}, ]; export {hints};