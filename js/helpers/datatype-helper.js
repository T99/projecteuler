/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	12:18 PM -- October 10th, 2018.
 *	Website: projecteulerjs
 */

class DatatypeHelper {
	
	constructor(variable) {
		
		this.variable = variable;
		
	}
	
	static checkIsType(variable, type) {
		
		return (variable.constructor === type);
		
	}
	
	get type() {
		
		determine:
		if (!this.variableType) {
			
			if (this.variable.constructor) {
				
				let constructor = this.variable.constructor;
				
				if (constructor === Number) this.variableType = Number;
				else if (constructor === String) this.variableType = String;
				else if (constructor === Boolean) this.variableType = Boolean;
				else if (constructor === Array) this.variableType = Array;
				
			} else {
				
				
				
			}
			
		}
		
		return this.variableType;
		
	}
	
}