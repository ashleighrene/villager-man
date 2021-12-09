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

// Array established to hold incorrect letters (trashHeap)
let wrongAnswer = [];

//Array of villagers.
let villagerArray = document.querySelectorAll('.villagerTop.villagerBottom');

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
	'gyroid',
];

// Function to randomly choose word from wordBank
let answerWord = wordBank[Math.floor(Math.random() * wordBank.length)];

// Show answer word in console only
console.log(answerWord);

// Player Guesses
let inputField = document.querySelector('#guessInputBox');
inputField.addEventListener('keydown', addLetter);
function addLetter(event) {
	if (event.keyCode >= 65 && event.keyCode <= 91) {
		let letter = event.key.toLowerCase();
		// Check to see if letter is in answerWord with .includes.
		// .includes returns a boolean.
		answerWord.includes(letter);
		let indices = [];
		//True goes into letterBoard
		if (answerWord.includes(letter)) {
			//Iterate through array to find index for correct placement in word. Check for each instance of that letter.
			answerWord.split('').forEach((answerLetter, index) => {
				// Push into new array indices
				if (answerLetter === letter) {
					indices.push(index);
				}
			});
			// Check index and place letter in letterBoard ar
			indices.forEach((idx) => {
				rightAnswer[idx] = letter;
			});

			// .join adds spaces between letters instead of commas
			letterBoard.innerText = rightAnswer.join(' ');
		} else {
			// False goes into trashHeap
			wrongAnswer.push(letter);
			trashHeap.innerText = wrongAnswer.join(' ');
			// Remove villager from board
			// Not working - won't console.log

			for (let i = villagerArray.length - 1; i >= 0; i--) {
				villagerArray.remove(0);
			}
		}
	}
}

//Show lines for each letter in word after first letter guessed
let rightAnswer = [];
for (let i = 0; i < answerWord.length; i++) {
	rightAnswer[i] = '_';
}

// Clear letterBoard, trashHeap, and inputField for new try
let resetButton = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', clearBoard);

function clearBoard() {
	rightAnswer = [];
	wrongAnswer = [];
	inputField.value = ' '; //Will not clear

	//restore lines for new try
	for (let i = 0; i < answerWord.length; i++) {
		rightAnswer[i] = '_';
	}
	//restore removal of commas for new try
	letterBoard.innerText = rightAnswer.join(' ');
	trashHeap.innerText = wrongAnswer.join(' ');
}

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

//All villager images are owned by Nintendo, I do not claim any credit for them.
