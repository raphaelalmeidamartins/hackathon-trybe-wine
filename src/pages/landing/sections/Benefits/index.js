import { Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import BenefitBox from '../../../../components/BenefitBox';
import { benefits } from './utils/helpers';

function Benefits({ headingToggle }) {
  return (
    <section style={{ margin: '48px 0' }}>
      {headingToggle ? (
        <Typography
          variant="h4"
          component="h1"
          align="center"
          gutterBottom
          sx={{ marginBottom: '24px' }}
        >
          Como Sócio Wine você garante benefícios exclusivos
        </Typography>
      ) : (
        <Typography
          variant="h4"
          component="h1"
          align="center"
          gutterBottom
          sx={{ marginBottom: '24px' }}
        >
          Seus benefícios de pessoa Sócia Wine
        </Typography>
      )}
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

Benefits.propTypes = {
  headingToggle: PropTypes.bool.isRequired,
};

export default Benefits;
