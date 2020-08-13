const imgColor = document.querySelector('.energy')
const h1 = document.querySelector('.description h1')
const h2 = document.querySelector('.description h2')

let activeElement = 0
const time = 9000

const colorImages = ['img/en1.jpg', 'img/en2.jpg', 'img/en3.jpg']
// const names = ['Jakiś nagłówek 1', 'Jakiś nagłówek 2', 'Jakiś nagłówek 3']
// const professions = ['Jakiś opis 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, aliquid. ', 'Jakiś opis 2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, aliquid.', 'Jakiś opis 3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, aliquid.']


const changeElement = () => {
    activeElement++

    if (activeElement == colorImages.length) activeElement = 0

    imgColor.src = colorImages[activeElement]
    // h1.textContent = names[activeElement]
    // h2.textContent = professions[activeElement]

}

setInterval(changeElement, time)