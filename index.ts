#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt(
  [
    {
      message : "Please Enter Your First Number",
      type : "number",
      name : "firstNumber"
    }
    ,
    {
      message : "Please Enter Your Second Number",
      type : "number",
      name : "secondNumber"
    }
    ,
    {
      message : "Choose an operator to perform operation",
      type : "list",
      name : "operator",
      choices : ["Add","Substract","Multiply","Divide"]
    }
  ]
)

// conditional code
const value : string = "Your Answer is ";

if(answer.operator === "Add"){
  console.log(value , answer.firstNumber + answer.secondNumber);
}
else if(answer.operator === "Substract"){
  console.log(value , answer.firstNumber - answer.secondNumber);
}
else if(answer.operator === "Multiply"){
  console.log(value , answer.firstNumber * answer.secondNumber);
}
else if(answer.operator === "Divide"){
  console.log(value , answer.firstNumber / answer.secondNumber); 
}