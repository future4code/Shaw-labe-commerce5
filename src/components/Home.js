import React from "react"
import foto from '../img/botas.webp'


class Home extends React.Component {

   // renderizaProdutos = () => {
       // this.props.produtos
    

    render() {
        return (
            <div>
                <div>
                    <p>Quantidade de produtos:</p>
                    
                    <label>Ordem</label>
                   <select>
                   <option value ="Maior valor">Maior </option>
                   <option value ="Menor valor"> Menor</option>
                   </select>
                </div>
                <div>
                    <ul className="lista-produtos">
                        {this.props.produtos.map((produto) => {
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