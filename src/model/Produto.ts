class Produto {
  public nome: string;
  public preco: number;
  public quantidade: number;

  constructor(nome: string, preco: number, quantidade: number) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }
  public vender(quantidade: number) {
    if (this.quantidade >= quantidade) {
      this.quantidade -= quantidade;
      return true;
    } else {
      return false;
    }
  }
}

export default Produto;
