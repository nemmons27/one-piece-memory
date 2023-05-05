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
const stopButton = document.getElementById("stop")
const gameBoard = document.querySelector(".game-board");
const result = document.getElementById("result")
const controls = document.querySelector(".controls-container")

//Variables/
// 
let cards;
let interval;
let firstCard = false;
let secondCard = false;
let seconds = 0,
    minutes = 0;

let movesCount = 0,
    winCount = 0;

const timeGenerator = () => {
    
}
//Event Listeners//
//

//Function//
//
