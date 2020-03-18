const container = document.querySelector(".container")
const coffees = [
  { name: "Beaches", image: "img/beach.jpg" },
  { name: "Music", image: "img/music.jpg" },
  { name: "Food", image: "img/food.jpg" },
  { name: "Islands", image: "img/island.jpg" },
  { name: "History", image: "img/history.jpg" },
  { name: "Tourism", image: "img/tourism.jpg" },
  { name: "Government", image: "img/government.jpg" },
  { name: "Religion", image: "img/religion.jpg" },
  { name: "Junkanoo", image: "img/junkanoo.jpg" },
]

const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                  <div class="card">
                    <img class="card--avatar" src=${image} />
                    <h1 class="card--title">${name}</h1>
                    <a class="card--link" href="./beaches.html">More</a>
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
