let firstCard = getRondomCard();
let secondCard = getRondomCard();
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasWon = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");



function getRondomCard(){
   let randomNumber = Math.floor(Math.random()*13) + 1;
   if(randomNumber > 10){
      return 10;
   }else if (randomNumber === 1){
      return 11;
   }else{
      return randomNumber;
   }
}

function startTheGame(){
renderGame();
isAlive = true;
let firstCard = randomNumber();
let secondCard = randomNumber();
cards = [firstCard, secondCard];
sum = firstCard + secondCard;


}

function renderGame(){

 if(sum <= 20){
    message = "Pick another card";
 }else if(sum === 21){
   message = "You win!";
   hasWon = true;
 }else{
   message = "You lose";
    isAlive = false;
 }
 messageEl.textContent = message;
 sumEl.textContent = "Sum:" + " " + sum;
 cardEl.textContent = "Cards:" 

 for(i = 0; i < cards.length; i++){
   cardEl.textContent += cards[i] + " "; 
}
 
}
function newCard(){
 if(isAlive === true && hasWon === false){
 let card = getRondomCard();
 sum += card;
 cards.push[card];
 renderGame();
}
}

function reset(){
card = 0;

}