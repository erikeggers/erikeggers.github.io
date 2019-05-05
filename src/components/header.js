import React, { Component } from 'react'
import { Link } from "react-scroll";
import styled from 'styled-components'
import { Button } from 'nes-react'


class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <h1>Erik Eggers</h1>
        <nav>
          <ul>
            <li>
              <Link 
                to="about"
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button className="header-button" primary>About</Button>
              </Link>
            </li>
            <li>
              <Link 
                to="skills"
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button className="header-button" primary>Skills</Button>
              </Link>
            </li>
            <li>
              <Link 
                  to="work"
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Button className="header-button" primary>Work</Button>
              </Link>
            </li>
            <li>
              <Link 
                  to="connect"
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Button className="header-button" primary>Connect</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </StyledHeader>
    );
  }
}

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  h1 {
    text-align: center;
  }
  nav ul {
    list-style: none;
    padding: 0;
    li {
      display: inline-block;
      .header-button {
        margin: 0 10px;
      }
    }
  }
  @media (max-width: 1020px) {
    flex-direction: column;
    align-items: center;
    nav ul {
      margin-top: 10px;
    }
  }
  @media (max-width: 610px) {
    nav ul {
      text-align: center;
      li {
        display: block;
        margin-bottom: 18px;
      }
    }
  }
`