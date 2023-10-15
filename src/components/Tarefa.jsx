import React from 'react';

const Tarefa = ({ tarefa, onToggle, index }) => {

    // Calcula dias restantes
    const calcularDiasRestantes = () => {
      const hoje = new Date().getTime();
      const dataLimite = new Date(tarefa.dataLimite).getTime();
      const difMs = dataLimite - hoje; // Diferença em milisengundos
      const dias = Math.ceil(difMs / (1000 * 60 * 60 * 24));
      return dias;
    };

    const diasRestantes = calcularDiasRestantes();

    const definirCorDeFundo = () => {
      if (tarefa.concluida) return 'green';
      if (diasRestantes < 0) return 'red';
      return 'blue';
    };

    const divtarefaCriada = {
      padding: '10px',
      border: '1px solid green',
      backgroundColor: definirCorDeFundo(),
      marginBottom: '5px',
      borderRadius: '5px',
      cursor: 'pointer',
      wordWrap: 'break-word',
      maxWidth: '20%'
    };

    return (
      <div style={divtarefaCriada} onClick={() => onToggle(index)}>
        <span style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>
          {tarefa.texto}
        </span>
        <div>
          Data de Criação: {tarefa.dataCriacao}
        </div>
        <div>
          Data Limite: {tarefa.dataLimite}
        </div>
        <div>
          Dias restantes para concluir: {diasRestantes}
        </div>
        {tarefa.dataConclusao && 
          <div>
            Data de Conclusão: {tarefa.dataConclusao}
          </div>
        }
      </div>
    );
};

export default Tarefa;
