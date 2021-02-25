import React from 'react';
import styled from 'styled-components';

import heroBg from '../../static/images/image-hero-desktop.jpg';
import logo from '../../static/images/logo.svg';

const HeroContainer = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, transparent 25%),
    url(${heroBg}) no-repeat;
  background-size: cover;
  height: 400px;
  padding-top: 50px;
  width: 100vw;

  .topbar {
    display: flex;
    margin: 0 auto;
    width: 80%;
  }

  nav {
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    width: 225px;
    li {
      color: white;
      font-size: 0.8rem;
      list-style: none;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export default function Hero() {
  return (
    <HeroContainer>
      <div className="topbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav>
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </nav>
      </div>
    </HeroContainer>
  );
}
