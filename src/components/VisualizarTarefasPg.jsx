import React from 'react';
import PesquisaFiltro from './PesquisaFiltro';
import ListaDeTarefas from './ListaTarefas';


function VisualizarTarefasPg({ tarefas, setTarefasFiltradas, tarefasFiltradas, onToggle }) {
    const tarefasNaoConcluidas = tarefas.filter(tarefa => !tarefa.concluida);  // Filtra apenas tarefas não concluídas
  
    return (
      <div>
        <PesquisaFiltro tarefas={tarefasNaoConcluidas} setTarefasFiltradas={setTarefasFiltradas} />
        <ListaDeTarefas tarefas={tarefasFiltradas.length > 0 ? tarefasFiltradas : tarefasNaoConcluidas} onToggle={onToggle} />
      </div>
    );
  }
  
  export default VisualizarTarefasPg;