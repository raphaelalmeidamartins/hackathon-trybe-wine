import { Button, Container, Grid } from '@mui/material';
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
      <Container component="main" sx={{ paddingTop: '64px', paddingBottom: '32px' }}>
        <Grid container>
          <Grid item md={8}>
            <SubscriptionPlanForm />
            <AddressForm />
          </Grid>
          <Grid item xs={12} md={4}>
            <PurchaseDetails />
            <Button
              sx={{
                marginLeft: '24px', padding: '12px 0', fontWeight: '600', marginRight: '24px', width: 'calc(100% - 48px)', marginTop: '32px',
              }}
              variant="contained"
              onClick={() => history.push('/receipt')}
            >
              CONCLUIR ASSINATURA
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Checkout;
