import { all } from './all';

export function winnerCheck(grid) {
    let rowCheck = [];
    let colCheck = [];
    // row
    for (let i = 0; i < 9; i++) {
        rowCheck.push(grid[i]);
        if (rowCheck.length === 3) {
            if (all(rowCheck, 'X') || all(rowCheck, 'O'))
                return rowCheck[0]
            rowCheck = [];
        }
    }
    // col
    for (let i = 0; i < 3; i++) {
        for (let j = i; j <= i + 6; j += 3) {
            colCheck.push(grid[j]);
        }
        if (colCheck.length === 3) {
            if (all(colCheck, 'O') || all(colCheck, 'X'))
                return colCheck[0]
            colCheck = [];
        }
    }
    if (grid[0] === grid[4] && grid[0] === grid[8])
        return grid[0]
    else if (grid[2] === grid[4] && grid[2] === grid[6])
        return grid[2]
    return
}