import chalk from 'chalk'
import inquirer from 'inquirer';
import { printGrid } from './printGrid';
import { ask } from './ask';
import { winnerCheck } from './winnerCheck';
import { computerMove } from './computerMove';

export async function cli() {
    let grid = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];
    const refrences = {
        'a1': 0,
        'a2': 1,
        'a3': 2,
        'b1': 3,
        'b2': 4,
        'b3': 5,
        'c1': 6,
        'c2': 7,
        'c3': 8
    }
    let chance = 'P1'
    const question = [{
        type: 'list',
        name: 'mode',
        message: 'What mode do you want to play in?',
        choices: [
            'Player vs Player',
            'Player vs Computer'
        ]
    }];
    const answer = await inquirer.prompt(question);
    console.log(chalk.cyan('a1, a2, a3, b1, b2, b3, c1, c2, c3'));
    printGrid(grid);
    while (grid.indexOf('_') !== -1) {
        if (chance === 'P1') {
            chance = 'P2';
            const ans = await ask('What is your move, Player 1.');
            const index = refrences[ans.move];
            if (index === undefined) {
                chance = 'P1';
                console.log(chalk.redBright('Invalid Move'));
            } else if (grid[index] !== '_') {
                chance = 'P1';
                console.log(chalk.redBright('Invalid Move'));
            } else
                grid[index] = 'X';
        } else if (chance === 'P2') {
            if (answer.mode === 'Player vs Player') {
                chance = 'P1';
                const ans = await ask('What is your move, Player 2.');
                const index = refrences[ans.move];
                if (index === undefined) {
                    chance = 'P2';
                    console.log(chalk.redBright('Invalid Move'));
                } else if (grid[index] !== '_') {
                    chance = 'P2';
                    console.log(chalk.redBright('Invalid Move'));
                } else {
                    grid[index] = 'O';
                }
            } else if (answer.mode === 'Player vs Computer') {
                chance = 'P1'
                console.log(`\n${chalk.cyan("It's the computer's turn.")}\n`);
                grid = computerMove(grid);
            }
        }
        printGrid(grid);
        const winner = winnerCheck(grid);
        if (winner === 'X')
            return console.log(chalk.greenBright(`${chalk.greenBright.bold('Player 1')} is the winner!`));
        else if (winner === 'O')
            return console.log(chalk.greenBright(`${chalk.greenBright.bold('Player 2')} is the winner!`));
    }
    return console.log(chalk.yellow("It's a draw!"));
}