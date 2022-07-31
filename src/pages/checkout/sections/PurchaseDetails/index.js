import React from 'react';
import { Box, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { HiOutlineShoppingBag } from 'react-icons/hi';

function PurchaseDetails() {
  const checkoutInfo = useSelector((state) => state.checkout);
  const {
    subscriptionPlan, total, totalWithDiscount, discount, totalDivided,
  } = checkoutInfo;

  return (
    <Container component="section" maxWidth="lg">
      <h2>
        <HiOutlineShoppingBag />
        Detalhes
      </h2>
      <Box component="section">
        <p>Plano</p>
        <p>{subscriptionPlan === 'annual' ? 'Anual' : 'Mensal'}</p>
      </Box>
      <Box component="section">
        <p>Subtotal</p>
        <p>{total.toFixed(2)}</p>
      </Box>
      {subscriptionPlan === 'annual' && (
        <Box component="section">
          <p>Presente do plano anual</p>
          <p>2 taças esclusivas</p>
        </Box>
      )}
      <Box component="section">
        <p>Desconto</p>
        <p>{discount.toFixed(2)}</p>
      </Box>
      <Box component="section">
        <Box component="section">
          <p>Valor total</p>
        </Box>
        <Box component="section">
          <p>{totalWithDiscount.toFixed(2)}</p>
          <p>
            Até 12x
            <span>{`R$${totalDivided.toFixed(2)}`}</span>
          </p>
        </Box>
      </Box>
    </Container>
  );
}

export default PurchaseDetails;
