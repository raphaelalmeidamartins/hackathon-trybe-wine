import { Button, Container } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import AddressForm from './sections/AddressForm';
import SubscriptionPlanForm from './sections/Plan';
import PurchaseDetails from './sections/PurchaseDetails';

function Checkout() {
  const history = useHistory();

  return (
    <>
      <Header />
      <Container component="main">
        <SubscriptionPlanForm />
        <AddressForm />
        <PurchaseDetails />
        <Button onClick={() => history.push('/receipt')}>CONCLUIR ASSINATURA</Button>
      </Container>
    </>
  );
}

export default Checkout;
