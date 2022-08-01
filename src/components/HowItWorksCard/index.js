import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
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
              sm: '300px',
              md: '300px',
              lg: '200px',
              xl: '200px',
            },
          }}
        >
          <Typography
            variant="h6"
            align="center"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 600,
              textAlign: {
                xs: 'left',
                sm: 'center',
              },
            }}
          >
            {title}
          </Typography>
          <Typography
            align="center"
            variant="body2"
            paragraph
            sx={{
              textAlign: {
                xs: 'left',
                sm: 'center',
              },
            }}
          >
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
