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
            <StyledProgress value={80} max={100} primary></StyledProgress>
            <p>React</p>
            <StyledProgress value={60} max={100} primary></StyledProgress>
            <p>Node</p>
          </div>
        </div>
      </StyledContainer>
    );
  }
}

export default Skills;

const StyledContainer = styled(Container)`
  margin: 2em;
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

`

const StyledProgress = styled(Progress)`
  height: 25px;
`