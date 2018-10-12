let instance;

class ArrayHelper {
	
	constructor() {
		
		if (!instance) instance = this;
		return instance;
		
	}
	
	static removeOccurrencesOfItemFromArray(array, item) {
		
		while (array.indexOf(item) !== -1) {
			
			array.splice(array.indexOf(item), 1);
			
		}
		
	}
	
	static generateArrayForPattern(pattern, lowerBound, upperBound) {
		
		if(!(pattern.constructor === String)) console.log(new Error("ArrayHelper#generateArrayForPattern(patter, lowerBound, upperBound) was passed a non-string pattern."))
		
	}
	
}

module.exports = ArrayHelper;