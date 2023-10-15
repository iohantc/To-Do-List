import React from 'react';

function AdicionarTarefaPg({ textoTarefa, setTextoTarefa, dataLimite, setDataLimite, adicionarTarefa }) {
  return (
    <div>
      <input
        type='text'
        value={textoTarefa}
        onChange={e => setTextoTarefa(e.target.value)}
      />
      <input
        type='date'
        value={dataLimite}
        onChange={e => setDataLimite(e.target.value)}
      />
      <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
    </div>
  );
}

export default AdicionarTarefaPg;
