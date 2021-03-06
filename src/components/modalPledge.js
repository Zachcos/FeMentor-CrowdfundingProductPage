/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';
import { color, device } from '../imports/variables';

const Pledge = styled.div`
  border-radius: 8px;
  border: 2px solid #ececec;
  margin-bottom: 20px;
  position: relative;
  &:last-child {
    margin-bottom: 50px;
  }
  &:hover {
    .dot {
      border-color: ${color.medCyan};
    }
    .pledge__top .title {
      color: ${color.medCyan};
    }
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
    & .pledge__top {
      .quantity {
        @media ${device} {
          bottom: 35%;
        }
      }
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
    @media ${device} {
      align-items: flex-start;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 20px;
    }
    .title {
      font-weight: 700;
      @media ${device} {
        font-size: 0.9rem;
        margin-bottom: 10px;
      }
    }
    .minAmount {
      color: ${color.medCyan};
      font-size: 0.975rem;
      margin-left: 20px;
      @media ${device} {
        font-size: 0.8rem;
        margin-left: 0;
      }
    }
    .quantity {
      color: ${color.darkGray};
      font-size: 0.95rem;
      margin-left: auto;
      @media ${device} {
        bottom: 30px;
        left: 20px;
        position: absolute;
      }
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
    @media ${device} {
      font-size: 0.875rem;
      padding-left: 25px;
      margin-bottom: 75px;
      width: 76%;
    }
  }

  .pledge__bottom {
    align-items: center;
    border-top: 2px solid #ececec;
    box-sizing: border-box;
    display: none;
    padding: 20px 20px 10px;
    width: 100%;
    @media ${device} {
      flex-direction: column;
    }
    .instruction {
      color: ${color.darkGray};
      @media ${device} {
        font-size: 0.875rem;
        margin-bottom: 20px;
      }
    }
    .buttons {
      display: flex;
      width: 76%;
      @media ${device} {
        justify-content: center;
        width: 100%;
      }
      .pledgeAmount {
        border-radius: 25px;
        border: 2px solid #ececec;
        box-sizing: border-box;
        color: ${color.darkGray};
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: 700;
        margin-left: auto;
        margin-right: 12px;
        padding-left: 20px;
        &:focus-within {
          border-color: ${color.medCyan};
        }
        @media ${device} {
          margin-left: 0;
          margin-right: 20px;
        }
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
          &::placeholder {
            color: ${color.black};
            opacity: 1;
          }
        }
      }
      .btn {
        font-size: 0.9rem;
        padding: 15px 20px;
      }
    }
  }
`;

export default function ModalPledge({
  data,
  onClick,
  submitPledge,
  currentSelected,
}) {
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
        <div className="buttons">
          <div className="pledgeAmount">
            $
            <input type="text" placeholder={data.minAmount} />
          </div>
          <div className="btn btn__primary" onClick={submitPledge}>
            Continue
          </div>
        </div>
      </div>
    </Pledge>
  );
}
