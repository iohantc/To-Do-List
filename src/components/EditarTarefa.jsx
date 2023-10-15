import React, { useState } from 'react';

const EditarTarefa = ({ tarefa, onUpdate }) => {
  const [texto, setTexto] = useState(tarefa.texto);
  const [dataLimite, setDataLimite] = useState(tarefa.dataLimite);

  const handleUpdate = (e) => {
    e.preventDefault();
    const tarefaEditada = { ...tarefa, texto, dataLimite, dataEdicao: new Date().toISOString().split('T')[0] };
    onUpdate(tarefaEditada);
  };

  return (
    <div className='editarTarefa'>
      <form onSubmit={handleUpdate}>
        <input
          type='text'
          value={texto}
          onChange={e => setTexto(e.target.value)}
        />
        <input
          type='date'
          value={dataLimite}
          onChange={e => setDataLimite(e.target.value)}
        />
        <button type='submit'>Atualizar</button>
      </form>
    </div>
  );
};

export default EditarTarefa;
