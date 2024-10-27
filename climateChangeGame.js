const prompt = require("prompt-sync")();

console.log('Welcome to the Climate Change Awareness Game!');

let score = 0;

function decisionScenario(question, options, correctAnswerIndex) {
    console.log(question);

    for (let i = 0; i < options.length; i++) {
        console.log(`${i+1}. ${options[i]}`);
    }
    
 //I changed the loop to iterate through all options using `i` instead of a fixed `j` index because the loop for displaying options was showing the first option repeatedly.

    let playerAnswer = parseInt(prompt("Enter your choice (number):")) - 1;

    if (playerAnswer == correctAnswerIndex) {
        console.log('Correct! You made an environment-friendly decision. +1 point.');
        score++;
    } else {
        console.log(`Incorrect! The better choice would be: ${options[correctAnswerIndex]}`);
    }
}
//The scoring logic was substracting points instead of adding. I changed "!==" for "==", and "score--" for "score++".

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
//The question was duplicated so I changed the question for esthetic of the game and not to be repeated and I removed the "2" because it was an unnecessary parameter and it was not matching thr function.

decisionScenario(
    '\nHow do you prefer to eat your meals?',
    ['Takeout from restaurants in disposable containers', 'Cooked at home with locally sourced ingredients', 'Processed and packaged meals', 'Home cooked meals with ingredients from your own garden'],
    3
);
//The same here the "1" was an unnecessary parameter so i removed it.

console.log(`\nGame Over! Your total score is: ${score}. Thank you for playing.\n`);
