const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by spaces: ", (input) => {

    const arr = input.split(" ").map(Number);

    const seen = new Set();
    const duplicates = new Set();

    for (let num of arr) {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }

    if (duplicates.size === 0) {
        console.log("No duplicate elements found.");
    } else {
        console.log(
            `Duplicate elements: ${[...duplicates].join(", ")}`
        );
    }

    rl.close();
});