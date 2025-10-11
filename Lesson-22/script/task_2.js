// Задача 19. Зберігати у пам’яті список справ, які користувачу треба виконати (зберігати у localStorage). Періодично випадковим чином вибирати якусь з справ і виводити користувачу (з використанням confirm). Якщо користувач натискає на «Ок», то видаляти цю задачу.
if (confirm('Почати тестування?')) {
    window.onload = function () {
        class Storage {
            constructor(storageKey) {
                this.storageKey = storageKey
            }
            loadData() {
                if (localStorage.getItem(this.storageKey)) {
                    return JSON.parse(localStorage.getItem(this.storageKey))

                }
                return []
            }
            saveData(list) {
                localStorage.setItem(this.storageKey, JSON.stringify(list))
            }
            addItem(item) {
                const list = this.loadData()
                list.push(item)
                this.saveData(list)

            }
            deleteItem(item) {
                let list = this.loadData()
                list = list.filter(val => val != item)
                this.saveData(list)
            }

        }

        const input = document.getElementById("case")
        const btn = document.getElementById("add")
        const storage = new Storage("tasks")
        btn.addEventListener("click", addHandler)
        function addHandler() {
            const title = input.value
            storage.addItem(title)
            input.value = " "
        }
        function showTasks() {
            const tasks = storage.loadData()
            if (tasks.length === 0) return
            const randIndex = 0 + Math.floor(Math.random() * tasks.length)
            const task = tasks[randIndex]
            if (confirm(task)) { storage.deleteItem(task) }
        }
        setInterval(showTasks, 10000)
    }
}