// Modal
// I used class notes for reference on much of my modal     scaffolding and styling
// https://git.generalassemb.ly/SEIR-1115/modals-intro

const openBtn = document.querySelector('#openModal');
const modal = document.querySelector('#modal');
const close = document.querySelector('#close');

const openModal = () => {
	modal.style.display = 'block';
};
const closeModal = () => {
	modal.style.display = 'none';
};

openBtn.addEventListener('click', openModal);
close.addEventListener('click', closeModal);

// ______________________________________________

let letterBoard = document.querySelector('#hiddenWord');
let trashHeap = document.querySelector('#trash');
let wrongAnswer = [];

// Array for attempted letters that will go in trash
let lettersAttempted = [];

//Array of villagers.  Loop through array and lose condition if it === 0;
let villagerArray = document.querySelectorAll('.villagerTop.villagerBottom');

// After checking that word is complete
let winStates;
// After all villagers gone
let checkLoss;

// Array of words with random selection to start. They should all be lower case.
let wordBank = [
	'nook',
	'island',
	'fishing',
	'build',
	'craft',
	'coffee',
	'nintendo',
	'seagull',
	'villagers',
	'neighbors',
	'fireworks',
	'hammock',
	'cooking',
	'baking',
	'gifts',
	'scuba',
];

// Function to randomly choose word from wordBank
let answerWord = wordBank[Math.floor(Math.random() * wordBank.length)];
// Show answer word in console
console.log(answerWord);

// Player Guesses
let inputField = document.querySelector('#guessInputBox');
inputField.addEventListener('keydown', addLetter);
function addLetter(event) {
	if (event.keyCode >= 66 && event.keyCode <= 91) {
		let letter = event.key.toLowerCase();
		//Check to see if letter is in answerWord with .incluces.
		// .includes returns a boolean.
		answerWord.includes(letter);

		//True goes into letterBoard

		//False goes into trashHeap
		wrongAnswer.push(letter);
		console.log(wrongAnswer);

		trashHeap.innerText = wrongAnswer;
	}
}

resetBtn.addEventListener('click', init);
function init() {}

// If letter is found in word, show on board above underline
// If letter is not found in word, letter will go to trash heap and one villager will be removed
// Check to see if word is complete (checkWin)
// Check to see if villager array is empty (checkLoss)
// Repeat Player actions until checkWin or checkLoss becomes true
// When checkWin is true, show win screen and reminder of reset button to play again
// When checkLoss is true, show loss screen and reminder of reset button to play again

// Reference for keyCode
// Utilized https://en.wikipedia.org/wiki/List_of_Unicode_characters#Basic_Latin

//Reference for addLetter function
//https://stackoverflow.com/questions/58469995/javascript-trying-to-allow-a-key-press-only-once-in-hangman-game-when-it-is-de
