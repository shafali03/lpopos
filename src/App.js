import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Title from './Components/Title/Title'
import PoposList from './Components/PoposList/PoposList';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <Router>
      <div data-test="component-app" className="App">
        <Title />
        <Route exact path="/" component={PoposList} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
