import { Container } from '@mui/material';
import React from 'react';
import AlVinhoBot from '../../components/chatBot';
import Divider from '../../components/Divider';
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
        <AlVinhoBot />
        <WhatsInsideYourBox />
        <Benefits headingToggle />
        <Plans />
      </Container>
      <Divider />
      <Footer />
    </>
  );
}

export default Landing;
