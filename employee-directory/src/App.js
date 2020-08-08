import React from 'react';
import Textfields from './Search.js';
import Card from './Employee.js';
import { colors } from '@material-ui/core';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <Textfields/>
      <Card />
      </header>
    </div>
  );
}

export default App;
