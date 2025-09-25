
// Задача 6. Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні. При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний. При натисканні на зелену стрілку спортсмен переміщається у список для змагань. При натисканні на червону стрілку спортсмен переміщається у загальний список.
if (confirm('Почати тестування?')) {
    window.onload = function () {
        const general = document.querySelector(".general")
        general.addEventListener("click", function (event) {
            const item = event.target.closest(".general__item")
            favorite.appendChild(item)
            item.classList.remove("add")
            item.classList.add("remove")
        })
        const favorite = document.querySelector(".favorites")
        favorite.addEventListener("click", function (event) {
            const item = event.target.closest(".general__item")
            general.appendChild(item)
            item.classList.remove("remove")
            item.classList.add("add")
        })
    }
}