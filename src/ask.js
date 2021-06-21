import inquirer from "inquirer";

export async function ask(message) {
    const question = [{
        type: 'input',
        name: 'move',
        message: message
    }];
    const ans = await inquirer.prompt(question);
    return ans
}