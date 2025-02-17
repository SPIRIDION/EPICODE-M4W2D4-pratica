// recuperiamo i nodi dal DOM
const mainSection = document.getElementById('mainSection')
const sideBar = document.getElementById('sideBar')

// salviamo denro una variabile l'indirizzo della API

const baseUrl = 'https://striveschool-api.herokuapp.com/books'

// costruiamo la funzione dedicata alla chiamata http

function getBooks() {
  fetch (baseUrl)
    .then(response => response.json)
    .then((data) => {
      console.log(data)
    })
    .catch(error => console.log(error))
} 

// creiamo la funzione che renderizzerà le card con i vari libri al suo interno

// function renderBooks()