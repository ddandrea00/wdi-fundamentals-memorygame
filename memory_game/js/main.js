console.log("Up and running!");

var cards = [
	
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"

	},
{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"

	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"

	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"

	}

];


var cardInPlay = [];

var checkForMatch = function(){

	if(cardInPlay.length === 2){

	if(cardInPlay[0] === cardInPlay[1]){

		alert("You found a match!");

	}else{
		alert("Sorry, try again.");
	}
}
}

var flipCard = function(cardId){

		cardInPlay.push(cards[cardId].rank);
		console.log("User flipped " + cards[cardId].rank);
		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suit);
checkForMatch();
}

var createBoard = function(){
	for (var i = 0; i < cards.length; i++){
	var newListItem = document.createElement('img');
	cardElement.setAttribute('attributeName', 'attributeValue');

	}

}



flipCard(0);
flipCard(2);