const inputBox = document.getElementById("inputBox");
let justCalculated = false; //checks if a calculation is made previously

function appendToInput(value) {
    // Clears the input if a calculation was just made
    if (justCalculated) {
        inputBox.value = "";
        justCalculated = false; //reset
    }

    // sets and checks the limit upto 20 characters only sa input.
    if (inputBox.value.length < 20) {
        if (inputBox.value == "0") {
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
            inputBox.value = "Please don't be in love with someone else, please don't have somebody waiting on you"; // Calculate the input
            justCalculated = true; //to indicate calculation is done
        } catch (error) {
            inputBox.value = "Error"; // Return error if invalid input
            justCalculated = true; //to write a new input after the previous calculation was made.
        }
    }
}

// Clear display function
function clearDisplay() {
    inputBox.value = "0";
    justCalculated = false; // Reseting when clearing
}

// Delete last character
function del() {
    inputBox.value = inputBox.value.slice(0, -1) || "0";
    justCalculated = false;
}

//hello button
const helloBtn = document.getElementById("helloBtn");
const greetings = ["Hello love!"];

helloBtn.addEventListener('click', () => {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    inputBox.value = randomGreeting; //function that shows the output at random from clicking the hello.

    // Clear the input after 1 second
    setTimeout(() => {
        inputBox.value = ""; // Clears the input to blank after showing the greeting

        inputBox.disabled = false; // Re-enable the input box
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.disabled = false; // Enable each button again
        });
    }, 1000);
});

// Bye button 
const byeBtn = document.getElementById("byeBtn");

byeBtn.addEventListener('click', () => {
    inputBox.value = "Pahinga lang walang break! mwa!";

    // Disable all buttons and input after saying goodbye
    setTimeout(() => {
        inputBox.value = "Goodbye"; // Final message before turning off
        inputBox.disabled = true; // Disable the input box

        // Disable all buttons
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.disabled = true; // Disable each button
        });

        // Re-enable only the Hello button
        helloBtn.disabled = false;
    }, 1000); // 1 second before disabling everything after goodbye was clicked 
});
