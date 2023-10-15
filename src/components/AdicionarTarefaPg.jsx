import React from 'react';
import '../styles/AdicionarTarefaPg.css'

function AdicionarTarefaPg({ textoTarefa, setTextoTarefa, dataLimite, setDataLimite, adicionarTarefa }) {
  return (
    <div className='adicionarTarefa'>
      <h1>To Do List 📝</h1>
      <input
        className='inputTexto'
        type='text'
        placeholder='Escreva sua tarefa'
        value={textoTarefa}
        onChange={e => setTextoTarefa(e.target.value)}
      />
      <input className='inputData'
        type='date'
        value={dataLimite}
        onChange={e => setDataLimite(e.target.value)}
      />
      <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
    </div>
  );
}

export default AdicionarTarefaPg;
