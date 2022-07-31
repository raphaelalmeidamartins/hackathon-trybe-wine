import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import WhatsInsideBoxCard from '../../../../components/WhatsInsideBoxCard';
import dropper from './images/dropper.png';
import magazine from './images/magazine.png';
import wineBottles from './images/wineBottles.png';

function WhatsInsideYourBox() {
  return (
    <section>
      <Typography
        variant="h4"
        align="center"
        component="h2"
        gutterBottom
        sx={{ fontFamily: '"Sniglet", cursive', fontWeight: 700 }}
      >
        O que vai dentro da sua WineBox?
      </Typography>
      <Grid
        container
        columns={{ xs: 4, sm: 6, md: 12 }}
        sx={{ marginTop: '48px' }}
      >
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
    </section>
  );
}

export default WhatsInsideYourBox;
