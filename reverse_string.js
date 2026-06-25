const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", (input) => {

    let reversed = "";

    for (let i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }

    console.log(`Reversed string: ${reversed}`);

    rl.close();
});