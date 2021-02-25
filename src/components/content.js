import React from 'react';
import styled from 'styled-components';
import { color } from '../imports/variables';

import Card from './card';
import companyLogo from '../../static/images/logo-mastercraft.svg';

const ContentContainer = styled.div`
  margin: 0 auto;
  position: relative;
  top: -90px;
  width: 730px;
`;

const AboutCard = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  .logo {
    position: relative;
    top: -25px;
  }
  .title {
    font-size: 1.7rem;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .desc {
    color: $darkGray;
    font-size: 0.95rem;
    margin-bottom: 50px;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    margin: 0 auto 50px;
    width: 93%;
  }
`;

const StatsCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 50px 5%;
  .stat {
    border-right: 1px solid #d9d9d9;
    color: $darkGray;
    display: flex;
    flex-direction: column;
    width: 28%;
    margin-left: 7%;
    &:first-child {
      margin-left: 0;
    }
    &:nth-child(3) {
      border-right: none;
    }
    .feature {
      color: $black;
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 15px;
    }
  }
  .progress {
    width: 100%;
    height: 12px;
    background: #f4f4f4;
    margin-top: 35px;
    border-radius: 25px;
    position: relative;
    &__fill {
      width: 76%;
      height: 12px;
      background: ${color.medCyan};
      position: absolute;
      left: 0;
      top: 0;
      margin-top: 0;
    }
  }
`;

export default function Content() {
  return (
    <ContentContainer>
      <Card>
        <AboutCard>
          <div className="logo">
            <img src={companyLogo} alt="" />
          </div>
          <div className="title">Mastercraft Bamboo Monitor Riser</div>
          <div className="desc">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </div>
          <div className="buttons">
            <div className="btn btn__primary">Back this project</div>
            <div className="btn btn__bookmark">
              <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
                  <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
                </g>
              </svg>
              Bookmark
            </div>
          </div>
        </AboutCard>
      </Card>
      <Card>
        <StatsCard>
          <div className="stat">
            <div className="feature">$89,914</div>
            of $100,000 backed
          </div>
          <div className="stat">
            <div className="feature">5,007</div>
            total backers
          </div>
          <div className="stat">
            <div className="feature">56</div>
            days left
          </div>
          <div className="progress">
            <div className="progress progress__fill" />
          </div>
        </StatsCard>
      </Card>
    </ContentContainer>
  );
}
