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