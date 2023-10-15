import React, { useState } from 'react';

const EditarTarefa = ({ tarefa, onUpdate }) => {
  const [texto, setTexto] = useState(tarefa.texto);
  const [dataLimite, setDataLimite] = useState(tarefa.dataLimite);

  // chama quando o formulário for submetido.
  const handleUpdate = (e) => {
    e.preventDefault();
    // Cria um objeto com os novos valores de texto e dataLimite, e a data de edição.
    const tarefaEditada = { ...tarefa, texto, dataLimite, dataEdicao: new Date().toISOString().split('T')[0] };
    onUpdate(tarefaEditada);
  };

  // Retorna JSX que será renderizado com um formulário contendo campos de entrada para editar texto e dataLimite, e um botão para submeter o formulário.
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
