const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", (input) => {

    let count = 0;

    const vowels = "aeiouAEIOU";

    for (let i = 0; i < input.length; i++) {
        if (vowels.includes(input[i])) {
            count++;
        }
    }

    console.log(`Number of vowels: ${count}`);

    rl.close();
});