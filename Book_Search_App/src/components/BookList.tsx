import React from 'react';
import { Book } from '../services/booksApi';
import BookCard from './BookCard';

interface BookListProps {
  books: Book[];
  onBookClick: (book: Book) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onBookClick }) => {
  return (
    <div className="books-grid">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onClick={() => onBookClick(book)} />
      ))}
    </div>
  );
};

export default BookList;