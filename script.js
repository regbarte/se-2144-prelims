const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");
let justCalculated = false; // Checks if a calculation was just made
let isOn = false;

//function to check if the last character is an operator
function isLastCharOperator() {
  const lastChar = inputBox.value.slice(-1);
  return ["+", "-", "*", "/", "."].includes(lastChar);
}

//Function to append input, preventing consecutive operators
function appendToInput(value) {
  // Clears the input if a calculation was just made
  if (justCalculated) {
    inputBox.value = "";
    justCalculated = false; // Reset
  }

  // Prevent repeatition of consecutive operators
  if (["+", "-", "*", "/", "."].includes(value) && isLastCharOperator()) {
    return; // Does nothing if the last character is already an operator
  }

  // Set and check the limit up to 20 characters in the input
  if (inputBox.value.length < 20) {
    if (inputBox.value === "0" && value !== ".") {
      inputBox.value = value;
    } else {
      inputBox.value += value;
    }
  }
}

// Calculate function
function calculate() {
  if (!justCalculated) {
    try {
      inputBox.value = eval(inputBox.value); // Calculate the input
      justCalculated = true; // Indicate calculation is done
    } catch (error) {
      inputBox.value = "Error"; // Return error if invalid input
      justCalculated = true; // Reset for new input
    }
  }
}

// Delete last character
function del() {
  inputBox.value = inputBox.value.slice(0, -1) || "0";
  justCalculated = false;
}

// Hello button functionality
const helloBtn = document.getElementById("helloBtn");
const ACBtn = document.getElementById("clearBtn");
const greetings = [
  "Hello!",
  "Hola!",
  "Kamusta!",
  "Bonjour!",
  "maayong buntag!",
  "Nǐn hao!",
];

ACBtn.addEventListener("click", () => {
  if (!isOn) {
    buttons.forEach((button) => {
      button.disabled = false; // Disable each button
      inputBox.value = 0;
    });
  } else {
    inputBox.value = "0";
    justCalculated = false; // Reset when clearing
  }
});

helloBtn.addEventListener("click", () => {
  const randomGreeting =
    greetings[Math.floor(Math.random() * greetings.length)];
  inputBox.value = randomGreeting; // Show random greeting

  // Clear the input after 1 second
  setTimeout(() => {
    inputBox.value = ""; // Clears the input to blank after showing the greeting
    inputBox.disabled = false; // Re-enable the input box
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.disabled = false; // Enable each button again
    });
  }, 1000);
});

// Bye button functionality
const byeBtn = document.getElementById("byeBtn");
byeBtn.addEventListener("click", () => {
  inputBox.value = "Goodbye";

  // Disable all buttons and input after saying goodbye
  setTimeout(() => {
    inputBox.value = "Goodbye"; // Final message before turning off
    inputBox.disabled = true; // Disable the input box

    // Disable all buttons after goodbye
    buttons.forEach((button) => {
      button.disabled = true; // Disable each button
    });

    // enable only the AC button
    ACBtn.disabled = false;
  }, 1000); // 1 second display of goodbye message before disabling everything after goodbye was clicked
});
