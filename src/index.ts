import Cliente from "./model/Cliente";
import Produto from "./model/Produto";

console.log("hello Word");
// Exercício: Sistema de Gerenciamento de Loja de Eletrodomésticos
// Você deve desenvolver um sistema básico de gerenciamento para uma loja de eletrodomésticos. Este sistema deve ser capaz de gerenciar produtos, clientes e vendas.

// Requisitos:
// 1 - Classe Produto (Produto)

// Atributos:
// nome (string)
// preco (number)
// quantidade (number) - Quantidade disponível em estoque.

// Métodos:
// vender(quantidade: number): Vende uma determinada quantidade do produto,
//  se disponível no estoque. Retorna true se a venda for bem-sucedida,
//  false caso contrário.
// repor(quantidade: number): Adiciona uma quantidade ao estoque do produto.

// 2 - Classe Cliente (Cliente)

// Atributos:
// nome (string)
// idCliente (string)
// produtosComprados (array de Produto) -
//  Lista de produtos adquiridos pelo cliente.

// Métodos:
// comprar(produto: Produto, quantidade: number): Permite ao cliente
// comprar uma certa quantidade de um produto.

// 3 - Classe Loja (Loja)

// Atributos:
// produtos (array de Produto) - Lista de produtos disponíveis na loja.
// clientes (array de Cliente) - Lista de clientes da loja.

// Métodos:
// adicionarProduto(produto: Produto): Adiciona um produto ao inventário da loja.
// registrarCliente(cliente: Cliente): Registra um novo cliente na loja.
// fazerVenda(idCliente: string, nomeProduto: string, quantidade: number)
// : Realiza uma venda para um cliente específico.

const produto1 = new Produto("baninha", 100, 30);

console.log(produto1.vender(15));

const client1 = new Cliente("henrique", "bananinha");
console.log(client1.comprar(produto1, 15));
