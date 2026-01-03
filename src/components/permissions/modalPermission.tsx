import React from 'react';
import '../../style/permissions/modalPermission.css';

interface AudioPermissionModalProps {
  visible: boolean;
  onConfirm: () => void;
  onClose: () => void;
}


const AudioPermissionModal: React.FC<AudioPermissionModalProps> = ({
  visible,
  onConfirm,
  onClose
}) => {
  if (!visible) return null;

  return (
    <div className="audio-modal-overlay">
      <div className="audio-modal">
        <h2>Preparar Imersão</h2>
        <p>
          Para uma experiência completa, utilize fones de ouvido
          e permita a ativação do áudio.
        </p>

        <button
            className="custom-button"
            onClick={onConfirm}
            >
            Iniciar Experiência
            </button>

            <button
            className="custom-button"
            onClick={onClose}
            >
            Continuar sem áudio
            </button>

      </div>
    </div>
  );
};

export default AudioPermissionModal;
