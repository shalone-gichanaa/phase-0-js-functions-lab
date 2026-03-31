function calculateTax(amount) {
    return amount * 0.10;
}

function convertToUpperCase(text) {
    return text.toUpperCase();
}

function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

function isPalindrome(word) {
    let lowerCaseWord = word.toLowerCase();
    let reversedWord = lowerCaseWord.split('').reverse().join('');
    return lowerCaseWord === reversedWord;
}
s
function calculateDiscountedPrice(price, discount) {
    return price - (price * (discount / 100));
}

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };