//Psuedocode
//get a random comupter choice
//promt user to input rock paper or scissors
//function which determines winner of the round
//repeat function and count score

const hands = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    //create a random hand for computer
    return hands[Math.floor(Math.random() * 3)]; 
}

function playRound(compSelection, playSelection){
    //calc the hand value difference using the hands array
    const valueDiff = hands.indexOf(compSelection) - hands.indexOf(playSelection);;

    if (valueDiff == 0) return "draw"

    //Computer wins condition
    if (valueDiff == 1 || valueDiff == -2) return "computer"

    //Player wins condition
    if (valueDiff == -1 || valueDiff == 2) return "player"

}

function score(computer, player, winner){
    let result = ""
    let finalwinner = ""

    if (winner == "computer"){
        compScore++;
        result = "You lose this round!"
    }
    if (winner == "player"){
        playScore++;
        result = "You win this round!"
    }
    if (winner == "draw"){
        result = "It's a draw!"
    }

    document.querySelector('.roundresult').textContent = result;
    document.querySelector('.compScore').textContent = compScore;
    document.querySelector('.playScore').textContent = playScore;

    //display winner of the game if any score reaches 5
    if (compScore == 5 || playScore == 5){
        let finalresult = ""
        
        if (compScore == 5) finalresult = "You lose!! Refresh browser to play again."
        else finalresult = "You win!! Refresh browser to play again."

        document.querySelector('.roundresult').textContent = finalresult;
    }
}



const choices = document.querySelectorAll('button');
let compScore = 0;
let playScore = 0;

choices.forEach(choice => choice.addEventListener('click', function(){
    //create a hand for computer
    const computerHand = getComputerChoice()
    //get the winner of the round by calling playRound
    let winner = playRound(computerHand, choice.value)
    
    //record and display the score with the function score
    score(computerHand, choice.value, winner);
}));