// Get all the buttons on the page
const buttons = document.querySelectorAll("button");

// Define the function to be executed when any button is pressed
function handleButtonClick() {
  console.log("A button was clicked!");
  // Replace the console.log with your desired function logic
}

// Attach the click event listener to each button
buttons.forEach(button => {
  button.addEventListener("click", handleButtonClick);
});