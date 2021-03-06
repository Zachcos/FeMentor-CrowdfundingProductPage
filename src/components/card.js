import React from 'react';
import styled from 'styled-components';
import { device } from '../imports/variables';

const CardContainer = styled.div`
  background: white;
  border: 2px solid #f6f6f6;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 0 50px 0;
  position: relative;
  @media screen and (${device}) {
    padding: 0 25px 0;
  }
`;

export default function Card({ children }) {
  return <CardContainer>{children}</CardContainer>;
}
