//?     fetch - это современный API для выполнения сетевых запросов в браузере
//?      и в среде выполнения JavaScript (например, в среде Node.js). 
//?      Он предоставляет простой и гибкий способ взаимодействия с ресурсами через сеть,
//?       такими как HTTP запросы.
//? Основные характеристики fetch:
//? Простота использования: Он предоставляет простой интерфейс для выполнения запросов.
//? Promise-интерфейс: fetch возвращает объект Promise, что облегчает обработку асинхронных операций.
//? Глобальный объект: fetch доступен как глобальный объект в среде выполнения браузера и Node.js,
//?                поэтому он может использоваться как в клиентском, так и в серверном JavaScript коде.


// Функция для выполнения запроса к API с использованием fetch и обертки в Promise
const fetchDataFromAPI = () => {
    // Возвращаем новый Promise, который оборачивает выполнение fetch
    return new Promise((resolve, reject) => {
        // Выполняем запрос к API (например, JSONPlaceholder)
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => {
                // Проверяем статус ответа
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                // Преобразуем ответ в JSON и передаем в resolve
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
};

// Вызываем функцию для выполнения запроса к API
fetchDataFromAPI()
    .then(result => {
        console.log('Результат запроса:', result);
    })
    .catch(error => {
        console.error('Произошла ошибка:', error);
    });
