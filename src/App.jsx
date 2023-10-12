import React, { useState } from 'react';
import ListaDeTarefas from './components/ListaTarefas';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [textoTarefa, setTextoTarefa] = useState('');
  const [dataLimite, setDataLimite] = useState('');

  const adicionarTarefa = () => {
    if (textoTarefa.trim() && dataLimite) {
      const novaTarefa = {
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

  const alternarTarefa = index => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].concluida = !novasTarefas[index].concluida;
    if (novasTarefas[index].concluida) {
      novasTarefas[index].dataConclusao = new Date().toISOString().split('T')[0];
    } else {
      novasTarefas[index].dataConclusao = null;
    }
    setTarefas(novasTarefas);
  };

  return (
    <div>
      <input
        type="text"
        value={textoTarefa}
        onChange={e => setTextoTarefa(e.target.value)}
      />
      <input
        type="date"
        value={dataLimite}
        onChange={e => setDataLimite(e.target.value)}
      />
      <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      <ListaDeTarefas tarefas={tarefas} onToggle={alternarTarefa} />
    </div>
  );
}

export default App;
