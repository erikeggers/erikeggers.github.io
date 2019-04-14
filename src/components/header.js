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
            <li><Link to="#"><Button className="header-button" primary>Work</Button></Link></li>
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
    li {
      display: inline-block;
      .header-button {
        margin: 0 10px;
      }
    }
  }
`