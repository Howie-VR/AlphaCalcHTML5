/*
 * Written by Howie Jordan
 * Copyright (c) 2012 Valley Rocket, LLC
 * Open Source license pending.
 * 
 * All available math functions defined herein.
 * In accordance with the expected format for the expression tree, all math functions herein follow the following rules:
 * 1) The function must have the same name as the character string an end-user would expect to type to invoke it.
 *    e.g.) the user expects that cos(7) finds the cosine of 7, so the function to find the cosine must be called cos.
 * 2) All functions must take two parameters. These are the node's left and right children. In the case of non-operation math functions,
 *    i.e. any function save for those representing +,-,*,/, and ^, will likely only use the right child. If the function takes more than one paramater,
 *    such as "min" which calculates the minimum value from a list of values, the right child will contain an array of expression trees.
 * 
 * 
 */

function add(left, right){
	return left.evaluateExpression() + right.evaluateExpression();
}

function subtract(left, right){
	// In the event that the left node is null, treat it as the additive inverse of the right node
	if(left == null){
		return right.evaluateExpression() * -1;
	}
	return left.evaluateExpression() - right.evaluateExpression();
}

function multiply(left, right){
	return left.evaluateExpression() * right.evaluateExpression();
}

function divide(left, right){
	return left.evaluateExpression() / right.evaluateExpression();
}

function mod(left, right) {
	return left.evaluateExpression() % right.evaluateExpression();
}

function pow(left, right){
	return Math.pow(left.evaluateExpression(), right.evaluateExpression());
}

function sqrt(left, right) {
	return Math.sqrt(right.evaluateExpression());
}

function nthrt(left, right) {
	return pow(left.evaluateExpression(), reciprocal(right.evaluateExpression()));
}


function inv(left, right) {
	//Raise to the -1 power.
	return Math.pow(right, -1);
}

function recip(left, right) {
	//1 over the number.
	return 1 / right.evaluateExpression();
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
	return naturalLog(right.evaluateExpression()) / naturalLog(left.evaluateExpression());
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
	return inverse(sin(null, right.evaluateExpression()));
}

function acos(left, right) {
	return inverse(cos(null, right.evaluateExpression()));
}

function atan(left, right) {
	return inverse(tan(null, right.evaluateExpression()));
}

function sec(left, right) {
	return reciprocal(sin(null, right.evaluateExpression()));
}

function csc(left, right) {
	return reciprocal(cos(null, right.evaluateExpression()));
}

function cot(left, right) {
	return reciprocal(tan(null, right.evaluateExpression()));
}

function asec(left, right) {
	return inverse(sec(null, right.evaluateExpression()));
}

function acsc(left, right) {
	return inverse(csc(null, right.evaluateExpression()));
}

function acot(left, right) {
	return inverse(cot(null, right.evaluateExpression()));
}


function avg(left, right) {
	var average = 0;
	
	for (int i = 0, i < right.length, i++) {
		average += right[i];
	}
	
	return average / right.length;
}

function sum(left, right) {
	var sum = 0;
	
	for (int i = 0, i < right.length, i++) {
		sum += right[i];
	}
	
	return sum;
}

function min(left, right) {
	var min = right[0];
	
	for (int i = 0, i < right.length, i++) {
		if (right[i] < min) {
			min = right[i];
		}
	}
	
	return min;
}

function count(left, right) {
	return right.length;
}

function max(left, right) {
	var max = right[0];
	
	for (int i = 0, i < right.length, i++) {
		if (right[i] > max) {
			max = right[i];
		}
	}
	
	return max;
}

function random(left, right) {
	return Math.random();
}
