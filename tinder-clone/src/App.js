import React from 'react';
import './App.css';
import Header from './Header';
import Card from './Card';
import ButtonsT from './ButtonsT';


function App() {
  return (
    <div className="App">

      {/* HEADER */}
      <Header />

      {/* Swipers */}
      <Card />

      {/* buttons for operations */}
      <ButtonsT />
    </div>
  );
}

export default App;
