function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return `No one wins! You have both ${playerSelection}`
    }  else if (playerSelection === "rock" && computerSelection === "scissors"){
        playerWins ++;
        return `Player wins! Rock beats Scissors`
    }
        else if (playerSelection === "scissors" && computerSelection === "paper"){
        playerWins ++;
        return `Player wins! Scissors beats Paper`
    }
        else if (playerSelection === "paper" && computerSelection === "rock"){
        playerWins ++;
        return `Player wins! Paper beats Rock`
    }
        else if (playerSelection === "scissors" && computerSelection === "rock"){
        computerWins ++;
        return `Computer wins! Rock beats Scissors`
    }
        else if (playerSelection === "paper" && computerSelection === "scissors"){
        computerWins ++;
        return `Computer wins! Scissors beats Paper`
    }
        else if (playerSelection === "rock" && computerSelection === "paper"){
        computerWins ++;
        return `Computer wins! Paper beats Rock`
    }
}
  
  let playerSelection;
  let computerSelection;
  let playerWins = 0;
  let computerWins = 0;
  //game();

  const finalResult = document.querySelector("#gameResult");
  finalResult.innerHTML = "Final Result:";
  console.log(`Final result - Player: ${playerWins} // Computer: ${computerWins}`);

  const playerSel = document.querySelector("#playerSel");
  const computerSel = document.querySelector("#computerSel");
  playerSel.src = "images/blank.jpg";
  computerSel.src = "images/blank.jpg";

  const choiceRock = document.querySelector("#myRock");
  const choicePaper = document.querySelector("#myPaper");
  const choiceScissors = document.querySelector("#myScissors");

  choiceRock.addEventListener('click', () => {
    playerSel.src = "images/rock.jpg";
    playerSelection = "rock";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    finalResult.innerHTML = `Result - Player: ${playerWins} // Computer: ${computerWins}`;
  });

  choicePaper.addEventListener('click', () => {
    playerSel.src = "images/paper.jpg";
    playerSelection = "paper";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    finalResult.innerHTML = `Result - Player: ${playerWins} // Computer: ${computerWins}`;
  });

  choiceScissors.addEventListener('click', () => {
    playerSel.src = "images/scissors.jpg";
    playerSelection = "scissors";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    finalResult.innerHTML = `Result - Player: ${playerWins} // Computer: ${computerWins}`;
 });

  function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = playerPlay();
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Result - Player: ${playerWins} // Computer: ${computerWins}`);
        }
  }

  function playerPlay(){
    let playerChoice;
 
 
  //    let playerPrompt = prompt("Make your choice: rock, paper or scissors");
//    playerChoice = playerPrompt.toLowerCase();
    console.log(playerChoice);
    
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors"){
        return playerChoice;
    } else{
     //   playerPlay();
    }
  }

  function computerPlay(){
      const resultPlay = parseInt(Math.random()*3+1);
      switch (resultPlay) {
        case 1:
            computerSel.src = "images/rock.jpg";
            return "rock";
            break;
        case 2:
            computerSel.src = "images/paper.jpg";
            return "paper";
            break;
        default:
            computerSel.src = "images/scissors.jpg";
            return "scissors"
        }
    }