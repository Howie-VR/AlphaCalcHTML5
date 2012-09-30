function addTextToExpressionBox(text) {
	var box = document.getElementById('expressionbox');
	box.value += text;
}

function addSolutionToHistoryBox() {
	document.getElementById('historybox').value = solution();
	clearExpressionBox();
}

function solution() {
	var box = document.getElementById('expressionbox');
	var expression = Parser.evaluate(box.value);
	return expression;
}

function clearExpressionBox() {
	document.getElementById('expressionbox').value = '';
}

function backspaceExpressionBox() {
	var expressionString = document.getElementById('expressionbox').value;
	var newString = expressionString.substring(0, (expressionString.length - 1));
	document.getElementById('expressionbox').value = newString;
}
