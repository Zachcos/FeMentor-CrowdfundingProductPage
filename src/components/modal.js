import React from 'react';
import styled from 'styled-components';
import { color } from '../imports/variables';

import Card from './card';
import ModalPledge from './modalPledge';
import closeBtn from '../../static/images/icon-close-modal.svg';

const ModalOverlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
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

  .closeBtn {
    position: absolute;
    right: 30px;
    top: 30px;
  }

  .card__title {
    font-size: 1.375rem;
    font-weight: 700;
    margin: 50px 0 20px;
  }
  .card__subtitle {
    color: ${color.darkGray};
    font-size: 0.95rem;
    margin-bottom: 30px;
  }
`;

const SuccessContainer = styled.div`
  display: none;
`;

export default function Modal({ pledges }) {
  return (
    <ModalOverlay>
      <ContentContainer>
        <Card>
          <div className="closeBtn">
            <img src={closeBtn} alt="" />
          </div>
          <div className="card__title">Back this project</div>
          <div className="card__subtitle">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </div>
          {pledges.edges.map((item) => (
            <ModalPledge data={item.node} key={item.node.id} />
          ))}
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
