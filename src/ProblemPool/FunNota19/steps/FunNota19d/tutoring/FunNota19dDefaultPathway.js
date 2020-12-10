var hints = [{id: "FunNota19d-h1", type: "hint", dependencies: [], title: "Evaluating functions", text: "Given the equation for a function, we should replace the input variable in the equation with the value provided and then calculate the result."}, {id: "FunNota19d-h2", type: "hint", dependencies: ["FunNota19d-h1"], title: "Replacement", text: "Replace the variable x with a, and we get f(a)=abs(a-1)-abs(a+1)."}, {id: "FunNota19d-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-abs(a-1)+abs(a+1)"], dependencies: ["FunNota19d-h2"], title: "Simplification", text: "Simplify -(abs(a-1)-abs(a+1)). What do you get?"}, ]; export {hints};