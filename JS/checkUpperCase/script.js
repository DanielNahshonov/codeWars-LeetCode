/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let result = true;
    // Проверка, что все буквы в слове - заглавные
    if (word === word.toUpperCase()) {
        return result;
    }
    // Проверка, что все буквы, кроме первой, в слове - строчные
    if (word === word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) {
        return result;
    }
    // Проверка, что все буквы в слове - строчные
    if (word === word.toLowerCase()) {
        return result;
    }
    // Если ни одно из условий не выполнено, возвращаем false
    return false;
};


