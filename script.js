const words = ['apple', 'banana', 'orange', 'grape', 'pineapple', 'strawberry'];
let currentWord = '';
let currentCharIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let mistakesCount = 0;

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}


function initGame() {
    currentWord = getRandomWord();
    currentCharIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    mistakesCount = 0;


    renderWord();


    updateStatus();
}


function renderWord() {
    const wordContainer = document.querySelector('.word');
    wordContainer.innerHTML = '';


    for (let i = 0; i < currentWord.length; i++) {
        const charSpan = document.createElement('span');
        charSpan.textContent = currentWord[i];
        charSpan.className = '';
        if (i < currentCharIndex) {
            charSpan.classList.add('c');
        } else if (i === currentCharIndex) {
            charSpan.classList.add('current');
        }
        wordContainer.appendChild(charSpan);
    }
}

function updateStatus() {
    document.querySelector('.correct-count').textContent = correctCount;
    document.querySelector('.wrong-count').textContent = wrongCount;
    document.querySelector('.word-mistakes').textContent = mistakesCount;
}

document.addEventListener('keydown', (event) => {
    const pressedKey = event.key;

    if (pressedKey === currentWord[currentCharIndex]) {

        correctCount++;
        currentCharIndex++;


        if (currentCharIndex >= currentWord.length) {

            const spans = document.querySelectorAll('.word span');
            spans.forEach(span => span.classList.add('c'));


            setTimeout(() => {
                alert('Вы ввели слово правильно!');
                initGame();
            }, 500);
        } else {
            renderWord();
        }
    } else {

        mistakesCount++;
        wrongCount++;
        const spans = document.querySelectorAll('.word span');
        spans[currentCharIndex].classList.add('w');
    }


    updateStatus();
});

window.onload = initGame;