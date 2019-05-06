import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon, Container } from 'nes-react'
import resume from '../ErikEggers_Resume.pdf'


class Footer extends Component {
  render() {
    return (
      <StyledContainer title="Let's Connect" id="connect" dark>
        <StyledFooter>
        <div className="lets-connect">
          <p>Interested in hiring me or just talking tech? I would love to connect. Feel free to follow me on social media.</p>
          <div className="social-media-links">
            <a href="https://github.com/erikeggers">
              <Icon icon="github" large></Icon>
            </a>
            <a href="https://twitter.com/sovthtv">
              <Icon icon="twitter" large></Icon>
            </a>
            <a href="https://www.linkedin.com/in/erikeggers/">
              <Icon icon="linkedin" large></Icon>
            </a>
          </div>
        </div>
        <div className="contact-options">
          <a href="mailto:em.eggers@gmail.com?Subject=Hello%20there">em.eggers@gmail.com</a>
          <a href="tel:1-864-518-4032">864.518.4032</a>
          <a href={resume}>Resume</a>
        </div>
        </StyledFooter>
      </StyledContainer>
    );
  }
}

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  .lets-connect {
    width: 50%;
  }
  .social-media-links {
    a {
      margin-right: 20px;
    }
  }
  .contact-options {
    text-align: center;
    a {
      display: block;
      margin-bottom: 20px;
      font-size: 1.5em;
    }
  }
  @media (max-width: 1020px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    .lets-connect {
      width: 100%;
    }
    .contact-options {
      text-align: center;
      a {
        display: block;
        margin-top: 20px;
        font-size: 1em;
      }
    }
  }
`

const StyledContainer = styled(Container)`
  margin: 2em;
  @media (max-width: 610px) {
    margin: 1em;
  }
`