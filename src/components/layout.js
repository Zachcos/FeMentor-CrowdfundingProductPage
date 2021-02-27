import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import GlobalStyles from '../imports/globalStyles';

const FullWrap = styled.div`
  min-height: 100vh;
  position: relative;
  width: 100vw;
`;

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Frontend Mentor | Crowdfunding product page</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Commissioner:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/main.css" />
      </Helmet>
      <GlobalStyles />
      <FullWrap>{children}</FullWrap>
    </>
  );
}
