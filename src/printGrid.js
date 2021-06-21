import chalk from 'chalk';

export function printGrid(grid) {
    let result = '';
    for (let i = 1; i <= grid.length; i++) {
        switch (grid[i - 1]) {
            case '_':
                result += ` ${chalk.grey('_')} `
                break;
            case 'O':
                result += ` ${chalk.greenBright('O')} `
                break;
            case 'X':
                result += ` ${chalk.redBright('X')} `
                break;
        }
        if (i % 3 === 0)
            result += '\n'
    }
    console.log(result);
}