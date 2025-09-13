"use strict";
// Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.
if (confirm('Почати тестування?')) {
    document.write(`<h1>Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.
</h1>`);
    function getYear(period, numberOfMonth) {
        let newMonth = period.month + numberOfMonth;
        let newYear = period.year + Math.floor((newMonth - 1) / 12);
        return newYear;
    }
    let period = {
        day: 22,
        month: 12,
        year: 2005,
    };
    let userNumberOfMonth = prompt(`Вкажіть кількість місяців`, '24');
    let numberOfMonth = userNumberOfMonth !== null ? parseInt(userNumberOfMonth) : NaN;
    document.write(`який буде рік через ${numberOfMonth} місяців: ${getYear(period, numberOfMonth)}<br>`);
}
