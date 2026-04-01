// Function to generate a random hexadecimal color code
function generateRandomColor() {
    const symbols = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to update the color card
function updateColorCard() {
    const newColor = generateRandomColor();
    // Update the background of the body to the new color for a full-page effect
    document.body.style.backgroundColor = newColor; 
    // Update the hex code text
    document.getElementById("hex-code").textContent = newColor;
}

// Get the button element and add an event listener
const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", updateColorCard);

// Initial color generation on page load
updateColorCard();
