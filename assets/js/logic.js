//variables to keep track of quiz progress
let currentQuestionIndex = 0;
let timer = questions.length * 12;
let timerID;

//HTML elements
let questionsElement = document.querySelector('#questions');
let timerElement = document.querySelector('#time');
let choicesElement = document.querySelector('#choices');
let startButton = document.querySelector('#start');
let submitButton = document.querySelector('#submit');
let initialElement = document.querySelector('#initials');
let feedbackElement = document.querySelector('#feedback');

//sound
let sfxCorrect = new Audio("assets/sfx/correct.wav");
let sfxIncorrect = new Audio("assets/sfx/incorrect.wav");

//functions
function getQuestions() {

};

function questionClick(){
//choice.addEventListener("click", questionClick);
};

function startQuiz(){
    let startScreenElement = document.querySelector('#start-screen');
    startScreenElement.setAttribute ("class", "hide");
};

function endQuiz(){

};

function countdown() {

};

function saveHighscore(){

};

function checkForEnter (event){

};


startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", saveHighscore);

initialElement.addEventListener("keyup", checkForEnter);




