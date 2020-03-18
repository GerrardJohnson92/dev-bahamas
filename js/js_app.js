const container = document.querySelector(".container")
const coffees = [
  { name: "Beaches", image: "img/beach.jpg", word:"beaches.html" },
  { name: "Music", image: "img/music.jpg", word:"music.html"},
  { name: "Food", image: "img/food.jpg", word:"food.html"},
  { name: "Islands", image: "img/island.jpg", word:"Eleuthera"},
  { name: "History", image: "img/history.jpg", word:"Pindling"},
  { name: "Tourism", image: "img/tourism.jpg", word:"Atlantis" },
  { name: "Government", image: "img/government.jpg", word:"Gubment"},
  { name: "Religion", image: "img/religion.jpg", word:"Church"},
  { name: "Junkanoo", image: "img/junkanoo.jpg", word:"Saxons"}
]

const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image, word}) =>
        (output += `
                  <div class="card">
                    <img class="card--avatar"  title=${name}  src=${image} />
                    <h1 class="card--title" title=${word}>${name}</h1>
                    <a class="card--link" href=${word}>Check It Out</a>
                  </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').then( () => {
        console.log('Service Worker Registered')
      })
    })
  }
