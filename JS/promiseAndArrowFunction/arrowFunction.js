// Создание массива чисел
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Использование .map() и стрелочной функции для увеличения каждого числа на 2
const increasedArray = numbersArray.map((number) => number + 2);

console.log("Массив после увеличения каждого числа на 2:", increasedArray);

// Использование .filter() и стрелочной функции для отфильтровки только четных чисел
const evenNumbersArray = numbersArray.filter((number) => number % 2 === 0);

console.log("Отфильтрованный массив четных чисел:", evenNumbersArray);

// Использование .reduce() и стрелочной функции для нахождения суммы всех чисел
const sumOfNumbers = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Сумма всех чисел в массиве:", sumOfNumbers);
