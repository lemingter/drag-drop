import './App.css';
import React from 'react';
import Board from './pages/Board/Board';
import Header from './Components/Header/Header';
import Backlog from './pages/Backlog/Backlog';

function App() {
  return (
    <div className="App">
      <Header />
      <Board />
      <Backlog />
    </div>
  );
}

export default App;
