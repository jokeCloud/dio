(function () {
    var _a;
    const $ = (query) => document.querySelector(query);
    function calcTime(mili) {
        const min = Math.floor(mili / 60000);
        const sec = Math.floor(mili % 60000) / 1000;
        return `${min} minutos e ${sec} segundos`;
    }
    function patio() {
        function ler() {
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }
        function salvar(veiculo) {
            localStorage.setItem('patio', JSON.stringify(veiculo));
        }
        function adicionar(veiculo, salva) {
            var _a, _b;
            const row = document.createElement('tr');
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
      `;
            (_a = row.querySelector('.delete')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
                remover(this.dataset.placa);
            });
            (_b = $('#patio')) === null || _b === void 0 ? void 0 : _b.appendChild(row);
            if (salva)
                salvar([...ler(), veiculo]);
        }
        function remover(placa) {
            const { entrada, motorista } = ler().find(veiculo => veiculo.placa === placa);
            const tempo = calcTime(new Date().getTime() - new Date(entrada).getTime());
            if (!confirm(`O cliente ${motorista} permaneceu com seu veículo por ${tempo}. Deseja encerrar?`))
                return;
            salvar(ler().filter(veiculo => veiculo.placa !== placa));
            render();
        }
        function render() {
            $('#patio').innerHTML = '';
            const patio = ler();
            if (patio.length) {
                patio.forEach(veiculo => adicionar(veiculo));
            }
        }
        return { ler, adicionar, remover, salvar, render };
    }
    patio().render();
    (_a = $('#cadastrar')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        var _a, _b, _c, _d;
        const motorista = (_a = $('#motorista')) === null || _a === void 0 ? void 0 : _a.value;
        const placa = (_b = $('#placa')) === null || _b === void 0 ? void 0 : _b.value;
        const marca = (_c = $('#marca')) === null || _c === void 0 ? void 0 : _c.value;
        const modelo = (_d = $('#modelo')) === null || _d === void 0 ? void 0 : _d.value;
        if (!motorista || !placa) {
            alert('Campo motorista e placa são obrigatórios!');
            return;
        }
        patio().adicionar({ motorista, placa, marca, modelo, entrada: new Date /*().toISOString()*/ }, true);
        $("#motorista").value = "";
        $("#placa").value = "";
        $("#marca").value = "";
        $("#modelo").value = "";
    });
})();
