
import React from 'react';
import './App.css';
import botas from "./img/botas.webp";
import capacete from "./img/capacete.jpg";
import camiseta from "./img/camiseta.jpg";
import Home from "./components/Home"
import productList from "./data/products.json"

class App extends React.Component {
  state = {
    produtos: productList

  };

  render() {
    return (
      <Home produtos = {this.state.produtos} >
      </Home>
    )
  }
}
export default App;
