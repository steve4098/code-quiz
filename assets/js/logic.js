//variables to keep track of quiz progress
let currentQuestionIndex = 0;
let timer = questions.length * 2; //CHANGE THIS BACK TO 12!!!!
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
    let currentQuestion = questions[currentQuestionIndex];

    let titleElement = document.querySelector('#question-title');
    titleElement.textContent = currentQuestion.title;

    choicesElement.innerHTML = " ";
    
    currentQuestion.choices.forEach(function(choice, index){
        
        let answerButton = document.createElement("button");
        answerButton.setAttribute("class", "choice");
        answerButton.setAttribute("value", choice);

        answerButton.textContent = `${index + 1})  ${choice}`;

        answerButton.addEventListener("click", questionClick);

        choicesElement.appendChild(answerButton);
    })
};

getQuestions();

function questionClick(){
   
    if (this.value === questions[currentQuestionIndex].answer) {
        feedbackElement.textContent = "Correct!";
        sfxCorrect.play();
    } else {
        timer -= 5;
        if(timer<0){
            timer = 0;
        }
        feedbackElement.textContent = "Wrong!";
        sfxIncorrect.play();
    };

};

function startQuiz(){
    let startScreen = document.querySelector('#start-screen');
    startScreen.setAttribute ("class", "hide");

    questionsElement.removeAttribute("class");

    timerID = setInterval(function(){
        if (timer > 1) {
            timerElement.textContent = timer + ' seconds remaining';
            timer--;
        } else if (timer ===1){
            timerElement.textContent = timer + ' second remaining';
            timer--;
        } else {
            timerElement.textContent = "Time's up!";
            endQuiz();
        }
    }, 1000);
};

function endQuiz(){
    clearInterval(timerID);

    let endScreen = document.querySelector('#end-screen');
    endScreen.removeAttribute ("class", "hide");

    questionsElement.setAttribute("class", "hide");
};

// function countdown() {

// };

function saveHighscore(){
alert("Score saved!");
};

function checkForEnter (event){

};


startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", saveHighscore);

initialElement.addEventListener("keyup", checkForEnter);




