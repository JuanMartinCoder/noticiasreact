import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import ListaNoticias from './components/ListaNoticias'
import FormularioAtr from './components/FormularioAtr'

// a49bfdf3a69a4943b40a5233074ff5b1 API KEY


class App extends Component {
  state = {
    noticias: []
  }

  componentDidMount() {
    this.consultarNoticias();
  }
  
  
  consultarNoticias = async (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=a49bfdf3a69a4943b40a5233074ff5b1`;
  
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
  
    this.setState({
      noticias: noticias.articles
    })
    
  }




  render() {
    return (
      <Fragment>
        <Header 
        titulo="Noticias React"/>

        <div className="container white contenedor-noticias">
        <FormularioAtr
          consultarNoticias={this.consultarNoticias}
        />

        <ListaNoticias 
          noticias={this.state.noticias}
        />

        </div>
      </Fragment>
    );
  }
}

export default App;