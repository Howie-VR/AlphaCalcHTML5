/*
 * Written by Howie Jordan
 * Copyright (c) 2012 Valley Rocket, LLC
 * Open Source license pending.
 *
 * All available math functions defined herein.
 * In accordance with the expected format for the expression tree, all math functions herein follow the followin rules:
 * 1) The function must have the same name as the character string an end-user would expect to type to invoke it.
 *    e.g.) the user expects that cos(7) finds the cosine of 7, so the function to find the cosine must be called cos.
 * 2) All functions must take two parameters. These are the node's left and right children. In the case of non-operation math functions,
 *    i.e. any function save for those representing +,-,*,/, and ^, will likely only use the right child. If the function takes more than one paramater,
 *    such as "min" which calculates the minimum value from a list of values, the right child will contain an array of expression trees.
 *
 *
 */

function add(left, right) {
	return left.evaluateExpression() + right.evaluateExpression();
}

function subtract(left, right) {
	// In the event that the left node is null, treat it as the additive inv of the right node
	if (left === null) {
		return right.evaluateExpression() * -1;
	}
	return left.evaluateExpression() - right.evaluateExpression();
}

function multiply(left, right) {
	return left.evaluateExpression() * right.evaluateExpression();
}

function divide(left, right) {
	return left.evaluateExpression() / right.evaluateExpression();
}

function pow(left, right) {
	return Math.pow(left.evaluateExpression(), right.evaluateExpression());
}

function mod(left, right) {
	return right.evaluateExpression(0) % right.evaluateExpression(1);
}

function abs(left, right) {
	return Math.abs(right.evaluateExpression());
}

function recip(left, right) {
	//1 over the number.
	return 1 / right.evaluateExpression();
}

function inv(left, right) {
	//Raise to the -1 power.
	return Math.pow(right.evaluateExpression(), -1);
}

function sqrt(left, right) {
	return Math.sqrt(right.evaluateExpression());
}

function nthrt(left, right) {
	return Math.pow(right.evaluateExpression(0), recip(null, right.getNodeAt(1)));
}

function ln(left, right) {
	//Javascript's 'log' function is actually the natural log. Weird, I know.
	return Math.log(right.evaluateExpression());
}

function log(left, right) {
	//We have to use the Change of Base formula to get a real logarithn. First World Problems.
	return Math.log(right.evaluateExpression()) / Math.log(10);
}

function logBase(left, right) {
	//Change of base with a customizable base.
	return Math.log(right.evaluateExpression(0)) / Math.log(right.evaluateExpression(1));
}

function sin(left, right) {
	return Math.sin(right.evaluateExpression());
}

function cos(left, right) {
	return Math.cos(right.evaluateExpression());
}

function tan(left, right) {
	return Math.tan(right.evaluateExpression());
}

//The arc functions are just the regular functions inverted.

function asin(left, right) {
	return Math.pow(sin(null, right), -1);
}

function acos(left, right) {
	return Math.pow(cos(null, right), -1);
}

function atan(left, right) {
	return Math.pow(tan(null, right), -1);
}

function sec(left, right) {
	return Math.pow(sin(null, right), -1);
}

function csc(left, right) {
	return Math.pow(cos(null, right), -1);
}

function cot(left, right) {
	return 1 / tan(null, right);
}

function asec(left, right) {
	return Math.pow(sec(null, right), -1);
}

function acsc(left, right) {
	return Math.pow(csc(null, right), -1);
}

function acot(left, right) {
	return Math.pow(cot(null, right), -1);
}

function sec(left, right) {
	return inv(null, sin(null, right));
}

function csc(left, right) {
	return inv(null, cos(null, right));
}

function cot(left, right) {
	return inv(null, tan(null, right));
}

function asin(left, right) {
	return Math.asin(right.evaluateExpression());
}

function acos(left, right) {
	return Math.acos(right.evaluateExpression());
}

function atan(left, right) {
	return Math.atan(right.evaluateExpression());
}

function asec(left, right) {
	return inv(null, acos(null, right));
}

function acsc(left, right) {
	return inv(null, asin(null, right));
}

function acot(left, right) {
	return inv(null, atan(null, right));
}

function avg(left, right) {
	var average = 0;
	for (var i = 0; i < right.getLength(); i++) {
		average += right.evaluateExpression(i);
	}
	return average / right.length;
}

function sum(left, right) {
	var total = 0;
	for (var i = 0; i < right.getLength(); i++) {
		total += right.evaluateExpression(i);
	}
	return total;
}

function min(left, right) {
	var min = right.evaluateExpression(0);
	for (var i = 1; i < right.getLength(); i++) {
		var m = right.evaluateExpression(i)
		if (m < min) {
			min = m;
		}
	}
	return min;
}

function count(left, right) {
	return right.length;
}

function max(left, right) {
	var max = right.evaluateExpression(0);
	for (var i = 1; i < right.getLength(); i++) {
		var m = right.evaluateExpression(i);
		if (m > max) {
			max = m;
		}
	}
	return max;
}

function factorial(left, right) {
	var factorial = 1;
	right = right.evaluateExpression()
	for (var i = 2; i <= right; i++) {
		factorial *= i;
	}
	return factorial
}

function random(left, right) {
	return Math.random();
}

