"use strict";
// Задача 2. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування змішуванням.
if (confirm('Почати тестування?')) {
    document.write(`<h1>Задача 2. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування змішуванням.</h1>`);
    let number = 30;
    let randArray = getRandArray(number);
    function getRandArray(num) {
        const array = Array.from({ length: num }, () => -10 + Math.floor(Math.random() * 20));
        return array;
    }
    document.write(`початковий масив: ${randArray}<br>`);
    let changed;
    let numberOfChanges = 0;
    let rightLimit = randArray.length - 1;
    let leftLimit = 0;
    while (leftLimit < rightLimit) {
        changed = false;
        for (let index = leftLimit; index <= rightLimit; index++) {
            if (randArray[index - 1] > randArray[index]) {
                const temp = randArray[index];
                randArray[index] = randArray[index - 1];
                randArray[index - 1] = temp;
                changed = true;
                numberOfChanges++;
            }
        }
        if (!changed)
            break;
        rightLimit--;
        changed = false;
        for (let index = rightLimit; index > leftLimit; index--) {
            if (randArray[index] < randArray[index - 1]) {
                const temp = randArray[index];
                randArray[index] = randArray[index - 1];
                randArray[index - 1] = temp;
                changed = true;
                numberOfChanges++;
            }
        }
        if (!changed)
            break;
        leftLimit++;
    }
    document.write(`Сортований масив: ${randArray}<br>`);
    document.write(`скільки було обмінів під час сортування змішуванням.: ${numberOfChanges}`);
}
document.write(`
    <br></br>
    <a href="./index.html">назад</a>`);
