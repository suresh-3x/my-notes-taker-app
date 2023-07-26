import React, { useState } from 'react';
import Modal from 'react-modal';
import './Note.css'; 

const Note = ({ id, title, content, pinned, color, image, onDelete, onPin, onColorChange }) => {
  const [selectedColor, setSelectedColor] = useState(color);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleColorChange = (e) => {
    const colorValue = e.target.value;
    setSelectedColor(colorValue);
    onColorChange(id, colorValue);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={`note ${pinned ? 'pinned' : ''}`} style={{ backgroundColor: selectedColor }}>
      <div className='note-content'>
        {title && <h3>{title}</h3>}
        {content && <p>{content}</p>}
        {image && (
          <div className="image-preview">
            <img
              src={image}
              alt="Note"
              style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
              onClick={() => openModal()}
            />
          </div>
        )}
      </div>
      <div className='note-actions'>
        <input
          type="color"
          value={selectedColor}
          onChange={handleColorChange}
        />
        <button onClick={onPin}>{pinned ? 'Unpin' : 'Pin'}</button>
        <button onClick={onDelete}>Delete</button>
        {content && (
          <button onClick={openModal}>View</button>
        )}
      </div>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Note Content"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <h3>{title}</h3>
          <p>{content}</p>
          {image && (
            <div className="image-preview">
              <img src={image} alt="Note" style={{ width: '100%', height: 'auto' }} />
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Note;
