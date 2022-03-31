
import React from 'react';
import styled from 'styled-components';
import {Filtro} from './Components/Filtro'

import './App.css';
import Home from './Components/Home'
import productList from "./data/products.json"


const DivContainer = styled.div`
  display: flex;
  padding: 30px;
  height: 800px;
  width: 100px;
  margin: 10px;

`;


class App extends React.Component {
  state = {
    produtos: productList

  };

  render() {
    return (
      <DivContainer>
      <Filtro/>
      <Home produtos = {this.state.produtos} >
      
      </Home>
      </DivContainer>

    )
  }
}
export default App;
