function evaChoice(eva){
    iEva.style.display = "none";
    if (eva ==1) {
        evaResult.classList.add("rock_result");
        evaResult.classList.remove("paper_result", "scissors_result");
        
    } else if (eva == 2){
        evaResult.classList.add("paper_result");
        evaResult.classList.remove("rock_result", "scissors_result");

    } else if (eva == 3){
        evaResult.classList.add("scissors_result");
        evaResult.classList.remove("paper_result", "rock_result");

    } else {
        evaResult.classList.add('eva');
    }}

function game(player,eva){
    
    switch (true) {
        case player === eva:
            vsBox.textContent = 'Tie';
            console.log("TIE!");
            break;
        case player === 1 && eva === 3 || player ===2 && eva === 1 ||  player ===3 && eva === 2:
            vsBox.textContent = 'You win';
            console.log("Player Wins!");
            playerCounter.innerHTML++
            break;
        default:
            vsBox.textContent = 'Eva wins!';
            evaCounter.innerHTML++
            break;
    }
}

function finalRound() {
    if (i == 5) {
        console.log("Game Over");
        nextBtn.style.display = "none";
        resteBtn.style.display = "flex";
    }
}

function disableBtn() {
    if (player == undefined) {
        playBtn.disabled = true;
    } else {
        playBtn.disabled = false;
    }
}

function resetStyles() {
    playerResult.classList.remove("scissors_result","rock_result","paper_result");
    evaResult.classList.remove("scissors_result","rock_result","paper_result");
    iPlayer.style.display = "flex";
    iEva.style.display = "flex";
    player = 0
}

