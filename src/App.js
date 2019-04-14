import React, { Component } from 'react'
import './App.scss'
import Header from './components/header'
import About from './components/about'
import Hero from './components/hero'
import Skills from './components/skills'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Hero/>
        <About/>
        <Skills/>
      </div>
    );
  }
}

export default App;
