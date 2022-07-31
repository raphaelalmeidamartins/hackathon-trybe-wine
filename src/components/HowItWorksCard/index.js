import { Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { HowItWorksImage, HowItWorksLine } from './style';

function HowItWorksCard({ title, image, description }) {
  return (
    <Grid component="section" item xs={4} sm={2} md={3}>
      <Grid
        container
        columns={{ xs: 4, sm: 4, md: 4 }}
        sx={{
          height: '100%',
          justifyItems: 'start',
        }}
      >
        <Grid
          item
          xs={1}
          sm={4}
          md={4}
          sx={{
            height: '83px',
            objectFit: 'contain',
            padding: 0,
            position: 'relative',
          }}
        >
          <HowItWorksImage
            src={image}
            alt="imagem ilustrativa"
          />
          <HowItWorksLine half left />
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
          spacing={2}
          sx={{
            alignItems: 'center',
            minHeight: {
              sx: '200px',
              sm: '400px',
              md: '300px',
              lg: '200px',
              xl: '200px',
            },
            padding: '16px',
          }}
        >
          <Typography variant="h5" align="center" element="h2" gutterBottom>
            {title}
          </Typography>
          <Typography align="center" paragraph>
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

HowItWorksCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HowItWorksCard;
