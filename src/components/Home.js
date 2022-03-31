import React from "react"



class Home extends React.Component {
 state={
     ordenacao:"",
 }
 upDateOrdenacao = (event)=>{
 this.setState({ordenacao: event.target.value})
 };
    

    render() {
        return (
            <div>
                <div>
                    <p>Quantidade de produtos: {this.props.produtos.length}</p>
                  
                    <label>Ordem</label>
                    <select value = {this.state.ordenacao} 
                        onChange={this.upDateOrdenacao}>
                        <option value="crescente"> Menor valor</option>
                        <option value="decrescente">Maior valor </option>
                    </select>
                    {this.state.ordenacao}
                </div>
                <div>
                    <ul className="lista-produtos">
                        {this.props.produtos
                        .sort((a,b)=>{
                          if(this.state.ordenacao === "crescente" || this.state.ordenacao === ""){
                             return a.valor - b.valor
                          }else{
                              return b.valor - a.valor                          }  
                        })
                        .map((produto) => {
                            return (
                                <li>

                                    <div>
                                        <img src={'/static/media/' + 'botas.db05abbe.webp'}></img>
                                        <div>
                                            <p>{produto.nome}</p>
                                            <p>{produto.valor}</p>
                                            <button>Adicionar Produtos</button>
                                        </div>

                                    </div>
                                </li>
                            );
                        })}
                    </ul>

                </div>
            </div>



        )
    }
}
export default Home