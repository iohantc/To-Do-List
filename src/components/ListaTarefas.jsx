import React from 'react';
import Tarefa from './Tarefa';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../styles/ListaTarefas.css';
import '../styles/Animacoes.css';

// mapeia cada tarefa para um componente Tarefa
// Cada Tarefa recebe uma chave única, a tarefa em si, uma função para alternar seu estado e o índice
function ListaTarefas({ tarefas, onToggle, onUpdate }) {
  return (
    <TransitionGroup className='listaTarefas'>
      {tarefas.map((tarefa) => (
        <CSSTransition key={tarefa.id} timeout={300} classNames="fade">
          <Tarefa tarefa={tarefa} onToggle={onToggle} onUpdate={onUpdate} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}


export default ListaTarefas; 
