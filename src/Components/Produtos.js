import React from "react";
import { ProductCard } from "./CarrinhoProdutos";
import styled from "styled-components";
import "../App.css";

const Titulo = styled.div`
  display: flex;

  p {
    font-size: 1.2rem;
  }
`;

const ProductsContainer = styled.div`
  margin: 0 1em;
`;

const LogoImagem = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
`;

const Logo = styled.a`
font-size: 1.5rem;
font-style:oblique ;

`

const ProductsHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  background-color: #cee3f6;
  font-weight: bold;
  border-radius: 20px;
  select {
    border-radius: 2rem;
    width: 7.5rem;
  }
`;

const ProductsGrid = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #DA81F5;
  border-radius: 50px;

  @media(min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
`;


export class Products extends React.Component {
  state = {
    sort: "DECRESCENTE",
  };

  getFilteredAndOrderedList = () => {
    return this.props.products
      .filter((product) =>
        this.props.maxFilter ? product.price < this.props.maxFilter : true
      )
      .filter((product) =>
        this.props.minFilter ? product.price > this.props.minFilter : true
      )
      .filter((product) =>
        this.props.nameFilter
          ? product.name.includes(this.props.nameFilter)
          : true
      )
      .sort((a, b) =>
        this.state.sort === "CRESCENTE" ? a.price - b.price : b.price - a.price
      );
  };

  onChangeSort = (event) => {
    this.setState({ sort: event.target.value });
  };

  render() {
    const filteredAndOrderedList = this.getFilteredAndOrderedList();
    return (
      <ProductsContainer>
        <LogoImagem src={require('../images/espaco-sideral.png')} />
        <Logo>C.E.U</Logo>
        <Titulo>
          <h2>Gostaria de viajar no tempo ou espaço?</h2>
          <p>
            <br />
            <br />
            Vá com C.E.U!
          </p>
        </Titulo>
        <ProductsHeader>
          <p>Quantidade de produtos: {filteredAndOrderedList.length}</p>

          <div>
            <label>Ordenação:</label>
            <select value={this.state.sort} onChange={this.onChangeSort}>
              <option value={"CRESCENTE"}>Crescente</option>
              <option value={"DECRESCENTE"}>Decrescente</option>
            </select>
          </div>
        </ProductsHeader>
        <ProductsGrid className="App">
          {filteredAndOrderedList.map((product) => {
            return (
              <ProductCard
                product={product}
                onAddProductToCart={this.props.onAddProductToCart}
              />
            );
          })}
        </ProductsGrid>
        {/* <div className="main">
          <div className="box">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div> */}



      </ProductsContainer>



    );
  }
}
