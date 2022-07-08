import './App.css';
import React from 'react';
import Board from './pages/Board/Board';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Board />
    </div>
  );
}

export default App;
