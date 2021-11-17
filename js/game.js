 
var player;
var eva;

// Hidden Buttons 
nextBtn.style.display = "none";
resteBtn.style.display = "none"

disableBtn();
// Player Events 

rockBtn.addEventListener('click', ()=>{
    playerResult.style.background='blue';
    playerResult.innerHTML = "Rock";
    playerResult.style.color = "white";
    player = 1;
    disableBtn();
})

paperBtn.addEventListener('click', ()=>{
    playerResult.style.background='red';
    playerResult.innerHTML = "Paper";
    playerResult.style.color = "white";
    player = 2  
    disableBtn();
})

scissorsBtn.addEventListener('click', ()=>{
    playerResult.style.background='green';
    playerResult.innerHTML = "Scissors";
    playerResult.style.color = "white";
    player = 3  
    disableBtn();
})



// Start Game

playBtn.addEventListener('click', () =>{
    eva = Math.floor(Math.random()*(3+1-1)+1);
    console.log(`Eva= ${eva}`);
    console.log(`Player = ${player}`);
    evaColors(eva);
    nextBtn.style.display = "flex";
    playBtn.style.display = "none";
    // fucntions
    game(player,eva);
    // winnerText(player,eva);
    finalRound();
})

// Next Round  

var i = 1;

nextBtn.addEventListener('click', ()=>{
    playBtn.style.display = "flex";
    nextBtn.style.display = "none";
    i = i + 1;
    round.innerHTML = i;
    player = undefined;
    // removeWinnerText(player);
    console.log(player);
    disableBtn();
    resetStyles();
})


// Reset Game 
resteBtn.addEventListener('click', ()=>{
    playBtn.style.display = "flex";
    round.innerHTML = 1;
    i = 1;
    resteBtn.style.display = "none";
    playerCounter.innerHTML = 0;
    evaCounter.innerHTML = 0;
    player = undefined;
    console.log(player);
    disableBtn();
    resetStyles();
})
 

