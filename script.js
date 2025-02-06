const messages = [
    "Why No?",
    "cfm no?",
    "Bbbyyyy pleaseee",
    "think about itttt!",
    "If you say no, I will start cryingg",
    "I will cry ah dun make me ",
    "Who say can say NO ",
    "Cannot say NO ❤️"
];

let messageIndex = 0;
let lastMessageShown = false; // Flag to track if the last message was displayed

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    if (lastMessageShown) {
        window.location.href = "no_page.html"; // Redirect after the last message
        return;
    } 

    noButton.textContent = messages[messageIndex];

    if (messageIndex === messages.length - 1) {
        lastMessageShown = true; // Set flag when the last message is displayed
    } else {
        messageIndex++;
    }
        
    
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}