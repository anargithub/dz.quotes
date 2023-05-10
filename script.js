// 1 dummyjson quotes
const btn = document.querySelector('button')
const URL = 'https://dummyjson.com/quotes'

async function loadQuotes() {
    const response = await fetch(URL)
    return await response.json()
}

async function showQuotes() {
    const {quotes} = await loadQuotes()
    console.log(quotes)
    let div = document.querySelector('div')
    div.innerHTML = ''

    btn.addEventListener('click', () => {
        for (let quote of quotes) {
            div.innerHTML = quotes[Math.floor(Math.random() * quotes.length)].quote
        }
    })
}
showQuotes() 

