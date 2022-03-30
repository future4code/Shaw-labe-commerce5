import React from 'react';
import styled from 'styled-components';
import {Filtro} from './Components/Filtro'


const DivContainer = styled.div`
  display: flex;
  padding: 30px;
  height: 800px;
  width: 100px;
  margin: 10px;

`;


function App() {
  return (
    <DivContainer>
      {<Filtro/>}      
    </DivContainer>
  );
}

export default App;
