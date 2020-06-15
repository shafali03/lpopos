import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Title from './Components/Title/Title'
import PoposList from './Components/PoposList/PoposList';
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import PoposDetails from './Components/PoposDetails/PoposDetails'

function App() {
  return (
    <Router>
      <div data-test="component-app" className="App">
        <Title />
        <Route exact path="/" component={PoposList} />
        <Route path="/about" component={About} />
        <Route path="/details/:id" component={PoposDetails} />
        <Footer />
      </div>
    </Router>
  )
}

export default App;
