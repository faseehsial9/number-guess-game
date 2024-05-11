import inquirer from 'inquirer';
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userID",
        message: "Kindly Enter your Id: "
    },
    {
        type: "number",
        name: "userPin",
        message: "kindly enter your PIN: "
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["fast Cash", "withdraw"],
        message: "Select your transaction"
    }
]);
console.log(answers);
