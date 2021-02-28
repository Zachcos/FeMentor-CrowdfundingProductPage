import React from 'react';
import styled from 'styled-components';
import { color } from '../imports/variables';

const Pledge = styled.div`
  border-radius: 8px;
  border: 2px solid #ececec;
  padding: 20px 20px 30px 65px;
  position: relative;

  .dot {
    border-radius: 50%;
    border: 2px solid #ececec;
    height: 20px;
    left: 25px;
    position: absolute;
    top: 30px;
    width: 20px;
  }

  .pledge__top {
    display: flex;
    align-items: center;
    height: 40px;
    .title {
      font-weight: 700;
    }
    .quantity {
      margin-left: auto;
      font-size: 0.95rem;
      color: ${color.darkGray};
      .em {
        color: ${color.black};
        display: inline;
        font-size: 1.2rem;
        font-weight: 700;
        margin-right: 5px;
      }
    }
  }

  .desc {
    color: ${color.darkGray};
    font-size: 0.95rem;
    line-height: 1.5rem;
  }
`;

export default function ModalPledge() {
  return (
    <Pledge>
      <div className="pledge__top">
        <div className="dot" />
        <div className="title">Pledge with no reward</div>
        <div className="quantity">
          <div className="em">101</div> left
        </div>
      </div>
      <div className="desc">
        Choose to support us without a reward if you simply believe in our
        project. As a backer, you will be signed up to receive product updates
        via email.
      </div>
      <div className="pledge__bottom" />
    </Pledge>
  );
}
