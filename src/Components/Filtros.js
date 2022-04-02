import React from 'react'
import styled from 'styled-components';

const FiltroContainer = styled.div`
  padding: 8px;
  border-radius: 10px;
  background-color: #CEE3F6;
  
`;

const InputContainer = styled.input`
  width: 100%;
  margin-right: 1em;
  box-sizing: border-box;
`

export class Filtros extends React.Component {
  render() {
    return <FiltroContainer>
      <h3>Filtros</h3>
      <label>Valor mínimo:</label>
      <InputContainer
        type="number"
        value={this.props.minFilter}
        onChange={this.props.onChangeMinFilter}
      />
      <label>Valor máximo:</label>
      <InputContainer
        type="number"
        value={this.props.maxFilter}
        onChange={this.props.onChangeMaxFilter}
      />
      <label>Busca por nome:</label>
      <InputContainer
        type="text"
        value={this.props.nameFilter}
        onChange={this.props.onChangeNameFilter}
      />
    </FiltroContainer>
  }
}
