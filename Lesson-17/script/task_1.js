"use strict";
// Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи)
if (confirm('Почати тестування?')) {
    document.write(`<h1>Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи)</h1>`);
    class ArrayProcessing {
        static getNumberOfPositives(array) {
            return array.reduce((prevCount, number) => number > 0 ? prevCount + 1 : prevCount, 0);
        }
        static getNumberOfNegatives(array) {
            return array.reduce((prevCount, number) => number < 0 ? prevCount + 1 : prevCount, 0);
        }
        static numberOfOccurrencesOfNumber(array, userNum) {
            return array.reduce((prevCount, number) => number === userNum ? prevCount + 1 : prevCount, 0);
        }
    }
    const array = Array.from({ length: 14 }, () => -10 + Math.floor(Math.random() * 20));
    document.write(` ${array}<br>`);
    document.write(`Кількість додатніх елементів: ${ArrayProcessing.getNumberOfPositives(array)}<br>`);
    document.write(`Кількість від'ємних елементів: ${ArrayProcessing.getNumberOfNegatives(array)}<br>`);
    const randNum = -10 + Math.floor(Math.random() * 20);
    document.write(`Кількість входжень числа ${randNum}: ${ArrayProcessing.numberOfOccurrencesOfNumber(array, randNum)}<br>`);
}
