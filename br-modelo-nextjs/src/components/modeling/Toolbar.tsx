import React, { useRef } from 'react'; // Importar useRef

// Definir a interface de props para Toolbar
interface ToolbarProps {
  onAddEntity: () => void;
  onSaveProject?: () => void;
  onLoadProject?: (file: File) => void; // Adicionar nova prop
  // Futuramente, podemos adicionar onAddRelationship aqui
}

const Toolbar: React.FC<ToolbarProps> = ({ onAddEntity, onSaveProject, onLoadProject }) => { // Adicionar onLoadProject
  const fileInputRef = useRef<HTMLInputElement>(null); // Ref para o input de arquivo

  const handleLoadClick = () => {
    fileInputRef.current?.click(); // Acionar clique no input de arquivo
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0] && onLoadProject) {
      onLoadProject(event.target.files[0]);
      event.target.value = ''; // Limpar o valor para permitir carregar o mesmo arquivo novamente
    }
  };

  return (
    <div className="p-2 bg-gray-100 border-b border-gray-300 flex space-x-2">
      <button
        onClick={onAddEntity}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Adicionar Entidade
      </button>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Adicionar Relacionamento
      </button>
      {/* Botão Salvar Projeto */}
      {onSaveProject && (
        <button
          onClick={onSaveProject}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Salvar Projeto
        </button>
      )}
      {/* Botão Carregar Projeto */}
      {onLoadProject && (
        <>
          <button
            onClick={handleLoadClick}
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          >
            Carregar Projeto
          </button>
          <input
            type="file"
            ref={fileInputRef}
            accept=".json"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </>
      )}
    </div>
  );
};

export default Toolbar;
