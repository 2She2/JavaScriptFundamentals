function Solve(params) {
    var numbers = params.map(Number);
    var currentMax = 0;
    var max = -2000002;

    for (var i = 1; i <= numbers[0]; i++) {

        for (var j = i; j <= numbers[0]; j++) {
            currentMax += numbers[j];

            if (currentMax > max) {
                max = currentMax;
            }
        }

        currentMax = 0;
    }

    return max;
}

params1 = [
    '8',
    '1',
    '6',
    '-9',
    '4',
    '4',
    '-2',
    '10',
    '-1'
];

params2 = [
    '6',
    '1',
    '3',
    '-5',
    '8',
    '7',
    '-6'
];

params3 = [
'9',
'-9',
'-8',
'-8',
'-7',
'-6',
'-5',
'-1',
'-7',
'-6'
];

Solve(params3);