if (confirm('Почати тестування?')) {
    window.onload = function () {
        document.write(`Відповідь у консолі`)

        // Задача 5. Дано список з віком учнів. Підрахувати скільки разів кожне значення зустрічається у списку і максимальне.
        const ages = [12, 13, 12, 14, 13, 13, 15]
        const m = new Map()
        for (let age of ages) {
            if (m.has(age)) m.set(age, m.get(age) + 1)
            else m.set(age, 1)
        }
        console.log('скільки разів кожне значення зустрічається у списку');
        console.log(m)
        console.log('максимальне значення');
        console.log(Math.max(...m.keys()));
        // Задача 6.  Дано масив книг (назва, рік видання, автор). Підрахувати кількість книг для кожного автора.
        const books = [
            { title: "Кобзар", year: 1840, author: "Тарас Шевченко" },
            { title: "Лісова пісня", year: 1911, author: "Леся Українка" },
            { title: "І мертвим, і живим...", year: 1859, author: "Тарас Шевченко" },
            { title: "Кайдашева сім’я", year: 1879, author: "Іван Нечуй-Левицький" },
            { title: "Contra spem spero!", year: 1890, author: "Леся Українка" },
            { title: "Гайдамаки", year: 1841, author: "Тарас Шевченко" }
        ];

        const m2 = new Map()
        for (let book of books) {
            if (m2.has(book.author)) m2.set(book.author, m2.get(book.author) + 1)
            else m2.set(book.author, 1)
        }
        console.log('кількість книг для кожного автора.');
        console.log(m2);
        // Задача 7. Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін). Підрахувати для кожного клієнта кількість відвідувань
        const visitors = [
            { login: "user123" },
            { login: "anna" },
            { login: "user123" },
            { login: "ivan" },
            { login: "anna" },
            { login: "anna" },
            { login: "user123" },
            { login: "maria" },
            { login: "ivan" },
            { login: "user123" }
        ];
        const m3 = new Map()
        for (let visitor of visitors) {
            if (m3.has(visitor.login)) m3.set(visitor.login, m3.get(visitor.login) + 1)
            else m3.set(visitor.login, 1)
        }
        console.log('для кожного клієнта кількість відвідувань');

        console.log(m3);
        // Задача 8. Дано масив студентів (піб, курс, факультет). Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів. 
        const students = [
            { name: "Іваненко Іван", course: 1, faculty: "Інформатика" },
            { name: "Петренко Марія", course: 2, faculty: "Математика" },
            { name: "Коваленко Олег", course: 3, faculty: "Інформатика" },
            { name: "Сидоренко Анна", course: 1, faculty: "Фізика" },
            { name: "Шевченко Оксана", course: 2, faculty: "Математика" },
            { name: "Бондар Андрій", course: 4, faculty: "Біологія" },
            { name: "Ткаченко Олена", course: 1, faculty: "Фізика" },
            { name: "Мельник Дмитро", course: 3, faculty: "Інформатика" }
        ];
        const numberOfFaculties = new Set(students.map(student => student.faculty)).size
        const numberOfStudents = new Map()

        for (let student of students) {
            if (numberOfStudents.has(student.course)) numberOfStudents.set(student.course, numberOfStudents.get(student.course) + 1)
            else numberOfStudents.set(student.course, 1)
        }
        console.log('кількість різних факультетів');

        console.log(numberOfFaculties);
        console.log('кількість студентів кожного з курсів.');

        console.log(numberOfStudents);
        // Задача 9. Дано масив показів температур. Підрахувати кількість входжень кожного із показів
        // let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
        // Заокруглити вверх значення та підрахувати кількість різних показів.
        const numberOfTemperatures = new Map()
        let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
        for (const temperature of temperatures) {
            if (numberOfTemperatures.has(temperature)) numberOfTemperatures.set(temperature, numberOfTemperatures.get(temperature) + 1)
            else numberOfTemperatures.set(temperature, 1)
        }
        console.log('кількість входжень кожного із показів температур');

        console.log(numberOfTemperatures);

        temperatures = temperatures.map(temperature => Math.ceil(temperature))
        const numberOfTemperatures2 = new Set(temperatures).size
        console.log('кількість різних показів');

        console.log(numberOfTemperatures2);
        // Задача 10 Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії. Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики. Також підрахувати скільки всього студентів відвідують хоча б один гурток. 
        const mathClub = [
            "Іваненко Іван",
            "Петренко Марія",
            "Коваленко Олег",
            "Шевченко Оксана",
            "Бондар Андрій"
        ];

        const historyClub = [
            "Петренко Марія",
            "Коваленко Олег",
            "Сидоренко Анна",
            "Мельник Дмитро",
            "Ткаченко Олена"
        ];
        const s1 = new Set(mathClub)
        const s2 = new Set(historyClub)
        const bothClubs = s1.intersection(s2).size
        console.log('скільки студентів з гуртка з історії також відвідують гурток з математики');

        console.log(bothClubs);
        const allStudents = s1.union(s2).size
        console.log('скільки всього студентів відвідують хоча б один гурток');

        console.log(allStudents);
    }
}