import React from 'react';
import './App.css';
import maurycyImage from './maurycy.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, it's Maurycy here!</h1>
        <p>Your favorite DevOps</p>
        <img src={maurycyImage} className="App-logo" alt="Maurycy" />
        <p className="bottom-text">
          The sole purpose of this page is to set up CI/CD for index.html, use AWS , and that's it XD .
        </p>
      </header>
    </div>
  );
}

export default App;
