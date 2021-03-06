import React, { Component } from 'react'
import styled from 'styled-components'
import { Container, Balloon, Avatar } from 'nes-react'
import me from '../Me.jpg'


class About extends Component {
  render() {
    return (
      <section>
        <StyledContainer title="About" id="about" dark>
          <Talking>
            <div className="chat left">
              <div className="me">
                <Avatar rounded medium src={me} alt="Erik Eggers" />
              </div>
              <Balloon fromLeft className="balloon">Hi! My name is Erik. I create web applications using the latest technologies available. I have a passion for designing positive user experiences.</Balloon>
            </div>
            <div className="chat right">
              <Balloon fromRight className="balloon">I am obsessed with programming, design and innovative technologies. You will often find me scouring the internet reading up on the latest tools and programming news. I thrive on learning concepts and ideas in order to produce user-driven solutions. I also love spending time with my family and playing video games.</Balloon>
              <div className="me">
                <Avatar rounded medium src={me} alt="Erik Eggers" />
              </div>
            </div>
            <div className="chat left">
              <div className="me">
                <Avatar rounded medium src={me} alt="Erik Eggers" />
              </div>
              <Balloon fromLeft className="balloon">I currently live in the lovely Greenville, SC. I love Greenville and the tech community surrounding it, but I am willing to relocate.</Balloon>
            </div>
          </Talking>
        </StyledContainer>
      </section>
    );
  }
}

export default About;

const StyledContainer = styled(Container)`
  margin: 2em;
  @media (max-width: 610px) {
    margin: 1em;
  }
`

const Talking = styled.div`
  display: flex;
  flex-direction: column;
  .chat {
    display: flex;
    width: 100%;
    margin: 20px 0;
    color: #000;
  }
  .chat.left {
    align-self: flex-start;
    width: 90%;
  }
  .chat.right {
    align-self: flex-end;
    width: 90%;
  }
  .me {
    width: 100px;
    align-self: flex-end;
  }
  @media (max-width: 1020px) {
    .chat {
      font-size: 12px;
    }
  }
  @media (max-width: 610px) {
    .chat.left, .chat.right {
      width: 100%;
    }
  }
`

