// Generate a random number between 1 and 6
var player1 = prompt ("Enter your name player 1");
var player2 = prompt ("Enter your name player 2");
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Construct the image file name based on the random number
var randomDiceImage = "dice" + randomNumber1 + ".png"; // e.g., "dice3.png"

// Set the src attribute of the left <img> element to the constructed image file name
document.querySelector(".img1").setAttribute("src", "images/" + randomDiceImage);

// Generate a random number between 1 and 6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Construct the image file name based on the random number
var randomDiceImage = "dice" + randomNumber2 + ".png"; // e.g., "dice3.png"

// Set the src attribute of the left <img> element to the constructed image file name
document.querySelector(".img2").setAttribute("src", "images/" + randomDiceImage);

var heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    heading.textContent = player1 + " Wins!";
} else if (randomNumber1 < randomNumber2) {
    heading.textContent = player2 + " Wins!";
} else {
    heading.textContent = "It's a Draw!";
}
