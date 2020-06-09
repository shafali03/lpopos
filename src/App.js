import React from 'react';
import './App.css';
import Title from './Components/Title/Title'
import PoposList from './Components/PoposList/PoposList';

function App() {
  return (
    <div data-test="component-app" className="App">
      <Title />
      <PoposList />
    </div>
  );
}

export default App;
