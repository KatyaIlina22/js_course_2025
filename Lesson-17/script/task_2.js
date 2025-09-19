"use strict";
// Склад. База товарів, які зберігаються на складі: назва товару, одиниця виміру, кількість, фірма виробник (назва, реєстраційний номер). Організувати реєстрацію/відвантаження товарів, фільтрація за назвою товару, фільтрація за назвою фірми
if (confirm('Почати тестування?')) {
    document.write(`<h1>Склад. База товарів, які зберігаються на складі: назва товару, одиниця виміру, кількість, фірма виробник (назва, реєстраційний номер). Організувати реєстрацію/відвантаження товарів, фільтрація за назвою товару, фільтрація за назвою фірми</h1>`);
    class Firm {
        constructor(firmName, registrationNumber) {
            this.registrationNumber = registrationNumber;
            this.firmName = firmName;
        }
        toString() {
            return `Назва фірми: ${this.firmName}<br> Реєстраційний номер: ${this.registrationNumber}<br>`;
        }
    }
    class Product {
        constructor(productName, unitOfMeasurement, numberOfProduct, firm) {
            this.productName = productName;
            this.unitOfMeasurement = unitOfMeasurement;
            this.numberOfProduct = numberOfProduct;
            this.firm = firm;
        }
        toString() {
            return `Назва продукту: ${this.productName}<br> Одиниця вимірювання: ${this.unitOfMeasurement}<br> Кількість: ${this.numberOfProduct}<br> Фірма виробник: ${this.firm}<br>`;
        }
    }
    class Warehouse {
        constructor() {
            this.products = [];
        }
        productRegistration(...products) {
            this.products.push(...products);
        }
        shipmentOfGoods(val) {
            this.products = this.products.filter(product => product.productName !== val);
        }
        filteringByProductName(name) {
            return this.products.filter(product => product.productName === name);
        }
        filteringByFirmName(name) {
            return this.products.filter(product => product.firm.firmName === name);
        }
        toString() {
            return this.products.map(p => p.toString()).join("<hr>");
        }
    }
    const firm1 = new Firm("Roshen", 1234);
    const firm2 = new Firm("Milka", 134);
    const product1 = new Product("Шоколадка", "плитка", 156, firm1);
    const product2 = new Product("Торт", "кг", 4, firm1);
    const product3 = new Product("Шоколадка", "плитка", 300, firm2);
    const product4 = new Product("Цукерки", "кг", 16, firm1);
    const product5 = new Product("Драже", "кг", 34, firm2);
    const product6 = new Product("Драже", "кг", 12, firm1);
    let warehouse = new Warehouse();
    warehouse.productRegistration(product1, product2, product3, product4, product5, product6);
    document.write(`<br><h3>Початковий асортимент складу:</h3>${warehouse}`);
    warehouse.shipmentOfGoods("Драже");
    document.write(` <br><h3>Після відвантаження драже: </h3> ${warehouse}`);
    document.write(`<br><h3>Відфільтровано за назвою виробника ("Milka"): </h3>${warehouse.filteringByFirmName("Milka")}`);
    document.write(`<br><h3>Відфільтровано за назвою товару ("Шоколадка"):</h3> ${warehouse.filteringByProductName("Шоколадка")}`);
}
