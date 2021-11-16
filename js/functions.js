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
            console.log("TIE!");
            break;
        case player === 1 && eva === 3 || player ===2 && eva === 1 ||  player ===3 && eva === 2:
            console.log("Player Wins!");
            playerCounter.innerHTML++
            break;
        default:
            console.log("Eva wins!");
            evaCounter.innerHTML++
            break;
    }
}

function finalRound() {
    if (i == 5) {
        playBtn.style.display = "none";
        nextBtn.style.display = "none";
        resteBtn.style.display = "flex"
    }
}
