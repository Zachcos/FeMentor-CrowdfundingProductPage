import React from 'react';
import styled from 'styled-components';

import Card from './card';

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
  margin: 0 auto;
  top: 175px;
  position: relative;
  width: 730px;
`;

const SuccessContainer = styled.div`
  display: none;
`;

export default function Modal() {
  return (
    <ModalOverlay>
      <ContentContainer>
        <Card>
          {/* Selection modal start */}
          <div className="title">Back this project</div>
          <div className="subtitle">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </div>
          <div className="pledge">
            <div className="pledge__top">
              <div className="dot" />
              <div className="title">Pledge with no reward</div>
              <div className="quantity" />
            </div>
            <div className="desc">
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </div>
            <div className="pledge__bottom" />
          </div>
          <div className="pledge">
            <div className="pledge__top">
              <div className="dot" />
              <div className="title">Bamboo Stand</div>
              <div className="amount">Pledge $25 or more</div>
              <div className="quantity">101 left</div>
            </div>
            <div className="desc">
              You get an ergonomic stand made of natural bamboo. You've helped
              us launch our promotional campaign, and you’ll be added to a
              special Backer member list.
            </div>
            <div className="pledge__bottom">
              {/* Selected pledge start */}
              Enter your pledge $25 Continue
              {/* Selected pledge end */}
            </div>
          </div>
          <div className="pledge">
            <div className="pledge__top">
              <div className="dot" />
              <div className="title">Black Edition Stand</div>
              <div className="amount">Pledge $75 or more</div>
              <div className="quantity">64 left</div>
            </div>
            <div className="desc">
              You get a Black Special Edition computer stand and a personal
              thank you. You’ll be added to our Backer member list. Shipping is
              included.
            </div>
            <div className="pledge__bottom">
              {/* Selected pledge start */}
              Enter your pledge $75 Continue
              {/* Selected pledge end */}
            </div>
          </div>
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
              {/* Selected pledge start */}
              Enter your pledge $200 Continue
              {/* Selected pledge end */}
            </div>
          </div>
        </Card>
      </ContentContainer>
      <SuccessContainer>
        {/* Success modal start */}
        Thanks for your support! Your pledge brings us one step closer to
        sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an
        email once our campaign is completed. Got it!
        {/* Success modal end */}
      </SuccessContainer>
    </ModalOverlay>
  );
}
