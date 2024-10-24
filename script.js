// String Manipulation Functions

function reverseString(str) {
    return str.split('').reverse().join('');
}

function countCharacters(str) {
    return str.length;
}

function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Array Functions

function sumOfArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

// Display Functions

function displayReverse() {
    const input = document.getElementById('reverseInput').value;
    const result = reverseString(input);
    document.getElementById('reverseResult').textContent = `Résultat: ${result}`;
}

function displayCount() {
    const input = document.getElementById('countInput').value;
    const result = countCharacters(input);
    document.getElementById('countResult').textContent = `Nombre de caractères: ${result}`;
}

function displayCapitalize() {
    const input = document.getElementById('capitalizeInput').value;
    const result = capitalizeWords(input);
    document.getElementById('capitalizeResult').textContent = `Résultat: ${result}`;
}

function displaySum() {
    const input = document.getElementById('sumInput').value;
    const arr = input.split(',').map(Number);
    const result = sumOfArray(arr);
    document.getElementById('sumResult').textContent = `Somme: ${result}`;
}
