import React from 'react';
import Navbar from './components/navbar';
import MostViewedBooks from './components/cards/index.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MostViewedBooks />
    </div>
  );
}

export default App;
