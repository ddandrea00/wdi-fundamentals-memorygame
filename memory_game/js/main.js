console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"]
var cardOne = cards[0];
var cardTwo = cards[2];

var cardInPlay = [];
cardInPlay.push(cardOne);

	
console.log("User flipped " + cardInPlay);


cardInPlay.push(cardTwo);

console.log("User flipped " + cardInPlay);

if(cardInPlay.length === 2){

	if(cardInPlay[0] === cardInPlay[1]){

		alert("You found a match!");

	}else{
		alert("Sorry, try again.");
	}
	
}