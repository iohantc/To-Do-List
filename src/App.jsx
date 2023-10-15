import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListaDeTarefas from './components/ListaTarefas';
import PesquisaFiltro from './components/PesquisaFiltro'; 

function App() {
  // armazena as tarefas
  const [tarefas, setTarefas] = useState([]);
  // armazena o texto da nova tarefa
  const [textoTarefa, setTextoTarefa] = useState('');
  // armazena a data limite da nova tarefa
  const [dataLimite, setDataLimite] = useState('');
  // armazena tarefas filtradas
  const [tarefasFiltradas, setTarefasFiltradas] = useState([]);

  // adicionar uma nova tarefa
  const adicionarTarefa = () => {
    if (textoTarefa.trim() && dataLimite) {
      const novaTarefa = {
        texto: textoTarefa,
        dataCriacao: new Date().toISOString().split('T')[0],
        dataLimite: dataLimite,
        concluida: false,
        dataConclusao: null
      };
      // Atualiza a lista de tarefas
      setTarefas([...tarefas, novaTarefa]);
      // Limpa os campos de entrada
      setTextoTarefa('');
      setDataLimite('');
    }
  };

  // alternar a conclusão de uma tarefa
  const alternarTarefa = index => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].concluida = !novasTarefas[index].concluida;
    if (novasTarefas[index].concluida) {
      // Atualizaa data de conclusão se concluída
      novasTarefas[index].dataConclusao = new Date().toISOString().split('T')[0];
    } else {
      // Reseta a data de conclusão se não concluída
      novasTarefas[index].dataConclusao = null;
    }
    // atualiza a lista de tarefas
    setTarefas(novasTarefas);
  };

  // Campos de entrada, botões e renderização
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <>
            <PesquisaFiltro tarefas={tarefas} setTarefasFiltradas={setTarefasFiltradas} />
            <input
              type='text'
              value={textoTarefa}
              onChange={e => setTextoTarefa(e.target.value)}
            />
            <input
              type='date'
              value={dataLimite}
              onChange={e => setDataLimite(e.target.value)}
            />
            <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
            <ListaDeTarefas tarefas={tarefasFiltradas.length > 0 ? tarefasFiltradas : tarefas} onToggle={alternarTarefa} />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App; 
