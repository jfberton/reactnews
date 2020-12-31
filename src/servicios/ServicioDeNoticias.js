const baseUrl = 'http://newsapi.org/v2/top-headlines?'
const apiKey = '652cd21f78624e1eac942c3847d80ca2'

/*

http://newsapi.org/v2/top-headlines?country=ar&apiKey=652cd21f78624e1eac942c3847d80ca2
http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=652cd21f78624e1eac942c3847d80ca2
http://newsapi.org/v2/top-headlines?country=ar&q=COVID&from=2020-12-29&sortBy=popularity&apiKey=652cd21f78624e1eac942c3847d80ca2
*/

export async function obtenerUltimasNoticiasAR () {
  const pageIndex = 0
  const response = await fetch(`${baseUrl}country=ar&apiKey=${apiKey}`)
  const responseJson = await response.json()
  return responseJson
}

export async function obtenerUltimasNoticiasARPorPalabraBuscada (q) {
    const pageIndex = 0
    const response = await fetch(`${baseUrl}country=ar&q=${q}&from=2020-12-01&sortBy=popularity&apiKey=${apiKey}`)
    const responseJson = await response.json()
    return responseJson
  }

export async function obtenerUltimasNoticiasARPorDiario (q) {
  const response = await fetch(`${baseUrl}sources=${q}&apiKey=${apiKey}`)
  const responseJson = await response.json()
  return responseJson
}

export default {
    obtenerUltimasNoticiasAR,
    obtenerUltimasNoticiasARPorPalabraBuscada,
    obtenerUltimasNoticiasARPorDiario,
}
