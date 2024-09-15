import React from 'react';
import { Book } from '../services/booksApi';
import BookCard from './BookCard';

interface BookListProps {
  books: Book[];
  onBookClick: (book: Book) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onBookClick }) => {
  return (
    <div>
      {books.map((book) => (
        <BookCard key={book.id} book={book} onClick={onBookClick} />
      ))}
    </div>
  );
};

export default BookList;