// Задача 3. Створити генератор, який би випадковим чином поступово генерував вказану кількість парних чисел.
if (confirm('Почати тестування?')) {
    window.onload = function () {
        function* generateEvenNumber(count) {
            for (let i = 0; i < count; i++) {
                let randNum
                do {
                    randNum = 0 + Math.floor(Math.random() * 100)
                } while (randNum % 2 !== 0);
                yield randNum
            }

        }
        const generator = generateEvenNumber(20)
        for (let num of generator) {
            document.write(`${num},`)

        }
    }
}