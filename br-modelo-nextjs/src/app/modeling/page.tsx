import ModelingCanvas from '@/components/modeling/ModelingCanvas';
// Toolbar não é mais importado ou renderizado aqui
import React from 'react';

export default function ModelingPage() {
  return (
    <div>
      <h1>Página de Modelagem</h1>
      {/* Toolbar foi removido daqui */}
      <ModelingCanvas />
    </div>
  );
}
