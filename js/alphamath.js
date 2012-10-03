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

function pow(left, right){
	return Math.pow(left.evaluateExpression(), right.evaluateExpression());
}
