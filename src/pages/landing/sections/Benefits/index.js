import { Grid, Typography } from '@mui/material';
import React from 'react';
import BenefitBox from '../../../../components/BenefitBox';
import { benefits } from './utils/helpers';

function Benefits() {
  return (
    <section style={{ margin: '48px 0' }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom sx={{ marginBottom: '24px' }}>
        Como Sócio Wine você garante benefícios exclusivos
      </Typography>
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        spacing={{ xs: 2, sm: 2, md: 2 }}
      >
        {benefits.map(({ pContent, imgAlt, imgSrc }) => (
          <Grid key={pContent} item xs={4} sm={4} md={3}>
            <BenefitBox pContent={pContent} imgAlt={imgAlt} imgSrc={imgSrc} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

export default Benefits;
