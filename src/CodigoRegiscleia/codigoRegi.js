// import React from "react";
// import styled from "styled-components";


// const ListContainer = styled.ul`
// list-style-type: none;
// display:flex;
// flex-direction: column;
// `

// const Titulo = styled.label`
// justify-content: ;
// font-size: small;

// `
// const Paragrafo = styled.p`
// font-size: small;
// margin-bottom:2px;
// `

// const Principal = styled.div`
// display:flex;
// justify-content: space-between;
// `
// const Select = styled.select`
// height: 15px;
// `
// const Option = styled.option` 
// font-size:small;
// `
// const Botao = styled.button`
// width:8em ;
// height: 3em;
// font-size:0.5em;
// text-align:center;
// `
// const Descricao =styled.p`
// font-size : 10px;
// `
// const Card =styled.div`
// display:flex;
// justify-content:column;


// `
// class Home extends React.Component {
//     state = {
//         ordenacao: "",
//     }
//     upDateOrdenacao = (event) => {
//         this.setState({ ordenacao: event.target.value })
//     };


// render() {
//    return (
//       <div>
//           <Principal>
//              <Paragrafo>Quantidade de produtos: {this.props.produtos.length}</Paragrafo>

//               <Titulo>Ordem</Titulo>
//                <Select value={this.state.ordenacao}
//                   onChange={this.upDateOrdenacao}>
//                   <Option value="crescente"> Menor valor</Option>
//                    <Option value="decrescente">Maior valor </Option>
//                  </Select>
//                     {this.state.ordenacao}
//                 </Principal>
//                 <div>
//                  <ListContainer>
//                      {this.props.produtos
//                      .sort((a, b) => {
//                    if (this.state.ordenacao === "crescente" || this.state.ordenacao === "") {
//                           return a.valor - b.valor
//                     } else {
//                         return b.valor - a.valor
//                    }
//                             })
//      .map((produto) => {
//             return (
//                  <li>
//                 <div>
//                 <img src="https://picsum.photos/200/200" />
//                   <Card>
//                  < Descricao>{produto.nome}</ Descricao>
//                    < Descricao>{produto.valor}</ Descricao>
//                  <Botao>Adicionar Produtos</Botao>
//                  </Card>

//                </div>
//                </li>
//                     );
//                 })}
//               </ListContainer>

//           </div>
//     </div>



//         )
//     }
// }
// export default Home