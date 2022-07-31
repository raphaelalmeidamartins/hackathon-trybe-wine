import React from 'react';
import Header from '../../components/Header';
import AddressForm from './sections/AddressForm';
import SubscriptionPlanForm from './sections/Plan';

function Checkout() {
  return (
    <>
      <Header />
      {' '}
      <p>{' a '}</p>
      {' '}
      <p>{' a '}</p>
      <main>
        <SubscriptionPlanForm />
        <AddressForm />
      </main>
    </>
  );
}

export default Checkout;
