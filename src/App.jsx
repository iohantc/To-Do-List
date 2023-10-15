import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import AdicionarTarefaPg from './components/AdicionarTarefaPg';
import VisualizarTarefasPg from './components/VisualizarTarefasPg';
import TarefasConcluidasPg from './components/TarefasConcluidasPg';

// Barra de navegação
function NavBar() {
  return (
    <nav>
      <Link to="/adicionar">Adicionar Tarefa</Link> | {/* Link para a página de adicionar tarefas */}
      <Link to="/visualizar">Visualizar Tarefas</Link> | {/* Link para a página de visualizar tarefas */}
      <Link to="/concluidas">Tarefas Concluídas</Link> {/* Link para a página de tarefas concluídas */}
    </nav>
  );
}


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
  const alternarTarefa = indice => {
    const novasTarefas = [...tarefas];
    novasTarefas[indice].concluida = !novasTarefas[indice].concluida;
    if (novasTarefas[indice].concluida) {
      // Atualizaa data de conclusão se concluída
      novasTarefas[indice].dataConclusao = new Date().toISOString().split('T')[0];
    } else {
      // Reseta a data de conclusão se não concluída
      novasTarefas[indice].dataConclusao = null;
    }
    // atualiza a lista de tarefas
    setTarefas(novasTarefas);
  };

  // Campos de entrada, botões e renderização
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/adicionar" />} />
        <Route path="/adicionar" element={<AdicionarTarefaPg textoTarefa={textoTarefa} setTextoTarefa={setTextoTarefa} dataLimite={dataLimite} setDataLimite={setDataLimite} adicionarTarefa={adicionarTarefa} />} />
        <Route path="/visualizar" element={<VisualizarTarefasPg tarefas={tarefas} setTarefasFiltradas={setTarefasFiltradas} tarefasFiltradas={tarefasFiltradas} onToggle={alternarTarefa} />} />
        <Route path="/concluidas" element={<TarefasConcluidasPg tarefas={tarefas} onToggle={alternarTarefa} />} />
      </Routes>
    </Router>
  );
}

export default App; 
