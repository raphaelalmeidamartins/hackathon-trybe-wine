import React from 'react';
import Footer from '../../components/Footer';
import Benefits from './sections/Benefits';
import Header from '../../components/Header';
import HowItWorks from './sections/HowItWorks';
import WhatsInsideYourBox from './sections/WhatsInsideYourBox';
import Plans from './sections/Plans';

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
