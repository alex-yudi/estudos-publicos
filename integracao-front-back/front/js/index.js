const img = document.querySelector('img');

async function getNeko() {
    const response = await fetch('https://nekos.best/api/v2/pout')
    const json = await response.json()
    img.src = json.results[0].url
}

getNeko()
