// Задача 0. Розробити клас Person (поля:ім'я, вік, адреса; методи: toString, визначення року народження). На основі класу Person  розробити клас Worker (додати поля: посада, розмір заробітної плати, кількість відсотів оподаткування; методи:визначення кількості виплачених коштів за рік, та визначення розміру податків) 
if (confirm('Почати тестування?')) {
    window.onload = function () {
        class Person {
            constructor(name, age, adress) {
                this.name = name
                this.adress = adress
                this.age = age

            }
            getYearOfBirth() {
                const date = new Date()
                return date.getFullYear() - this.age

            }
            toString() {
                return `Ім'я: ${this.name}<br>Адреса: ${this.adress} <br>Вік:${this.age} <br>Рік народження: ${this.getYearOfBirth()}<br>`
            }
        }
        class Worker extends Person {
            constructor(name, age, adress, position, salary, tax) {
                super(name, age, adress)
                this.position = position
                this.salary = salary
                this.tax = tax
            }
            amountOfMoneyPerYear() {
                return this.salary * 12
            }
            calculateTax() {
                return this.amountOfMoneyPerYear() * (this.tax / 100)
            }
            toString() {
                return `${super.toString()}Посада: ${this.position}<br>Зарплата: ${this.salary}<br>Податок: ${this.tax}%<br>Річний дохід: ${this.amountOfMoneyPerYear()}<br>Податки за рік: ${this.calculateTax()}<br>`
            }
        }
        const person = new Worker("Ольга", 19, "вул. Шевченка", "фармацевт", 23000, 10)

        document.write(person)
    }
}
