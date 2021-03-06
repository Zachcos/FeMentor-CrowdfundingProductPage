import React from 'react';
import styled from 'styled-components';
import { device } from '../imports/variables';

import heroBg from '../../static/images/image-hero-desktop.jpg';
import heroBgMobile from '../../static/images/image-hero-mobile.jpg';
import hamburger from '../../static/images/icon-hamburger.svg';
import logo from '../../static/images/logo.svg';

const HeroContainer = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, transparent 25%),
    url(${heroBg}) no-repeat;
  background-size: cover;
  height: 400px;
  padding-top: 50px;
  width: 100%;
  @media ${device} {
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.7) 0%,
        transparent 25%
      ),
      url(${heroBgMobile}) no-repeat;
    background-size: cover;
    background-position: top center;
    height: 300px;
    padding-top: 35px;
    width: 100%;
  }

  .topbar {
    display: flex;
    margin: 0 auto;
    width: 80%;
    @media ${device} {
      width: 90%;
    }
    .navBtn {
      display: none;
      @media ${device} {
        display: inline-block;
        height: 15px;
        margin-left: auto;
        width: 15px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
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
    @media ${device} {
      display: none;
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
        <div className="navBtn">
          <img src={hamburger} alt="" />
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
