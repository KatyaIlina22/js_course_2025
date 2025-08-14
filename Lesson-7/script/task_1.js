// Задача 3. Створити окремі функції, які для 4 чисел знаходять:
// 1)суму;
// 2)добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення. 
if (confirm("Почати тестування?")) {
    const firstNum = parseFloat(prompt('Введіть перше число', '1'))
    const secondNum = parseFloat(prompt('Введіть друге число', '2'))
    const thirdNum = parseFloat(prompt('Введіть третє число', '3'))
    const fourthNum = parseFloat(prompt('Введіть четверте число', '4'))
    document.write(`<h1>Створити окремі функції, які для 4 чисел знаходять:
 1)суму;
2)добуток;
3)середнє арифметичне; 4)мінімальне значення. </h1>`)
    document.write(`Початкові значення:${firstNum},${secondNum},${thirdNum},${fourthNum} <br>`)

    getSum = (a, b, c, d) => a + b + c + d
    getProduct = (a, b, c, d) => a * b * c * d
    getAverage = (a, b, c, d) => (a + b + c + d) / 4
    getMinNum = (a, b, c, d) => {
        let min = a
        if (b < min) min = b
        if (c < min) min = c
        if (d < min) min = d
        return min
    }
    document.write(`Сума чисел: ${getSum(firstNum, secondNum, thirdNum, fourthNum)}<br>`)
    document.write(`Добуток чисел: ${getProduct(firstNum, secondNum, thirdNum, fourthNum)}<br>`)
    document.write(`Середнє арифметичне: ${getAverage(firstNum, secondNum, thirdNum, fourthNum)}<br>`)
    document.write(`Мінімальне число: ${getMinNum(firstNum, secondNum, thirdNum, fourthNum)}<br>`)
    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)
}