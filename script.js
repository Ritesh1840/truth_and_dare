// Initialize Player List and Tasks
let players = [];
const truths = [
  "What's the wildest thing you've ever done in public?",
  "Have you ever cheated on someone? If yes, explain.",
  "What's your biggest guilty pleasure?",
  "What's the most awkward date you've ever been on?",
  "What's the most embarrassing thing you've searched online?",
  "Have you ever had a crush on someone in this room?",
  "What's the weirdest habit you have?",
  "Have you ever been caught doing something you shouldn't have?",
  "What’s the riskiest text you’ve ever sent?",
  "What's one secret you've never told anyone?",
  "If you had to date one person in this room, who would it be?",
  "What's the most inappropriate place you've hooked up with someone?",
  "What’s your wildest fantasy?",
  "What’s one thing you regret doing in a past relationship?",
  "What’s the most embarrassing nickname you’ve ever had?",
  "Have you ever lied about your age to impress someone?",
  "What’s the weirdest thing you've done when you were alone?",
  "What’s the craziest thing you’ve ever done while drunk?",
  "What’s the most expensive gift you’ve ever received from a partner?",
  "Have you ever sent a risky photo to someone?"
];

const dares = [
  "Do your best seductive dance for 1 minute.",
  "Send a flirty text to your ex.",
  "Speak in a sultry tone for the next three turns.",
  "Take a selfie and send it to the first person in your contact list.",
  "Do 10 push-ups while someone sits on your back.",
  "Let the group write a message to someone on your phone.",
  "Call your crush and confess your feelings.",
  "Pretend to be someone’s pet for the next 5 minutes.",
  "Let the group pick a nickname for you and use it for the rest of the game.",
  "Do your best impression of a celebrity for 1 minute.",
  "Exchange one item of clothing with someone in the room.",
  "Eat a spoonful of a spicy condiment.",
  "Allow someone to scroll through your phone gallery for 30 seconds.",
  "Sing a love song to the person on your right.",
  "Dance like no one's watching for 2 minutes.",
  "Act like your favorite animal until your next turn.",
  "Let someone post something random on your social media.",
  "Do 20 squats while complimenting everyone in the room.",
  "Pretend to be a waiter and serve drinks to everyone in the room."
];

// DOM Elements
const playerInput = document.getElementById("player-input");
const addPlayerBtn = document.getElementById("add-player");
const playerList = document.getElementById("player-list");
const startGameBtn = document.getElementById("start-game");
const gameSection = document.querySelector(".game");
const setupSection = document.querySelector(".setup");
const spinBtn = document.getElementById("spin");
const currentPlayer = document.getElementById("current-player");
const truthBtn = document.getElementById("truth");
const dareBtn = document.getElementById("dare");
const taskDisplay = document.getElementById("task-display");
const resetGameBtn = document.getElementById("reset-game");

// Add Player
addPlayerBtn.addEventListener("click", () => {
  const playerName = playerInput.value.trim();
  if (playerName) {
    players.push(playerName);
    const li = document.createElement("li");
    li.textContent = playerName;
    playerList.appendChild(li);
    playerInput.value = "";
    startGameBtn.disabled = players.length < 2; // Enable Start Game button if at least 2 players are added
  }
});

// Start Game
startGameBtn.addEventListener("click", () => {
  setupSection.classList.add("hidden"); // Hide setup section
  gameSection.classList.remove("hidden"); // Show game section
});

// Spin the Wheel
spinBtn.addEventListener("click", () => {
  if (players.length > 0) {
    const randomIndex = Math.floor(Math.random() * players.length); // Randomly select a player
    currentPlayer.textContent = players[randomIndex];
    taskDisplay.textContent = ""; // Clear the previous task
  }
});

// Animate Text for Truth and Dare
function animateText(element, text) {
  element.textContent = ""; // Clear existing text
  text.split("").forEach((char, index) => {
    setTimeout(() => {
      element.textContent += char;
    }, 50 * index); // Typing effect
  });
}

// Truth Button
truthBtn.addEventListener("click", () => {
  const randomTruth = truths[Math.floor(Math.random() * truths.length)]; // Randomly select a truth
  animateText(taskDisplay, randomTruth);
});

// Dare Button
dareBtn.addEventListener("click", () => {
  const randomDare = dares[Math.floor(Math.random() * dares.length)]; // Randomly select a dare
  animateText(taskDisplay, randomDare);
});

// Reset Game
resetGameBtn.addEventListener("click", () => {
  players = []; // Clear players
  playerList.innerHTML = ""; // Clear player list display
  currentPlayer.textContent = "?"; // Reset current player
  taskDisplay.textContent = ""; // Clear task display
  setupSection.classList.remove("hidden"); // Show setup section
  gameSection.classList.add("hidden"); // Hide game section
  startGameBtn.disabled = true; // Disable Start Game button
});