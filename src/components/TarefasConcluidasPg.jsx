import React from 'react';
import ListaDeTarefas from './ListaTarefas';

function TarefasConcluidas({ tarefas, onToggle }) {
  const tarefasConcluidas = tarefas.filter(tarefa => tarefa.concluida);
  return (
    <div>
      <ListaDeTarefas tarefas={tarefasConcluidas} onToggle={onToggle} />
    </div>
  );
}

export default TarefasConcluidas;
