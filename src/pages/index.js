import React, { useState } from 'react';

import Hero from '../components/hero';
import Content from '../components/content';
import Modal from '../components/modal';

export default function Home() {
  return (
    <>
      <Modal />
      <Hero />
      <Content />
    </>
  );
}
