import React from 'react';
import Tarefa from './Tarefa';

function ListaDeTarefas({ tarefas, onToggle }) {
  return (
    <ul>
      {tarefas.map((tarefa, index) => (
        <Tarefa key={index} tarefa={tarefa} onToggle={onToggle} index={index} />
      ))}
    </ul>
  );
}

export default ListaDeTarefas;
