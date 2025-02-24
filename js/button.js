const targetNumber = 1521;
let gameStarted = false;

function startGame() {
    document.getElementById("startButton").style.display = "none"; // Start ღილაკის დაფარული
    document.getElementById("stopButton").style.display = "inline"; // Stop ღილაკის გამოჩენა
    document.getElementById("game").style.display = "block"; // თამაშის ფორმის გამოჩენა
    gameStarted = true;
}

function stopGame() {
    document.getElementById("startButton").style.display = "inline"; // Start ღილაკის გამოჩენა
    document.getElementById("stopButton").style.display = "none"; // Stop ღილაკის დაფარული
    document.getElementById("game").style.display = "none"; // თამაშის ფორმის დაფარული
    document.getElementById("message").textContent = ""; // შეტყობინების გასუფთავება
    document.getElementById("guess").value = ""; // შესული ციფრის გასუფთავება
    gameStarted = false;
}

function checkGuess() {
    if (!gameStarted) {
        return; // თუ თამაში არ დაწყებულა, არ მოხდეს პასუხის შემოწმება
    }

    const guess = document.getElementById("guess").value;
    const message = document.getElementById("message");

    if (guess == targetNumber) {
        message.textContent = "შესანიშნავია! ციფრი სწორია.";
message.style.color = "lime";
    } else if (guess < targetNumber) {
        message.textContent = "ციფრი ნაკლებია, სცადეთ ისევ.";
        message.style.color = "red";
    } else {
        message.textContent = "ციფრი მეტია, სცადეთ ისევ.";
        message.style.color = "red";
    }
}