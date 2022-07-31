import { Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import HowItWorksCard from '../../../../components/HowItWorksCard';
import steps from './utils/helpers';

export default function HowItWorks() {
  return (
    <Container component="section" sx={{ border: '1px solid black' }}>
      <Typography variant="h3" element="h1" align="center" gutterBottom>
        Entenda como funciona
      </Typography>
      <Typography align="center" paragraph>
        No Clube Wine você recebe, todo mês, 2 rótulos escolhidos a dedo das
        melhores vinícolas do mundo!
      </Typography>
      <Grid
        component="section"
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ border: '1px solid black', marginTop: '48px' }}
      >
        {steps.map(({
          key, title, description, image,
        }) => (
          <HowItWorksCard
            key={key}
            title={title}
            description={description}
            image={image}
          />
        ))}
      </Grid>
    </Container>
  );
}
