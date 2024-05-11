import inquirer from 'inquirer';

interface anstype{
    userID: string;
    userPin: number;
}

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
        choices: [1000, 2000, 10000, 20000],
        message: "Select your transaction amount: ",
}
//     when(answers){
//         return answers.accountType
//     },
// }
])

console.log(answers)
