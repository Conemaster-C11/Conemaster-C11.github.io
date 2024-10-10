function serializeGame() {
    const gameState = {
        html: document.getElementById('gameContainer').outerHTML,
        // You can add more properties if necessary
    };
    return JSON.stringify(gameState);
}

function saveGame() {
    const gameState = serializeGame();
    localStorage.setItem('gameState', gameState);
    console.log("Game state saved!");
}

function loadGame() {
    const savedState = localStorage.getItem('gameState');
    if (savedState) {
        const gameState = JSON.parse(savedState);
        document.getElementById('gameContainer').outerHTML = gameState.html; // Restore the HTML structure
        console.log("Game state loaded!");
    } else {
        console.log("No saved game state found.");
    }
}
