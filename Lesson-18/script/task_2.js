// Задача 7. Подорож складається з 3 етапів. На кожному етапі користувач може вибрати один з видів транспорту (авто, автобус, літак - випадаючий список), харчування (сніданок, обід, вечеря – checkbоx) та одного з 3-х гідів(використати  - radio buttons). Ціни визначте самі. Підрахувати загальну вартість.
if (confirm('Почати тестування?')) {
    window.onload = function () {
        document.getElementById("calculate").onclick = calculateTotal;
    };
    function calculateTotal() {
        let total = 0;
        document.querySelectorAll(".stage").forEach((stage) => {
            const transport = stage.querySelector(".transport");
            total += parseFloat(transport.value);
            stage.querySelectorAll(".food input:checked").forEach((price) => {
                total += parseFloat(price.value);
            });

            const guide = stage.querySelector(".guide input:checked");
            total += parseFloat(guide.value);
        });
        document.getElementById("result").innerText = total;
    }
}