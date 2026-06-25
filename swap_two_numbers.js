const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", (firstInput) => {

    rl.question("Enter second number: ", (secondInput) => {

        let a = Number(firstInput);
        let b = Number(secondInput);

        console.log(`Before Swapping: a = ${a}, b = ${b}`);

        // let temp = a;
        // a = b;
        // b = temp;

        [a, b] = [b, a];

        console.log(`After Swapping: a = ${a}, b = ${b}`);

        rl.close();
    });

});