function generateRandomHexColor() {
    // Generate a random number between 0 and 16777215 (FFFFFF in hex)
    // and convert it to a hexadecimal string.
    let randomColor = Math.floor(Math.random()*16777215).toString(16);

    // Pad the string with leading zeros if it's less than 6 characters long
    // to ensure a full 6-digit hex code.
    while (randomColor.length < 6) {
        randomColor = "0" + randomColor;
    }

    return "#" + randomColor;
}

function generateNewColor() {
    const colorBox = document.getElementById('color-box');
    const colorCode = document.getElementById('color-code');
    const newColor = generateRandomHexColor();

    // Update the background color and text
    colorBox.style.backgroundColor = newColor;
    colorCode.textContent = newColor;
}

function copyColorCode() {
    const colorCode = document.getElementById('color-code').textContent;

    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(colorCode).then(() => {
        alert("Copied the color code: " + colorCode);
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}

// Generate an initial color when the page loads
generateNewColor();
