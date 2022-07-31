import Container from '@mui/material/Container';
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
      <main>
        <Container>
          <HowItWorks />
          <AlVinhoBot />
          <WhatsInsideYourBox />
        </Container>
        <Benefits headingToggle />
        <Plans />
      </main>
      <Divider />
      <Footer />
    </>
  );
}

export default Landing;
