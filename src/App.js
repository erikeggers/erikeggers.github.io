import React, { Component } from 'react'
import Header from './components/header'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Work from './components/work'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Hero/>
        <About/>
        <Skills/>
        <Work/>
        <Footer/>
      </div>
    );
  }
}

export default App;
