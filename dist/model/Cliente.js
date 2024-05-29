"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    constructor(nome, idCliente) {
        this.nome = nome;
        this.idCliente = idCliente;
        this.produtosComprados = [];
    }
    comprar(produto, quantidadeCompra) {
        if (produto.vender(quantidadeCompra)) {
            this.produtosComprados.push(produto);
            return this.produtosComprados;
        }
        else {
            return "produto nao disponivel em estoque";
        }
    }
}
exports.default = Cliente;
