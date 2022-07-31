import { Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import {
  CardContainer,
  ImageContainer,
  TextContainer,
} from './style';
import theme from '../../styles/theme';

function WhatsInsideBoxCard({
  cardImage, cardTitle, content, imgDescription,
}) {
  const { colors } = theme;

  return (
    <Grid component="section" container columns={{ xs: 2, sm: 12, md: 4 }}>
      <CardContainer container columns={{ xs: 12, sm: 4, md: 12 }}>
        <ImageContainer item xs={4} sm={4} md={4}>
          <img src={cardImage} alt={imgDescription} />
        </ImageContainer>
        <TextContainer
          item
          xs={8}
          sm={4}
          md={8}
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
          <Typography
            variant="h6"
            component="h4"
            gutterBottom
            sx={{ fontWeight: 600, color: colors.burnetOrange }}
          >
            {cardTitle}
          </Typography>
          <p>{content}</p>
        </TextContainer>
      </CardContainer>
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
