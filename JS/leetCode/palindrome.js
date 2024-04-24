let x = 121;

function isPalindrome(x) {
    let numToString = x.toString();
    let reverseString = numToString.split('').reverse().join('');
    let reverseNum = parseInt(reverseString, 10);

    return x === reverseNum;
}

console.log(isPalindrome(121)); // Вернет true
console.log(isPalindrome(122)); // Вернет false
