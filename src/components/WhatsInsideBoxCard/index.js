import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';

function WhatsInsideBoxCard({
  cardImage, cardTitle, content, imgDescription,
}) {
  return (
    <Grid
      component="section"
      container
      columns={{ xs: 4, sm: 6, md: 12 }}
    >
      <Grid
        item
        xs={4}
        sm={2}
        md={4}
      >
        <img src={cardImage} alt={imgDescription} />
      </Grid>
      <Grid
        item
        xs={4}
        sm={2}
        md={4}
      >
        <h2>{cardTitle}</h2>
        <p>{content}</p>
      </Grid>
    </Grid>
  );
}

WhatsInsideBoxCard.propTypes = {
  cardImage: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imgDescription: PropTypes.string.isRequired,
};

export default WhatsInsideBoxCard;
