import React from 'react';
import ListaTarefas from './ListaTarefas';
import '../styles/TarefasConcluidasPg.css'

function TarefasConcluidas({ tarefas, onToggle }) {
  const tarefasConcluidas = tarefas.filter(tarefa => tarefa.concluida);
  return (
    <div className='concluidas'>
      <h2>Tarefas concluídas 🎉</h2>
      <ListaTarefas tarefas={tarefasConcluidas} onToggle={onToggle} />
    </div>
  );
}

export default TarefasConcluidas;
