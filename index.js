const prompt = require("prompt");
const calculator = require("./app/calculator")

console.log("Alternate Calculator\n\n === \n\n"+
    "Enter expression to calculate. Eg. ' + 3 4'\n\n"+
    "Enter 'exit' to exit\n"

)
const calculateUserInput = () => {
    prompt.get("expression", function(err, result){
        if(result.expression.toLocaleLowerCase != "exit"){
            console.log(calculator.calculate(result.expression))
            calculateUserInput();
        }
    })
}

calculateUserInput();