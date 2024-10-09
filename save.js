// Assuming your game variable is named `myScratchGame`
const game = Find The Cones; // Replace with your actual game reference

// Function to save the "Cones" list to local storage
function saveConesList() {
    const conesList = game.Cones; // Access the Cones list from your game object
    localStorage.setItem("conesList", JSON.stringify(conesList)); // Save it as a JSON string
    console.log("Cones list saved!");
}

// Function to load the "Cones" list from local storage
function loadConesList() {
    const savedConesList = localStorage.getItem("conesList"); // Retrieve the list from local storage
    if (savedConesList) {
        game.Cones = JSON.parse(savedConesList); // Parse the JSON string back into an array
        console.log("Cones list loaded!", game.Cones);
    } else {
        console.log("No saved cones list found.");
        game.Cones = []; // Initialize with an empty array if nothing is found
    }
}

// Example of initializing the game
function initializeGame() {
    loadConesList(); // Load the cones list at the start of the game

    // Other initialization code...
}

// Call initializeGame when your game starts
initializeGame();
