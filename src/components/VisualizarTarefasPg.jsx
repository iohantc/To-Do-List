import React from 'react';
import PesquisaFiltro from './PesquisaFiltro';
import ListaTarefas from './ListaTarefas';
import '../styles/VisualizarTarefasPg.css'

function VisualizarTarefasPg({ tarefas, setTarefasFiltradas, tarefasFiltradas, onToggle, onUpdate }) {
  // Filtra tarefas não concluídas do array.
  const tarefasNaoConcluidas = tarefas.filter(tarefa => !tarefa.concluida);

  // Retorna JSX que será renderizado com um componente PesquisaFiltro para filtrar as tarefas e um componente 
  // ListaTarefas para listar as tarefas filtradas ou todas as tarefas não concluídas, se nenhuma pesquisa foi feita.
  return (
    <div className='tarefasFiltro'>
      <PesquisaFiltro tarefas={tarefasNaoConcluidas} setTarefasFiltradas={setTarefasFiltradas} />
      <ListaTarefas tarefas={tarefasFiltradas.length > 0 ? tarefasFiltradas : tarefasNaoConcluidas} onToggle={onToggle} onUpdate={onUpdate} />
    </div>
  );
}

export default VisualizarTarefasPg;