document.querySelectorAll('.color').forEach(color => {
    color.addEventListener('click', () => {
        const selectedColor = color.getAttribute('data-color');
        const colorDisplay = document.getElementById('color-display');
        const moodMessage = document.getElementById('mood-message');

        // Set the background color of the display
        colorDisplay.style.backgroundColor = selectedColor;

        // Change the mood message based on the selected color
        switch (selectedColor) {
            case '#FF5733':
                moodMessage.textContent = "You're feeling energetic!";
                break;
            case '#33FF57':
                moodMessage.textContent = "You're feeling refreshed!";
                break;
            case '#3357FF':
                moodMessage.textContent = "You're feeling calm!";
                break;
            case '#F1C40F':
                moodMessage.textContent = "You're feeling cheerful!";
                break;
            case '#9B59B6':
                moodMessage.textContent = "You're feeling creative!";
                break;
            case '#E67E22':
                moodMessage.textContent = "You're feeling adventurous!";
                break;
            default:
                moodMessage.textContent = "Select a color to see your mood!";
        }
    });
});

const affirmations = [
    "I am capable of achieving my goals.",
    "I choose to be happy and positive.",
    "I am worthy of love and respect.",
    "I believe in myself and my abilities.",
    "I am grateful for the abundance in my life.",
    "I attract positive energy and good vibes.",
    "I am in control of my thoughts and emotions.",
    "I am deserving of all good things.",
    "I am strong, resilient, and brave.",
    "I embrace change and welcome new opportunities."
];

// Initialize the current index for affirmations
let affirmationIndex = 0;

function showAffirmation() {
    const affirmationElement = document.getElementById('affirmation');
    affirmationElement.style.opacity = 0; // Fade out
    setTimeout(() => {
        affirmationElement.textContent = affirmations[affirmationIndex];
        affirmationElement.style.opacity = 1; // Fade in
    }, 500); // Wait for fade out before changing text

    affirmationIndex = (affirmationIndex + 1) % affirmations.length; // Loop through affirmations
}

// Show the first affirmation immediately
showAffirmation();
// Change affirmation every 5 seconds
setInterval(showAffirmation, 5000);

// Array of weekly challenges
const challenges = [
    "Try a new recipe this week.",
    "Spend 30 minutes in nature each day.",
    "Write down three things you are grateful for every day.",
    "Practice a new hobby or skill for at least 15 minutes daily.",
    "Reach out to a friend or family member you haven't spoken to in a while.",
    "Meditate for 10 minutes each day.",
    "Read a book that inspires you.",
    "Volunteer for a local charity or community service.",
    "Start a daily journal to express your thoughts and feelings.",
    "Limit your screen time and enjoy a tech-free day."
];

// Initialize the current index for challenges
let challengeIndex = 0;

// Function to show the current challenge
function showChallenge() {
    const challengeElement = document.getElementById('challenge');
    
    // Fade out the current challenge
    challengeElement.style.opacity = 0;

    // Change the challenge text after the fade-out
    setTimeout(() => {
        challengeElement.textContent = challenges[challengeIndex]; // Update the text
        challengeElement.style.opacity = 1; // Fade in effect
    }, 500); // Wait for 0.5 seconds before changing text

    // Update the index to the next challenge, looping back to the start
    challengeIndex = (challengeIndex + 1) % challenges.length;
}

// Show the first challenge immediately
showChallenge();

// Change the challenge every 5 seconds (5000 milliseconds)
setInterval(showChallenge, 5000);

const cartoons = document.querySelectorAll('.floating-cartoon');

cartoons.forEach(cartoon => {
    // Randomize initial position
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;

    cartoon.style.left = `${randomX}px`;
    cartoon.style.top = `${randomY}px`;

    // Move the cartoon to a new random position every few seconds
    setInterval(() => {
        const newX = Math.random() * window.innerWidth;
        const newY = Math.random() * window.innerHeight;

        cartoon.style.left = `${newX}px`;
        cartoon.style.top = `${newY}px`;
    }, 3000); // Change position every 3 seconds
});