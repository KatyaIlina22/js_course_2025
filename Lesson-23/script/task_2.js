// Задача 2. Дано Shop  -- клас, що містить список товарів (масив об’єктів класу Product (назва, ціна, кількість одиниць). Додати можливість ітератора до класу Shop, щоб при ітеруванні для кожного елемента виводився рядок «товар-загальна вартість»
if (confirm('Почати тестування?')) {
    window.onload = function () {
        class Shop {
            constructor(products) {
                this.products = products
            }
            *[Symbol.iterator]() {
                for (let product of products) {
                    yield `${product.name}-${product.price * product.number}`
                }
            }

        }
        class Product {
            constructor(name, price, number) {
                this.name = name
                this.price = price
                this.number = number
            }
        }
        const products = [
            new Product("Хліб", 30, 20),
            new Product("Молоко", 45, 10),
            new Product("Торт", 250, 30),
            new Product("Сир", 300, 50)
        ]
        const shop = new Shop(products)
        for (let product of shop) {
            document.write(`${product} <br>`)

        }
    }
}