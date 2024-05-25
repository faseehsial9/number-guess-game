#! /usr/bin/env node
import inquirer from 'inquirer';

type ansType={
    userGuess: number;
}

const systemGeneratednumber=Math.floor(Math.random()*10);

const answers: ansType= await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "write your guess between 1 to 10: "
    }
])

const {userGuess}=answers;

console.log("userGuess", userGuess, 'SYs', systemGeneratednumber)
if(userGuess === systemGeneratednumber){
    console.log("yeah your answeris correct \n you win!")
}else{
    console.log("please try again better luck next time!")
}

