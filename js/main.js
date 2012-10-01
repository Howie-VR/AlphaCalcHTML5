var lastEvaluatedExpression = '';

function addTextToExpressionBox(text) {
	"use strict";
	var box = document.getElementById('expressionbox');
	//Check to see if the text being added is an operator. If it is, and the box is empty, the program assumes it's trying to
	//work with the answer.
	if (box.value === '' && (text === "+" || text === "-" || text === "*" || text === "/")) {
		box.value += 'Ans';
	}
	//Add the text to the bar. The text is defined in index.html as the value passed by the buttons in the onclick() method.
	box.value += text;
}

function equalsButtonPressed() {
	var box = document.getElementById('expressionbox');
	if (box.value === '' && window.lastEvaluatedExpression != '') {
		box.value = window.lastEvaluatedExpression;
	}
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
	var expression = Parser.evaluate(document.getElementById('expressionbox').value, {"Ans" : document.getElementById('historybox').value});
	return expression;
}

function addSolutionToHistoryBox() {
	"use strict";
	//Get the solution. This method is called directly by the equals button.
	var solutionString = solution();
	//Set the history box and Answer button values to the solution.
	document.getElementById('historybox').value = solutionString;
	document.getElementById('previousanswer').innerText = solutionString;
	//Save the expression to the lastEvaluatedExpression var.
	lastEvaluatedExpression = document.getElementById('expressionbox').value;
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