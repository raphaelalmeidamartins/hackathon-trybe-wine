import React from 'react';
import { Container, Grid } from '@mui/material';
import BenefitBox from '../../../../components/BenefitBox';

function AddressForm() {
  return (
    <Container component="section" maxWidth="lg">
      <h1>Como Sócio Wine você garante benefícios exclusivos</h1>
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={2} md={3}>
          <BenefitBox />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AddressForm;
