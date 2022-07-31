import { Button, Container } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import WelcomeBanner from './sections/WelcomeBanner';
import MembershipDetails from './sections/PurchaseDetails';
import Benefits from '../landing/sections/Benefits';
import Footer from '../../components/Footer';

function Receipt() {
  const history = useHistory();

  return (
    <>
      <Header />
      <Container component="main">
        <WelcomeBanner />
        <Benefits headingToggle={false} />
        <MembershipDetails />
        <Button onClick={() => history.push('/')}>
          Voltar para a página inicial
        </Button>
      </Container>
      <Footer />
    </>
  );
}

export default Receipt;
