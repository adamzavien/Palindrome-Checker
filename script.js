// Get references to the DOM elements
const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

// Add a click event listener to the check button
checkButton.addEventListener("click", checkInput);

// Function to check if the input is a palindrome
function checkInput() {
    // Get the input value from the text field
    const inputValue = textInput.value;

    // Check if the input value is empty
    if (inputValue === "") {
        alert("Please input a value");
    } else {
        // Check if the input is a palindrome
        if (isPalindrome(inputValue)) {
            result.textContent = `"${inputValue}" is a palindrome`;
        } else {
            result.textContent = `"${inputValue}" is not a palindrome`;
        }
    }
}

// Function to check if a string is a palindrome
function isPalindrome(input) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanInput = input.replace(/[^a-z0-9]/gi, "").toLowerCase();

    // Iterate up to half the length of the string
    for (let i = 0; i < cleanInput.length / 2; i++) {
        // Compare the characters at the beginning and end of the string
        if (cleanInput[i] !== cleanInput[cleanInput.length - 1 - i]) {
            return false;
        }
    }

    // If the loop completes, the input is a palindrome
    return true;
}