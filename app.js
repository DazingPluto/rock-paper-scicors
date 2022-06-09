const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
let userChoice
let result
const possibleChoices = document.querySelectorAll('button')

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomeNumber = Math.floor(Math.random() * possibleChoices.length + 1) // or 3
    
    if(randomeNumber === 1){
        computerChoice = 'rock'
    } if(randomeNumber ===2) {
        computerChoice = 'scissors'
    } if(randomeNumber ===3) {
        computerChoice = 'papper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice){
        result = 'its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === 'papper'){
        result = 'its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'YOU LOOSE!'
    }
    if (computerChoice === 'papper' && userChoice === 'scissors'){
        result = 'YOU WIN!'
    }
    if (computerChoice === 'papper' && userChoice === 'rock'){
        result = 'YOU LOOSE!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'YOU WIN!'
    }
    if (computerChoice === 'scissors' && userChoice === 'papper'){
        result = 'YOU LOOSE!'
    }
    resultDisplay.innerHTML = result
}