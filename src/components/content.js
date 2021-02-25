import React from 'react';
import styled from 'styled-components';

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
    </ContentContainer>
  );
}
