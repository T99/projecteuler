/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	11:04 AM -- October 10th, 2018.
 *	Website: projecteulerjs
 */

/* 
 * Problem 001 - Multiples of 3 & 5
 * 
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these
 * multiples is 23.
 * 
 * Find the sum of all the multiples of 3 or 5 below 1000.
 * 
 * Answer: 233168
 */

let FactorHelper = require("../helpers/factor-helper.js");
let ArrayHelper = require("../helpers/array-helper.js");

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(FactorHelper.checkArrayForMultiplesOf(myArray, [2, 4]));