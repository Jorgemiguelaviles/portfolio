// AudioPermissionModal.tsx
import React from "react";

interface AudioPermissionModalProps {
  visible: boolean | null;
  onConfirm: () => void;
  onClose: () => void;
}

const AudioPermissionModal: React.FC<AudioPermissionModalProps> = ({ visible, onConfirm, onClose }) => {
  if (visible === null) {
    return (
      <div className="modal">
        <p>Precisamos de permissão para tocar o áudio. Você aceita?</p>
        <button onClick={onConfirm}>Sim</button>
        <button onClick={onClose}>Não</button>
      </div>
    );
  }

  return null;
};

export default AudioPermissionModal;
