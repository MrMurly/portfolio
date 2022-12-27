import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Projects } from './components/projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Projects/>
      </header>
    </div>
  );
}

export default App;
