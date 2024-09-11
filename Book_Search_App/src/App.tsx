import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import BookSearch from './components/BookSearch';

const App: React.FC = () => {
  return (
    <div>
      <h1>Google Books Search</h1>
      <BookSearch />
    </div>
  );
};

export default App
