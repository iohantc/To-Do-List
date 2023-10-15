import React, { useState } from 'react';

// Pesquisa e Filtragem
const PesquisaFiltro = ({ tarefas, setTarefasFiltradas }) => {
  // armazena o termo de pesquisa
  const [termoPesquisa, setTermoPesquisa] = useState('');

  const pesquisa = (e) => {
    // atualiza a pesquisa conforme o usuário digita
    setTermoPesquisa(e.target.value);

    // realiza o filtro das tarefas
    const tarefasFiltradas = tarefas.filter(tarefa => tarefa.texto.toLowerCase().includes(e.target.value.toLowerCase()));
    
    setTarefasFiltradas(tarefasFiltradas);
  };

  return (
    <div>
      <input
        type='text' 
        placeholder='Pesquisar tarefas...'
        value={termoPesquisa} 
        onChange={pesquisa} 
      />
    </div>
  );
};

export default PesquisaFiltro;  // Exporta o componente para ser usado em outros lugares
