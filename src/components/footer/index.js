import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import wineWLogo from './utils/images/wine-w-logo.svg';

function Footer() {
  return (
    <Container component="footer" maxWidth="lg">
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={0} sm={0} md={6}>
          <Box component="section">
            <img alt="wine w logo" src={wineWLogo} />
          </Box>
          <Box component="section">
            <p>W2W E-Commerce de Vinhos S.A</p>
            <p>CNPJ: 09.813.204/0002-05</p>
          </Box>
          <Box component="section">
            <p>Rua Comendador Alcides Simão Helou, 1478</p>
            <p>Serra - ES - CEP 29168-090</p>
          </Box>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <Box component="section">
            <p>
              SE BEBER, NÃO DIRIJA. APRECIE COM MODERAÇÃO. A VENDA DE BEBIDAS ALCOÓLICAS É PROIBIDA
              PARA MENORES DE 18 ANOS.
            </p>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
