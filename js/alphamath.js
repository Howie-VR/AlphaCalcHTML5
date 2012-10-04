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
	return left.evaluateExpression() % right.evaluateExpression();
}

function recip(left, right) {
	//1 over the number.
	return 1 / right.evaluateExpression();
}

function inv(left, right) {
	//Raise to the -1 power.
	return Math.pow(right, -1);
}

function sqrt(left, right) {
	return Math.sqrt(right.evaluateExpression());
}

function nthrt(left, right) {
	return pow(left.evaluateExpression(), recip(right.evaluateExpression()));
}

function ln(left, right) {
	//Javascript's 'log' function is actually the natural log. Weird, I know.
	return Math.log(null, right.evaluateExpression());
}

function log(left, right) {
	//We have to use the Change of Base formula to get a real logarithn. First World Problems.
	return ln(left.evaluateExpression()) / ln(10);
}

function logBase(left, right) {
	//Change of base with a customizable base.
	return ln(right.evaluateExpression()) / ln(left.evaluateExpression());
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
	return inv(sin(null, right.evaluateExpression()));
}

function acos(left, right) {
	return inv(cos(null, right.evaluateExpression()));
}

function atan(left, right) {
	return inv(tan(null, right.evaluateExpression()));
}

function sec(left, right) {
	return recip(sin(null, right.evaluateExpression()));
}

function csc(left, right) {
	return recip(cos(null, right.evaluateExpression()));
}

function cot(left, right) {
	return recip(tan(null, right.evaluateExpression()));
}

function asec(left, right) {
	return inv(sec(null, right.evaluateExpression()));
}

function acsc(left, right) {
	return inv(csc(null, right.evaluateExpression()));
}

function acot(left, right) {
	return inv(cot(null, right.evaluateExpression()));
}


function avg(left, right) {
	var average = 0;
	var i = 0;
	for (i = 0; i < right.length; i++) {
		average += right[i];
	}
	return average / right.length;
}

function sum(left, right) {
	var total = 0;
	var i = 0;
	for (i = 0; i < right.length; i++) {
		total += right[i];
	}
	return total;
}

function min(left, right) {
	var minimum = right[0];
	var i = 0;
	for (i = 0; i < right.length; i++) {
		if (right[i] < min) {
			minimum = right[i];
		}
	}
	return minimum;
}

function count(left, right) {
	return right.length;
}

function max(left, right) {
	var maximum = right[0];
	var i = 0;
	for (i = 0; i < right.length; i++) {
		if (right[i] > max) {
			maximum = right[i];
		}
	}
	return maximum;
}

function random(left, right) {
	return Math.random();
}

