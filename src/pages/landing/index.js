import React from 'react';
import Plans from './sections/Plans';
import Footer from '../../components/Footer';
import Benefits from './sections/Benefits';
import Header from '../../components/Header';
import HowItWorks from './sections/HowItWorks';
import WhatsInsideYourBox from './sections/WhatsInsideYourBox';

function Landing() {
  return (
    <>
      <Header />
      <main>
        <HowItWorks />
        <WhatsInsideYourBox />
        <Plans />
        <Benefits />
      </main>
      <Footer />
    </>
  );
}

export default Landing;
