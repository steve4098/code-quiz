let scoresList = document.querySelector('#highscores');

function displayHighScores() {
    let highScores = JSON.parse(localStorage.getItem("highscores"));
    scoresList.push(highScores);
}

function clearScores () {

}

let clearButton = document.querySelector('#clear');
clearButton.addEventListener("click", clearScores);

displayHighScores ( );

