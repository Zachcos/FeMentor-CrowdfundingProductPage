import React, { useState } from 'react';
import { graphql } from 'gatsby';

import Hero from '../components/hero';
import Content from '../components/content';
import Modal from '../components/modal';

export default function Home({ data }) {
  const [isModalShown, setModalShown] = useState(false);

  const submitPledge = () => {
    setModalShown(true);
  };

  const closeModal = () => {
    setModalShown(false);
  };

  return (
    <>
      {isModalShown ? (
        <Modal pledges={data.modalPledges} handleClose={closeModal} />
      ) : (
        ''
      )}
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
