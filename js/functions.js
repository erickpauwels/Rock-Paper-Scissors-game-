function evaColors(eva){
    if (eva ==1) {
        evaResult.style.background = "blue"
        evaResult.style.color = "white";
        evaResult.innerHTML = "Rock";
    } else if (eva == 2){
        evaResult.style.background = "red"
        evaResult.style.color = "white";
        // evaResult.classList.add('paper');
        evaResult.innerHTML = "Paper"
    } else if (eva == 3){
        evaResult.style.background = "green"
        evaResult.style.color = "white";
        // evaResult.classList.add('scissors');
        evaResult.innerHTML = "Scissors";
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
            // console.log("Eva wins!");
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

    // eva styles
    evaResult.style.background='none';
    evaResult.innerHTML = "";
    evaResult.style.color = "";
    player = 0
}

