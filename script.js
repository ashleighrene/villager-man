// Modal

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

// Hint Modal

const openHintBtn = document.querySelector('#openHint');
const hint = document.querySelector('#hint');
const closeHint = document.querySelector('#closeHint');

const openHint = () => {
	hint.style.display = 'block';
};
const closeHintModal = () => {
	hint.style.display = 'none';
};

openHintBtn.addEventListener('click', openHint);
closeHint.addEventListener('click', closeHintModal);

// _______________________________________________________________

//Variables

const villagers = [11, 37, 42, 45, 67, 72, 92, 102, 118];

let indices = [];
let rightAnswer = [];
let wrongAnswer = [];
let letterBoard = document.querySelector('#hiddenWord');
let trashHeap = document.querySelector('#trash');
let inputField = document.querySelector('#guessInputBox input');
let submitButton = document.querySelector('#submitBtn');
let resetButton = document.querySelector('#resetBtn');
let villageSquare = document.querySelector('#village-square');

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

// ______________________________________________________________

// Event Listeners

resetButton.addEventListener('click', clearBoard);
inputField.addEventListener('keydown', addLetter);

//________________________________________________________________

// Functions

function checkLoss() {
	if (villageSquare.childNodes.length === 1) {
		window.alert(
			"I'm sorry, all of the villagers have left.  Please select 'Reset' to try again."
		);
	}
}

// Assign 10 villagers to the board
function spawnVillagers(quantity) {
	for (let i = 0; i < quantity; i++) {
		let div = document.createElement('div');
		div.classList.add('villagers');
		div.style.backgroundImage = `url(../../assets/images/villagers/${villagers[i]}.png`;
		villageSquare.appendChild(div);
	}
}
spawnVillagers(villagers.length);

// Generate random word to guess
let answerWord = wordBank[Math.floor(Math.random() * wordBank.length)];

//
for (let i = 0; i < answerWord.length; i++) {
	rightAnswer[i] = '_';
}
// Show answer word in console only
console.log(answerWord);

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

			villageSquare.removeChild(villageSquare.childNodes[1]);
			checkLoss();
		}
	}
	setTimeout(() => {
		inputField.value = '';
	}, 500);
}

function clearBoard() {
	rightAnswer = [];
	wrongAnswer = [];
	inputField.value = ' ';

	//restore lines for new try
	for (let i = 0; i < answerWord.length; i++) {
		rightAnswer[i] = '_';
	}
	//restore removal of commas for new try
	letterBoard.innerText = rightAnswer.join(' ');
	trashHeap.innerText = wrongAnswer.join(' ');
	// Add another 10 villagers to the board for new game
	spawnVillagers(villagers.length);
}

//________________________________________________________________
//Resources

// Reference for keyCode
// Utilized https://en.wikipedia.org/wiki/List_of_Unicode_characters#Basic_Latin

//Reference for addLetter function
//https://stackoverflow.com/questions/58469995/javascript-trying-to-allow-a-key-press-only-once-in-hangman-game-when-it-is-de

// I used class notes for reference on much of my modal     scaffolding and styling
// https://git.generalassemb.ly/SEIR-1115/modals-intro

// Favicon palm tree used through Creative Commons though original artist is https://www.favicon.cc/?action=icon_list&user_id=4717

//All villager images are owned by Nintendo, I do not claim any credit for them.
