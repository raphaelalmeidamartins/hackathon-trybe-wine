import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import WhatsInsideBoxCard from '../../../../components/WhatsInsideBoxCard';
import wineBottles from './images/wineBottles.png';
import magazine from './images/magazine.png';
import dropper from './images/dropper.png';

function WhatsInsideYourBox() {
  return (
    <Container
      component="section"
      sx={{
        marginTop: '30px',
        marginBotton: '50px',
        padding: '0 5px',
      }}
    >
      <Typography variant="h5" align="center" component="h3" gutterBottom>O que vai dentro da sua WineBox?</Typography>
      <Grid container columns={{ xs: 4, sm: 6, md: 12 }}>
        <Grid item xs={4} sm={2} md={4}>
          <WhatsInsideBoxCard
            cardImage={wineBottles}
            cardTitle="2 vinhos"
            content="Você receberá 2 garrafas inéditas selecionadas pelos nossos WineHunters."
            imgDescription="Duas garrafas de vinho"
          />
        </Grid>
        <Grid item xs={4} sm={2} md={4}>
          <WhatsInsideBoxCard
            cardImage={magazine}
            cardTitle="1 revista"
            content="Conteúdo exclusivo para Sócios, como harmonizações, dicas e curiosidades sobre o mundo do vinho."
            imgDescription="Uma revista"
          />
        </Grid>
        <Grid item xs={4} sm={2} md={4}>
          <WhatsInsideBoxCard
            cardImage={dropper}
            cardTitle="1 corta-gotas"
            content="Todo mês uma arte diferente para você colecionar e servir seu vinho sem desperdiçar nem uma gota!"
            imgDescription="Um corta gotas"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default WhatsInsideYourBox;
