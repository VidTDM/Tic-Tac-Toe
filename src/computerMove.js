export function computerMove(grid) {
    const move = Math.floor(0 + Math.random() * (8 + 1 - 0));
    if (grid[move] !== '_') {
        return computerMove(grid)
    }
    else {
        grid[move] = 'O'
        return grid
    }
}