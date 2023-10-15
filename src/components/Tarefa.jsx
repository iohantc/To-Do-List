import React, { useState } from 'react';
import EditarTarefa from './EditarTarefa';
import '../styles/Tarefa.css'
import { FaEdit } from 'react-icons/fa'; 

const Tarefa = ({ tarefa, onToggle, onUpdate }) => {
  const [editando, setEditando] = useState(false);

  const handleUpdate = (tarefaEditada) => {
    onUpdate(tarefaEditada);
    setEditando(false);
  };

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
    if (tarefa.concluida) return '#CCFFD5';
    if (diasRestantes < 0) return '#FFCCCC';
    return '#FFEBCC';
  };

  const definirCorDeBorda = () => {
    if (tarefa.concluida) return '2px solid #80FFAB';
    if (diasRestantes < 0) return '2px solid #FF8080';
    return '2px solid #FFD580';
  };

  const divtarefaCriada = {
    padding: '10px',
    border: definirCorDeBorda(),
    backgroundColor: definirCorDeFundo(),
    marginBottom: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
    wordWrap: 'break-word'
  };

  return (
    <div className='cardTarefa' style={divtarefaCriada}>
      {editando ? (
        <EditarTarefa tarefa={tarefa} onUpdate={handleUpdate} />
      ) : (
        <>
          <div onClick={() => onToggle(tarefa.id)}>
            <span className='tituloCard' style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>
              {tarefa.texto}
            </span>
            <div className='dataCriacao'>
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
          <FaEdit className='icon-edit' onClick={(e) => {e.stopPropagation(); setEditando(true);}} /> 
        </>
      )}
    </div>
  );
  
}

export default Tarefa;
