import React, { Component } from 'react'
import styled from 'styled-components'


class Hero extends Component {
  render() {
    return (
      <StyledHero>
        <div className="copy">
          <h2>Software Engineer</h2>
          <p>Obsessing over the details with a love affair of HTML5, JavaScript, CSS, design and more.</p>
        </div>
      </StyledHero>
    );
  }
}

export default Hero;

const StyledHero = styled.section`
  height: 60vh;
  display: flex;
  margin-bottom: 40px;
  .copy {
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    color: #efefef;
    margin: auto;
    padding: 3.5em;
    text-align: center;
    h2 {
      font-size: 3.0em;
      margin-bottom: 0.5em;
      color: #1F9CED;
    }
    .p {
      margin: 0 auto 3em auto;
      max-width: 60%;
      font-size: 1.1em;
      font-weight: 100;
    }
  }
  background-color: #222;
`