 
var player;
var eva;

// Hidden Buttons 
resteBtn.style.display = "none"
nextBtn.style.display = "none"

disableBtn();

// Player Events 

rockBtn.addEventListener('click', ()=>{
    playerResult.classList.add("rock_result");
    playerResult.classList.remove("paper_result", "scissors_result");
    iPlayer.style.display = "none";

    player = 1;

    disableBtn();
})

paperBtn.addEventListener('click', ()=>{
    playerResult.classList.add("paper_result");
    playerResult.classList.remove("rock_result", "scissors_result");
    iPlayer.style.display = "none";
    player = 2  
    disableBtn();
})

scissorsBtn.addEventListener('click', ()=>{
    playerResult.classList.add("scissors_result");
    playerResult.classList.remove("paper_result", "rock_result");
    iPlayer.style.display = "none";
    player = 3  
    disableBtn();
})



// Start Game
playBtn.addEventListener('click', () =>{
    eva = Math.floor(Math.random()*(3+1-1)+1);
    console.log(`Eva= ${eva}`);
    console.log(`Player = ${player}`);
    evaChoice(eva);
    nextBtn.style.display = "flex"
    playBtn.style.display = "none";
    // fucntions
    game(player,eva);
    // winnerText(player,eva);
    finalRound();
})

// Next Round  

var i = 1;

nextBtn.addEventListener('click', ()=>{
    i = i + 1;
    round.innerHTML = i;
    player = undefined;
    nextBtn.style.display = "none"
    playBtn.style.display = "flex";
    console.log(player);
    disableBtn();
    resetStyles();
})


// Reset Game 
resteBtn.addEventListener('click', ()=>{
    round.innerHTML = 1;
    i = 1;
    resteBtn.style.display = "none";
    playerCounter.innerHTML = 0;
    evaCounter.innerHTML = 0;
    player = undefined;
    playBtn.style.display ="flex";
    nextBtn.style.display ="none";
    disableBtn();
    resetStyles();
})
 

