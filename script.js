// Trivia Questions (Anime Themed)
const triviaQuestions = [
    {
        question: "Which anime features the character Naruto Uzumaki?",
        options: ["Naruto", "One Piece", "Bleach", "Attack on Titan"],
        correct: 0
    },
    {
        question: "What is the name of the most famous anime sword?",
        options: ["Zangetsu", "Muichiro's Sword", "Demon Slayer Blade", "All of the above"],
        correct: 3
    },
    {
        question: "In 'Death Note', what is Light Yagami's goal?",
        options: ["To become a teacher", "To rid the world of evil", "To become rich", "To travel the world"],
        correct: 1
    },
    {
        question: "Which anime is known for its opening 'A Cruel Angel's Thesis'?",
        options: ["Neon Genesis Evangelion", "Serial Experiments Lain", "Cowboy Bebop", "The Melancholy of Haruhi Suzumiya"],
        correct: 0
    },
    {
        question: "What year was the first anime 'Astro Boy' created?",
        options: ["1950", "1960", "1963", "1970"],
        correct: 2
    }
];

// Memory Game Emojis
const memoryEmojis = ['🎀', '🌸', '💫', '🎨', '✨', '💖', '🎭', '🌺'];

let currentTriviaIndex = 0;
let triviaScore = 0;
let triviaAnswered = false;
let memoryCards = [];
let flippedCards = [];
let matchedPairs = 0;

// Show Section Function
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    // Show selected section
    document.getElementById(sectionId).classList.add('active');

    // Update nav buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Initialize games if needed
    if (sectionId === 'trivia' && triviaCards.length === 0) {
        initTrivia();
    }
    if (sectionId === 'memory' && memoryCards.length === 0) {
        initMemory();
    }
}

// Trivia Functions
let triviaCards = [];

function initTrivia() {
    triviaCards = [...triviaQuestions];
    currentTriviaIndex = 0;
    triviaScore = 0;
    triviaAnswered = false;
    loadTrivia();
}

function loadTrivia() {
    if (currentTriviaIndex >= triviaQuestions.length) {
        document.getElementById('triviaQuestion').textContent = `Quiz Complete! Final Score: ${triviaScore}/5 🎉`;
        document.querySelector('.trivia-options').style.display = 'none';
        document.querySelector('.next-btn').textContent = 'Take Quiz Again ↻';
        document.querySelector('.next-btn').onclick = () => {
            currentTriviaIndex = 0;
            triviaScore = 0;
            triviaAnswered = false;
            document.querySelector('.trivia-options').style.display = 'grid';
            document.querySelector('.next-btn').textContent = 'Next Question →';
            document.querySelector('.next-btn').onclick = nextTrivia;
            loadTrivia();
        };
        return;
    }

    const question = triviaQuestions[currentTriviaIndex];
    document.getElementById('triviaQuestion').textContent = question.question;
    document.getElementById('triviaResult').textContent = '';
    document.getElementById('triviaResult').className = 'trivia-result';

    const buttons = document.querySelectorAll('.trivia-btn');
    buttons.forEach((btn, index) => {
        btn.textContent = question.options[index];
        btn.style.pointerEvents = 'auto';
        btn.style.opacity = '1';
    });

    triviaAnswered = false;
    updateTriviaScore();
}

function checkAnswer(index) {
    if (triviaAnswered) return;

    const question = triviaQuestions[currentTriviaIndex];
    const resultElement = document.getElementById('triviaResult');
    const buttons = document.querySelectorAll('.trivia-btn');

    triviaAnswered = true;

    if (index === question.correct) {
        resultElement.textContent = '✨ Correct! Amazing! ✨';
        resultElement.className = 'trivia-result correct';
        triviaScore++;
        buttons[index].style.background = '#27ae60';
    } else {
        resultElement.textContent = `❌ Oops! The correct answer was: ${question.options[question.correct]}`;
        resultElement.className = 'trivia-result incorrect';
        buttons[question.correct].style.background = '#27ae60';
        buttons[index].style.background = '#e74c3c';
    }

    buttons.forEach(btn => btn.style.pointerEvents = 'none');
    updateTriviaScore();
}

function nextTrivia() {
    currentTriviaIndex++;
    loadTrivia();
}

function updateTriviaScore() {
    document.getElementById('triviaScore').textContent = triviaScore;
}

// Memory Game Functions
function initMemory() {
    const grid = document.getElementById('memoryGrid');
    grid.innerHTML = '';
    memoryCards = [];
    flippedCards = [];
    matchedPairs = 0;

    const pairs = [...memoryEmojis, ...memoryEmojis];
    pairs.sort(() => Math.random() - 0.5);

    pairs.forEach((emoji, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.textContent = '?';
        card.setAttribute('data-emoji', emoji);
        card.setAttribute('data-index', index);
        card.onclick = () => flipCard(card);
        grid.appendChild(card);
        memoryCards.push(card);
    });
}

function flipCard(card) {
    if (card.classList.contains('flipped') || card.classList.contains('matched')) {
        return;
    }

    if (flippedCards.length >= 2) {
        return;
    }

    card.classList.add('flipped');
    const emoji = card.getAttribute('data-emoji');
    card.textContent = emoji;
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    const card1 = flippedCards[0];
    const card2 = flippedCards[1];

    const match = card1.getAttribute('data-emoji') === card2.getAttribute('data-emoji');

    if (match) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs++;
        updateMemoryStatus();

        if (matchedPairs === memoryEmojis.length) {
            setTimeout(() => {
                document.getElementById('memoryStatus').textContent = '🎉 You Won! All Pairs Matched! 🎉';
            }, 500);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            card1.textContent = '?';
            card2.textContent = '?';
        }, 1000);
    }

    flippedCards = [];
}

function updateMemoryStatus() {
    document.getElementById('memoryStatus').textContent = `Matches: ${matchedPairs}/${memoryEmojis.length}`;
}

function resetMemory() {
    initMemory();
    document.getElementById('memoryStatus').textContent = 'Matches: 0/8';
}

// Initialize trivia on page load
window.addEventListener('load', () => {
    initTrivia();
});