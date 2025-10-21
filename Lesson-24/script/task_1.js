// Задача 1. Використовуючи один з АРІ
// https://github.com/public-apis/public-apis#animals
// та функцію fetch організувати завантаження та відображення даних
// Намагайтесь зробити це з використанням класів. Окремо клас для побудови розмітки. Окремо клас, який буде робити запити і повертати результати.
if (confirm('Почати тестування?')) {
    window.onload = function () {
        class DogAPI {
            constructor(baseUrl) {
                this.baseUrl = baseUrl
            }
            async getRandomDogs(count = 1) {
                try {
                    const url = `${this.baseUrl}/breeds/image/random/${count}`
                    const response = await fetch(url)
                    if (!response.ok) throw new Error(`Помилка запиту: ${response.status}`)
                    const data = await response.json()
                    return data.message
                }

                catch (err) {
                    console.log('Сталася помилка при отриманні собак:', err);
                    return []
                }

            }
        }
        class DogCards {
            constructor(imageUrl) {
                this.imageUrl = imageUrl
                this.breed = this.getBreedFromUrl(imageUrl)

            }
            getBreedFromUrl(url) {
                const parts = url.split('/')
                const breedPart = parts[parts.indexOf('breeds') + 1]
                return breedPart.replace('-', ' ')
            }
            render() {
                const dogCard = document.createElement('div')
                const title = document.createElement('h1')

                dogCard.classList.add('gallery__item')
                const img = document.createElement('img')
                img.classList.add("gallery__image")
                const text = document.createElement('div')
                img.src = this.imageUrl
                text.classList.add('gallery__text')
                text.innerHTML = `<span>Порода </span> ${this.breed}`
                dogCard.append(img, text)
                return dogCard
            }

        }
        const gallery = document.querySelector('.gallery__items')
        const dogAPI = new DogAPI('https://dog.ceo/api')
        dogAPI
            .getRandomDogs(14)
            .then((images) => {
                images.forEach((url) => {
                    const card = new DogCards(url)
                    gallery.appendChild(card.render())
                });
            })
            .catch((err) => console.error(err))



    }
}
