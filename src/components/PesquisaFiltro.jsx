import React, { useState } from 'react';
import '../styles/PesquisaFiltro.css'

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
    <div className='pesquisa'>
      <input
        className='inputTexto'
        type='text'
        placeholder='Pesquisar tarefas...'
        value={termoPesquisa}
        onChange={pesquisa}
      />
    </div>
  );
};

export default PesquisaFiltro;
