console.log("Hello World");

function getComputerChoice(){
    let choice = Math.floor(Math.random()*100);
    if (choice <= 33){
        return "Rock"
    }
    else if (choice <= 66){
        return "Paper"
    }
    else{
        return "Scissors"
    }
}

function getHumanChoice(){
    let a = prompt("Rock, Paper, or Scissor?");
    let choice = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
    if(choice === "Rock" || choice === "Paper" || choice === "Scissor"){
        return choice;
    }
    else {
        alert("Incorrect input, please try again");
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;
let rounds = 0;


function playRound(humanChoice,computerChoice){
    let hScore = 0;
    let cScore = 0;
    let roundCount= 0;

    if (humanChoice == "Rock" && computerChoice == "Paper"){
        cScore++;
        roundCount++;
    }
    else if (humanChoice == "Rock" && computerChoice == "Scissors"){
        hScore++
        roundCount++
    }
    else if (humanChoice == "Paper" && computerChoice == "Rock"){
        hScore++
        roundCount++
    }
    else if (humanChoice == "Paper" && computerChoice == "Scissors"){
        cScore++;
        roundCount++;
    }
    else if (humanChoice == "Scissor" && computerChoice == "Rock"){
        cScore++;
        roundCount++;
    }
    else if (humanChoice == "Scissor" && computerChoice == "Paper"){
        hScore++
        roundCount++
    }
    else if (humanChoice === computerChoice){
        roundCount++;
    }
    return{
        humanScore: hScore,
        computerScore: cScore,
        rounds: roundCount,
    };
}

function playGame(num){
    while(rounds < num){
        const comp = getComputerChoice();
        const human = getHumanChoice();    

    const roundResult = playRound(human,comp)
    humanScore += roundResult.humanScore;
    computerScore += roundResult.computerScore;
    rounds += roundResult.rounds;
    
    console.log("Round: " + rounds);
    console.log("Computer says " + getComputerChoice());
    console.log("Human says " + getHumanChoice());
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
    }
    console.log("Gameover");
}

playGame(5);