// Function that takes a callback
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    
    // Simulate a delay using setTimeout (asynchronous behavior)
    setTimeout(() => {
        callback(); // Call the callback function after 2 seconds
    }, 2000);
}

// Callback function
function sayGoodbye() {
    console.log("Goodbye!");
}

// Call the 'greet' function and pass 'sayGoodbye' as the callback
greet("Srushti", sayGoodbye);
