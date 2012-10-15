
var lastEvaluatedExpression = '';
var lastAnswer = 0;
var parser = new Parser();

var cellClicked = function(){
	document.getElementById('expressionbox').value += this.innerHTML;
}

function addTextToExpressionBox(text) {"use strict";

	var expressionBox = document.getElementById('expressionbox');
	//Check to see if the text being added is an operator. If it is, and the box is empty, the program assumes it's trying to
	//work with the answer.
	if ((expressionBox.value === '' && (text === "+" || text === "*" || text === "/"))) {
		expressionBox.value += 'Ans';
	}
	//Add the text to the bar. The text is defined in index.html as the value passed by the buttons in the onclick() method.
		expressionBox.value += text;
}

function clearExpressionBox() {"use strict";
	//Set the ExpressionBox to an empty string.
	document.getElementById('expressionbox').value = '';
}

function equalsButtonPressed() {
	//This method is called directly by the equals button.
	//Get the expressionbox.
	var expressionBox = document.getElementById('expressionbox');
	//Check to see what's in the expressionbox. If it's empty, and there is something stored in the lastEvaluatedExpression,
	//then set the box's value to the last expression
	if (expressionBox.value === '') {
		var cell = document.getElementById('historytable').rows[0].cells[0];
		expressionBox.value = cell.firstChild.data;
	}
	
	var expressionString = expressionBox.value;
	expressionString = expressionString.replace(" ", "");
	var rootExpressionNode = parser.parse(expressionString);
	var answer = rootExpressionNode.evaluateExpression();
	lastAnswer = answer;
	var newRow = document.getElementById('historytable').insertRow(0);
	var expressionCell = newRow.insertCell(0);
	expressionCell.className = "expressioncell";
	expressionCell.innerHTML = expressionString;
	expressionCell.onclick = cellClicked;
	var answerCell = newRow.insertCell(1);
	answerCell.className = "answercell";
	answerCell.innerHTML = answer;
	answerCell.onclick = cellClicked;
	clearExpressionBox();
}

function backspaceExpressionBox() {"use strict";
	//Get the expressionbox's value.
	var expressionString = document.getElementById('expressionbox').value;
	//Return the same string, minus the last letter.
	var newString = expressionString.substring(0, (expressionString.length - 1));
	//Set the expressionbox to the new string.
	document.getElementById('expressionbox').value = newString;
}

// Function which evaluates to the previous answer
function Ans(left, right){
	var answer = lastAnswer;
	if(right != null){
		answer *= right.evaluateExpression();
	}
	return answer;
}

function ans(left, right){
	return Ans(left, right);
}