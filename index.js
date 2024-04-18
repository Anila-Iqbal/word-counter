import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyanBright.bold("\t<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"));
console.log(chalk.magenta.bold('\tWelcome to Anila Iqbal Currency converter'));
console.log(chalk.cyanBright.bold("\t<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\n"));
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.blueBright.bold("Enter your sentence to count the word?")
    }
]);
const words = answer.sentence.trim().split(" ");
console.log(words);
//words count method
console.log(chalk.blueBright.bold(`Your sentence word count is ${words.length}`));
