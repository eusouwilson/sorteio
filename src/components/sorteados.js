import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Sorteio extends Component {
    static propTypes = {
        sorteados: PropTypes.array.isRequired,

    }

    render () {
        const { sorteados } = this.props

        return (
            <div >
            <div className="titulo">Sistema de Sorteio</div>
            {sorteados.map((sorteado) => 
            <li key={sorteado.id}>
            {sorteado.nome}
            </li>             
             )}

            </div>

        )
    }

}

export default Sorteio;