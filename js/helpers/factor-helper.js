/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	12:15 PM -- October 10th, 2018.
 *	Website: projecteulerjs
 */

let instance;

class FactorHelper {
	
	constructor() {
		
		if (!instance) instance = this;
		return instance;
		
	}
	
	static checkArrayForMultiplesOf(array, multipleBases) {
		
		if (!array || !multipleBases) console.error(new Error("#checkArrayForMultiplesOf(array, multipleBase) was not passed required parameters."));
		
		let multiples = [];
		
		if (multipleBases.constructor === Array) {
			
			multiples = array;
			
			multipleBases.forEach(entry => {
				
				multiples = this.checkArrayForMultiplesOf(multiples, entry);
				
			});
			
		} else if (multipleBases.constructor === Number) {
			
			array.forEach(entry => {
				
				if (entry % multipleBases === 0) multiples.push(entry);
				
			});
			
		}
		
		return multiples;
		
	}
	
	static getFactorsOfN(originalNumber) {
		
		if (isNaN(originalNumber)) console.error(new Error("n is NaN."));
		
		let factors = [];
		
		for (let possibleFactor = 1; possibleFactor <= Math.sqrt(originalNumber); possibleFactor++) {
			
			if (originalNumber % possibleFactor === 0) {
				
				factors.push(possibleFactor);
				if (!(possibleFactor * possibleFactor === originalNumber)) factors.push(originalNumber / possibleFactor);
				
			}
			
		}
		
		return factors;
		
	}
	
	static getPrimeFactorsOfN(originalNumber) {
		
		let factors = getFactorsOfN(originalNumber);
		let primeFactors = [];
		
		removeOccurrencesOfItemFromArray(factors, 1);
		removeOccurrencesOfItemFromArray(factors, originalNumber);
		
		for (let index = 0; index < factors.length; index++) {
			
			let factor = factors[index];
			
			let subfactors = getFactorsOfN(factor);
			
			if (getFactorsOfN(factor).length <= 2) primeFactors.push(factor);
			
		}
		
		return primeFactors;
		
	}
	
}

module.exports = FactorHelper;