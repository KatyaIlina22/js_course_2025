// Задача 2. Зробити конвертер валют (курси валют – константи у скрипті)
window.onload = function () {
    document.getElementById("convert").onclick = converter;
};

function converter() {
    const grn = parseFloat(document.getElementById("grn").value);
    const dollarExchangeRate = 41;
    const euroExchangeRate = 49;
    const euro = grn / euroExchangeRate;
    const dollar = grn / dollarExchangeRate;
    document.getElementById("euro").innerText = euro.toFixed(2);
    document.getElementById("dollar").innerText = dollar.toFixed(2);
}