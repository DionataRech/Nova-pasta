import Produto from "./Produto";

class Cliente {
  nome: string;
  idCliente: string;
  produtosComprados: Produto[];

  constructor(nome: string, idCliente: string) {
    this.nome = nome;
    this.idCliente = idCliente;
    this.produtosComprados = [];
  }

  comprar(produto: Produto, quantidadeCompra: number) {
    if (produto.vender(quantidadeCompra)) {
      this.produtosComprados.push(produto);
      return this.produtosComprados;
    } else {
      return "produto nao disponivel em estoque";
    }
  }
}
export default Cliente;
