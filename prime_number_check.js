const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a positive number: ", (input) => {
    const number = parseInt(input);

    let isPrime = true;

    if (number === 1) {
        console.log("1 is neither prime nor composite number.");
    } else if (number > 1) {
        for (let i = 2; i <= number / 2; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(`${number} is a prime number`);
        } else {
            console.log(`${number} is not a prime number`);
        }
    } else {
        console.log("The number is not a prime number.");
    }

    rl.close();
});