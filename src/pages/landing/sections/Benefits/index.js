import React from 'react';
import { Container, Grid } from '@mui/material';
import BenefitBox from '../../../../components/BenefitBox';
import { benefits } from './utils/helpers';

function Benefits() {
  return (
    <Container component="section" maxWidth="lg">
      <h1>Como Sócio Wine você garante benefícios exclusivos</h1>
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
        {benefits.map(({ pContent, imgAlt, imgSrc }) => (
          <Grid key={pContent} item xs={4} sm={2} md={3}>
            <BenefitBox pContent={pContent} imgAlt={imgAlt} imgSrc={imgSrc} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Benefits;
