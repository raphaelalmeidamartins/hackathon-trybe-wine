import { Typography } from '@mui/material';
import * as React from 'react';
import HowItWorksCard from '../../../../components/HowItWorksCard';
import StepsGrid from './style';
import steps from './utils/helpers';

export default function HowItWorks() {
  return (
    <section style={{ margin: '48px 0' }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ fontFamily: '"Sniglet", cursive', fontWeight: 700 }}
      >
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
    </section>
  );
}
