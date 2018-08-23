import React, { Component } from 'react'; class Perro extends Component {
    
    state = {
        nombre:'Rocko The Dog',
        url:"http://www.perros.com/content/perros_com/imagenes/editor/perro-listo-2.jpg"
    }
    
    render() { 
        return (
            <div className="card" style={{"background-color": 'powderblue', width: '18rem'}}>
            <img className="card-img-top" src={this.state.url}></img>
            <div className="card-body">
              <p className="card-text">
              {this.state.nombre}
              </p>
            </div>
          </div>
          );
    }
}
 
export default Perro;