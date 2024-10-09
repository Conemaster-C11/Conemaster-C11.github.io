let db;

// Open a database
const request = indexedDB.open('ConeDatabase', 1);

request.onerror = (event) => {
    console.error("Database error: ", event.target.errorCode);
};

request.onupgradeneeded = (event) => {
    db = event.target.result;
    // Create an object store (similar to a table)
    const objectStore = db.createObjectStore('cones', { keyPath: 'id' });
};

request.onsuccess = (event) => {
    db = event.target.result;
    console.log("Database initialized");
};

// Function to save cones to IndexedDB
function saveCone(cone) {
    const transaction = db.transaction(['cones'], 'readwrite');
    const objectStore = transaction.objectStore('cones');
    objectStore.add(cone);
    transaction.oncomplete = () => {
        console.log("Cone saved successfully!");
    };
    transaction.onerror = (event) => {
        console.error("Error saving cone: ", event.target.error);
    };
}

// Function to load cones from IndexedDB
function loadCones() {
    const transaction = db.transaction(['cones'], 'readonly');
    const objectStore = transaction.objectStore('cones');
    const request = objectStore.getAll(); // Fetch all cones

    request.onsuccess = (event) => {
        const cones = event.target.result;
        console.log("Loaded cones:", cones);
    };
}
