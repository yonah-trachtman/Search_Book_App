// components/BookModal.tsx
import React from 'react';
import Modal from "react-modal"
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
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
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
        <button onClick={onRequestClose}>Close</button>
      </div>
    </Modal>
  );
};

export default BookModal;