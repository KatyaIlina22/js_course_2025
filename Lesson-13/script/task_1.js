"use strict";
// Задача 1. Генерація всіх підмножин: Реалізуйте рекурсивну функцію, яка генерує всі можливі підмножини заданого масиву. Наприклад, для масиву [1, 2, 3] можливі підмножини: [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3].
if (confirm('Почати тестування?')) {
    document.write(`<h1>Задача 1. Генерація всіх підмножин: Реалізуйте рекурсивну функцію, яка генерує всі можливі підмножини заданого масиву. Наприклад, для масиву [1, 2, 3] можливі підмножини: [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3].</h1>`);
    const array = [1, 2, 3];
    function matrix(array, index = 0, tempArr = []) {
        if (index === array.length) {
            document.write(`[${tempArr}]<br>`);
            return;
        }
        matrix(array, index + 1, tempArr);
        tempArr.push(array[index]);
        matrix(array, index + 1, tempArr);
        tempArr.pop();
    }
    matrix(array);
    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`);
}
