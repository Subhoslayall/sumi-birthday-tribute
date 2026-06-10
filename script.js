// Slideshow functionality
let slideIndex = 1;
showSlide(slideIndex);
autoSlide();

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName('slide');
    let dots = document.getElementsByClassName('dot');
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}

function autoSlide() {
    let slides = document.getElementsByClassName('slide');
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    showSlide(slideIndex);
    setTimeout(autoSlide, 5000); // Change slide every 5 seconds
}

// Quiz functionality
function checkAnswer(quizId, isCorrect) {
    const resultDiv = document.querySelector(`#${quizId} .quiz-result`);
    const buttons = document.querySelectorAll(`#${quizId} .quiz-btn`);
    
    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);
    
    if (isCorrect) {
        resultDiv.innerHTML = '✅ Correct! Amazing! 🎉';
        resultDiv.style.color = '#32CD32';
        resultDiv.style.fontSize = '18px';
    } else {
        resultDiv.innerHTML = '❌ Oops! Try again! 🎮';
        resultDiv.style.color = '#ff6b6b';
        resultDiv.style.fontSize = '18px';
    }
}

// Memory Game
const memoryEmojis = ['🎂', '🎉', '💖', '🌸', '🎀', '✨', '🎂', '🎉', '💖', '🌸', '🎀', '✨', '🌟', '💫', '🎈', '🎊'];
let memoryCards = [];
let flipped = [];
let matched = [];
let moveCount = 0;

function initMemoryGame() {
    const grid = document.getElementById('memoryGrid');
    grid.innerHTML = '';
    
    // Shuffle emojis
    memoryCards = memoryEmojis.sort(() => Math.random() - 0.5);
    flipped = [];
    matched = [];
    moveCount = 0;
    document.getElementById('moves').textContent = moveCount;
    document.getElementById('gameMessage').innerHTML = '';
    
    // Create cards
    memoryCards.forEach((emoji, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.innerHTML = '?';
        card.dataset.index = index;
        card.dataset.emoji = emoji;
        card.addEventListener('click', () => flipMemoryCard(card));
        grid.appendChild(card);
    });
}

function flipMemoryCard(card) {
    if (card.classList.contains('flipped') || card.classList.contains('matched') || flipped.length >= 2) {
        return;
    }
    
    card.classList.add('flipped');
    card.innerHTML = card.dataset.emoji;
    flipped.push(card);
    
    if (flipped.length === 2) {
        moveCount++;
        document.getElementById('moves').textContent = moveCount;
        
        if (flipped[0].dataset.emoji === flipped[1].dataset.emoji) {
            // Match found
            flipped[0].classList.add('matched');
            flipped[1].classList.add('matched');
            matched.push(flipped[0], flipped[1]);
            flipped = [];
            
            if (matched.length === memoryCards.length) {
                setTimeout(() => {
                    document.getElementById('gameMessage').innerHTML = '🎉 Congratulations Sumi! You won! 🎉';
                    document.getElementById('gameMessage').style.color = '#32CD32';
                }, 300);
            }
        } else {
            // No match
            setTimeout(() => {
                flipped[0].classList.remove('flipped');
                flipped[0].innerHTML = '?';
                flipped[1].classList.remove('flipped');
                flipped[1].innerHTML = '?';
                flipped = [];
            }, 800);
        }
    }
}

function resetMemoryGame() {
    initMemoryGame();
}

// Initialize memory game on page load
window.addEventListener('load', () => {
    initMemoryGame();
    createConfetti();
});

// Confetti animation
function createConfetti() {
    const container = document.querySelector('.confetti-container');
    const confettiPieces = 50;
    
    for (let i = 0; i < confettiPieces; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.backgroundColor = ['#ff6b9d', '#ffc0cb', '#ffb6d9', '#ff69b4', '#ffd89b'][Math.floor(Math.random() * 5)];
        confetti.style.animationDelay = Math.random() * 1 + 's';
        confetti.style.animationDuration = (2 + Math.random() * 1) + 's';
        container.appendChild(confetti);
    }
}

// Auto-trigger confetti on certain interactions
document.addEventListener('click', () => {
    if (Math.random() > 0.7) {
        createConfetti();
    }
});