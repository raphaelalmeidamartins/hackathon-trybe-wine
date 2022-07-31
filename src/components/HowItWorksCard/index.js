import { Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import {
  HowItWorksCardGrid,
  HowItWorksCardImageContainer,
  HowItWorksCardTextContainer,
  HowItWorksImage,
} from './style';

function HowItWorksCard({
  title, image, description, line,
}) {
  return (
    <Grid component="section" item xs={4} sm={2} md={3}>
      <HowItWorksCardGrid container columns={{ xs: 4, sm: 4, md: 4 }}>
        <HowItWorksCardImageContainer item xs={1} sm={4} md={4}>
          <HowItWorksImage src={image} alt="imagem ilustrativa" />
          {line}
        </HowItWorksCardImageContainer>
        <HowItWorksCardTextContainer
          item
          xs={3}
          sm={4}
          md={4}
          sx={{
            minHeight: {
              sx: '200px',
              sm: '400px',
              md: '300px',
              lg: '200px',
              xl: '200px',
            },
          }}
        >
          <Typography variant="h5" align="center" element="h2" gutterBottom>
            {title}
          </Typography>
          <Typography align="center" paragraph>
            {description}
          </Typography>
        </HowItWorksCardTextContainer>
      </HowItWorksCardGrid>
    </Grid>
  );
}

HowItWorksCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  line: PropTypes.node.isRequired,
};

export default HowItWorksCard;
