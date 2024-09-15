import React from 'react';
import { Book } from '../services/booksApi';

interface BookCardProps {
  book: Book;
  onClick: (book: Book) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onClick }) => {
  const { title, authors, imageLinks, publishedDate } = book.volumeInfo;

  return (
    <div onClick={() => onClick(book)} style={{ cursor: 'pointer' }}>
      <h3>{title}</h3>
      <p>{authors?.join(', ')}</p>
      {imageLinks?.thumbnail && <img src={imageLinks.thumbnail} alt={title} />}
      <p>Published: {publishedDate}</p>
    </div>
  );
};

export default BookCard;