import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';
import { useSelector } from 'react-redux';

function MembershipDetails() {
  const checkoutInfo = useSelector((state) => state.checkout);
  const {
    subscriptionPlan, address, totalWithDiscount, totalDivided,
  } = checkoutInfo;

  return (
    <Container component="section" maxWidth="lg">
      <h3>
        Confira os detalhes da sua assinatura
      </h3>
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={3} sm={3} md={3}>
          <p>EXPERIÊNCIA</p>
          <p>Essenciais</p>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <p>PLANO</p>
          <p>{subscriptionPlan === 'annual' ? 'Anual' : 'Mensal'}</p>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <p>Endereço</p>
          <p>{address.identification}</p>
          <p>{`${address.city} - ${address.state}`}</p>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <p>VALOR</p>
          <p>{subscriptionPlan === 'annual' ? totalDivided.toFixed(2) : totalWithDiscount.toFixed(2)}</p>
          <p>Todos os meses</p>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MembershipDetails;
