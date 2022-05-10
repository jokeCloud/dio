interface IAnimal {
  nome: string,
  idade: number,
  tipo: 'terrestre' | 'aquatico' | 'anfibio',
  porte: 'pequeno' | 'medio' | 'grande'
}

type IDomestico = IFelino | IPeixe | IReptil;

interface IFelino extends IAnimal {
  visaoNoturna: boolean
}

interface IPeixe extends IAnimal {
  radar: boolean
}

interface IReptil extends IAnimal {
  veneno: boolean
}

const gato: IDomestico = {
  nome: 'Tom',
  idade: 3,
  tipo: 'terrestre',
  porte: 'pequeno',
  visaoNoturna: true
}

const tubarao: IDomestico = {
  nome: 'Spike',
  idade: 7,
  tipo: 'aquatico',
  porte: 'grande',
  radar: false
}

const tartaruga: IDomestico = {
  nome: 'flash',
  idade: 250,
  tipo: 'anfibio',
  porte: 'medio',
  veneno: false
}

console.log(gato.nome)
console.log(gato.porte)
console.log(gato.tipo)
console.log(tubarao.nome)
console.log(tubarao.porte)
console.log(tubarao.tipo)
console.log(tartaruga.nome)
console.log(tartaruga.porte)
console.log(tartaruga.tipo)