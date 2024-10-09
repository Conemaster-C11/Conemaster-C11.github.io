function saveGameData() {
    let gameData = {
        score: 100,
        level: 5,
        playerName: "Player",
        collectedItems: [0, 1, 2]
    };
    localStorage.setItem("scratchGameData", JSON.stringify(gameData));
}

function loadGameData() {
    let jsonData = localStorage.getItem("scratchGameData");
    if (jsonData) {
        let gameData = JSON.parse(jsonData);
        console.log(gameData);
    } else {
        console.log("No saved game data found");
    }
}
