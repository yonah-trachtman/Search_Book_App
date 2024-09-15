import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import BookList from './components/BookList';
import BookModal from './components/BookModal';
import { searchBooks, Book } from './services/booksApi';

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSearch = async (query: string) => {
    const results = await searchBooks(query);
    const sortedResults = results.sort(
      (a, b) => new Date(b.volumeInfo.publishedDate).getTime() - new Date(a.volumeInfo.publishedDate).getTime()
    );
    setBooks(sortedResults);
  };

  const openModal = (book: Book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBook(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header />
      <SearchBox onSearch={handleSearch} />
      <BookList books={books} onBookClick={openModal} />
      <BookModal isOpen={isModalOpen} onRequestClose={closeModal} book={selectedBook} />
    </div>
  );
};
export default App;