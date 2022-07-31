import { Container, Typography } from '@mui/material';
import * as React from 'react';
import HowItWorksCard from '../../../../components/HowItWorksCard';
import StepsGrid from './style';
import steps from './utils/helpers';

export default function HowItWorks() {
  return (
    <Container component="section" sx={{ margin: '48px 0' }}>
      <Typography variant="h3" element="h1" align="center" gutterBottom>
        Entenda como funciona
      </Typography>
      <Typography align="center" paragraph>
        No Clube Wine você recebe, todo mês, 2 rótulos escolhidos a dedo das
        melhores vinícolas do mundo!
      </Typography>
      <StepsGrid
        component="section"
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {steps.map(({
          key, title, description, image, line,
        }) => (
          <HowItWorksCard
            key={key}
            title={title}
            description={description}
            image={image}
            line={line}
          />
        ))}
      </StepsGrid>
    </Container>
  );
}
