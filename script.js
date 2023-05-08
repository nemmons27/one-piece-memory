//Welcome to My Code for Project 1. 
//This code is going to generate a Memory game for anime fans, One Piece to be specific.

//Display message "Choose Difficulty", Display 2 buttons ["Captain", "Admiral"]
    //If user presses "Captain", Displays 4x4 board of cards
    //else, displays 6x6 board of cards

//Game-Timer starts on first card selection, counting down from 1:30
//If the second card chosen doesn't match the first card, 
    //Both cards return face down and a 5 second reduction
    //else, both cards stay face up
//Game-timer stops when last pair is made,
    //if the timer runs out, Display message "Seems like you got lost"
    //else, displays message "You might be ready to find the One Piece!"


//Display moves used
//Display play again button

//Constants//
// First we're going to have to declare the game-board, the game-timer,
// and the moves counter as our constants. As well as our buttons.
const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time")
const startButton = document.getElementById("start")
const playAgainButton = document.getElementById("play-again")
const gameBoard = document.querySelector(".game-board");
const result = document.getElementById("result")
const controls = document.querySelector(".controls-container")

//Variables//

let cards;
let interval;
let firstCard = false;
let secondCard = false;
//Card array
const items =[
    {name: "Kidd", image: "kiddwanted.jpg"},
    {name: "Killer", image: "killerwanted.jpg"},
    {name: "Law", image: "lawwanted.png"},
    {name: "Luffy", image: "pirateking.jpg"},
    {name: "Sabo", image: "sabowanted.jpg"},
    {name: "Yamato", image: "yamatowanted.jpg"},
    {name: "Zoro", image: "zorowanted.jpg"},
    {name: "Marco", image: "marcoWanted.jpg"},
];
//Initial time
let seconds = 0,
    minutes = 0;
//Inital moves and win count
let movesCount = 0,
    winCount = 0;
//For timer
const timeGenerator = () => {
    seconds +=1
    if (seconds>=60) {
        minutes +=1;
        seconds = 0;
    }
    //Format the time before displaying
    let secondsValue = seconds <10 ? `0${seconds}` : seconds;
    let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
    timeValue.innerHTML = '<span>Time:</span>${minutesValue}:${secondsvalue}';
};

//For move counter
const movesCounter = () => {
    movesCount +=1;
    moves.innerHTML = `<span>Moves:</span>${movesCount}`;
};
// Pick random cards
const generateRandom = (size = 4) => {
    //temporary array
    let tempArray = [...items];
    let cardValues = [];
    size = (size* size) / 2;
    for(let i = 0; i< size; i++){
        const randomIndex = Math.floor(Math.random() * tempArray.length);
        cardValues.push(tempArray[randomIndex])
        //Remove selected Card from temp array 
        tempArray.splice(randomIndex, 1);
    }
    return cardValues;
};

const matrixGenerator = (cardValue, size = 4) => {
    gameBoard.innerHTML = "";
    cardValues= [...cardValues, ...cardValues]; 
    //Shuffle the Cards!
    cardValues.sort(() => Math.random() - 0.5);
    for(let i = 0; i < size * size; i++){
        gameBoard.innerHTML += `
        <div class="card-container" data-card-value=${cardValues[i].name}">
        <div class ="card-before">?</div>
        <div class="card-after">
        <img src="${cardValues[i].image}"
        class="image"/></div>
        </div>
        
        `;
}
}
gameBoard.style.gridTemplateColumns = `repeat(${size},auto)`;


const initializer = () => {
    result.innerText ="";
    winCount = 0;
    let cardValues = generateRandom();
    matrixGenerator(cardValues);
};

