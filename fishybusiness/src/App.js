import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Game from './components/Game';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
