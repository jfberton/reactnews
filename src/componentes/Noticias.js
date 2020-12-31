import React from 'react'
import Noticia from './Noticia'
import { obtenerUltimasNoticiasAR, obtenerUltimasNoticiasARPorPalabraBuscada, obtenerUltimasNoticiasARPorDiario } from '../servicios/ServicioDeNoticias'
import BusquedaDiario from './BusquedaDiario'
import BusquedaPalabra from './BusquedaPalabra'

class Noticias extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      noticias: [],
      isFetch: true,
    }
  }

  async componentDidMount () {
    const responseJson = await obtenerUltimasNoticiasAR()
    this.setState({ noticias: responseJson.articles, isFetch: false })
  }

  handleSearch = async (search) => {
    const responseJson = await obtenerUltimasNoticiasARPorPalabraBuscada(search)
    console.log('obtenerUltimasNoticiasARPorPalabraBuscada: ' + search)
    this.setState({ noticias: responseJson.articles })
  }

  handleSearchDiario = async (search) => {
    const responseJson = await obtenerUltimasNoticiasARPorDiario(search)
    console.log('obtenerUltimasNoticiasARPorDiario: ' + search)
    this.setState({ noticias: responseJson.articles })
  }

  render () {
    const { isFetch, noticias } = this.state

    return (
      <>
        <h1>Listado de noticias API Google Argentina</h1>
        <BusquedaDiario handleSearch={this.handleSearchDiario}/>
        <BusquedaPalabra handleSearch={this.handleSearch}/> 
        {
          isFetch && 'Cargando...'
        }

        {
          (!isFetch && !noticias.length) && 'No hay noticias con la busqueda realizada, intente con otra palabra'
        }

        <section className="new-container">
          {
            noticias.map((noticia) =>
            <Noticia
                source={noticia.source.name}
                title={noticia.title}
                author={noticia.author}
                description={noticia.description}
                url={noticia.url}
                urlToImage={noticia.urlToImage}
                publishedAt={noticia.publishedAt}
                content={noticia.content}
            />)
          }
        </section>
      </>
    )
  }
}

export default Noticias