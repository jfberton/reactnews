import React from 'react'
import PropTypes from 'prop-types'

class BusquedaDiario extends React.Component {
  constructor (props) {
    super(props)

    this.state = { search: '' }
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }

  render () {
    const { handleSearch } = this.props
    const { search } = this.state

    return (
      <div className="search-container">
        <input
          value={search}
          onChange={this.handleChange}
          className="search-input"
          type="text"
        />
        <button className="search-btn" onClick={() => handleSearch(search)}>Buscar diario</button>
      </div>
    )
  }
}

BusquedaDiario.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default BusquedaDiario