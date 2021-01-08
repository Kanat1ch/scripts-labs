const input = prompt('Введите слово', '');
const word = input.toLowerCase();

function reverse(word) {
    let reversedWord = word.split('').reverse().join('').toLowerCase();
    return reversedWord;
}

if (word === reverse(word)) {
    alert('Слово является палиндромом');
} else {
    alert('Слово не является палиндромом');
}



