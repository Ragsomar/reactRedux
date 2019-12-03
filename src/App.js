import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterContainer from './Components/CounterContainer.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CounterContainer />
      </header>
    </div>
  );
}

export default App;
