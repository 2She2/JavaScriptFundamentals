function Solve(input) {
    var rowsColsJumps = input[0];

    rowsColsJumps = rowsColsJumps.split(' ');
    rowsColsJumps = rowsColsJumps.map(Number);

    var rows = rowsColsJumps[0];
    var cols = rowsColsJumps[1];
    var jumpsCount = rowsColsJumps[2];

    var startPosition = input[1];
    startPosition = startPosition.split(' ');
    startPosition = startPosition.map(Number);

    var jumpsPositions = [];
    var currentPosition;

    for (var i = 2; i < input.length; i++) {
        currentPosition = input[i];
        currentPosition = currentPosition.split(' ');
        jumpsPositions[i - 2] = currentPosition.map(Number);
    }

    var matrix = [];
    var matrixNumber = 1;

    for (var i = 0; i < rows; i++) {
        matrix[i] = [];

        for (var j = 0; j < cols; j++) {
            matrix[i][j] = matrixNumber;
            matrixNumber++;
        }
    }

    var curRow = startPosition[0];
    var curCol = startPosition[1];

    var sumOfNumber = matrix[curRow][curCol];
    var numberOfJumps = 0;
    var curIndex = 0;

    while (true) {
        curRow += jumpsPositions[curIndex][0];
        curCol += jumpsPositions[curIndex][1];
        curIndex++;
        numberOfJumps++;

        if (curIndex >= jumpsPositions.length) {
            curIndex = 0;
        }

        if (curRow >= matrix.length || curCol >= matrix[0].length ||
            curRow < 0 || curCol < 0) {
            return 'escaped ' + sumOfNumber;
        }

        if (matrix[curRow][curCol] == 'V') {
            return 'caught ' + numberOfJumps;
        }

        sumOfNumber += matrix[curRow][curCol];
        matrix[curRow][curCol] = 'V';
    }
}

var input = [
    '6 7 3',
    '0 0',
    '2 2',
    '-2 2',
    '3 -1'
];

console.log(Solve(input));