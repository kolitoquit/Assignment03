// ADD A FUNCTION CALLED CALCULATE
function calculate(num1, num2, operation) {
    if (operation === "+") {
        return num1 + num2;
    } else if (operation === "-") {
        return num1 - num2;
    } else if (operation === "*") {
        return num1 * num2;
    } else if (operation === "/") {
        return num1 / num2;
    }
}

// COLLECT FIRST NUMBER FROM USER
const num1 = parseFloat(prompt("Enter the first number:"));

// COLLECT SECOND NUMBER FROM USER
const num2 = parseFloat(prompt("Enter the second number:"));

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
const operation = prompt("Enter the operation to perform (+, -, *, /):");   

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
const result = calculate(num1, num2, operation);
alert(`The result of ${num1} ${operation} ${num2} is: ${result}`);