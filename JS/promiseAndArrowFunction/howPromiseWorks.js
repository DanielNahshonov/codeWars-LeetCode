// Определение функции HowPromiseWorks
function HowPromiseWorks() {
    // Создание нового Promise
    return new Promise((resolve, reject) => {
        // Эмуляция асинхронной операции с задержкой в 2000 миллисекунд (2 секунды)
        setTimeout(() => {
            // Генерация случайного числа для успешной или неуспешной операции
            const success = Math.random() < 0.5;

            // Обработка случая успеха
            if (success) {
                // Создание объекта data с сообщением 'success'
                const data = { message: 'success' };
                // Завершение Promise успешно, передавая data
                resolve(data);
            } else {
                // Обработка случая ошибки, вызов reject с сообщением об ошибке
                reject('Произошла ошибка при выполнении операции');
            }
        }, 2000);
    });
}

// Использование Promise
HowPromiseWorks()
    .then((result) => {
        // Обработка успешного выполнения Promise
        console.log(result.message); // Вывод сообщения в консоль
    })
    .catch((err) => {
        // Обработка ошибки в Promise
        console.error(err); // Вывод сообщения об ошибке в консоль
    });
