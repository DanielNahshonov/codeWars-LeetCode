// ?The goal of this exercise is to convert a string to a new string where
// ?each character in the new string is "(" if that character appears only
// ?once in the original string, or ")" if that character
// ?appears more than once in the original string.
// ?Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word) {
    let result = "";
    const lowerCaseWord = word.toLowerCase();

    for (let i = 0; i < lowerCaseWord.length; i++) {
        let isDuplicate = false;

        for (let j = 0; j < lowerCaseWord.length; j++) {
            if (i !== j && lowerCaseWord.charAt(i) === lowerCaseWord.charAt(j)) {
                isDuplicate = true;
                break; // Once a duplicate is found, exit the inner loop
            }
        }

        result += isDuplicate ? ')' : '(';
    }

    console.log(result);
}

