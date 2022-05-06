const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let total = arr.reduce((acumulator, itemOrIndiceOrIncrementor) => acumulator + itemOrIndiceOrIncrementor, 0)

console.log(total)

const precos = [1.00, 2.00, 3.00, 4.00, 5.00, 6.00, 7.00, 8.00, 9.00, 10.00]

function saldoFinal(precos, saldoDisponivel) {
  let totalCompra = precos.reduce((ac, i) => ac + i, 0)
  return `Saldo disponível: R$ ${saldoDisponivel.toFixed(2)}.
Total das compras: R$ ${totalCompra.toFixed(2)}.
Novo saldo: R$ ${(saldoDisponivel - totalCompra).toFixed(2)}`
}

console.log(saldoFinal(precos, 100))


const produtos = [
  {
    nome:  'chocolate',
    preco: 5.00
  },
  {
    nome:  'pasta de dente',
    preco: 10.00
  },
  {
    nome:  'desodorante',
    preco: 15.00
  }
]

const nota = 100

function saldoFim(lista, pagamento) {
  let totalProdutos = lista.reduce((ac, i) => ac + i.preco, 0)
  return `Saldo disponível: R$ ${pagamento.toFixed(2)}.
Total das compras: R$ ${totalProdutos.toFixed(2)}.
Novo saldo: R$ ${(pagamento - totalProdutos).toFixed(2)}.`

}

console.log(saldoFim(produtos, nota))