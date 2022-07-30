import React from 'react';

import Benefits from '../../components/benefits';
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
        <Benefits />
      </main>
      {/* Aqui colocar um footer */}
    </>
  );
}

export default Landing;
