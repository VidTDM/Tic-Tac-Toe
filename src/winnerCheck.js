import { all } from './all';

export function winnerCheck(grid) {
    let rowCheck = [];
    let colCheck = [];
    // row
    // console.log('>>>> checking rows');
    for (let i = 0; i < 9; i++) {
        // console.log('row i =', i);
        rowCheck.push(grid[i]);
        // console.log('rowCheck', rowCheck.length);
        if (rowCheck.length === 3) {
            // console.log('check row all(O)', all(rowCheck, 'O'));
            // console.log('check row all(X)', all(rowCheck, 'X'));
            if (all(rowCheck, 'X') || all(rowCheck, 'O'))
                return rowCheck[0]
            rowCheck = [];
        }
    }
    // col
    // console.log('>> now checking cols');
    for (let i = 0; i < 3; i++) {
        // console.log('col i =', i);
        for (let j = i; j <= i + 6; j += 3) {
            colCheck.push(grid[j]);
            // console.log('j =', j);
        }
        // console.log('colCheck', colCheck.length);
        if (colCheck.length === 3) {
            // console.log('check col all(O)', all(colCheck, 'O'));
            // console.log('check col all(X)', all(colCheck, 'X'));
            if (all(colCheck, 'O') || all(colCheck, 'X'))
                return colCheck[0]
            colCheck = [];
        }
    }
    // console.log('d1', grid[0], grid[4], grid[8]);
    // console.log(grid[0] === grid[4] && grid[0] === grid[8]);
    // console.log('d2', grid[2], grid[4], grid[6]);
    // console.log(grid[2] === grid[4] && grid[2] === grid[6]);
    if (grid[0] === grid[4] && grid[0] === grid[8]) {
        return grid[0]
    }
    else if (grid[2] === grid[4] && grid[2] === grid[6]) {
        return grid[2]
    }
    else
        console.log('this line should never exicute')
    return
}

/*
    0 1 2
    3 4 5
    6 7 8
*/