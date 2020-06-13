import React from 'react';
import './App.css';
import Title from './Components/Title/Title'
import PoposList from './Components/PoposList/PoposList';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div data-test="component-app" className="App">
      <Title />
      <PoposList />
      <Footer />
    </div>
  );
}

export default App;
