"use strict";
// Задача 7. Тренажер додавання. Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.
document.write(`<h1> Задача 7. Тренажер додавання. Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.</h1>`);
if (confirm('Почати тестування?')) {
    setInterval(() => {
        const num1 = -10 + Math.floor(Math.random() * 20);
        const num2 = -10 + Math.floor(Math.random() * 20);
        const sum = num1 + num2;
        let userAnswer = prompt(`${num1}+${num2}`, '0');
        let userSum = userAnswer !== null ? parseInt(userAnswer) : NaN;
        if (userSum === sum)
            alert("Правильно");
        else
            alert(`Не вірно, правильна відповідь ${sum}`);
    }, 10000);
    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`);
}
