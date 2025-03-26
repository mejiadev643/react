const URL_CATFACT_NINJA = 'https://catfact.ninja/fact'


export async function getRandomFact() {
    const response = await fetch(URL_CATFACT_NINJA)
    const data = await response.json()
    return data.fact
}
