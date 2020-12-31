import React from 'react'
import PropTypes from 'prop-types'

const Noticia = ({
key,
  source,
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content
}) => (
  <div className="noticia">
    <h2>{title}</h2>
    <h4>{description}</h4>
    <img src={urlToImage} alt={description} />
    <p><u>Diario:</u> {source} - <u>Autor:</u> {author}. Fecha publicación {publishedAt}</p>
    <p><a href={url} target='_blank'>Mira la noticia en la pagina original!.</a></p>
    <p>{content}</p>
  </div>
)

Noticia.propTypes = {
    key: PropTypes.number.isRequired,
    source: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

export default Noticia