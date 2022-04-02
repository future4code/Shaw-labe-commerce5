import React from 'react'
import { ShoppingCartItem } from './ProdutosEscolhidos'
import styled from 'styled-components';

const ShoppingCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  padding: 8px;
  background-color:#CEE3F6;
  border-radius: 8px;
`;

const Logo = styled.img`
  width: 50px;
  heigth: 50px;
  margin-top: auto;
  align-self: center;
`;

export class ShoppingCart extends React.Component {
  getTotalValue = () => {
    let totalValue = 0

    for (let product of this.props.productsInCart) {
      totalValue += product.price * product.quantity
    }

    return totalValue
  }

  render() {
    return (
      <ShoppingCartContainer>
        <div>
          <h3>Carrinho:</h3>
          {this.props.productsInCart.map((product) => {
            return <ShoppingCartItem
              cartItem={product}
              onRemoveProductFromCart={this.props.onRemoveProductFromCart}
            />
          })}
          <p>Valor total: R${this.getTotalValue()},00</p>
        </div>
        <Logo src={require('../images/estrela.png')} alt="" />
      </ShoppingCartContainer>
    )
  }
}