// Задача 5. Відображаємо картки товарів, які користувач може вибирати. Вибраний товар має зелену рамку (при кліку робити toogle з класом вибраного елемента)
window.onload = function () {
    const products = document.querySelector(".products")
    products.addEventListener("click", function (event) {
        const product = event.target.closest(".product")

        product.classList.toggle("selected")

    })
}