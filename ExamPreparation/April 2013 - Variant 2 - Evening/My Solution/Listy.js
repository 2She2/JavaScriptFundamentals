//     avg
// def var1[1, 2, 3 ,4]
// def func sum[5, 3, 7, 2, 6, 3]
function Solve(input) {
    var definition;
    var values;
    var declaredVars = [];
    var defParts;

    for (var i = 0; i < input.length; i++) {
        var currentCommandLine = input[i];

        definition = currentCommandLine.substring(0, currentCommandLine.indexOf('['));
        values = currentCommandLine.substring(currentCommandLine.indexOf('[') + 1, currentCommandLine.indexOf(']'));

        defParts = definition.split(' ');
        values = values.split(',');

        // remove empty elements from array
        for (var j = 0; j < defParts.length; j++) {
            if (defParts[i] == '') {
                defParts.splice(j, 1);
                j--;
            }
        }

        for (var j = 0; j < values.length; j++) {
            values[j] = values[j].trim();
        }

        for (var j = 0; j < values.length; j++) {
            if (values[j] == '') {
                values.splice(j, 1);
                j--;
            }
        }

        for (var j = 0; j < values.length; j++) {
            if (!isNaN(values[j])) {
                values[j] = parseFloat(values[j]);
            }
        }

        var solution;
        if (defParts[0] != '' && defParts[0] != undefined) {
            switch (defParts[0]) {
                case 'def':
                    declaredVars[defParts[1]] = writeVar(defParts, values, declaredVars);
                    break;
                case 'avg':
                    solution = calcAvg(values, declaredVars);
                    break;
                case 'sum':
                    solution = calcSum(values, declaredVars);
                    break;
                case 'max':
                    solution = calcMax(values, declaredVars);
                    break;
                case 'min':
                    solution = calcMin(values, declaredVars);
                    break;
                default: solution = declaredVars[defParts[0]]; break;
            }
        }
        else {
            solution = declaredVars[values[0]];
        }
        

        if (i == input.length - 1) {
            //console.log(solution);
            return solution;
        }
    }

    // Here must be return statement !!!

    function writeVar(defParts, values, declaredVars) {
        var answer;

        if (defParts[2] != undefined && defParts[2] != '') {
            switch (defParts[2]) {
                case 'sum': answer = calcSum(values, declaredVars); break;
                case 'avg': answer = calcAvg(values, declaredVars); break;
                case 'max': answer = calcMax(values, declaredVars); break;
                case 'min': answer = calcMin(values, declaredVars); break;
                default: console.log('switch error'); break;
            }
        }
        else {
            answer = values;
        }
        

        return answer;
    }

    function calcMin(values, decVars) {
        var min = 2000000;
        var currentNum;

        for (var i = 0; i < values.length; i++) {
            if (isNaN(values[i])) {
                for (var name in decVars) {
                    if (name == values[i]) {
                        if (isNaN(decVars[name])) {
                            //for (var j = 0; j < decVars[name].length; j++) {
                            //    currentNum = decVars[name][j];
                            //    if (min > currentNum) {
                            //        min = currentNum;
                            //    }
                            //}

                            min = calcMin(decVars[name], decVars);
                        }
                        else {
                            if (min > decVars[name]) {
                                min = decVars[name];
                            }
                        }
                    }
                }
            }
            else {
                if (min > values[i]) {
                    min = values[i];
                }
            }
        }

        return min;
    }

    function calcMax(values, decVars) {
        var max = -2000000;
        var currentNum;

        for (var i = 0; i < values.length; i++) {
            if (isNaN(values[i])) {
                for (var name in decVars) {
                    if (name == values[i]) {
                        if (isNaN(decVars[name])) {
                            //for (var j = 0; j < decVars[name].length; j++) {
                            //    currentNum = decVars[name][j];
                            //    if (max < currentNum) {
                            //        max = currentNum;
                            //    }
                            //}

                            max = calcMax(decVars[name], decVars);
                        }
                        else {
                            if (max < decVars[name]) {
                                max = decVars[name];
                            }
                        }
                    }
                }
            }
            else {
                if (max < values[i]) {
                    max = values[i];
                }
            }
        }

        return max;
    }

    function calcSum(values, decVars) {
        var sum = 0;

        for (var i = 0; i < values.length; i++) {
            if (isNaN(values[i])) {
                for (var name in decVars) {
                    if (name == values[i]) {
                        if (isNaN(decVars[name])) {
                            //for (var j = 0; j < decVars[name].length; j++) {
                            //    sum += decVars[name][j];
                            //}

                            sum += calcSum(decVars[name], decVars);
                        }
                        else {
                            sum += decVars[name];
                        }
                    }
                }
            }
            else {
                sum += values[i];
            }
        }

        return sum;
    }

    function calcAvg(values, decVars) {
        var sum = 0;
        var avg = 0;
        var numbersCounter = 0;

        for (var i = 0; i < values.length; i++) {
            if (isNaN(values[i])) {
                for (var name in decVars) {
                    if (name == values[i]) {
                        if (isNaN(decVars[name])) {
                            //for (var j = 0; j < decVars[name].length; j++) {
                            //    sum += decVars[name][j];
                            //    numbersCounter++;
                            //}

                            sum += calcAvg(decVars[name], decVars);
                        }
                        else {
                            sum += decVars[name];
                            numbersCounter++;
                        }
                    }
                }
            }
            else {
                sum += values[i];
                numbersCounter++;
            }
        }
         
        avg = parseInt(sum / numbersCounter);

        return avg;
    }
}

var input1 = [
    'def func sum[5, 3, 7, 2, 6, 3]'
];

var input2 = [
    'def func sum[5, 3, 7, 2, 6, 3]',
    'def func2 [5, 3, 7, 2, 6, 3]'
];

var input3 = [
    'def func sum[5, 3, 7, 2, 6, 3]',
    'def func6 sum[func, 10, 20]'
];

var input4 = [
    'sum[5, 3, 7, 2, 6, 3]'
];

var input5 = [
    'avg[5, 3, 7, 2, 6, 3]'
];

var input6 = [
    'def func sum[1, 2, 3, -6]',
    'def newList [func, 10, 1]',
    'def newFunc sum[func, 100, newList]',
    '[newFunc]'
];

var input7 = [
    'def func sum[5, 3, 7, 2, 6, 3]',
    'def func2 [5, 3, 7, 2, 6, 3]',
    'def func3 min[func2]',
    'def func4 max[5, 3, 7, 2, 6, 3]',
    'def func5 avg[5, 3, 7, 2, 6, 3]',
    'def func6 sum[func2, func3, func4 ]',
    'sum[func6, func4]'
];

Solve(input7);