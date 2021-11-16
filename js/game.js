 
var player;
var eva;

// Hidden Buttons 
nextBtn.style.display = "none";
resteBtn.style.display = "none"

// Player Events 

rockBtn.addEventListener('click', ()=>{
    playerResult.style.background='blue';
    playerResult.innerHTML = "Rock";
    playerResult.style.color = "white";
    player = 1;
})

paperBtn.addEventListener('click', ()=>{
    playerResult.style.background='red';
    playerResult.innerHTML = "Paper";
    playerResult.style.color = "white";
    player = 2  
})

scissorsBtn.addEventListener('click', ()=>{
    playerResult.style.background='green';
    playerResult.innerHTML = "Scissors";
    playerResult.style.color = "white";
    player = 3  
})

// Eva Events

playBtn.addEventListener('click', () =>{
    eva = Math.floor(Math.random()*(3+1-1)+1);
    console.log(`soy eva con numero ${eva}`);
    console.log(`Soy el player, ${player}`);
    evaColors(eva);
    nextBtn.style.display = "flex";
    playBtn.style.display = "none";
})

// Next Round Events 

var i = 1;

nextBtn.addEventListener('click', ()=>{
    playBtn.style.display = "flex";
    nextBtn.style.display = "none";
    i = i + 1;
    round.innerHTML = i;
    if (i === 5) {
        playBtn.style.display = "none";
        nextBtn.style.display = "none";
        resteBtn.style.display = "flex"
    }
})

resteBtn.addEventListener('click', ()=>{
    playBtn.style.display = "flex";
    round.innerHTML = 1;
    resteBtn.style.display = "none";

})
 

