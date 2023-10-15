import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import AdicionarTarefaPg from './components/AdicionarTarefaPg';
import VisualizarTarefasPg from './components/VisualizarTarefasPg';
import TarefasConcluidasPg from './components/TarefasConcluidasPg';
import './styles/NavBar.css'
import './styles/App.css'

// Barra de navegação
function NavBar() {
  return (
    <nav>
      <Link to="/adicionar">Adicionar Tarefa</Link>
      <Link to="/visualizar">Visualizar Tarefas</Link>
      <Link to="/concluidas">Tarefas Concluídas</Link>
    </nav>
  );
}

function App() {
  // armazena as tarefas e seu dados
  const [tarefas, setTarefas] = useState([]);
  const [textoTarefa, setTextoTarefa] = useState('');
  const [dataLimite, setDataLimite] = useState('');
  const [tarefasFiltradas, setTarefasFiltradas] = useState([]);

  // adicionar uma nova tarefa
  const adicionarTarefa = () => {
    if (textoTarefa.trim() && dataLimite) {
      const novaTarefa = {
        id: uuidv4(),  // Adiciona ID único para a tarefa
        texto: textoTarefa,
        dataCriacao: new Date().toISOString().split('T')[0],
        dataLimite: dataLimite,
        concluida: false,
        dataConclusao: null
      };
      setTarefas([...tarefas, novaTarefa]);
      setTextoTarefa('');
      setDataLimite('');
    }
  };

  // alternar a conclusão de uma tarefa
  const alternarTarefa = id => {
    const novasTarefas = tarefas.map(tarefa => {
      if (tarefa.id === id) {
        const tarefaAtualizada = { ...tarefa, concluida: !tarefa.concluida };
        if (tarefaAtualizada.concluida) {
          tarefaAtualizada.dataConclusao = new Date().toISOString().split('T')[0];
        } else {
          tarefaAtualizada.dataConclusao = null;
        }
        return tarefaAtualizada;
      }
      return tarefa;
    });
    setTarefas(novasTarefas);
  };

  // atualizar uma tarefa
  const atualizarTarefa = (tarefaEditada) => {
    const novasTarefas = tarefas.map(tarefa =>
      tarefa.id === tarefaEditada.id ? tarefaEditada : tarefa
    );
    setTarefas(novasTarefas);
  };

  // Campos de entrada, botões e renderização
  return (
    <Router>
      <div className='conteudo' style={{ display: 'flex' }}>
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/adicionar" />} />
            <Route path="/adicionar" element={<AdicionarTarefaPg textoTarefa={textoTarefa} setTextoTarefa={setTextoTarefa} dataLimite={dataLimite} setDataLimite={setDataLimite} adicionarTarefa={adicionarTarefa} />} />
            <Route path="/visualizar" element={<VisualizarTarefasPg tarefas={tarefas} setTarefasFiltradas={setTarefasFiltradas} tarefasFiltradas={tarefasFiltradas} onToggle={alternarTarefa} onUpdate={atualizarTarefa} />} />
            <Route path="/concluidas" element={<TarefasConcluidasPg tarefas={tarefas} onToggle={alternarTarefa} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App; 
