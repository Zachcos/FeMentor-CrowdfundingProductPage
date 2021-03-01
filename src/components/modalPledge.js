import React from 'react';
import styled from 'styled-components';
import { color } from '../imports/variables';

const Pledge = styled.div`
  border-radius: 8px;
  border: 2px solid #ececec;
  margin-bottom: 20px;
  position: relative;
  &:last-child {
    margin-bottom: 50px;
  }
  &.selected {
    border-color: ${color.medCyan};
    padding-bottom: 10px;
    .dot:after {
      content: '';
      position: absolute;
      height: 12px;
      width: 12px;
      top: 4px;
      left: 4px;
      background: ${color.medCyan};
      border-radius: 50%;
    }
    & .pledge__bottom {
      display: flex;
    }
  }

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
    padding: 20px 20px 0 75px;
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
    margin-bottom: 40px;
    padding-left: 75px;
  }

  .pledge__bottom {
    align-items: center;
    border-top: 2px solid #ececec;
    box-sizing: border-box;
    display: none;
    padding: 20px 20px 10px;
    width: 100%;
    .instruction {
      color: ${color.darkGray};
    }
    .pledgeAmount {
      border-radius: 25px;
      border: 2px solid #ececec;
      box-sizing: border-box;
      color: ${color.darkGray};
      font-size: 0.9rem;
      font-weight: 700;
      margin-left: auto;
      margin-right: 12px;
      padding-left: 20px;
      input {
        border-radius: 25px;
        border: none;
        box-sizing: border-box;
        font-size: 0.8rem;
        font-weight: 700;
        margin-left: 10px;
        outline: none;
        padding: 12px 5px 12px 10px;
        width: 60px;
      }
    }
    .btn {
      font-size: 0.9rem;
      padding: 15px 20px;
    }
  }
`;

export default function ModalPledge({ data, onClick, currentSelected }) {
  return (
    <Pledge
      className={
        (data.quantity === 0 ? 'oos' : '') +
        (data.id === currentSelected && data.quantity !== 0 ? 'selected' : '')
      }
      onClick={onClick}
    >
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
      <div className="pledge__bottom">
        <div className="instruction">Enter your pledge</div>
        <div className="pledgeAmount">
          $
          <input type="text" placeholder={data.minAmount} />
        </div>
        <div className="btn btn__primary">Continue</div>
      </div>
    </Pledge>
  );
}
