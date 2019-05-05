import React, { Component } from 'react'
import styled from 'styled-components'
import { ControllerIcon } from 'nes-react'


class Hero extends Component {
  render() {
    return (
      <StyledHero>
        <div className="copy">
          <h2>Software Engineer</h2>
          <p>Obsessing over the details with a love affair of HTML5, JavaScript, CSS, design and more.</p>
          <ControllerIcon controller='snes-jp' style={{textAlign: 'center'}}/>
        </div>
      </StyledHero>
    );
  }
}

export default Hero;

const StyledHero = styled.section`
  height: 60vh;
  display: flex;
  .copy {
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    color: #efefef;
    margin: auto;
    padding: 3.5em;
    text-align: center;
    h2 {
      font-size: 2.5em;
      color: #1F9CED;
    }
    p {
      margin: 2em auto 2em auto;
      max-width: 70%;
      font-size: 1.1em;
      font-weight: 100;
    }
  }
  background-color: #222;
  @media (max-width: 1020px) {
    .copy {
      max-width: 90%;
      h2 {
        font-size: 2.0em;
      }
      p {
        font-size: 12px;
        max-width: 80%;
      }
    }
  }
  @media (max-width: 610px) {
    .copy {
      max-width: 100%;
      h2 {
        font-size: 1.5em;
      }
      p {
        margin: 0 auto 1em auto;
        font-size: 12px;
        max-width: 100%;
      }
    }
  }
`