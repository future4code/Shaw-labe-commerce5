import React from 'react'
import styled from 'styled-components';
import imgLupa from '../Imagens/lupa.png'

const ContainerFiltro = styled.div`
  display: flex;
  padding: 8px;
  border-radius: 10px;
  border: solid 3px;
  flex-direction: column;
  align-items: center; 
  
  `; 
  
const ImgEstilo = styled.img`
width: 20px;
margin-left: 10px;
margin-top: 6px;
`
const IconeContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;


`

const InputDoContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
  border-radius: 20px;
 

`;

export class Filtro extends React.Component {
  render() {
    return <ContainerFiltro>
      <IconeContainer><h3>Filtrar produtos: </h3><ImgEstilo src={imgLupa}/></IconeContainer>
      
        <InputDoContainer>
          Valor min:
          <input
            type="number"
            value={this.props.minFilter}
            onChange={this.props.onChangeMinFilter}
          />
        </InputDoContainer>
        <InputDoContainer>
          Valor max:
          <input
            type="number"
            value={this.props.maxFilter}
            onChange={this.props.onChangeMaxFilter}
          />
        </InputDoContainer>
        <InputDoContainer>
          Nome do produto:
          <input
            type="text"
            value={this.props.nameFilter}
            onChange={this.props.onChangeNameFilter}
          />
        </InputDoContainer>
    </ContainerFiltro>
  }
}
