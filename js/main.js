var lastEvaluatedExpression = '';
var parser = new Parser();

function addTextToExpressionBox(text) {
	"use strict";
	var box = document.getElementById('expressionbox');
	//Check to see if the text being added is an operator (or @, which is our standin for '(Ans)'). If it is, and the box is empty, the program assumes it's trying to
	//work with the answer.
	if (box.value === '' && (text === "+" /*|| text === "-" */ || text === "*" || text === "@" || text === "/" || text === "^")) {
		box.value += '(Ans)';
	}
	//Add the text to the bar. The text is defined in index.html as the value passed by the buttons in the onclick() method.
	if (text != '@')
		box.value += text;
}

function equalsButtonPressed() {
	//This method is called directly by the equals button.
	//Get the expressionbox.
	var box = document.getElementById('expressionbox');
	//Check to see what's in the expressionbox. If it's empty, and there is something stored in the lastEvaluatedExpression,
	//then set the box's value to the last expression
	if (box.value === '' && window.lastEvaluatedExpression != '') {
		box.value = window.lastEvaluatedExpression;
	}
	//Then do the solution process.
	addSolutionToHistoryBox();
}

function clearExpressionBox() {
	"use strict";
	//Set the ExpressionBox to an empty string.
	document.getElementById('expressionbox').value = '';
}

function solution() {
	//This method is not called by a button, just inside addSolutionToHistoryBox();
	"use strict";
	//Parse the expression that's in the Expression box. Also, since the parser allows for variable substitution, set the variable 'Ans'
	//to the value of the history box.
	var expression = document.getElementById('expressionbox').value;
<<<<<<< HEAD
	//expression = expression.replace('Ans', document.getElementById('historybox').value);
	var rootExpressionNode = parser.parse(document.getElementById('expressionbox').value);
	var answer = rootExpressionNode.evaluateExpression();
=======
	//Replace 'Ans' in the box with the value in the history box.
	expression = expression.replace('Ans', document.getElementById('historybox').value);
	//Parse expression using parser.js.
	var answer = Parser.evaluate(expression);
>>>>>>> Changed Ans to something more useful
	return answer;
}

function addSolutionToHistoryBox() {
	"use strict";
	//Get the solution.
	var solutionString = solution();
	//Save the expression to the lastEvaluatedExpression var.
	lastEvaluatedExpression = document.getElementById('expressionbox').value;
	//Set the history box and Answer button values to the solution.
	document.getElementById('historybox').value = solutionString;
	document.getElementById('previousanswer').innerText = solutionString;
	//Clear the expression box.
	clearExpressionBox();
}

function backspaceExpressionBox() {
	"use strict";
	//Get the expressionbox's value.
	var expressionString = document.getElementById('expressionbox').value;
	//Return the same string, minus the last letter.
	var newString = expressionString.substring(0, (expressionString.length - 1));
	//Set the expressionbox to the new string. 
	document.getElementById('expressionbox').value = newString;
}