const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by spaces: ", (input) => {

    const arr = input.split(" ").map(Number);

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let num of arr) {

        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }

    if (secondLargest === -Infinity) {
        console.log("Second largest element does not exist.");
    } else {
        console.log(`Second largest element is ${secondLargest}`);
    }

    rl.close();
});