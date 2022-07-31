import { Typography } from '@mui/material';
import * as React from 'react';
import HowItWorksCard from '../../../../components/HowItWorksCard';
import StepsGrid from './style';
import steps from './utils/helpers';
import theme from '../../../../styles/theme';

export default function HowItWorks() {
  const { colors } = theme;

  return (
    <section style={{ margin: '48px 0' }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Entenda como funciona
      </Typography>
      <Typography align="center" paragraph sx={{ color: colors.burnetOrange }}>
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
