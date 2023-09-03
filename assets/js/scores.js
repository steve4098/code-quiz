function displayHighScores() {
    let highScores = JSON.parse(localStorage.getItem("highscores"));

    highScores.sort(function(a, b){
        return b.score - a.score;
    })
    
    highScores.forEach(function(score){
        let li = document.createElement("li");
        li.textContent = `${score.name.toUpperCase()}  -  ${score.score}`;

        let results = document.querySelector('#highscores');
        results.appendChild(li);
    })

}

function clearScores () {
    localStorage.removeItem("highscores");
    window.location.reload();

}

let clearButton = document.querySelector('#clear');
clearButton.addEventListener("click", clearScores);

displayHighScores ( );

