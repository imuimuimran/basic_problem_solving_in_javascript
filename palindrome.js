const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a word: ", (input) => {

    const reversed = input.split("").reverse().join("");

    if (input === reversed) {
        console.log(`${input} is a palindrome.`);
    } else {
        console.log(`${input} is not a palindrome.`);
    }

    rl.close();
});