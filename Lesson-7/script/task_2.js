// Задача 4. Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.
if (confirm("Почати тестування?")) {
    const firstNum = parseInt(prompt('Вкажіть перше число', '-5'))
    const secondNum = parseInt(prompt('Вкажіть друге число', '104'))
    const thirdNum = parseInt(prompt('Вкажіть третє число', '2'))
    document.write(`<h1>Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.</h1>`)
    document.write(`Початкові значення: ${firstNum}, ${secondNum},${thirdNum} <br>`)

    mathOperations(firstNum, secondNum, thirdNum)
    function mathOperations(a, b, c) {
        document.write(`Кількість парних: ${getNumberOfEvenNum(a, b, c)} <br>`)
        document.write(`Кількість додатних: ${getNumberOfPositiveNum(a, b, c)}<br>`)
        document.write(`Кількість більших за 100: ${getNumberGreaterThan100(a, b, c)}<br>`)
    }
    function getNumberOfEvenNum(a, b, c) {
        let count = 0
        if (a % 2 == 0) count++
        if (b % 2 == 0) count++
        if (c % 2 == 0) count++
        return count
    }
    function getNumberOfPositiveNum(a, b, c) {
        let count = 0
        if (a > 0) count++
        if (b > 0) count++
        if (c > 0) count++
        return count
    }
    function getNumberGreaterThan100(a, b, c) {
        let count = 0
        if (a > 100) count++
        if (b > 100) count++
        if (c > 100) count++
        return count
    }
    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)
}