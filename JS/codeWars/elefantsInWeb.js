function breakTheWeb(strength, width) {
    let totalWeight = 0;
    let elephants = 0;
    let ele
  
    for (let level = width; level = 0; level--) {
      totalWeight += level * 1000; // Каждый слон весит на 1000 кг больше, чем предыдущий уровень
      elephants += level;
      
      if (totalWeight > strength) {
        // Если добавление следующего уровня превышает прочность, остановимся и вернем текущее количество слонов
        return elephants - 1;
      }
    }
  
    // Если цикл завершен, значит, паутина может выдержать всех слонов
    return elephants;
  }
  
  // Пример использования:
  console.log(breakTheWeb(10000, 3)); // Вывод: 6
  