/*
Project 02 Atm CLI in TypeScript by Amna Sadia Korai Student at GIAIC
*/

import inquirer from "inquirer";

interface ansType {
    userId: string,
    userPin: number,
    accountType: string,
    transactionType: string
    amount: number
}

const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Kindly, Enter your Id: "
    },
    {
        type: "number",
        name: "userpin",
        message: "Kindly, Enter your Pin: "
    },
    {
        type: "list",
        name: "accounttype",
        choices: ["current", "saving"],
        message: "Select your account type: "
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdraw Cash"],
        message: "Select your transaction type: ",
        when(answers) {
            return answers.accounttype
        },
    },
    {
        type: "number",
        name: "amount",
        choices: [1000, 2000, 10000, 20000, 30000],
        message: "Select your amount: ",
        when(answers) {
            return answers.transactionType == "Fast Cash"
        },
    },
    {
        type: "number",
        name: "amount",
        choices: [1000, 2000, 10000, 20000, 30000],
        message: "Enter your amount: ",
        when(answers) {
            return answers.transactionType == "Withdraw Cash"
        },
    }
])
if (answers.userId && answers.userPin) {

    const balance = Math.floor(Math.random()*10000000);
    console.log(balance)
    const EnteredAmount = answers.amount;
    if (balance >= EnteredAmount) {
        const remianing = balance - EnteredAmount;
        console.log( "Your remaining balance is", remianing)
    } else {
        console.log("Insuficient Balance")
    }
}
