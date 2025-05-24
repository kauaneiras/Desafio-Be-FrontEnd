'use client';

import React, { useCallback, useState } from 'react';
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Node,
  Edge,
  OnNodesChange,
  OnEdgesChange,
  Connection,
  Controls,
  Background,
  NodeDoubleClickCallback,
  EdgeMouseHandler, // Importar EdgeMouseHandler
} from 'reactflow';
import 'reactflow/dist/style.css';
import Toolbar from './Toolbar';
import CustomEntityNode from './CustomEntityNode'; // Importar CustomEntityNode

// Definir e exportar os tipos de dados para atributos e o nó customizado
export type Attribute = {
  id: string;
  name: string;
  isPrimaryKey: boolean;
};

export type CustomEntityNodeData = {
  label: string;
  attributes: Attribute[];
};

const initialNodes: Node<CustomEntityNodeData>[] = [ // Usar CustomEntityNodeData
  {
    id: '1',
    type: 'customEntity', // Alterado para 'customEntity'
    data: { label: 'Nó Inicial', attributes: [] }, // Adicionar attributes
    position: { x: 250, y: 5 },
  },
  {
    id: '2',
    type: 'customEntity', // Alterado para 'customEntity'
    data: { label: 'Nó Destino', attributes: [] }, // Adicionar attributes
    position: { x: 100, y: 100 },
  },
];

// Ajustar initialEdges para incluir data e label formatado
const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    label: '(1,1) -- Relacionamento Inicial -- (1,1)',
    data: {
      relationshipName: 'Relacionamento Inicial',
      sourceCardinality: '(1,1)',
      targetCardinality: '(1,1)',
    },
  },
];

let nodeIdCounter = 3; // Contador para IDs de nós

