import React from 'react';
import styled from 'styled-components';
import { device } from '../imports/variables';

import heroBg from '../../static/images/image-hero-desktop.jpg';
import heroBgMobile from '../../static/images/image-hero-mobile.jpg';
import logo from '../../static/images/logo.svg';

const HeroContainer = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, transparent 25%),
    url(${heroBg}) no-repeat;
  background-size: cover;
  height: 400px;
  padding-top: 50px;
  width: 100%;
  @media screen and (${device}) {
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.7) 0%,
        transparent 25%
      ),
      url(${heroBgMobile}) no-repeat;
    background-size: cover;
    background-position: top center;
    width: 100%;
  }

  .topbar {
    display: flex;
    margin: 0 auto;
    width: 80%;
    @media screen and (${device}) {
      width: 90%;
    }
    .navBtn {
      display: none;
      @media screen and (${device}) {
        display: inline-block;
        height: 25px;
        margin-left: auto;
        width: 25px;
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
    @media screen and (${device}) {
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
          <img src="../../static/images/icon-hamburger.svg" alt="" />
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
