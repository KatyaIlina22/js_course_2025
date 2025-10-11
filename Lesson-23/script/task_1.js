// Задача 1. Дано клас PhoneNumber. Створити функцію перетворення до string, при якому на основі номера виводиться оператор (050….  🡪 MTC, 096… 🡪 Kyivstar, ….)
if (confirm('Почати тестування?')) {
    window.onload = function () {
        class PhoneNumber {
            constructor(number) {
                this.number = number
            }
            get operator() {
                if (this.number.startsWith('050') || this.number.startsWith('095'))
                    return 'MTC';
                if (this.number.startsWith('067') || this.number.startsWith('096'))
                    return 'Kyivstar';
                if (this.number.startsWith('073') || this.number.startsWith('093'))
                    return 'Lifecell';
                return 'Невідомий оператор';
            }
            [Symbol.toPrimitive](hint) {
                if (hint === 'string') return `${this.operator}-${this.number} `
                return this.number
            }
        }
        const phoneNumber = new PhoneNumber("0508876367")
        document.write(` ${phoneNumber}`)
    }
}
