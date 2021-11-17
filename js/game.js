 
var player;
var eva;

// Hidden Buttons 
nextBtn.disabled = true;
resteBtn.style.display = "none"

disableBtn();
// Player Events 

rockBtn.addEventListener('click', ()=>{
    playerResult.style.backgroundImage = "url('assets/rock.png')";
    playerResult.style.backgroundSize = "contain";
    playerResult.style.backgroundRepeat = "no-repeat";
    playerResult.style.width = "80px";
    playerResult.style.height= "80px";
    // playerResult.classList.add('player_result');
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
    nextBtn.disabled = false;
    // playBtn.style.display = "none";
    playBtn.disabled = true;
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
    nextBtn.disabled = true;
    console.log(player);
    resetStyles();
})


// Reset Game 
resteBtn.addEventListener('click', ()=>{
    playBtn.disabled = true;
    round.innerHTML = 1;
    i = 1;
    resteBtn.style.display = "none";
    playerCounter.innerHTML = 0;
    evaCounter.innerHTML = 0;
    player = undefined;
    console.log(player);
    nextBtn.style.display ="flex";
    nextBtn.disabled = true;
    resetStyles();
})
 

