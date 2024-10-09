// Function to save the "Cones" list to local storage
function saveConesList() {
    const conesList = game.Cones; // Ensure this points to your list correctly
    try {
        // Convert the list to JSON and save it to local storage
        localStorage.setItem("conesList", JSON.stringify(conesList));
        console.log("Cones list saved:", conesList);
    } catch (error) {
        console.error("Error saving to local storage:", error);
    }
}

// Function to load the "Cones" list from local storage
function loadConesList() {
    const savedConesList = localStorage.getItem("conesList");
    if (savedConesList) {
        // Parse the saved JSON back into an array and assign it
        game.Cones = JSON.parse(savedConesList);
        console.log("Cones list loaded:", game.Cones);
    } else {
        console.log("No saved cones list found, initializing with empty array.");
        game.Cones = []; // Initialize with an empty array if nothing is saved
    }
}

// Load the cones list when the game starts
loadConesList();

// Call saveConesList whenever you update the cones list
document.getElementById('saveButton').addEventListener('click', saveConesList);
