
import React from 'react';
import './App.css';
import botas from "./img/botas.webp";
import capacete from "./img/capacete.jpg";
import camiseta from "./img/camiseta.jpg";
import Home from "./components/Home"

class App extends React.Component {
  state = {
    produtos: [{
      id: 1,
      nome: "Botas de astronautas",
      valor: "150,00",
      imagem: 'botas.webp'
    },
    {
      id: 2,
      nome: "Capacete de astronauta",
      valor: "350,99",
      imagem: 'capacete.jpg'
    },
    {
      id: 3,
      nome: "Camiseta astronautas",
      valor: "109,90",
      imagem: 'camiseta.jpg'
    }
    ]

  };

  render() {
    return (
      

      <div className='container'>
        <div className='filtro'>
          
        </div>
        <div className='home'>
          <Home produtos = {this.state.produtos} >
          </Home>
        </div>
        <div className='carrinho'>
          
        </div>
      </div>
    )
  }
}
export default App;
