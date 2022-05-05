const alunos = [
  {
    id: 10,
    nome: 'João',
    nota1: 8,
    nota2: 9,
    nota3: 8
  },
  {
    id: 20,
    nome: 'Pedro',
    nota1: 7,
    nota2: 8,
    nota3: 9
  },
  {
    id: 30,
    nome: 'Paulo',
    nota1: 8,
    nota2: 9,
    nota3: 10
  },
  {
    id: 40,
    nome: 'Agostinho',
    nota1: 10,
    nota2: 10,
    nota3: 10
  },
];

function notaMedia(alunos, media) {
  let alunosAprovados = [];

  for (let i = 0; i < alunos.length; i++) {
    const {nome, nota1, nota2, nota3} = alunos[i];

    if (((nota1 + nota2 + nota3) / 3) >= media) {
      alunosAprovados.push(nome);
    }
  }

  return alunosAprovados;
}

console.log(notaMedia(alunos, 9));

