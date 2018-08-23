import React, { Component } from 'react';
class Contador extends Component {

    state = {
        conteo: 0
    }

    formatearConteo(){
        const {conteo} = this.state

        return conteo === 0
        ? 'cero'
        : conteo
    }

    insertarClasesSpan(){
        const {conteo} = this.state
        let spanClass = "mr-2 badge badge-"
        return conteo === 0
        ? spanClass += 'warning'
        : spanClass += 'primary'
    }

    incrementarConteo = () => {
        this.setState({
            conteo: this.state.conteo + 1
        })
    }

    render() { 
        return (
            <div className="m-4">
            {/* Titulo del contador */}
            <h3>{this.props.children}</h3>

                {/* Contador */}
                <span className={this.insertarClasesSpan()}>
                    {this.formatearConteo()}
                </span>

                {/* Incrementar contador */}
                <button onClick={this.incrementarConteo} className="btn btn-primary btn-sm">
                    Incrementar
                </button>

                {/* Incrementar contador */}
                <button onClick={this.props.onDelete} className="btn btn-danger btn-sm ml-2">
                    Borrar
                </button>
            </div>
          );
    }
}
 
export default Contador;