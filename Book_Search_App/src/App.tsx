import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import BookList from './components/BookList';
import { searchBooks, Book } from './services/booksApi';

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const handleSearch = async (query: string) => {
    const results = await searchBooks(query);
    // Sort books by publishedDate (newest to oldest)
    const sortedResults = results.sort(
      (a, b) => new Date(b.volumeInfo.publishedDate).getTime() - new Date(a.volumeInfo.publishedDate).getTime()
    );
    setBooks(sortedResults);
  };

  return (
    <div>
      <Header />
      <SearchBox onSearch={handleSearch} />
      <BookList books={books} />
    </div>
  );
};

export default App;