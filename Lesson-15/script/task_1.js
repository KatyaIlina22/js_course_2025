"use strict";
// Задача 2. Створити об’єкт «Авто». 
// Авто	
// Поля(властивості)
// Марка
// Розмір бака
// Кількість наявних літрів
// Кількість місць
// Кількість пасажирів
// Методи (дії)
// Заправка на вказану кількість літрів
// Виведення кількості пасажирів
// Додавання пасажирів
// Висадка пасажирів
if (confirm('Почати тестування?')) {
    document.write(`<h1>Задача 2. Створити об’єкт «Авто».</h1> Поля(властивості)

Марка <br>
Розмір бака <br>
Кількість наявних літрів <br>
Кількість місць <br>
Кількість пасажирів <br>

Методи (дії) <br>
Заправка на вказану кількість літрів <br>
Виведення кількості пасажирів <br>
Додавання пасажирів <br>
Висадка пасажирів <br> <br>
    `);
    class Car {
        constructor(initMark, initTankSize, initAvailableLiters, initNumberOfSeats, initNumberOfPassengers) {
            this.mark = initMark;
            this.tankSize = initTankSize;
            this.availableLiters = initAvailableLiters;
            this.numberOfSits = initNumberOfSeats;
            this.numberOfPassengers = initNumberOfPassengers;
        }
        refueling(numberOfLiters) {
            this.availableLiters += numberOfLiters;
            if (this.availableLiters > this.tankSize) {
                console.log("Розмір бака не розрахований на таку кількість літрів, заправляю на скільки влазить");
                this.availableLiters = this.tankSize;
            }
            return this.availableLiters;
        }
        getNumberOfPassengers() {
            return this.numberOfPassengers;
        }
        addPassengers(numberOfPassenger) {
            this.numberOfPassengers += numberOfPassenger;
            if (this.numberOfPassengers > this.numberOfSits) {
                console.log("Місць не вистачає! Додаю тільки тих, хто помістився.");
                this.numberOfPassengers = this.numberOfSits;
            }
            return this.numberOfPassengers;
        }
        passengerDisembarkation(numberOfPassenger) {
            this.numberOfPassengers -= numberOfPassenger;
            if (this.numberOfPassengers < 0) {
                this.numberOfPassengers = 0;
            }
            return this.numberOfPassengers;
        }
        getInfo() {
            document.write(`Марка машини: ${this.mark}<br> Розмір бака: ${this.tankSize}<br>  Кількість наявних літрів:${this.availableLiters}<br>Кількість місць: ${this.numberOfSits}<br>Кількість пасажирів: ${this.numberOfPassengers}<br>`);
        }
    }
    const car = new Car("BMW", 50, 10, 5, 2);
    car.getInfo();
    const userLiters = prompt("Вкажіть на скільки заправити авто", '30');
    const numOfLiters = userLiters !== null ? parseInt(userLiters) : NaN;
    car.refueling(numOfLiters);
    let userPeopleNum = prompt("Вкажіть скільки пасажирів додати", '2');
    let numOfLPeople = userPeopleNum !== null ? parseInt(userPeopleNum) : NaN;
    car.addPassengers(numOfLPeople);
    userPeopleNum = prompt("Вкажіть скільки пасажирів висадити", '1');
    numOfLPeople = userPeopleNum !== null ? parseInt(userPeopleNum) : NaN;
    car.passengerDisembarkation(numOfLPeople);
    document.write(`<br>Інформація після змін<br>`);
    car.getInfo();
}
