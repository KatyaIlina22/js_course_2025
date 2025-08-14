// Задача 8. Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення (тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>
if (confirm("Почати тестування?")) {
    const image = prompt('Надайте посилання на зображення', 'https://img.freepik.com/free-vector/food-cartoon-illustration_23-2150758808.jpg?semt=ais_hybrid&w=740&q=80')
    const title = prompt('Вкажіть заголовок', 'Апельсин')
    const link = prompt('Надайте посилання, куди треба перейти при кліку на зображення', 'https://www.google.com/search?sca_esv=827ca067cae54b45&sxsrf=AE3TifMgOElKlxw5Brt5SiNstmvxqWzysg:1755077497854&udm=2&fbs=AIIjpHx8KeeL4pinWNBsyb2wNnV5a8PZmfTOZLSjaWEz0naV4It9RVOItcn1_kZKdZQnsH1WKzDz1MkAbAI8t8xyJFbSAUEk78xZTapLhj6L513E0zESNp9-ZNuBae6m7yaBpj95IuXeHSQ2zolAJ7MB-PIr4M55C4mcyf133HeEd9O_R-H4SxlMJJPcfUJUlzrIeaSw46V3uQ5AGPx19xczfv4DBh2wsuUGa1sWOQOp7VjV_LbBoLM80W_FL0q5njjPt9RNvBX8II1jsOKiPUIzXhKnuYhsqw&q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0+%D0%B0%D0%BF%D0%B5%D0%BB%D1%8C%D1%81%D0%B8%D0%BD&sa=X&sqi=2&ved=2ahUKEwiskcCWvYePAxVGQPEDHaylDkYQtKgLegQIExAB&biw=1422&bih=739&dpr=1.35')
    document.write(`<h1>Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення (тег img повине знаходитись у середині тега a)) `)

    getBanner(image, title, link)
    function getBanner(image, title, link) {
        document.write(`
    <div> <h1>${title}</h1>
    <a style= "cursor:pointer" href = "${link}"> <img style= "width:300px; height:300px" src="${image}"> </a>
</div>`)

    }
    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)
}