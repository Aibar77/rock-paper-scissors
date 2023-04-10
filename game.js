function getComputerChoice() {
  const choices = ['Rock','Paper','Scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(player,computer) {
  let psel = player[0].toUpperCase()+player.slice(1).toLowerCase();
  
  if (psel === computer) {

    console.log('You tied');
    console.log(`Current Score: ${userScore}:${compScore}`)


  } else if (psel === 'Rock' && computer === 'Paper' || psel === 'Paper' && computer === 'Scissors' || psel === 'Scissors' && computer === 'Rock') {
    compScore++;
    console.log(`You lose! ${computer} beats ${psel}`);
    console.log(`Current Score: ${userScore}:${compScore}`)

  } else {
    userScore++;
    console.log(`You win! ${psel} beats ${computer}`);
    console.log(`Current Score: ${userScore}:${compScore}`)

  }
}
let userScore = 0;
let compScore = 0;
function game() {
  let numberOfRounds = prompt('How much rounds do you want?');
  if (numberOfRounds == null || numberOfRounds == '') {
    console.log('You choose exit the game! Reload to restart!');
    return;
  }
  numberOfRounds = parseInt(numberOfRounds);
  if (numberOfRounds<= 100) {
    
    
    console.log('The game is started!!!')
    for (let i = 0; i< numberOfRounds;i++) {
      let userSelection = prompt('Choose you Beat!');
      if ( userSelection == null) {
        console.log('Exit the Game!')
        return;
        
      } 
      userSelection = userSelection.toLowerCase();
      let computerSelection = getComputerChoice();

      if (userSelection == 'rock' || userSelection == 'paper' || userSelection == 'scissors') {
        playRound(userSelection,computerSelection);
        
      } else {
        alert('You type incorrect!')
        console.log('Started a new Game!')
        userScore = 0;
        compScore = 0;
        return game()
      }
     
    }
    console.log('The game is end!!!')
    if (userScore == compScore) {
      console.log(`It's a Draw! Total Score: ${userScore}:${compScore}`)
    } else if (userScore < compScore) {
      console.log(`You lose bro! Reload and try again! Total Score: ${userScore}:${compScore}`)
    } else {
      console.log(`You win! My Congratulations! Total Score: ${userScore}:${compScore}`)
    }
    
  } else if (numberOfRounds > 100){
    alert('This is too much bro! Pick again!')
    game();
  }  else if (isNaN(numberOfRounds)) {
    
    alert('This is not a number bro! Pick again')
    game()
  } 
  
}





