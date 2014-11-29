function Solve(input) {
    var N = parseInt(input[0]);
    var answer = 1;

    input = input.map(Number);

    for (var i = 1; i < N; i++) {
        var curNum = input[i];
        var nextNum = input[i + 1];

        if (curNum > nextNum) {
            answer++;
        }
    }

    return answer;
}

var input1 = [
    '7',
    '1',
    '2',
    '-3',
    '4',
    '4',
    '0',
    '1'
];

var input2 = [
    '6',
    '1',
    '3',
    '-5',
    '8',
    '7',
    '-6'
];

console.log(Solve(input1));