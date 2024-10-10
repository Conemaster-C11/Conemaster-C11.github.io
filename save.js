// Function to save the cones list to local storage
function saveCones(conesArray) {
    localStorage.setItem('Cones', JSON.stringify(conesArray));
}

// Function to load the cones list from local storage
function loadCones() {
    const savedCones = localStorage.getItem('Cones');
    if (savedCones) {
        return JSON.parse(savedCones); // Convert the JSON string back to an array
    }
    return []; // Return an empty array if no saved data
}

// Example: Automatically save whenever the cones list changes
function onConesChange(newConesArray) {
    saveCones(newConesArray);
}

// Example: Load the cones list when the page loads
window.onload = function() {
    const cones = loadCones();
    console.log("Loaded cones: ", cones);
    // You can now use the loaded cones to initialize your game state
};
