const container = document.querySelector(".container")
const contain = document.querySelector(".contain")
const feet = document.querySelector(".feet")

const coffees = [
  { name: "Beaches", image: "img/beach.jpg", word:"beaches.html" },
  { name: "Music", image: "img/music.jpg", word:"music.html" },
  { name: "Food", image: "img/food.jpg", word:"food.html"},
  { name: "Islands", image: "img/island.jpg", word:"island.html"},
  { name: "History", image: "img/history.jpg", word:"history.html"},
  { name: "Tourism", image: "img/tourism.jpg", word:"tourism.html" },
  { name: "Government", image: "img/government.jpg", word:"government.html"},
  { name: "Religion", image: "img/religion.jpg", word:"religion.html"},
  { name: "Junkanoo", image: "img/junkanoo.jpg", word:"junkanoo.html"}
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

  const showCoff = () => {
    let output = ""
    coffees.forEach(
      ({ name, image, word}) =>
        (output += `<a class="card--link" href=${word}>${name}</a>`)
    )
    contain.innerHTML = output
  }

  const showfooter = () => {
    let output = ""
    coffees.forEach(
      ({ name, image, word}) =>
        (output += `<a class="footer" href=${word}>${name}    </a>`)
    )
    feet.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)
  document.addEventListener("DOMContentLoaded", showCoff)
  document.addEventListener("DOMContentLoaded", showfooter)

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').then( () => {
        console.log('Service Worker Registered')
      })
    })
  }
