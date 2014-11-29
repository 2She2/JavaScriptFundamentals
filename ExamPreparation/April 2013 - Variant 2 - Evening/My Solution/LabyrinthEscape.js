function Solve(input) {
    var matrixSize = input[0].split(' ');
    var startPositionRandC = input[1].split(' ');

    var rows = parseInt(matrixSize[0]);
    var cols = parseInt(matrixSize[1]);

    var currentRow = parseInt(startPositionRandC[0]);
    var currentCol = parseInt(startPositionRandC[1]);

    var matrix = [];
    var counter = 1;

    var sumOfNumbers = 0;
    var numberOfCells = 0;

    for (var i = 0; i < rows; i++) {
        matrix[i] = [];
        for (var j = 0; j < cols; j++) {
            matrix[i][j] = counter;
            counter++;
        }
    }

    while (true) {
        if (currentCol >= cols || currentRow >= rows || currentCol < 0 || currentRow < 0) {
            return 'out ' + sumOfNumbers;
        }

        if (matrix[currentRow][currentCol] == 'V') {
            return 'lost ' + numberOfCells;
        }

        sumOfNumbers += matrix[currentRow][currentCol];
        matrix[currentRow][currentCol] = 'V';
        numberOfCells++;

        switch (input[currentRow + 2][currentCol]) {
            case 'l': currentCol--; break;
            case 'r': currentCol++; break;
            case 'u': currentRow--; break;
            case 'd': currentRow++; break;
        }
    }
}

args1 = [
 "3 4",
 "1 3",
 "lrrd",
 "dlll",
 "rddd"];

args2 = [
 "5 8",
 "0 0",
 "rrrrrrrd",
 "rludulrd",
 "durlddud",
 "urrrldud",
 "ulllllll"];

args3 = [
 "5 8",
 "0 0",
 "rrrrrrrd",
 "rludulrd",
 "lurlddud",
 "urrrldud",
 "ulllllll"];

console.log(Solve(args2));
