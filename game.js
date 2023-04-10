const result = document.querySelector('.result');
const rockBtn = document.querySelector('#Rock');
const paperBtn = document.querySelector('#Paper');
const scissorsBtn = document.querySelector('#Scissors');
rockBtn.addEventListener('click', playRound);
paperBtn.addEventListener('click', playRound);
scissorsBtn.addEventListener('click',playRound);

let userScore = 0;
let compScore = 0;

function getComputerChoice() {
  const choices = ['Rock','Paper','Scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}
function disabledBtn() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

function playRound(e) {
  let psel = e.target.id;
  let computer = getComputerChoice();
  
  if (psel === computer) {
    result.textContent = `You tied --- Current Score: ${userScore}:${compScore}`;
    game()


  } else if (psel === 'Rock' && computer === 'Paper' || psel === 'Paper' && computer === 'Scissors' || psel === 'Scissors' && computer === 'Rock') {
    compScore++;
    result.textContent = `You lose! ${computer} beats ${psel} --- Current Score: ${userScore}:${compScore}`;
    game()

  } else {
    userScore++;
    result.textContent = `You win! ${psel} beats ${computer} --- Current Score: ${userScore}:${compScore}`
    game()

  }
}

function game() {
 
  
 
    
    
    
   
    if (userScore === 5 && compScore === 5) {
      result.textContent = `It's a Draw! Total Score: ${userScore}:${compScore}`
     disabledBtn()
      
    } else if (userScore < 5 && compScore === 5) {
      result.textContent = `You lose bro! Reload and try again! Total Score: ${userScore}:${compScore}`
      disabledBtn()

    } else if (userScore === 5 && compScore < 5) {
      result.textContent = `You win! My Congratulations! Total Score: ${userScore}:${compScore}`
      disabledBtn()

    }
    
  } 
  






