import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em 0;
  //itens dentro do carrinho
  p {
    margin: 0 .5em;
    font-size: 1em;
  }
`;
const Botao = styled.button`
  border-radius: 4px;
  cursor: pointer;
  font-family: Verdana;
  font-weight: bold;
  font-size: 5px;
  padding: 4px 8px ;
`;

export class ShoppingCartItem extends React.Component {
  render() {
    return (
      <ItemContainer>
        <p>{this.props.cartItem.quantity}x</p>
        <p>{this.props.cartItem.name}</p>        
        <FontAwesomeIcon icon={faTrash} onClick={() =>
          this.props.onRemoveProductFromCart(this.props.cartItem.id)
        } />
      </ItemContainer>
    );
  }
}
