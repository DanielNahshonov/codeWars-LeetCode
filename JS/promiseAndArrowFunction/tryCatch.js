// Функция, которая возвращает Promise и случайным образом может выполниться с ошибкой
const randomErrorFunction = () => {
    return new Promise((resolve, reject) => {
        // Генерируем случайное число от 0 до 1
        const randomValue = Math.random();

        // Если случайное число больше или равно 0.5, считаем, что произошла ошибка
        if (randomValue >= 0.5) {
            reject('Произошла случайная ошибка');
        } else {
            // В противном случае, считаем, что операция выполнена успешно
            resolve('Операция выполнена успешно');
        }
    });
};

// Вызываем функцию и обрабатываем результат с использованием try/catch
randomErrorFunction()
    .then(result => {
        try {
            // Пытаемся выполнить что-то внутри .then()
            console.log(result);
            // Генерируем ошибку
            throw new Error('Ошибка внутри блока .then()');
        } catch (error) {
            // Ловим ошибку и обрабатываем её
            console.error('Ошибка внутри блока .then():', error.message);
        }
    })
    .catch(error => {
        // Обрабатываем ошибку из Promise
        console.error('Произошла ошибка из Promise:', error);
    });
