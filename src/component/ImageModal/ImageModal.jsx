import Modal from 'react-modal';

Modal.setAppElement('#root'); // Важливо для доступності

export const ImageModal = ({ isOpen, onClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <img src={imageUrl} alt="Enlarged" className="modal-img" />
    </Modal>
  );
};