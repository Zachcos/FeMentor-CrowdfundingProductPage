import React, { useState } from 'react';
import { graphql } from 'gatsby';

import Hero from '../components/hero';
import Content from '../components/content';
import Modal from '../components/modal';

export default function Home({ data }) {
  return (
    <>
      <Modal pledges={data.modalPledges} />
      <Hero />
      <Content />
    </>
  );
}

export const query = graphql`
  query {
    modalPledges: allPledgeDataJson {
      edges {
        node {
          id
          title
          minAmount
          quantity
          desc
        }
      }
    }
  }
`;
