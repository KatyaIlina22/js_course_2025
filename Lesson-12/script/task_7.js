"use strict";
// Задача 7. Сформувати двовимірний масив (4*8) з номерами днів (описати окремий тип для днів). Заповнити його випадковим чином. Підрахувати для кожного рядка кількість неділь.
if (confirm('Почати тестування?')) {
    document.write(`<h1>Задача 6. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.</h1>`);
    const days = getArray(4, 8);
    function getArray(rowNum, colNum) {
        const array = Array.from({ length: rowNum }, () => Array.from({ length: colNum }, () => 1 + Math.floor(Math.random() * 7)));
        return array;
    }
    document.write(`двовимірний масив (4*8) з номерами днів:<br>`);
    days.forEach(row => document.write(`${row}<br>`));
    const numberOfSaturdays = days.map(rows => rows.reduce((prevCount, day) => day === 7 ? prevCount + 1 : prevCount, 0));
    document.write(`Кількість неділь : <br> `);
    numberOfSaturdays.forEach((saturday, index) => document.write(`Рядок ${index + 1}: ${saturday} <br>`));
    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`);
}
