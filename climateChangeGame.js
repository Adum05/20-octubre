const prompt = require("prompt-sync")();

console.log('Welcome to the Climate Change Awareness Game!');

let score = 0;

function decisionScenario(question, options, correctAnswerIndex) {
    console.log(question);

    for (let i = 0; i < options.length; i++) {
        console.log(`${i + 1}. ${options[i]}`);
    }
    //The original loop for displaying options only showed the first option repeatedly. I changed the loop to iterate through all options using `i` instead of a fixed `j` index.

    let playerAnswer;

    while (true) {
        playerAnswer = parseInt(prompt("Enter your choice (number):")) - 1;

        if (!isNaN(playerAnswer) && playerAnswer >= 0 && playerAnswer < options.length) {
            break;
        } else {
            console.log("Invalid choice. Please enter a number corresponding to one of the options.");
        }
    }
    //I improved the code by putting this validating input. If the player put an incorrect input like 5 instead of 1,2 or 3.

    if (playerAnswer === correctAnswerIndex) {
        console.log('Correct! You made an environment-friendly decision. +1 point.');
        score++;
    } else {
        console.log(`Incorrect! The better choice would be: ${options[correctAnswerIndex]}`);
    }
}
//The score logic was inverted (decreasing score for correct answers). I corrected it so the score increases for correct answers and remains unchanged for incorrect ones.

decisionScenario(
    'You are going to the supermarket. How do you choose to carry your groceries?',
    ['Plastic bags provided by the store', 'Bring your own reusable bags', 'Carry them without any bag'],
    1
);

decisionScenario(
    '\nYou are buying a new car. Which type do you choose?',
    ['A gasoline-powered car', 'A hybrid car', 'An electric car'],
    2
);

decisionScenario(
    '\nYou want to dispose of old electronics. What do you do?',
    ['Throw them in the regular trash', 'Sell or donate them', 'Take them to an e-waste recycling center'],
    2
);

decisionScenario(
    '\nYou want to reduce waste. What do you do with old electronics?',
    ['Throw them in the regular trash', 'Sell or donate them', 'Take them to an e-waste recycling center', 'Refurbish and continue using them'],
    3
);
//Noticed the same question was asked twice. I modified the text for clarity and ensured each scenario was unique.

decisionScenario(
    '\nHow do you prefer to eat your meals?',
    ['Takeout from restaurants in disposable containers', 'Cooked at home with locally sourced ingredients', 'Processed and packaged meals', 'Home cooked meals with ingredients from your own garden'],
    1
);
//Some calls included more parameters than the function expected. I removed unnecessary parameters to match the function's definition.

console.log(`\nGame Over! Your total score is: ${score}. Thank you for playing.\n`);
