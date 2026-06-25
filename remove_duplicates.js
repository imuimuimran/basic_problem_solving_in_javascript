const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by spaces: ", (input) => {

    const arr = input.split(" ").map(Number);

    const unique = [];

    for (let num of arr) {
        if (!unique.includes(num)) {
            unique.push(num);
        }
    }

    console.log("Array after removing duplicates:");
    console.log(unique);

    rl.close();
});