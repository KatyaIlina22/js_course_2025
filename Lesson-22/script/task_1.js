// Задача 18. Користувач може змінювати колір фону, що вибирає користувач з використанням
// <input type="color">.
// Зберігати цей колір і відновлювати при наступному відкритті. Також зберігати і відображати кількість змін протягом одного сеансу.
if (confirm('Почати тестування?')) {
    window.onload = function () {
        const btn = document.getElementById("change")
        const input = document.getElementById("color")
        const count = document.getElementById("count")
        let changeCount = 0
        function changeHandler() {
            const color = input.value
            if (color) {
                document.body.style.backgroundColor = color
                localStorage.setItem("bgColor", color)
                changeCount++
                count.innerText = changeCount
            }
        }
        const savedColor = localStorage.getItem("bgColor")
        if (savedColor) {
            document.body.style.backgroundColor = savedColor
            input.value = savedColor
        }
        btn.addEventListener("click", changeHandler)
    }
}