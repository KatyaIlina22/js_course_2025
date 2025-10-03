// Задача. Дано список автомобілів (марка, рік випуску, ціна). Сформувати елементи для фільтрування з використанням випадаючого списку (контент цих випадаючих списків сформувати у залежності від переданого списку).
if (confirm('Почати тестування?')) {
    window.onload = function () {
        class CarsFilter {
            constructor(cars) {
                this.cars = cars
            }
            getKeys(key) {
                return [...new Set(this.cars.map(car => car[key]))]
            }

            createSelect(keys, id, titleText) {
                const title = document.createElement("span")
                title.innerText = titleText
                const select = document.createElement("select")
                select.id = id
                const allOption = document.createElement("option")
                allOption.value = ""
                allOption.textContent = "Всі"
                select.appendChild(allOption)
                keys.forEach(key => {
                    const option = document.createElement("option")
                    option.textContent = key
                    option.value = key
                    select.appendChild(option)
                });
                document.body.appendChild(title)
                document.body.appendChild(select)
                return select
            }
            createSelectCars() {
                this.selectCars = this.createSelect(this.getKeys("brand"), "brand", "Марка")
                return this.selectCars
            }
            createSelectYears() {
                this.selectYears = this.createSelect(this.getKeys("yearOfManufacture"), "year", "Рік випуску")
                return this.selectYears
            }
            createCarList(carsList, id) {
                let blockList = document.createElement("div")
                blockList.id = id
                carsList.forEach(car => {
                    const listEl = document.createElement("p")
                    listEl.innerText = `${car.brand}-${car.yearOfManufacture}-${car.price}`
                    blockList.appendChild(listEl)
                })
                document.body.appendChild(blockList)
            }
            createFilter() {
                this.createSelectCars()
                this.createSelectYears()
                this.createCarList(this.cars, "carsList")
                this.addFilterEvents()
            }


            addFilterEvents() {
                this.selectCars.addEventListener("change", this.filterHandler.bind(this))
                this.selectYears.addEventListener("change", this.filterHandler.bind(this))

            }
            filterHandler() {
                const selectedCar = this.selectCars.value
                const selectedYear = this.selectYears.value
                let filtered = this.cars
                if (selectedCar) {
                    filtered = filtered.filter(car => car.brand === selectedCar)
                }

                if (selectedYear) {
                    filtered = filtered.filter(car => car.yearOfManufacture.toString() === selectedYear)
                }
                const oldList = document.getElementById("carsList")
                if (oldList) {
                    oldList.remove()
                    this.createCarList(filtered, "carsList")
                }
            }

        }
        const cars = [
            {
                brand: "BMW",
                yearOfManufacture: 2020,
                price: "20000$"
            },
            {
                brand: "opel",
                yearOfManufacture: 2006,
                price: "20000$"
            },
            {
                brand: "tayota",
                yearOfManufacture: 2016,
                price: "20000$"
            },
            {
                brand: "chevrolet",
                yearOfManufacture: 1999,
                price: "20000$"
            },
        ]
        let carsFilter = new CarsFilter(cars)
        carsFilter.createFilter()
    }
}