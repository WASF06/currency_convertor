#! /usr/bin/env node
import inquirer from "inquirer";
let c_value = {
    PKR: 278.04,
    UAE: 3.67,
    USD: 1
};
let ans = await inquirer.prompt([{
        type: "list",
        name: "from",
        message: "converting from",
        choices: ["PKR", "UAE", "USD"]
    },
    {
        type: "list",
        name: "to",
        message: "converting to",
        choices: ["PKR", "UAE", "USD"]
    },
    {
        type: "number",
        name: "amount",
        message: "your amount convertor",
    }
]);
console.log(c_value[ans.to] / c_value[ans.from] * ans.amount);
