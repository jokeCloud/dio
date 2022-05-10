function soma(a: number, b: number) {
  return a+b
}

console.log(soma(1, 2))

interface IAnimal {
  nome: string,
  idade: number,
  tipo: 'terrestre' | 'aquatico' | 'anfibio',
  executarRugido(alturaEmDecibels: number): void
}

const animal: IAnimal = {
  nome: 'Cachorro',
  idade: 5,
  tipo: 'terrestre',
  executarRugido: alturaEmDecibels => `${alturaEmDecibels}dB`
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean
}

const felino: IFelino = {
  nome: 'Gato',
  idade: 3,
  tipo: 'terrestre',
  visaoNoturna: true,
  executarRugido: alturaEmDecibels => `${alturaEmDecibels}dB`
}

console.log(felino.nome)
console.log(felino.executarRugido(10))