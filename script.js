// Get the elements from the HTML document
const countElement = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

// Initialize the counter value
let count = 0;

// Function to update the counter display
function updateCount() {
    countElement.textContent = count;
}

// Event listener for the increment button
incrementButton.addEventListener("click", function () {
    count++;
    updateCount();
});

// Event listener for the decrement button
decrementButton.addEventListener("click", function () {
    count--;
    updateCount();
});

// Event listener for the reset button
resetButton.addEventListener("click", function () {
    count = 0;
    updateCount();
});

// Initialize the counter display
updateCount();
