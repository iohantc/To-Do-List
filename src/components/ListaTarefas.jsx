import React from 'react';
import Tarefa from './Tarefa'; 
import '../styles/ListaTarefas.css'

// mapeia cada tarefa para um componente Tarefa
// Cada Tarefa recebe uma chave única, a tarefa em si, uma função para alternar seu estado e o índice
function ListaTarefas({ tarefas, onToggle }) {
  return (
    <div className='listaTarefas'>
      {tarefas.map((tarefa, indice) => (
        <Tarefa key={indice} tarefa={tarefa} onToggle={onToggle} indice={indice} />
      ))}
    </div>
  );
}


export default ListaTarefas; 
