// Load the project file (assuming it's JSON format)
fetch("assets/project")
    .then(response => response.json())
    .then(data => {
        const conesList = data.lists.Cones; // Access the Cones list from the loaded data
        console.log("Loaded Cones list:", conesList);
    })
    .catch(error => console.error("Error loading project file:", error));

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

// Call loadConesList when the game starts
loadConesList();
