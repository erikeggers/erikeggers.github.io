import React, { Component } from 'react'
import styled from 'styled-components'
import { Container, Progress } from 'nes-react'

class Skills extends Component {
  render() {
    return (
      <StyledContainer title="Skills" id="skills" dark>
        <div className="skills-container">
          <div className="skills-copy">
            <p>I have the ability to build and design beautifully crafted web applications from the ground up. Starting with the planning stage all the way to making a shippable product. I know technologies such as HTML5, CSS3, JavaScript and many more.</p>
          </div>
          <div className="progress-container">
            <StyledProgress value={90} max={100} primary></StyledProgress>
            <p>JavaScript</p>
            <StyledProgress value={100} max={100} primary></StyledProgress>
            <p>HTML</p>
            <StyledProgress value={100} max={100} primary></StyledProgress>
            <p>CSS</p>
            <StyledProgress value={85} max={100} primary></StyledProgress>
            <p>React</p>
            <StyledProgress value={65} max={100} primary></StyledProgress>
            <p>Node</p>
            <StyledProgress value={75} max={100} primary></StyledProgress>
            <p>Sketch</p>
            <StyledProgress value={65} max={100} primary></StyledProgress>
            <p>Affinity Designer</p>
            <StyledProgress value={60} max={100} primary></StyledProgress>
            <p>Photoshop</p>
          </div>
        </div>
      </StyledContainer>
    );
  }
}

export default Skills;

const StyledContainer = styled(Container)`
  margin: 2em;
  @media (max-width: 610px) {
    margin: 1em;
  }
  .skills-container {
    display: flex;
    align-items: center;
  }
  .progress-container, .skills-copy {
    width: 50%;
  }
  .skills-copy {
    padding: 0 2em;
  }

  @media (max-width: 1020px) {
    .skills-container {
      flex-direction: column;
    }
    .progress-container, .skills-copy {
      width: 100%;
    }
    .skills-copy {
      padding: 0;
    }
  }

`

const StyledProgress = styled(Progress)`
  height: 25px;
`