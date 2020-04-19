import React from 'react';
import './App.scss';

import Board from './components/Board';

function App() {
  return (
    <div className='App'>
      <div className='header'></div>
      <div className='content'>
        <div className='menu'></div>
        <Board />
      </div>
    </div>
  )
}

export default App;
