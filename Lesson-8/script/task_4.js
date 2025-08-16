// Задача 6. Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).
if (confirm('Почати тестування?')) {
    let productNames = ["банан", "молоко", "хліб", "сир", "торт", "червона риба"]
    let productPrices = [20, 45, 25, 110, 540, 1000]
    const amountOfMoney = parseFloat(prompt("Скільки грошей ви маєте?", '50'))
    document.write(`Ось які продукти ви можете собі дозволити: <br>`)
    availableProducts(productNames, productPrices, amountOfMoney)
    function availableProducts(name, price, userMoney) {
        let anyAvailable = false;
        for (let index = 0; index < price.length; index++) {
            if (userMoney >= price[index]) {
                document.write(`${name[index]} ціна: ${price[index]}<br>`)
                anyAvailable = true
            }

        }
        if (!anyAvailable) {
            document.write(`на жаль, ви нічого не можете купити`)
        }
    }
    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)
}
