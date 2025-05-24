import React from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { CustomEntityNodeData } from './ModelingCanvas'; // Importar o tipo

// Props esperadas pelo CustomEntityNode, incluindo data com CustomEntityNodeData
interface CustomEntityNodeProps extends NodeProps<CustomEntityNodeData> {
  onAddAttribute?: (nodeId: string) => void;
  onEditAttributeName?: (nodeId: string, attributeId: string, newName: string) => void;
  onToggleAttributePK?: (nodeId: string, attributeId: string) => void;
  onDeleteAttribute?: (nodeId: string, attributeId: string) => void; // Adicionar nova prop
}

const CustomEntityNode: React.FC<CustomEntityNodeProps> = ({ id, data, onAddAttribute, onEditAttributeName, onToggleAttributePK, onDeleteAttribute }) => { // Adicionar onDeleteAttribute
  return (
    <div style={{
      border: '1px solid #555',
      padding: '10px',
      borderRadius: '5px',
      background: '#fff',
      minWidth: '150px', // Garantir uma largura mínima
    }}>
      {/* Handle na parte superior (para conexões de entrada) */}
      <Handle type="target" position={Position.Top} style={{ background: '#555' }} />

      {/* Conteúdo do nó (label da entidade) */}
      <div style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '5px' }}>
        {data.label}
      </div>

      {/* Separador entre o nome da entidade e os atributos */}
      {data.attributes && data.attributes.length > 0 && (
        <hr style={{ margin: '5px 0', borderColor: '#eee' }} />
      )}

      {/* Listar os atributos */}
      <div>
        {data.attributes.map(attr => (
          <div
            key={attr.id}
            style={{
              fontSize: '12px',
              padding: '3px 5px',
              borderTop: data.attributes.indexOf(attr) === 0 ? 'none' : '1px solid #eee',
              cursor: onEditAttributeName ? 'pointer' : 'default', // Adicionar cursor pointer se a função existir
            }}
            onClick={() => { // Evento de clique para editar nome
              if (onEditAttributeName) {
                const currentName = attr.name;
                const newName = prompt(`Editar nome do atributo "${currentName}":`, currentName);
                if (newName && newName.trim() !== '' && newName.trim() !== currentName) {
                  onEditAttributeName(id, attr.id, newName.trim());
                }
              }
            }}
          >
            <span
              onClick={(e) => { // Evento de clique para alternar PK
                e.stopPropagation(); // Impedir que o clique para editar nome seja acionado
                if (onToggleAttributePK) {
                  onToggleAttributePK(id, attr.id);
                }
              }}
              style={{
                cursor: onToggleAttributePK ? 'pointer' : 'default',
                marginRight: '6px', // Aumentado o espaçamento
                fontWeight: 'bold',
                display: 'inline-block', // Para garantir que o clique seja bem capturado
                padding: '0 2px', // Pequeno padding para área de clique
              }}
            >
              {attr.isPrimaryKey ? '[X]' : '[ ]'}
            </span>
            <span style={{ flexGrow: 1 }}> {/* Envolver o nome para o X ficar no final */}
              {attr.isPrimaryKey ? <strong>{attr.name} (PK)</strong> : attr.name}
            </span>
            {onDeleteAttribute && (
              <span
                onClick={(e) => {
                  e.stopPropagation(); // Impedir outros cliques
                  if (confirm(`Tem certeza que deseja excluir o atributo "${attr.name}"?`)) {
                    onDeleteAttribute(id, attr.id);
                  }
                }}
                style={{
                  cursor: 'pointer',
                  marginLeft: '8px',
                  color: 'red',
                  fontWeight: 'bold',
                }}
              >
                X
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Botão para adicionar atributo */}
      {onAddAttribute && ( // Renderizar o botão apenas se onAddAttribute for fornecido
        <button
          onClick={() => onAddAttribute(id)} // Chamar onAddAttribute com o id do nó
          style={{
            marginTop: '8px',
            padding: '3px 7px',
            fontSize: '10px',
            backgroundColor: '#f0f0f0',
            border: '1px solid #ccc',
            borderRadius: '3px',
            cursor: 'pointer',
            display: 'block', // Para ocupar a largura total disponível ou ajustar conforme necessário
            width: '100%',   // Para o botão ocupar a largura do nó
          }}
        >
          + Adicionar Atributo
        </button>
      )}

      {/* Handle na parte inferior (para conexões de saída) */}
      <Handle type="source" position={Position.Bottom} style={{ background: '#555', marginTop: '5px' }} />
      {/* Handles laterais, se necessário */}
      {/* Handles laterais ajustados para centralizar melhor se houver atributos */}
      <Handle type="source" position={Position.Left} style={{ background: '#555', top: data.attributes.length > 0 ? '60%' : '50%' }} />
      <Handle type="source" position={Position.Right} style={{ background: '#555', top: data.attributes.length > 0 ? '60%' : '50%' }} />
    </div>
  );
};

export default CustomEntityNode;
