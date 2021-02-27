import React from 'react';
import styled from 'styled-components';
import { color } from '../imports/variables';

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

export default function Modal() {
  return (
    <ModalOverlay>
      <ContentContainer>
        <Card>
          {/* Selection modal start */}
          Back this project Want to support us in bringing Mastercraft Bamboo
          Monitor Riser out in the world? Pledge with no reward Choose to
          support us without a reward if you simply believe in our project. As a
          backer, you will be signed up to receive product updates via email.
          Bamboo Stand Pledge $25 or more You get an ergonomic stand made of
          natural bamboo. You've helped us launch our promotional campaign, and
          you’ll be added to a special Backer member list. 101 left
          {/* Selected pledge start */}
          Enter your pledge $25 Continue
          {/* Selected pledge end */}
          Black Edition Stand Pledge $75 or more You get a Black Special Edition
          computer stand and a personal thank you. You’ll be added to our Backer
          member list. Shipping is included. 64 left
          {/* Selected pledge start */}
          Enter your pledge $75 Continue
          {/* Selected pledge end */}
          Mahogany Special Edition Pledge $200 or more You get two Special
          Edition Mahogany stands, a Backer T-Shirt, and a personal thank you.
          You’ll be added to our Backer member list. Shipping is included. 0
          left
          {/* Selected pledge  start */}
          Enter your pledge $200 Continue
          {/* Selected pledge end */}
          {/* Selection modal end */}
          {/* Success modal start */}
          Thanks for your support! Your pledge brings us one step closer to
          sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an
          email once our campaign is completed. Got it!
          {/* Success modal end */}
        </Card>
      </ContentContainer>
    </ModalOverlay>
  );
}