function ModelingCanvas() {
  const [nodes, setNodes] = useState<Node<CustomEntityNodeData>[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  // Definir os tipos de nós customizados
  // Atualizado para passar onAddAttribute para CustomEntityNode
  const nodeTypes = {
    customEntity: (props: NodeProps<CustomEntityNodeData>) => (
      <CustomEntityNode
        {...props}
        // @ts-ignore - Ignorando temporariamente para as props extras
        onAddAttribute={addAttributeToNode}
        // @ts-ignore
        onEditAttributeName={editAttributeName}
        // @ts-ignore
        onToggleAttributePK={toggleAttributePrimaryKey}
        // @ts-ignore
        onDeleteAttribute={deleteAttribute}
      />
    ),
  };

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  // Função para excluir um atributo de um nó específico
  const deleteAttribute = useCallback(
    (nodeId: string, attributeId: string) => {
      setNodes((nds) =>
        nds.map((n) => {
          if (n.id === nodeId && n.data && 'attributes' in n.data) {
            const updatedAttributes = n.data.attributes.filter(
              (attr) => attr.id !== attributeId
            );
            return {
              ...n,
              data: {
                ...n.data,
                attributes: updatedAttributes,
              },
            };
          }
          return n;
        })
      );
    },
    [setNodes]
  );

  // Função para alternar o status de Chave Primária de um atributo
  const toggleAttributePrimaryKey = useCallback(
    (nodeId: string, attributeId: string) => {
      setNodes((nds) =>
        nds.map((n) => {
          if (n.id === nodeId && n.data && 'attributes' in n.data) {
            const updatedAttributes = n.data.attributes.map((attr) => {
              if (attr.id === attributeId) {
                return { ...attr, isPrimaryKey: !attr.isPrimaryKey };
              }
              return attr;
            });
            return {
              ...n,
              data: {
                ...n.data,
                attributes: updatedAttributes,
              },
            };
          }
          return n;
        })
      );
    },
    [setNodes]
  );

  // Função para editar o nome de um atributo específico em um nó
  const editAttributeName = useCallback(
    (nodeId: string, attributeId: string, newName: string) => {
      setNodes((nds) =>
        nds.map((n) => {
          if (n.id === nodeId && n.data && 'attributes' in n.data) {
            const updatedAttributes = n.data.attributes.map((attr) => {
              if (attr.id === attributeId) {
                return { ...attr, name: newName };
              }
              return attr;
            });
            return {
              ...n,
              data: {
                ...n.data,
                attributes: updatedAttributes,
              },
            };
          }
          return n;
        })
      );
    },
    [setNodes]
  );

  // Função para adicionar um novo atributo a um nó específico
  const addAttributeToNode = useCallback(
    (nodeId: string) => {
      const newAttrId = `attr_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const newAttribute: Attribute = {
        id: newAttrId,
        name: 'Novo Atributo',
        isPrimaryKey: false,
      };

      setNodes((nds) =>
        nds.map((n) => {
          if (n.id === nodeId) {
            // Assegurar que estamos lidando com CustomEntityNodeData
            if (n.data && 'attributes' in n.data) {
              return {
                ...n,
                data: {
                  ...n.data,
                  attributes: [...n.data.attributes, newAttribute],
                },
              };
            }
          }
          return n;
        })
      );
    },
    [setNodes]
  );
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  // Callback para o duplo clique na aresta
  const handleEdgeDoubleClick: EdgeMouseHandler = useCallback(
    (event, edge) => {
      const currentRelName = edge.data?.relationshipName || 'Relacionamento';
      let currentSourceCardinality = edge.data?.sourceCardinality || '(1,1)'; // Modificado para let
      let currentTargetCardinality = edge.data?.targetCardinality || '(1,1)'; // Modificado para let

      const newRelName = prompt('Nome do Relacionamento:', currentRelName);
      if (newRelName === null) return;

      const cardinalityRegex = /^\s*\(\s*(?:\d+|n)\s*,\s*(?:\d+|n)\s*\)\s*$/;

      let newSourceCardinalityInput = prompt('Cardinalidade da Origem (ex: (0,1), (1,n)):', currentSourceCardinality);
      if (newSourceCardinalityInput === null) return;
      if (!cardinalityRegex.test(newSourceCardinalityInput.trim())) {
        alert("Formato de cardinalidade inválido para Origem. Use (x,y) onde x, y são números ou 'n'. A cardinalidade da origem não foi alterada.");
        newSourceCardinalityInput = currentSourceCardinality; // Reverte para o valor atual
      } else {
        currentSourceCardinality = newSourceCardinalityInput.trim(); // Atualiza se válido, para o próximo prompt e comparação
      }
      
      let newTargetCardinalityInput = prompt('Cardinalidade do Destino (ex: (0,1), (1,n)):', currentTargetCardinality);
      if (newTargetCardinalityInput === null) return;
      if (!cardinalityRegex.test(newTargetCardinalityInput.trim())) {
        alert("Formato de cardinalidade inválido para Destino. Use (x,y) onde x, y são números ou 'n'. A cardinalidade do destino não foi alterada.");
        newTargetCardinalityInput = currentTargetCardinality; // Reverte para o valor atual
      } else {
        currentTargetCardinality = newTargetCardinalityInput.trim(); // Atualiza se válido, para comparação
      }
      
      const finalNewRelName = newRelName.trim();
      const finalNewSourceCardinality = newSourceCardinalityInput.trim();
      const finalNewTargetCardinality = newTargetCardinalityInput.trim();

      const hasChanged = finalNewRelName !== (edge.data?.relationshipName || 'Relacionamento') || // Compara com o valor original do edge.data
                         finalNewSourceCardinality !== (edge.data?.sourceCardinality || '(1,1)') ||
                         finalNewTargetCardinality !== (edge.data?.targetCardinality || '(1,1)');

      if (hasChanged) {
        setEdges((eds) =>
          eds.map((e) => {
            if (e.id === edge.id) {
              const updatedData = {
                relationshipName: finalNewRelName,
                sourceCardinality: finalNewSourceCardinality,
                targetCardinality: finalNewTargetCardinality,
              };
              return {
                ...e,
                data: updatedData,
                label: `(${updatedData.sourceCardinality}) -- ${updatedData.relationshipName} -- (${updatedData.targetCardinality})`,
              };
            }
            return e;
          })
        );
      }
    },
    [setEdges]
  );

  // Função para salvar o projeto
  const handleSaveProject = useCallback(() => {
    const projectData = { nodes, edges };
    const jsonString = JSON.stringify(projectData, null, 2);
    const link = document.createElement('a');
    link.href = `data:text/json;charset=utf-8,${encodeURIComponent(jsonString)}`;
    link.download = 'diagrama-br-modelo.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [nodes, edges]);

  // Função para carregar o projeto de um arquivo JSON
  const handleLoadProjectFile = useCallback(
    (file: File) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result;
        if (typeof text === 'string') {
          try {
            const parsedData = JSON.parse(text);

            let isValidStructure = true;
            let errorMessage = 'Erro: Formato de arquivo JSON inválido ou estrutura de dados incompatível.';

            if (parsedData && Array.isArray(parsedData.nodes) && Array.isArray(parsedData.edges)) {
              if (parsedData.nodes.length > 0) {
                const firstNode = parsedData.nodes[0];
                if (
                  typeof firstNode.id !== 'string' ||
                  (firstNode.position && (typeof firstNode.position?.x !== 'number' || typeof firstNode.position?.y !== 'number')) || // position pode ser null/undefined
                  typeof firstNode.data?.label !== 'string' ||
                  !Array.isArray(firstNode.data?.attributes)
                ) {
                  isValidStructure = false;
                  errorMessage = 'Erro: Estrutura de nó inválida. Nós devem ter "id", "data.label", "data.attributes" (array), e opcionalmente "position" com "x" e "y".';
                }
                if (isValidStructure && firstNode.data.attributes.length > 0) {
                  const firstAttr = firstNode.data.attributes[0];
                  if (
                    typeof firstAttr.id !== 'string' ||
                    typeof firstAttr.name !== 'string' ||
                    typeof firstAttr.isPrimaryKey !== 'boolean'
                  ) {
                    isValidStructure = false;
                    errorMessage = 'Erro: Estrutura de atributo inválida. Atributos devem ter "id", "name" e "isPrimaryKey".';
                  }
                }
              }

              if (isValidStructure && parsedData.edges.length > 0) {
                const firstEdge = parsedData.edges[0];
                if (
                  typeof firstEdge.id !== 'string' ||
                  typeof firstEdge.source !== 'string' ||
                  typeof firstEdge.target !== 'string' ||
                  (firstEdge.data && // data é opcional, mas se existir, validar suas props
                    (typeof firstEdge.data.relationshipName !== 'string' ||
                     typeof firstEdge.data.sourceCardinality !== 'string' ||
                     typeof firstEdge.data.targetCardinality !== 'string'))
                ) {
                  isValidStructure = false;
                  errorMessage = 'Erro: Estrutura de aresta inválida ou dados de relacionamento incompletos.';
                }
              }

              if (isValidStructure) {
                setNodes(parsedData.nodes);
                setEdges(parsedData.edges);
                alert('Projeto carregado com sucesso!');
              } else {
                alert(errorMessage);
              }
            } else {
              alert('Erro: Formato de arquivo JSON inválido. "nodes" (array) e "edges" (array) são esperados no nível raiz.');
            }
          } catch (error) {
            console.error("Erro ao parsear JSON:", error);
            alert('Erro ao carregar o arquivo: JSON inválido.');
          }
        }
      };
      reader.onerror = () => {
        console.error("Erro ao ler o arquivo:", reader.error);
        alert('Erro ao ler o arquivo.');
      };
      reader.readAsText(file);
    },
    [setNodes, setEdges] 
  );

  const onConnect = useCallback(
    (connection: Connection) => {
      const relationshipName = 'Relacionamento'; // Nome padrão do relacionamento
      const defaultSourceCardinality = '(1,1)';
      const defaultTargetCardinality = '(1,1)';

      const newEdge: Edge = {
        ...connection,
        id: `edge_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        label: `(${defaultSourceCardinality}) -- ${relationshipName} -- (${defaultTargetCardinality})`, // Label formatado
        data: {
          relationshipName: relationshipName, // Armazenar o nome puro
          sourceCardinality: defaultSourceCardinality,
          targetCardinality: defaultTargetCardinality,
        },
      };
      setEdges((eds) => addEdge(newEdge, eds));
    },
    [setEdges]
  );

  // Função para adicionar um novo nó de entidade
  const addEntityNode = useCallback(() => {
    const newNodeId = `node_${nodeIdCounter++}`;
    const newNode: Node<CustomEntityNodeData> = { // Usar CustomEntityNodeData
      id: newNodeId,
      type: 'customEntity', // Alterado para 'customEntity'
      data: { label: 'Nova Entidade', attributes: [] }, // Adicionar attributes
      position: { x: Math.random() * 300, y: Math.random() * 300 },
    };
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);

  // Callback para o duplo clique no nó
  const handleNodeDoubleClick: NodeDoubleClickCallback<CustomEntityNodeData> = useCallback(
    (event, node) => {
      // Assegurar que estamos lidando com um nó com CustomEntityNodeData
      if (node.data && 'attributes' in node.data) {
        const newName = prompt('Digite o novo nome para a entidade:', node.data.label);
        if (newName && newName.trim() !== '') {
          setNodes((nds) =>
            nds.map((n) => {
              if (n.id === node.id) {
                return {
                  ...n,
                  data: {
                    ...n.data,
                    label: newName.trim(),
                  },
                };
              }
              return n;
            })
          );
        }
      }
    },
    [setNodes]
  );

  return (
    <> {/* Usar Fragment para agrupar Toolbar e o Canvas */}
      <Toolbar 
        onAddEntity={addEntityNode} 
        onSaveProject={handleSaveProject}
        onLoadProject={handleLoadProjectFile} // Adicionar prop onLoadProject
      />
      <div style={{ height: '70vh', width: '100%', border: '1px solid #000' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeDoubleClick={handleNodeDoubleClick}
          deleteKeyCode={['Delete', 'Backspace']}
          nodeTypes={nodeTypes}
          onEdgeDoubleClick={handleEdgeDoubleClick} // Adicionar onEdgeDoubleClick
          defaultEdgeOptions={{ // Adicionar defaultEdgeOptions para melhor visibilidade do label
            style: { stroke: '#555', strokeWidth: 2 },
            labelStyle: { fill: '#333', fontWeight: 500, fontSize: '12px' },
            labelBgStyle: { fill: 'white', fillOpacity: 0.7 },
            labelBgPadding: [2, 4],
            labelBgBorderRadius: 2,
          }}
          fitView
        >
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </>
  );
}

export default ModelingCanvas;
