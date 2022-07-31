import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';
import { useSelector } from 'react-redux';
import toast from './utils/images/toast.svg';

function WelcomeBanner() {
  const address = useSelector((state) => state.checkout.address);

  return (
    <Container component="section" maxWidth="lg">
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={8} md={6}>
          <img alt="duas pessoas brindando" src={toast} />
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <Box component="section">
            <h2>
              {`${address.username}, agora você faz parte do maior clube de vinhos do mundo!`}
            </h2>
            <h3>Sua assinatura foi confirmada</h3>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default WelcomeBanner;
