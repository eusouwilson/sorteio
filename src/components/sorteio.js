import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sorteio extends Component {
    static propTypes = {
        sorteados: PropTypes.array.isRequired,
        onSort: PropTypes.func.isRequired
        }

    render () {
        const { sorteados, onSort } = this.props

        return (
            <div >
            <div className="titulo">Sistema de Sorteio</div>
            {sorteados.length ? sorteados.map((sorteado) => 
            <li key={sorteado.id} className="nome">{sorteado.nome}</li>                 
            ): <div>sem dados </div>}
            <button onClick ={() => onSort(sorteados)} className="button">Sortear</button>
            </div>

        )
    }

}

export default Sorteio;