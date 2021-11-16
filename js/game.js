 
var player;
var eva;

// Player Events 

rockBtn.addEventListener('click', ()=>{
    playerResult.classList.add('rock');
    playerResult.innerHTML = "Rock";
    player = 1;
    console.log(player);
})

paperBtn.addEventListener('click', ()=>{
    playerResult.classList.add('paper');
    playerResult.innerHTML = "Paper";
    player = 2  
    console.log(player)
})

scissorsBtn.addEventListener('click', ()=>{
    playerResult.classList.add('scissors');
    playerResult.innerHTML = "Scissors";
    player = 3  
    console.log(player);
})

// Eva Events

playBtn.addEventListener('click', () =>{
    eva = Math.floor(Math.random()*(3+1-1)+1);
    
    console.log(`soy eva con numero ${eva}`);
    console.log(`Soy el player, ${player}`);
    switch (eva) {
        case (eva === 1):
            evaResult.classList.add('rock');
            console.log(eva);
            break;
        case (eva === 2)    :
            evaResult.classList.add('paper');
            break;
    }
})