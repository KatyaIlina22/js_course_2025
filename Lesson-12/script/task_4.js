"use strict";
// Задача 4. Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком.
// Тобто кожного разу після обміну елементів вивести поточний стан масиву на екран.
if (confirm('Почати тестування?')) {
    document.write(`<h1>Задача 4. Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком.

Тобто кожного разу після обміну елементів вивести поточний стан масиву на екран.
</h1>`);
    function getRandArray(number) {
        const array = Array.from({ length: number }, () => -10 + Math.floor(Math.random() * 20));
        return array;
    }
    let randArray = getRandArray(10);
    document.write(`Початковий масив: ${randArray}<br>`);
    const input = prompt(`Оберіть метод сортування \n 1.Бульбашкове сортування \n 2.Сортування змішуванням \n  3. Сортування включенням`, '1');
    const userChoice = input !== null ? parseInt(input) : NaN;
    switch (userChoice) {
        case 1:
            document.write(`Остаточний результат: ${bobbleSort(randArray)}`);
            break;
        case 2:
            document.write(`Остаточний результат: ${shakerSort(randArray)}`);
            break;
        case 3:
            document.write(`Остаточний результат: ${insertionSort(randArray)}`);
            break;
        default:
            break;
    }
    function printArray(arr, i, j) {
        let output = arr.map((num, index) => {
            if (index === i || index === j) {
                return `<span style="color:red">${num}</span>`;
            }
            return num;
        });
        document.write(`[${output.join(", ")}]<br>`);
    }
    function printArray1(arr, i) {
        let output = arr.map((num, index) => {
            if (index === i) {
                return `<span style="color:red">${num}</span>`;
            }
            return num;
        });
        document.write(`[${output.join(", ")}]<br>`);
    }
    function bobbleSort(array) {
        let rightLimit = randArray.length;
        let changed;
        do {
            changed = false;
            for (let index = 1; index < rightLimit; index++) {
                if (array[index] < array[index - 1]) {
                    document.write(`міняємо ${array[index - 1]} і ${array[index]}  місцями <br>`);
                    printArray(array, index - 1, index);
                    const temp = array[index];
                    array[index] = array[index - 1];
                    array[index - 1] = temp;
                    changed = true;
                    document.write(`[${array.join(", ")}]<br><br>`);
                }
            }
            rightLimit--;
        } while (changed);
        return array;
    }
    function shakerSort(array) {
        let rightLimit = array.length - 1;
        let leftLimit = 0;
        let changed;
        while (leftLimit < rightLimit) {
            changed = false;
            for (let index = leftLimit; index <= rightLimit; index++) {
                if (array[index] < array[index - 1]) {
                    document.write(`міняємо ${array[index - 1]} і ${array[index]}  місцями <br>`);
                    printArray(array, index - 1, index);
                    const temp = array[index];
                    array[index] = array[index - 1];
                    array[index - 1] = temp;
                    changed = true;
                    document.write(`[${array.join(", ")}]<br><br>`);
                }
            }
            if (!changed)
                return array;
            rightLimit--;
            changed = false;
            for (let index = rightLimit; index > leftLimit; index--) {
                if (array[index] < array[index - 1]) {
                    const temp = array[index];
                    array[index] = array[index - 1];
                    array[index - 1] = temp;
                    changed = true;
                }
            }
            if (!changed)
                return array;
            leftLimit++;
        }
        return array;
    }
    function insertionSort(array) {
        for (let k = 1; k < array.length; k++) {
            let key = array[k];
            let i = k - 1;
            document.write(`Шукаємо місце для числа у відсортованій частині <br>`);
            printArray1(array, k);
            while (i >= 0 && key < array[i]) {
                array[i + 1] = array[i];
                i--;
            }
            array[i + 1] = key;
            document.write(`Число у відсортованій частині<br>`);
            document.write(`[${array.join(", ")}]<br><br>`);
        }
        return array;
    }
    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`);
}
