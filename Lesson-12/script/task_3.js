"use strict";
// Задача 3. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування включеннями.
if (confirm('Почати тестування?')) {
    document.write(`<h1>Задача 3. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування включеннями.</h1>`);
    let number = 30;
    let randArray = getRandArray(number);
    function getRandArray(num) {
        const array = Array.from({ length: num }, () => -10 + Math.floor(Math.random() * 20));
        return array;
    }
    document.write(`початковий масив: ${randArray}<br>`);
    let numberOfChanges = 0;
    for (let k = 1; k < randArray.length; k++) {
        let key = randArray[k];
        let i = k - 1;
        while (i >= 0 && key < randArray[i]) {
            randArray[i + 1] = randArray[i];
            i--;
            numberOfChanges++;
        }
        randArray[i + 1] = key;
        if (i + 1 !== k)
            numberOfChanges++;
    }
    document.write(`Сортований масив: ${randArray}<br>`);
    document.write(`скільки було обмінів під час сортування включеннями.: ${numberOfChanges}`);
}
document.write(`
    <br></br>
    <a href="./index.html">назад</a>`);
