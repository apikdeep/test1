const patternLock = document.getElementById('patternLock');
const message = document.getElementById('message');
const submitButton = document.getElementById('submitPattern');

let currentPattern = [];
const correctPattern = ['1', '0', '2', '3']; // Example pattern

function createGrid() {
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.innerText = i; // Display the index for clarity

        cell.addEventListener('click', () => addToPattern(i));

        patternLock.appendChild(cell);
    }
}

function addToPattern(index) {
    console.log(`Cell ${index} clicked`);
    const cell = patternLock.children[index];
    if (!currentPattern.includes(index)) {
        currentPattern.push(index);
        cell.classList.add('active');
        console.log(`Current pattern: ${currentPattern}`);
    } else {
        console.log(`Cell ${index} already included.`);
    }
}

function resetPattern() {
    console.log('Resetting pattern');
    currentPattern = [];
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.classList.remove('active'));
}

submitButton.addEventListener('click', () => {
    console.log(`Submitted pattern: ${currentPattern}`);
    if (currentPattern.join(',') === correctPattern.join(',')) {
        console.log('Pattern is correct, redirecting...');
        window.location.href = 'content.html';
    } else {
        message.textContent = 'Pattern is incorrect. Try again.';
        message.style.color = 'red';
        resetPattern();
    }
});

// Initialize the grid
createGrid();
