import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from '@mui/material';
import BenefitBox from '../../../../components/BenefitBox';
import { benefits } from './utils/helpers';

function Benefits({ headingToggle }) {
  return (
    <Container component="section" maxWidth="lg">
      {headingToggle
        ? (<h1>Como Sócio Wine você garante benefícios exclusivos</h1>)
        : (<h2>Seus benefícios de pessoa Sócia Wine</h2>)}
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
        {benefits.map(({ pContent, imgAlt, imgSrc }) => (
          <Grid item xs={4} sm={2} md={3}>
            <BenefitBox pContent={pContent} imgAlt={imgAlt} imgSrc={imgSrc} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

Benefits.propTypes = {
  headingToggle: PropTypes.bool.isRequired,
};

export default Benefits;
