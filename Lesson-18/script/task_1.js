// Задача 1. Розробити калькулятор
window.onload = function () {
    document.getElementById("add").onclick = add;
    document.getElementById("subtract").onclick = subtract;
    document.getElementById("multiply").onclick = multiply;
    document.getElementById("divide").onclick = divide;
};
function add() {
    const firstNum = parseFloat(document.getElementById("firstNum").value);
    const secondNum = parseFloat(
        document.getElementById("secondNum").value
    );
    const sum = firstNum + secondNum;
    document.getElementById("result").innerText = sum;
}
function subtract() {
    const firstNum = parseFloat(document.getElementById("firstNum").value);
    const secondNum = parseFloat(
        document.getElementById("secondNum").value
    );
    const difference = firstNum - secondNum;
    document.getElementById("result").innerText = difference;
}
function multiply() {
    const firstNum = parseFloat(document.getElementById("firstNum").value);
    const secondNum = parseFloat(
        document.getElementById("secondNum").value
    );
    const product = firstNum * secondNum;
    document.getElementById("result").innerText = product;
}
function divide() {
    const firstNum = parseFloat(document.getElementById("firstNum").value);
    const secondNum = parseFloat(
        document.getElementById("secondNum").value
    );
    if (secondNum === 0) {
        document.getElementById("result").innerText = "помилка: ділення на 0";
    } else {
        const fraction = firstNum / secondNum;
        document.getElementById("result").innerText = fraction;
    }
}