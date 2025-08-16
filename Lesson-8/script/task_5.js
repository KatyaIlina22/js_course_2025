// Задача 7. Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
// за весь рік;
// у першій половині року;
// у другій половині року;
// за літо;
// за ІІ квартал;
// за парні місяці (з парними номерами);
// за місяці, які є початковими у сезоні (весна, літо, осінь, зима).

if (confirm('Почати тестування?')) {
    let month = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"]
    let paymentsDuringTheYear = getPaymentsDuringThePeriod(12)
    paymentAnalysis(paymentsDuringTheYear, month)
    function paymentAnalysis(payments, month) {
        outputPaymentsArray(payments, month)
        document.write(`сумарна кількість грошей за весь рік: ${getAmountPerPeriod(1, 12, payments)}<br>`)
        document.write(`сумарна кількість грошей  у першій половині року: ${getAmountPerPeriod(1, 6, payments)}<br>`)
        document.write(`сумарна кількість грошей у другій половині року: ${getAmountPerPeriod(7, 12, payments)}<br>`)
        document.write(`сумарна кількість грошей  за літо: ${getAmountPerPeriod(6, 8, payments)}<br>`)
        document.write(`сумарна кількість грошей за ІІ квартал: ${getAmountPerPeriod(4, 6, payments)}<br>`)
        document.write(`сумарна кількість грошей за парні місяці (з парними номерами): ${getAmountForEvenMonths(payments)}<br>`)
        document.write(`сумарна кількість грошей за місяці, які є початковими у сезоні (весна, літо, осінь, зима)
: ${getAmountForTheFirstMonthsOfThePeriod(payments)}<br>`)


    }


    function getPaymentsDuringThePeriod(period) {

        let payments = []
        for (let month = 0; month < period; month++) {
            payments.push(700 + Math.floor(Math.random() * 10000))

        }
        return payments
    }

    function getAmountPerPeriod(start, end, payments) {
        let sum = 0
        for (let index = start - 1; index < end; index++) {
            sum += payments[index]

        }
        return sum
    }
    function getAmountForEvenMonths(payments) {
        let sum = 0
        for (let index = 1; index < 12; index += 2) {
            sum += payments[index]

        }
        return sum
    }
    function getAmountForTheFirstMonthsOfThePeriod(payments) {
        let sum = 0
        for (let index = 2; index < 12; index += 3) {
            sum += payments[index]

        }
        return sum
    }
    function outputPaymentsArray(payments, month) {
        for (let index = 0; index < 12; index++) {
            document.write(`${month[index]}: ${payments[index]}<br>`)

        }
        return


    }
    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)
}