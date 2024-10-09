// Function to save the "Cones" list
function saveCones(cones) {
    const data = {
        Cones: cones
    };
    localStorage.setItem('conesList', JSON.stringify(data)); // Save to local storage
    console.log("Cones list saved:", data);
}

// Function to load the "Cones" list
function loadCones() {
    const data = localStorage.getItem('conesList');
    if (data) {
        const parsedData = JSON.parse(data);
        console.log("Cones list loaded:", parsedData.Cones);
        return parsedData.Cones; // Return the loaded list
    } else {
        console.log("No saved cones list found, initializing with empty array.");
        return []; // Return an empty array if no data found
    }
}


// Example usage
let conesList = loadCones(); // Load on game start

// Whenever you update the list
conesList.push("New Cone"); // Example of adding a new cone
saveCones(conesList); // Save the updated list
