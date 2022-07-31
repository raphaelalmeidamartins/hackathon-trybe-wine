import {
  Box, Container, Grid, Typography,
} from '@mui/material';
import React from 'react';
import lightTheme from '../../styles/lightTheme';
import wineWLogo from './utils/images/wine-w-logo.svg';

function Footer() {
  const { palette, colors } = lightTheme;

  return (
    <Box
      color="primary"
      sx={{ backgroundColor: palette.secondary.main, width: '100vw' }}
    >
      <Container
        component="footer"
        maxWidth="lg"
        sx={{ paddingTop: '48px', paddingBottom: '48px' }}
      >
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid
            component="section"
            item
            xs={0}
            sm={0}
            md={6}
            sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}
          >
            <Box sx={{ marginRight: '16px' }}>
              <img alt="wine w logo" src={wineWLogo} />
            </Box>
            <Box>
              <Typography variant="body2" paragraph sx={{ color: colors.babyPink }}>
                <strong>W2W E-Commerce de Vinhos S.A</strong>
                <br />
                CNPJ: 09.813.204/0002-05
              </Typography>
              <Typography variant="body2" paragraph sx={{ color: colors.babyPink }}>
                Rua Comendador Alcides Simão Helou, 1478 - Serra/ES - CEP
                29168-090
              </Typography>
            </Box>
          </Grid>
          <Grid
            component="section"
            item
            xs={4}
            sm={8}
            md={6}
            sx={{
              alignItems: 'flex-start',
              display: 'flex',
              height: '100%',
              padding: '0 24px',
            }}
          >
            <Typography
              variant="body2"
              paragraph
              sx={{
                color: colors.babyPink,
                margin: 0,
                fontStyle: 'italic',
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
              }}
            >
              SE BEBER, NÃO DIRIJA. APRECIE COM MODERAÇÃO. A VENDA DE BEBIDAS
              ALCOÓLICAS É PROIBIDA PARA MENORES DE 18 ANOS.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
