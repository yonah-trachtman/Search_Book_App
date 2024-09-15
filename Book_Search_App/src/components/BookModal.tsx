import React from 'react';
import Modal from "react-modal";
import { Book } from '../services/booksApi';

interface BookModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  book: Book | null;
}

const BookModal: React.FC<BookModalProps> = ({ isOpen, onRequestClose, book }) => {
  if (!book) return null;

  const { title, description, authors, imageLinks } = book.volumeInfo;

  const modalStyle = {
    content: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      color: 'black',
      width: '60%',  
      padding: '20px', 
      borderRadius: '8px', 
      border: 'none',  
      maxHeight: '80vh', 
      overflowY: 'auto', 
      display: 'flex',
      flexDirection: 'column',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)', 
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Book Details"
      style={modalStyle}
      ariaHideApp={false}
    >
      <div>
        <h2>{title}</h2>
        <p>{authors?.join(', ')}</p>
        {imageLinks?.thumbnail && <img src={imageLinks.thumbnail} alt={title} />}
        <p>{description}</p>
        <button onClick={onRequestClose} style={{ backgroundColor: 'black', color: 'white', padding: '10px', borderRadius: '4px' }}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default BookModal;
