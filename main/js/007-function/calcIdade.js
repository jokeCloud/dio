function calcularIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
  nome: 'João',
  idade: 31,
};

const pessoa2 = {
  nome: 'Paulo',
  idade: 35,
};

const pessoa3 = {
  nome: 'Pedro',
  idade: 30,
  altura: 1.,
};

console.log(calcularIdade.call(pessoa1, 10));
console.log(calcularIdade.apply(pessoa1, [10]));

