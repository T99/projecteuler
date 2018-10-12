class SquareRoot {
	
	constructor(n) {
		
		this.radicand = n;
		
	}
	
	compare(squareRoot) {
		
		return (this.value === squareRoot.value);
		
	}
	
	get string() {
		
		return "√" + this.radicand;
		
	}
	
	get decimalValue() {
		
		return Math.sqrt(this.radicand);
		
	}
	
}

module.exports = SquareRoot;