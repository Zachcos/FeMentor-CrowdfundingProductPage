import React, { useState } from 'react';
import { graphql } from 'gatsby';

import Hero from '../components/hero';
import Content from '../components/content';
import Modal from '../components/modal';

export default function Home({ data, handlePledge }) {
  const [isModalShown, setModalShown] = useState(false);

  const submitPledge = () => {
    setModalShown(true);
  };

  return (
    <>
      {isModalShown ? <Modal pledges={data.modalPledges} /> : ''}
      <Hero />
      <Content handlePledge={submitPledge} />
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
