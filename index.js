var randomNumber1 = Math.ceil(Math.random() * 6); //Generate player 1 dice number
var randomNumber2 = Math.ceil(Math.random() * 6); //Generate player 2 dice number

// ALternative in Picking the dice images
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img1").setAttribute("src", randomImageSource1);
document.querySelector(".img2").setAttribute("src", randomImageSource2);

//Declare the winner
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerText = "Player 1 Wins by " + Math.abs(randomNumber1 - randomNumber2) + " points!";
  document.querySelector("h1").fontSize = "4rem";
} else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerText = "Player 2 Wins by " + Math.abs(randomNumber1 - randomNumber2) + " points!";
  document.querySelector("h1").fontSize = "4rem";
} else {
  document.querySelector("h1").innerText = "It's a draw!";
  document.querySelector("h1").fontSize = "4rem";
}
