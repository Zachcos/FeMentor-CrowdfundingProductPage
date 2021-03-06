import React, { useState } from 'react';
import styled from 'styled-components';
import { color, device } from '../imports/variables';

import Card from './card';
import ModalPledge from './modalPledge';
import closeBtn from '../../static/images/icon-close-modal.svg';
import success from '../../static/images/icon-check.svg';

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
  @media ${device} {
    width: 90%;
  }

  .closeBtn {
    cursor: pointer;
    position: absolute;
    right: 30px;
    top: 30px;
  }

  .card__title {
    font-size: 1.375rem;
    font-weight: 700;
    margin: 50px 0 20px;
    @media ${device} {
      font-size: 1.1rem;
      margin: 30px 0 20px;
    }
  }
  .card__subtitle {
    color: ${color.darkGray};
    font-size: 0.95rem;
    margin-bottom: 30px;
    @media ${device} {
      font-size: 0.875rem;
      line-height: 1.4rem;
    }
  }
`;

const SuccessContainer = styled.div`
  margin: 0 auto;
  top: 500px;
  position: relative;
  width: 550px;
  .inside {
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon__check {
      margin: 40px 0;
      height: 90px;
      width: 90px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .title {
      font-size: 1.4rem;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .desc {
      color: ${color.darkGray};
      font-size: 0.95rem;
      line-height: 1.7rem;
      margin-bottom: 40px;
      text-align: center;
    }
    .btn {
      font-size: 0.9rem;
      margin-bottom: 40px;
      padding: 18px 30px;
    }
  }
`;

export default function Modal({ pledges, handleClose }) {
  const [isSelected, setSelected] = useState('');
  const [isSubmitted, setSubmitted] = useState(false);

  const handleClick = (id) => {
    setSelected(id);
  };

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 1500);
  };

  return (
    <ModalOverlay>
      {!isSubmitted ? (
        <ContentContainer>
          <Card>
            <div className="closeBtn" onClick={handleClose}>
              <img src={closeBtn} alt="" />
            </div>
            <div className="card__title">Back this project</div>
            <div className="card__subtitle">
              Want to support us in bringing Mastercraft Bamboo Monitor Riser
              out in the world?
            </div>
            {pledges.edges.map((item) => (
              <ModalPledge
                data={item.node}
                key={item.node.id}
                onClick={() => handleClick(item.node.id)}
                currentSelected={isSelected}
                submitPledge={handleSubmit}
              />
            ))}
          </Card>
        </ContentContainer>
      ) : (
        <SuccessContainer>
          <Card>
            <div className="inside">
              <div className="icon__check">
                <img src={success} alt="" />
              </div>
              <div className="title">Thanks for your support!</div>
              <div className="desc">
                Your pledge brings us one step closer to sharing Mastercraft
                Bamboo Monitor Riser worldwide. You will get an email once our
                campaign is completed.
              </div>
              <div className="btn btn__primary" onClick={handleClose}>
                Got it!
              </div>
            </div>
          </Card>
        </SuccessContainer>
      )}
    </ModalOverlay>
  );
}
