function Solve(input) {
    var leftPart = '';
    var rightPart = '';
    var defVars = [];

    for (var i = 0; i < input.length; i++) {
        var curLine = input[i];

        curLine = curLine.substring(1, curLine.length - 1);
        curLine = curLine.split('(');

        // nested values
        if (curLine.length == 2) {
            leftPart = curLine[0];
            leftPart = leftPart.split(' ');
            leftPart = removeEmptyElements(leftPart, '');

            rightPart = curLine[1];
            rightPart = rightPart.substring(0, rightPart.length - 1);
            rightPart = rightPart.split(' ');
            rightPart = removeEmptyElements(rightPart, '');

            defVars[leftPart[1]] = checkOperatorAndCalcValue(rightPart, defVars, i);

            if (isNaN(defVars[leftPart[1]])) {
                return defVars[leftPart[1]];
            }

            if (i == input.length - 1) {
                return defVars[leftPart[1]];
            }
        }
        else { // Not nested
            rightPart = curLine[0];
            rightPart = rightPart.split(' ');
            rightPart = removeEmptyElements(rightPart, '');

            if (rightPart[0] == 'def') {
                if (isNaN(rightPart[2])) {
                    for (var val in defVars) {
                        if (rightPart[2] == val) {
                            defVars[rightPart[1]] = defVars[val];
                        }
                    }
                }
                else {
                    defVars[rightPart[1]] = parseFloat(rightPart[2]);
                    
                }

                if (i == input.length - 1) {
                    return rightPart[2];
                }
            }

            if (i == input.length - 1) {
                return checkOperatorAndCalcValue(rightPart, defVars, i);
            }
        }
    }

    function checkOperatorAndCalcValue(values, decVars, line) {
        switch (values[0]) {
            case '+': return calcSum(values, decVars); break;
            case '-': return calcSubtraction(values, decVars); break;
            case '*': return calcProduct(values, decVars); break;
            case '/': return calcDevision(values, decVars, line); break;
        }
    }

    function calcSum(values, decVars) {
        values = separateValues(values, decVars);

        var sum = 0;
        for (var i = 0; i < values.length; i++) {
            sum += values[i];
        }

        return sum;
    }

    function calcSubtraction(values, decVars) {
        values = separateValues(values, decVars);

        var subtraction = values[0];
        for (var i = 1; i < values.length; i++) {
            subtraction -= values[i];
        }

        return subtraction;
    }

    function calcProduct(values, decVars) {
        values = separateValues(values, decVars);

        var product = values[0];
        for (var i = 1; i < values.length; i++) {
            product *= values[i];
        }

        return product;
    }

    function calcDevision(values, decVars, line) {
        values = separateValues(values, decVars);

        var devision = values[0];
        for (var i = 1; i < values.length; i++) {
            if (values[i] == 0) {
                return 'Division by zero! At Line:' + (line + 1);
            }

            devision = parseInt(devision / values[i]);
        }

        return devision;
    }

    function separateValues(values, decVars) {
        var sepValues = [];

        var curValue;
        for (var i = 1; i < values.length; i++) {
            curValue = values[i];

            if (isNaN(curValue)) {
                for (var val in decVars) {
                    if (val == curValue) {
                        curValue = parseFloat(decVars[val])
                    }
                }
            }

            sepValues[i - 1] = parseFloat(curValue);
        }

        return sepValues;
    }

    function removeEmptyElements(array, deleteValue) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] == deleteValue) {
                array.splice(i, 1);
                i--;
            }
        }
        return array;
    };
}

var input1 = [
    '(+ 5 2 7 1)' // 15
];

var input2 = [
    '(- 4 2)' // 2
];

var input3 = [
    '(* 5 7)' // 35
];

var input4 = [
    '(/ 10 3 2)' //1 (10/3)/2
];

var input5 = [
    '(def NewFunc 5)' //Now NewFunc is equal to 5
];

var input6 = [
    '(def func (+ 5 2))',
    '(def func2 (/  func 5 2 1 0))',
    '(def func3 (/ func 2))',
    '(+ func3 func)'
];

var input7 = [
    '(def func 10)',
    '(def newFunc (+  func 2))',
    '(def sumFunc (+ func func newFunc 0 0 0))',
    '(* sumFunc 2)'
];

var input8 = [
    '(def     go6o    (/ -7 1 1 1 1) )',
    '(def asd (/ 0 5))',
    '(def func2 asd  )',
    '(           +        4          2      func2)'
];
//console.log(0 / 5);
console.log(Solve(input8));