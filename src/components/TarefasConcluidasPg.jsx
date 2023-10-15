import React from 'react';
import ListaTarefas from './ListaTarefas';
import '../styles/TarefasConcluidasPg.css'

function TarefasConcluidas({ tarefas, onToggle }) {
  // filtra apenas as tarefas que estão marcadas como concluídas.
  const tarefasConcluidas = tarefas.filter(tarefa => tarefa.concluida);
  
  // Retorna JSX que será renderizado com um cabeçalho e a ListaTarefas contendo apenas as tarefas concluídas.
  return (
    <div className='concluidas'>
      <h2>Tarefas concluídas 🎉</h2>
      <ListaTarefas tarefas={tarefasConcluidas} onToggle={onToggle} />
    </div>
  );
}

export default TarefasConcluidas;
