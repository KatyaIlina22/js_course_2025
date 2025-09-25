// Задача 2. Дано 5 елементів input. При введенні значення у якийсь із них необхідно автоматично заповнювати інші (усі попередні у спадному порядку(кожен попередній має значення на 1 менше за наступний), усі наступні на 1 більше (кожен наступне на 1 більше за попереднього)
window.onload = function () {
    const inputs = document.querySelectorAll("input")
    for (let input of inputs) {
        input.addEventListener("input", function () {
            let value = parseInt(this.value)
            let step = 1
            let prevLable = this.parentElement.previousElementSibling
            while (prevLable) {
                let prevInput = prevLable.querySelector("input")
                prevInput.value = value - step
                prevLable = prevLable.previousElementSibling
                step++
            }
            step = 1
            let nextLable = this.parentElement.nextElementSibling
            while (nextLable) {
                nextInput = nextLable.querySelector("input")
                nextInput.value = value + step
                nextLable = nextLable.nextElementSibling
                step++
            }

        })
    }
}