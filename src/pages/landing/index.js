import React from 'react';
import WhatsInsideYourBox from '../../components';
import Benefits from '../../components/benefits';
import Header from '../../components/Header';

function Landing() {
  return (
    <>
      <Header />
      <main>
        {/* Aqui colocar as sections */}
        <WhatsInsideYourBox />
        <Benefits />
      </main>
      {/* Aqui colocar um footer */}
    </>
  );
}

export default Landing;
