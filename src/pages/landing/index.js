import { Container } from '@mui/material';
import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Banner from './sections/Banner';
import Benefits from './sections/Benefits';
import HowItWorks from './sections/HowItWorks';
import Plans from './sections/Plans';
import WhatsInsideYourBox from './sections/WhatsInsideYourBox';

function Landing() {
  return (
    <>
      <Header />
      <Banner />
      <Container component="main">
        <HowItWorks />
        <WhatsInsideYourBox />
        <Plans />
        <Benefits />
      </Container>
      <Footer />
    </>
  );
}

export default Landing;
