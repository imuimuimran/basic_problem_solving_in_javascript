const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a non-negative number: ", (input) => {

    const number = parseInt(input);

    if (number < 0) {
        console.log("Factorial is not defined for negative numbers.");
    } else {
        let factorial = 1;

        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }

        console.log(`Factorial of ${number} is ${factorial}`);
    }

    rl.close();
});