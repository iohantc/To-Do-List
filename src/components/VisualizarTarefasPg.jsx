import React from 'react';
import PesquisaFiltro from './PesquisaFiltro';
import ListaTarefas from './ListaTarefas';
import '../styles/VisualizarTarefasPg.css'


function VisualizarTarefasPg({ tarefas, setTarefasFiltradas, tarefasFiltradas, onToggle, onUpdate }) {
  const tarefasNaoConcluidas = tarefas.filter(tarefa => !tarefa.concluida);  // Filtra apenas tarefas não concluídas

  return (
    <div className='tarefasFiltro'>
      <PesquisaFiltro tarefas={tarefasNaoConcluidas} setTarefasFiltradas={setTarefasFiltradas} />
      <ListaTarefas tarefas={tarefasFiltradas.length > 0 ? tarefasFiltradas : tarefasNaoConcluidas} onToggle={onToggle} onUpdate={onUpdate} />
    </div>
  );
}
export default VisualizarTarefasPg;