import React from 'react';

import MovieList from './components/MovieList';
import Logo from './components/Logo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Logo />
      <MovieList />
    </div>
  );
}

export default App;
