import React, { Component } from 'react'
import styled from 'styled-components'
import { Container } from 'nes-react'
import BrikBit from '../BrikBit.png'
import BikeShop from '../BikeShop.png'
import OrderForm from '../OrderForm.png'
import Inmans from '../inmans.png'


class Work extends Component {
  render() {
    return (
      <StyledContainer title="Work" id="work" dark>
        <div className="work-container">
          <p>Here is some of my recent work. I am constantly working on new ideas and projects. This will update overtime!</p>
          <div className="work-links" target="blank">
            <a href="https://erikeggers.github.io/BrikBit/">
              <img src={BrikBit} alt="BrikBit"/>
            </a>
            <a href="https://erikeggers.github.io/bike_shop/" target="blank">
              <img src={BikeShop} alt="Bike Shop"/>
            </a>
            <a href="https://erikeggers.github.io/responsive-accessible-form/" target="blank">
              <img src={OrderForm} alt="Responsive Accessible Order Form"/>
            </a>
            <a href="https://inmanspecialtyfoods.com/" target="blank">
              <img src={Inmans} alt="Inman's Specialty Foods"/>
            </a>
          </div>
        </div>
      </StyledContainer>
    );
  }
}

export default Work;

const StyledContainer = styled(Container)`
  margin: 2em;
  @media (max-width: 610px) {
    margin: 1em;
  }
  .work-container {
    text-align: center;
    p {
      margin-bottom: 40px;
    }
    .work-links {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      a {
        margin: 12px 6px;
        :hover {
          opacity: .5;
        }
        img {
          height: 200px;
        }  
      }
    }
  }
`