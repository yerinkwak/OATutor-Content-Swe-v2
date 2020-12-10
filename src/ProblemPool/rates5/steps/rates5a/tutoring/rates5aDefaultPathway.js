var hints = [{id: "rates5a-h1", type: "hint", dependencies: [], title: "Graph", text: "We start by graphing the function out using technology, and we get the following graph:\n##figure1.gif##"}, {id: "rates5a-h2", type: "hint", dependencies: ["rates5a-h1"], title: "Local mimimum", text: "A function f has a local minimum at $$x=b$$ if there exists an interval (a,c) with $$a<b<c$$ such that, for any x in the interval (a,c), f(x)>=f(b). In other words, a local minimum is a low point on the graph."}, {id: "rates5a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["(2,3)"], dependencies: ["rates5a-h2"], title: "Local mimimum", text: "In which interval is the low point of the graph located?", choices: ["(-1,0)", "(0,1)", "(-3,-2)", "(2,3)"]}, {id: "rates5a-h4", type: "hint", dependencies: ["rates5a-h1"], title: "Local Maximum", text: "A function f has a local maximum at $$x=b$$ if there exists an interval (a,c) with $$a<b<c$$ such that, for any x in the interval (a,c), f(x)<=f(b). In other words, a local minimum is a high point on the graph."}, {id: "rates5a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["(-3,-2)"], dependencies: ["rates5a-h4"], title: "Local Maximum", text: "In which interval is the high point of the graph located?", choices: ["(-1,0)", "(0,1)", "(-3,-2)", "(2,3)"]}, ]; export {hints};