/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
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

    .bookmarked {
      color: ${color.darkCyan};
      svg g {
        circle {
          fill: ${color.darkCyan};
        }
        path {
          fill: white;
        }
      }
    }
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

const PledgeCard = styled.div`
  .title {
    margin: 40px 0;
    font-size: 1.25rem;
    font-weight: 700;
  }
  .desc {
    color: ${color.darkGray};
    line-height: 1.875rem;
    margin-bottom: 40px;
  }
  .pledge {
    border: 1px solid ${color.darkGray};
    border-radius: 8px;
    padding: 30px;
    margin-bottom: 20px;
    &_top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 25px;
      .pledge__title {
        font-size: 1.1rem;
        font-weight: 700;
      }
      .pledge__price {
        color: $medCyan;
        font-size: 0.9rem;
      }
    }
    &_mid {
      color: $darkGray;
      line-height: 2rem;
      margin-bottom: 25px;
    }
    &_bot {
      display: flex;
      justify-content: space-between;
      .pledge__remaining {
        align-items: center;
        color: $darkGray;
        display: flex;
        .em {
          color: $black;
          font-size: 2rem;
          font-weight: 700;
          margin-right: 12px;
        }
      }
      .btn {
        display: flex;
        font-size: 0.8rem;
        justify-content: center;
        padding: 17px 25px;
        width: 150px;
      }
    }
  }
`;

export default function Content({ handlePledge }) {
  const [isBookmarked, setBookmarked] = useState(false);

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
            <div
              className={
                isBookmarked
                  ? 'btn btn__bookmark bookmarked'
                  : 'btn btn__bookmark'
              }
              onClick={() => setBookmarked(!isBookmarked)}
            >
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
      <Card>
        <PledgeCard>
          <div className="title">About this project</div>
          <div className="desc">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand. <br />
            <br />
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </div>
          <div className="pledge">
            <div className="pledge_top">
              <div className="pledge__title">Bamboo Stand</div>
              <div className="pledge__price">Pledge $25 or more</div>
            </div>
            <div className="pledge_mid">
              <div className="pledge__desc">
                You get an ergonomic stand made of natural bamboo. You've helped
                us launch our promotional campaign, and you’ll be added to a
                special Backer member list.
              </div>
            </div>
            <div className="pledge_bot">
              <div className="pledge__remaining">
                <div className="em">101</div>
                left
              </div>
              <div className="btn btn__primary" onClick={handlePledge}>
                Select Reward
              </div>
            </div>
          </div>

          <div className="pledge">
            <div className="pledge_top">
              <div className="pledge__title">Black Edition Stand</div>
              <div className="pledge__price">Pledge $75 or more</div>
            </div>
            <div className="pledge_mid">
              <div className="pledge__desc">
                You get a Black Special Edition computer stand and a personal
                thank you. You’ll be added to our Backer member list. Shipping
                is included.
              </div>
            </div>
            <div className="pledge_bot">
              <div className="pledge__remaining">
                <div className="em">64</div>
                left
              </div>
              <div className="btn btn__primary" onClick={handlePledge}>
                Select Reward
              </div>
            </div>
          </div>

          <div className="pledge oos">
            <div className="pledge_top">
              <div className="pledge__title">Mahogany Special Edition</div>
              <div className="pledge__price">Pledge $200 or more</div>
            </div>
            <div className="pledge_mid">
              <div className="pledge__desc">
                You get two Special Edition Mahogany stands, a Backer T-Shirt,
                and a personal thank you. You’ll be added to our Backer member
                list. Shipping is included.
              </div>
            </div>
            <div className="pledge_bot">
              <div className="pledge__remaining">
                <div className="em">0</div>
                left
              </div>
              <div className="btn btn__disabled">Out of Stock</div>
            </div>
          </div>
        </PledgeCard>
      </Card>
    </ContentContainer>
  );
}
