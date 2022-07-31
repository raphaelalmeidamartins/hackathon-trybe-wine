import { Container } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import AddressForm from './sections/AddressForm';
import SubscriptionPlanForm from './sections/Plan';
import PurchaseDetails from './sections/PurchaseDetails';

function Checkout() {
  return (
    <>
      <Header />
      <Container component="main">
        <SubscriptionPlanForm />
        <AddressForm />
        <PurchaseDetails />
      </Container>
    </>
  );
}

export default Checkout;
