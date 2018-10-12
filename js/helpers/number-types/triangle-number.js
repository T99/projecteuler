/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	11:21 AM -- October 10th, 2018.
 *	Website: projecteulerjs
 */

class TriangleNumber {
	
	constructor(n) {
		
		this.n = n;
		
	}
	
	static calculateTerm(n) {
		
		return ((n * (n - 1)) / 2);
		
	}
	
	get term() {
		
		return n;
		
	}
	
	get result() {
		
		return ((this.n * (this.n + 1)) / 2);
		
	}
	
}

module.exports = TriangleNumber;