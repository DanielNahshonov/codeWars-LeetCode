// Определение первой асинхронной функции
function firstAsyncFunction() {
    return new Promise((resolve) => {
        // Эмуляция асинхронной операции с задержкой 3 секунды
        setTimeout(() => {
            resolve('first function is ready');
        }, 3000);
    });
}

// Определение второй асинхронной функции
function secondAsyncFunction() {
    return new Promise((resolve) => {
        // Эмуляция асинхронной операции с задержкой 2 секунды
        setTimeout(() => {
            resolve('second function is ready');
        }, 2000);
    });
}

// Использование Promise.all() для параллельного выполнения операций
Promise.all([firstAsyncFunction(), secondAsyncFunction()])
    .then((result) => {
        // Обработка успешного выполнения обеих операций
        console.log('all succeeded'); // Вывод сообщения об успешном выполнении
        console.log(result[0]); // Вывод результата первой функции
        console.log(result[1]); // Вывод результата второй функции
    })
    .catch((err) => {
        // Обработка ошибки, если хотя бы одна из операций завершилась ошибкой
        console.log('Houston, we got a problem', err); // Вывод сообщения об ошибке
    });
