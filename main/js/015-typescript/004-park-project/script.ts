interface IVeiculo {
  motorista: string,
  placa: string,
  marca?: string,
  modelo?: string,
  entrada: Date | string
}

(function() {
  const $ = (query: string): HTMLInputElement | null => document.querySelector(query)

  function calcTime(mili: number) {
    const min = Math.floor(mili / 60000)
    const sec = Math.floor(mili % 60000) / 1000

    return `${min} minutos e ${sec} segundos`
  }

  function patio() {    
    function ler(): IVeiculo[] {
      return localStorage.patio ? JSON.parse(localStorage.patio) : []
    }

    function salvar(veiculo: IVeiculo[]) {
      localStorage.setItem('patio', JSON.stringify(veiculo))
    }

    function adicionar(veiculo: IVeiculo, salva?: boolean) {
      const row = document.createElement('tr')
      row.innerHTML = `
        <td>${veiculo.motorista}</td>
        
        <td>${veiculo.placa}</td>
        <td>${veiculo.marca}</td>
        <td>${veiculo.modelo}</td>        
        <td data-time="${veiculo.entrada}">
          ${veiculo.entrada.toLocaleString("pt-BR", {
            hour: "numeric",
            minute: "numeric",
          })}
        <td>
          <button class="delete" data-placa="${veiculo.placa}">Remover</button>
        </td>      
      `

      row.querySelector('.delete')?.addEventListener('click', function () {
        remover(this.dataset.placa)
      })
        

      $('#patio')?.appendChild(row)

      if (salva) salvar([...ler(), veiculo])

    }
    
    function remover(placa: string) {
      const {entrada, motorista} = ler().find(veiculo => veiculo.placa === placa)

      const tempo = calcTime(new Date().getTime() - new Date(entrada).getTime())

      if(!confirm(`O cliente ${motorista} permaneceu com seu veículo por ${tempo}. Deseja encerrar?`)) return

      salvar(ler().filter(veiculo => veiculo.placa !== placa))
      render()

    }

    function render() {
      $('#patio')!.innerHTML = ''
      const patio = ler()

      if (patio.length) {
        patio.forEach(veiculo => adicionar(veiculo))
      }
    }

    return {ler, adicionar, remover, salvar, render}  
  }

  patio().render()

  $('#cadastrar')?.addEventListener('click', () => {
    const motorista = $('#motorista')?.value
    const placa     = $('#placa')?.value
    const marca     = $('#marca')?.value
    const modelo    = $('#modelo')?.value
  
    if (!motorista || !placa) {
      alert('Campo motorista e placa são obrigatórios!')
      return
    }

    patio().adicionar({motorista, placa, marca, modelo, entrada: new Date}, true)
    $("#motorista").value = "";
    $("#placa").value = "";
    $("#marca").value = "";
    $("#modelo").value = "";

  })
})()

