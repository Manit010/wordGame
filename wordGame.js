
const words = ['javascript', 'html', 'css', 'java', 'cobol', 'python', 'sql', 'php', 'c++', 'rust', 'ruby'];

function scrambleWord(word) {
    const scrambled = word.split('').sort(() => Math.random() - 0.5).join('');
    return scrambled;
}

let currentWord = words[Math.floor(Math.random() * words.length)];
let scrambledWord = scrambleWord(currentWord);

document.getElementById('scrambled-word').textContent = scrambledWord;

function checkGuess() {
    const userInput = document.getElementById('user-input').value.toLowerCase();
    if (userInput === currentWord) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
        document.getElementById('feedback').style.color = "green";
    } else {
        document.getElementById('feedback').textContent = "Try again!";
        document.getElementById('feedback').style.color = "red";
    }
}

function newWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    scrambledWord = scrambleWord(currentWord);
    document.getElementById('scrambled-word').textContent = scrambledWord;
    document.getElementById('user-input').value = '';
    document.getElementById('feedback').textContent = '';
}
