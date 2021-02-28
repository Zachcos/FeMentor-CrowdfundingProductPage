import React from 'react';
import styled from 'styled-components';
import { color } from '../imports/variables';

import Card from './card';
import ModalPledge from './modalPledge';

const ModalOverlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 10;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  top: 175px;
  position: relative;
  width: 730px;
  .card__title {
    font-size: 1.375rem;
    font-weight: 700;
    margin: 50px 0 20px;
  }
  .card__subtitle {
    color: ${color.darkGray};
    margin-bottom: 20px;
  }
`;

const SuccessContainer = styled.div`
  display: none;
`;

export default function Modal() {
  return (
    <ModalOverlay>
      <ContentContainer>
        <Card>
          <div className="card__title">Back this project</div>
          <div className="card__subtitle">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </div>
          <ModalPledge />
          <div className="pledge">
            <div className="pledge__top">
              <div className="dot" />
              <div className="title">Mahogany Special Edition</div>
              <div className="amount">Pledge $200 or more</div>
              <div className="quantity">0 left</div>
            </div>
            <div className="desc">
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You’ll be added to our Backer member list.
              Shipping is included.
            </div>
            <div className="pledge__bottom">
              Enter your pledge $200 Continue
            </div>
          </div>
        </Card>
      </ContentContainer>
      <SuccessContainer>
        Thanks for your support! Your pledge brings us one step closer to
        sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an
        email once our campaign is completed. Got it!
      </SuccessContainer>
    </ModalOverlay>
  );
}
