const input = document.getElementById('input') as HTMLInputElement

input.addEventListener('input', event => {
  const i = event.currentTarget as HTMLInputElement
  console.log(i.value)
})



interface IUsuario {
  nome:  string,
  email: string
  cargo?: 'colaborador' | 'gerente' | 'coordenador' | 'supervisor'
}

function redirecione(usuario: IUsuario) {
  if (usuario.cargo === 'gerente') {
  //redirecionar para area da administração
  }
  //redirecionar para área de usuários
}

//fase 2

interface ICachorro {
  readonly nome: string,
  readonly idade: number,
  readonly parqueFavorito?: string
}

type CachorroSomenteLeitura = {
  +readonly [k in keyof ICachorro]-?: ICachorro[k]
}

class MeuCachorro implements ICachorro {
  nome = 'Rex';
  idade = 14;
  parqueFavorito = 'Horto Florestal'

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const cao = new MeuCachorro('Rex', 14)

