const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
 


    // Function to
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn,paperBtn,scissorBtn];
        const computerOptions = ['rock','paper','scissors']
         
        // Function to start playing game
        playerOptions.forEach(option => {
            option.addEventListener('click',function(e){
 
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${5-moves}`;
                 
                const playerChoice = e.target.id;
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];
                
 
                // Function to check who wins
                winner(this.innerText,computerChoice);
                
                 
                // Calling gameOver function after 10 moves
                if(moves == 5){
                    gameOver(playerOptions,movesLeft);
                }

              console.log(playerChoice,computerChoice);

            })
        })
         
    }
   

 
   // Function to decide winner
   const winner = (player,computer) => {
    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.p-count');
    const computerScoreBoard = document.querySelector('.c-count');
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if(player === computer){
        result.innerHTML= `
            <h1> It's a Draw </h1>
            <i class="fas fa-hand-${computer} fa-5x"></i>
            <p> Computer chose <strong> ${computer} </strong> </p>
            `;            
    }
    else if(player == 'rock'){
        if(computer == 'paper'){
            result.innerHTML= `
            <h1 class="text-lose"> You Lose </h1>
            <i class="fas fa-hand-${computer} fa-5x"></i>
            <p> Computer chose <strong> ${computer} </strong> </p>
            `;            
            computerScore++;
            computerScoreBoard.textContent = computerScore;

        }else{
            result.innerHTML= `
            <h1 class="text-win"> You Win </h1>
            <i class="fas fa-hand-${computer} fa-5x"></i>
            <p> Computer chose <strong> ${computer} </strong> </p>
            `;
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if(player == 'scissors'){
        if(computer == 'rock'){
            result.innerHTML= `
            <h1 class="text-lose"> You Lose </h1>
            <i class="fas fa-hand-${computer} fa-5x"></i>
            <p> Computer chose <strong> ${computer} </strong> </p>
            `;    
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.innerHTML= `
            <h1 class="text-win"> You Win </h1>
            <i class="fas fa-hand-${computer} fa-5x"></i>
            <p> Computer chose <strong> ${computer} </strong> </p>
            `;
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if(player == 'paper'){
        if(computer == 'scissors'){
            result.innerHTML= `
            <h1 class="text-lose"> You Lose </h1>
            <i class="fas fa-hand-${computer} fa-5x"></i>
            <p> Computer chose <strong> ${computer} </strong> </p>
            `;               
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{

            result.innerHTML= `
            <h1 class="text-win"> You Win </h1>
            <i class="fas fa-hand-${computer} fa-5x"></i>
            <p> Computer chose <strong> ${computer} </strong> </p>
            `;            
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
}

    // Function to run when game is over
    const gameOver = (playerOptions,movesLeft) => {
 
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
 
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
 
      
        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';
 
        if(playerScore > computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46';
        }
        else if(playerScore < computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else{
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }
 
   

    // Calling playGame function inside game
    playGame();
     
}
 
// Calling the game function
game();


