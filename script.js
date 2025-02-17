// recuperiamo i nodi dal DOM
const mainSection = document.getElementById('mainSection')
const sideBar = document.getElementById('sideBar')

// salviamo denro una variabile l'indirizzo della API

const baseUrl = 'https://striveschool-api.herokuapp.com/books'

// costruiamo la funzione dedicata alla chiamata http

function getBooks() {
  fetch (baseUrl)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      renderBooks(data)
    })
    .catch(error => console.log(error))
} 

getBooks()

// creiamo la funzione che renderizzerà le card con i vari libri al suo interno

function renderBooks(data) {
  for (book of data) {
    const cardBook = document.createElement('div')
    cardBook.classList.add('col-6','col-md-4','col-lg-3')
    const cardInside = document.createElement('div')
    cardInside.classList.add('card')
    cardBook.appendChild(cardInside)
    const cardImg = document.createElement('img')
    cardImg.classList.add('card-img-top')
    cardImg.setAttribute('src',book.img)
    cardInside.appendChild(cardImg)
    mainSection.appendChild(cardBook)
  }
}