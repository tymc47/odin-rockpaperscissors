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


function getPlayerChoice(){
    let hand = prompt("Please input your choice here: ")
    //return a string with first letter capitalized only
    return hand.charAt(0).toUpperCase() + hand.slice(1).toLowerCase();
}

function playRound(compSelection, playSelection){
    //calc the hand value difference using the hands array
    const valueDiff = hands.indexOf(compSelection) - hands.indexOf(playSelection);;

    if (valueDiff == 0) return "draw"

    if (valueDiff == 1 || valueDiff == -2) return "computer"

    if (valueDiff == -1 || valueDiff == 2) return "player"

}

function game(){
    let compCount = 0;
    let playCount = 0;

    for (let i = 1; i <= 5; i++){
        let playerhand = getPlayerChoice();
        console.log(playerhand);
        let computerhand = getComputerChoice();
        let winner = playRound(computerhand, playerhand);

        if (winner == "player"){
            playCount++;
            console.log("Round: " + i + ". You win! " + playerhand + " beats " + computerhand);
        } else if (winner == "computer"){
            compCount++;
            console.log("Round: " + i + ". You lose! " + computerhand + " beats " + playerhand);
        } else {
            console.log("Round: " + i + ". Draw! ")
        }
        console.log("Your socre: " + playCount + ". Computer score: " + compCount + ".")
    }   
}

game();