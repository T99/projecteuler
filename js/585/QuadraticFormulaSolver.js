class QuadraticFormulaSolver {

    static compute(a,b,c) {
        let negB = b * -1;
        let twoA = 2 * a;
        let bSqrd = Math.pow(b,2);
        let fourAC = 4 * a * c;
        let underRadical = bSqrd - fourAC;
        let sqroot = Math.pow(underRadical,0.5);

        let answ1 = (negB + sqroot)/twoA;
        let answ2 = (negB - sqroot)/twoA;

        let rootsArray;

        if (answ1 > answ2) {
            rootsArray = [answ2, answ1];
        } else {
            rootsArray = [answ1, answ2];
        }

        if (answ1 == answ2) {
            rootsArray = [answ1];
        }

        return rootsArray;
    }

    static computeToString(a,b,c) {
        let roots = this.compute(a,b,c);

        let newRoots = [];

        let sqrString = "√";

        for (let i = 0; i<roots.length; i++) {
            let root = roots[i];
            console.log(root);

            let sqrdRoot = Math.pow(root,0.5);
            let canGoFurther = root % sqrdRoot === 0;
            if (canGoFurther) {
                newRoots.push(sqrdRoot + sqrString +sqrdRoot);
            } else {
                newRoots.push(sqrString+root);
            }
        }

        return newRoots;
    }
}

module.exports = QuadraticFormulaSolver;