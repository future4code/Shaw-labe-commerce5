import React from 'react';
import { Filtros } from './Components/Filtros';
import { Products } from './Components/Produtos';
import { ShoppingCart } from './Components/Compras';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  font-family:Andale Mono, monospace;
  background-color: #DA81F5;

  @media(min-width: 600px) {
    display: grid;
    grid-template-columns: 20% 1fr 30%;
  }
`;
// const Mouse = {
// cursor: pointer;
// cursor: auto;

// /* Usando URL e cordenadas */
// cursor:  url() 4 12, auto;
// cursor:  url(cursor2.png) 2 2, pointer;

// /* Valores globais */
// cursor: inherit;
// cursor: initial;
// cursor: unset;
// }

const products = [
  {
    id: 1,
    name: 'Viagem ao buraco negro',
    price: 500,
    photo: "http://s2.glbimg.com/avqmPOmDpB6YPJi68t_NlABwRd0=/290x217/s.glbimg.com/jo/g1/f/original/2011/07/22/quasar-vapor.jpg"
  },
  {
    id: 2,
    name: 'city tour com vista do satelite + guia turisco',
    price: 150,
    photo: "https://p2.trrsf.com/image/fget/cf/1200/628/middle/images.terra.com/2014/10/02/terraestacaoespacialinternacionalbbc.jpg"
  },
  {
    id: 3,
    name: 'viagem para o buraco de minhoca',
    price: 780,
    photo: 'https://s2.glbimg.com/v8FlI11BODb7dvqFzha-Uw2JOTQ=/e.glbimg.com/og/ed/f/original/2018/12/17/wormhole-2514312_1920.jpg'
  },
  {
    id: 4,
    name: 'Viagem para Lua',
    price: 250,
    photo: 'https://mistobrasilia.com/wp-content/uploads/2021/03/Lua-terra.jpg'
  },
  {
    id: 5,
    name: 'experiencia de astronauta',
    price: 2500,
    photo: 'https://www.milkpoint.com.br/img/artigo/conteudo/36821/'
  },
  {
    id: 6,
    name: 'Passeio de onibus espacial',
    price: 400,
    photo: 'http://g1.globo.com/Noticias/Ciencia/foto/0,,14316948,00.jpg'

  }
]

class App extends React.Component {
  state = {
    minFilter: '',
    maxFilter: '',
    nameFilter: '',
    productsInCart: []
    
  }

  onChangeMinFilter = (event) => {
    this.setState({minFilter: event.target.value})
  }

  onChangeMaxFilter = (event) => {
    this.setState({maxFilter: event.target.value})
  }

  onChangeNameFilter = (event) => {
    this.setState({nameFilter: event.target.value})
  }

  onAddProductToCart = (productId) => {
    const productInCart = this.state.productsInCart.find(product => productId === product.id)

    if(productInCart) {
      const newProductsInCart = this.state.productsInCart.map(product => {
        if(productId === product.id) {
          return {
            ...product,
            quantity: product.quantity + 1
          }
        }

        return product
      })

      this.setState({productsInCart: newProductsInCart})
    } else {
      const productToAdd = products.find(product => productId === product.id)

      const newProductsInCart = [...this.state.productsInCart, {...productToAdd, quantity: 1}]

      this.setState({productsInCart: newProductsInCart})
    }
  }

  onRemoveProductFromCart = (productId) => {
    const newProductsInCart = this.state.productsInCart.map((product) => {
      if(product.id === productId) {
        return {
          ...product,
          quantity: product.quantity - 1
        }
      }
      return product
    }).filter((product) => product.quantity > 0)

    this.setState({productsInCart: newProductsInCart})
  }

  render() {
    return (
      <AppContainer>
        <Filtros
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onChangeMinFilter={this.onChangeMinFilter}            
          onChangeMaxFilter={this.onChangeMaxFilter}            
          onChangeNameFilter={this.onChangeNameFilter}                  
        />
        <Products 
          products={products}
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onAddProductToCart={this.onAddProductToCart}
        />
        <ShoppingCart
          productsInCart={this.state.productsInCart}
          onRemoveProductFromCart={this.onRemoveProductFromCart}
        />
      </AppContainer>
    );
  }
}

export default App;
