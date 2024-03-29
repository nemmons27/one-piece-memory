//Welcome to My Code for Project 1. 
//This code is going to generate a Memory game for anime fans, One Piece to be specific.

//Displays Start button that leads to a 4x4 board of cards

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
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameBoard = document.querySelector(".gameBoard");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
let cardValues = []
const size = 4
//Variables//

let interval;
let firstCard = false;
let secondCard = false;
//Card array
const items =[
    {name: "Kidd", image: "../img/kiddwanted.jpg"},
    {name: "Killer", image: "../img/killerwanted.jpg"},
    {name: "Law", image: "../img/lawwanted.png"},
    {name: "Luffy", image: "../img/pirateking.png"},
    {name: "Sabo", image: "../img/sabowanted.jpg"},
    {name: "Yamato", image: "../img/yamatowanted.png"},
    {name: "Zoro", image: "../img/zorowanted.png"},
    {name: "Marco", image: "../img/marcoWanted.jpg"},
    {name: "Buggy", image: "../img2/buggywanted.jpg"},
    {name: "Doflamingo", image: "../img2/doflamingowanted.jpg"},
    {name: "Shanks", image: "../img2/shankswanted.jpg"},
    {name: "Rosinante", image: "../img2/rosinantewanted.jpg"},
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
    timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
};

//For move counter
const movesCounter = () => {
    movesCount +=1;
    moves.innerHTML = `<span>Moves:</span>${movesCount}`;
};
// Pick random cards
const generateRandom = () => {
    let tempArray = [...items];
    const selectedCards = [] ;
    const newSize = Math.floor(size * size / 2);
    //Random selection
for(let i = 0; i < newSize; i++){
        const randomIndex = Math.floor(Math.random() * tempArray.length);
        const card = tempArray[randomIndex]
        selectedCards.push(card, card)
        //Remove selected Card from temp array 
        tempArray.splice(randomIndex, 1);
    }
    return selectedCards;
};

const matrixGenerator = (selectedCards) => {
    gameBoard.innerHTML = "";
    // Shuffle the Cards
    selectedCards.sort(() => Math.random() - 0.5);
    for (let i = 0; i < selectedCards.length; i++) {
      // Create the cards
        gameBoard.innerHTML += `
        <div class="card-container" data-card-value="${cardItem.name}" data-image-value="${cardItem.image}">
        <div class="card-before" >?</div>
        <div class="card-after">
        <img class="image" src="${cardItem.image}" alt="${cardItem.name}" /></div>
        </div>
        `;
    }
    //Grid
    gameBoard.style.gridTemplateColumns = `repeat(${size},auto)`;
    }
//CARD CONTAINER
const cards = document.querySelectorAll(".card-container");
//console.log(cards)
cards.forEach((card) => {
    card.addEventListener("click", () => {
        if (!card.classList.contains("matched")) {
            card.classList.add("flipped")
            if (!firstCard) {
                firstCard = card;
                firstCardValue = card.getAttribute("data-card-value");
            } else {
                movesCounter();
                secondCard = card;
                let secondCardValue = card.getAttribute("data-card-value");
                if (firstCardValue === secondCardValue) {
                    firstCard.classList.add("matched");
                    secondCard.classList.add("matched");
                    firstCard = false;
                    winCount += 1;
                    if (winCount == Math.floor(cardValues.length / 2)) {
                        result.innerHTML = `<h4>Moves: ${movesCount}</h4>
                        <h2>You're ready to set Sail!</h2>`
                        stopGame();
                    }
                } else {
                    let [tempFirst, tempSecond] = [firstCard, secondCard];
                    firstCard = false;
                    secondCard = false;
                    let delay = setTimeout (() => {
                        tempFirst.classList.remove("flipped");
                        tempSecond.classList.remove("flipped");
                    }, 900);
                };
            };
        };
    })
}); 


//Start game
startButton.addEventListener("click", () => {
    movesCount = 0;
    seconds = 0;
    minutes = 0 ;
//Visibility 
    controls.classList.add("hide");
    stopButton.classList.remove("hide");
    startButton.classList.add("hide");
//Start Timer
    interval = setInterval(timeGenerator, 1000);
//inital moves
moves.innerHTML = `<span>Moves:</span> ${movesCount}`;
initializer();
});
//Stop game
stopButton.addEventListener(
    "click",
    (stopGame = () => {
        controls.classList.remove("hide");
        stopButton.classList.add("hide");
        startButton.classList.remove("hide");
        clearInterval(interval);
    })
);


//initialize values and func calls
const initializer = () => {
    result.innerText = "";
    winCount = 0;
    let cardValues = generateRandom();
    matrixGenerator(cardValues);
};

initializer();