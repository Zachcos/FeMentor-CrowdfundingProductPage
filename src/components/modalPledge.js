import React from 'react';
import styled from 'styled-components';
import { color } from '../imports/variables';

const Pledge = styled.div`
  border-radius: 8px;
  border: 2px solid #ececec;
  margin-bottom: 20px;
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
    align-items: center;
    display: flex;
    height: 40px;
    margin-bottom: 10px;
    .title {
      font-weight: 700;
    }
    .minAmount {
      color: ${color.medCyan};
      font-size: 0.975rem;
      margin-left: 20px;
    }
    .quantity {
      color: ${color.darkGray};
      font-size: 0.95rem;
      margin-left: auto;
      .em {
        color: ${color.black};
        display: inline;
        font-size: 1.1rem;
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

  &:last-child {
    margin-bottom: 50px;
  }
`;

export default function ModalPledge({ data }) {
  console.log('finally from the modalPledge component: ', data);
  return (
    <Pledge className={data.quantity === 0 ? 'oos' : ''}>
      <div className="pledge__top">
        <div className="dot" />
        <div className="title">{data.title}</div>
        <div className="minAmount">
          {data.minAmount === 0 ? '' : `Pledge $${data.minAmount} or more`}
        </div>
        <div className="quantity">
          <div className="em">{data.quantity}</div>{' '}
          {data.quantity === null ? '' : 'left'}
        </div>
      </div>
      <div className="desc">{data.desc}</div>
      <div className="pledge__bottom" />
    </Pledge>
  );
}
