"use strict";
// Наплічник
// Клас із полями #weight і #items. Дозвольте додавати предмети, якщо вага не перевищує 10 кг.
class Bag {
    constructor() {
        this.weight = 0;
        this.items = [];
    }
    get Weight() {
        return this.weight;
    }
    set Weight(val) {
        this.weight = val;
    }
    get Items() {
        return this.items;
    }
    set Items(val) {
        this.items.push(val);
    }
    addItems(weight, item) {
        if (weight <= 0)
            throw new Error("Вага не може бути 0 або менше 0");
        if (weight + this.Weight > 10)
            throw new Error("Перевищення допустимої ваги");
        this.Items = item;
        this.Weight += weight;
    }
    toString() {
        return `Предмети: ${this.Items} Загальна вага:${this.Weight}`;
    }
}
let bag = new Bag;
while (true) {
    try {
        const userItem = prompt("Що хочете покласти до рюкзака", "");
        if (userItem === null || userItem === "") {
            throw new Error("Не вказано назву предмета");
        }
        const item = userItem;
        const userWeight = prompt("Яка вага предмету", "2");
        if (userWeight === null) {
            throw new Error("Не вказано вагу предмета");
        }
        const weight = parseFloat(userWeight);
        if (isNaN(weight)) {
            throw new Error("Вага повинна бути числом");
        }
        bag.addItems(weight, item);
        alert(bag);
    }
    catch (error) {
        alert(error.message);
        break;
    }
}
