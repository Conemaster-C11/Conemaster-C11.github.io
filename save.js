function saveGameHTML() {
    const gameContainer = document.getElementById('gameContainer'); // Adjust to your game's main container ID
    const gameHTML = gameContainer.outerHTML; // Get the entire HTML structure

    localStorage.setItem('savedGameHTML', gameHTML);
    console.log("Game HTML saved!");
}
function loadGameHTML() {
    const savedHTML = localStorage.getItem('savedGameHTML');
    if (savedHTML) {
        const gameContainer = document.getElementById('gameContainer'); // Adjust to your game's main container ID
        gameContainer.outerHTML = savedHTML; // Restore the saved HTML structure
        console.log("Game HTML loaded!");
    } else {
        console.log("No saved game HTML found.");
    }
}
// Example: Save when the window is about to unload
window.onbeforeunload = function() {
    saveGameHTML();
};

// Or call save when a specific action occurs in your game
// document.getElementById('someButton').onclick = saveGameHTML;
window.onload = function() {
    loadGameHTML();
};
