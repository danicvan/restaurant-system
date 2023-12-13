import React from 'react';

function Buttons({ onCancel, onSave, discardText = 'Descartar', saveText = 'Salvar' }) {
  return (
    <>
      <div className="button" onClick={onCancel}>
        <span>{discardText}</span>
      </div>

      <div className="button" onClick={onSave}>
        <span>{saveText}</span>
      </div>
    </>
  );
}

export default Buttons;
