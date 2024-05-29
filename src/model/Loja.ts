import Cliente from "./Cliente";
import Produto from "./Produto";

class Loja {
  public produtos: Produto[];
  public clientes: Cliente[];

  constructor(produtos: Produto, clientes: Cliente) {
    this.produtos = [];
    this.clientes = [];
  }

  adcProduto(produto: Produto) {
    this.produtos.push(produto);
    return "produto adicionado com sucesso";
  }

  adcClient(cliente: Cliente) {
    this.clientes.push(cliente);
    return "Cliente adicionado com sucesso";
  }

  public fazerVenda(
    idCliente: string,
    nomeProduto: Produto,
    quantidade: number
  ) {
    let clientePesquisado = this.clientes.find(
      (cliente) => cliente.idCliente === idCliente
    );
    let produtoPesquisado = this.produtos.find(
      (produto) => produto.quantidade >= quantidade
    );
    if (clientePesquisado && produtoPesquisado) {
      clientePesquisado.comprar(nomeProduto, quantidade);
      console.log("Venda efetuada com sucesso!");
    } else {
      console.log("Cliente ou produto não encontrado!");
    }
  }
}
export default Loja;
