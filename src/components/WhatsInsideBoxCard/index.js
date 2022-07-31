import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import useTheme from '@mui/material/styles/useTheme';
import PropTypes from 'prop-types';
import React from 'react';
import {
  CardContainer,
  ImageContainer,
  TextContainer,
} from './style';

function WhatsInsideBoxCard({
  cardImage, cardTitle, content, imgDescription,
}) {
  const theme = useTheme();

  return (
    <Grid component="section" container columns={{ xs: 2, sm: 12, md: 4 }}>
      <CardContainer container columns={{ xs: 12, sm: 4, md: 12 }}>
        <ImageContainer
          item
          xs={4}
          sm={4}
          md={4}
          sx={{ height: { md: '200px' } }}
        >
          <img src={cardImage} alt={imgDescription} />
        </ImageContainer>
        <TextContainer item xs={8} sm={4} md={8}>
          <Typography
            variant="h6"
            component="h4"
            gutterBottom
            sx={{
              fontWeight: 600,
              color: theme.colors.burnetOrange,
              textAlign: {
                xs: 'left',
                md: 'left',
              },
            }}
          >
            {cardTitle}
          </Typography>
          <Typography
            variant="body2"
            paragraph
            sx={{
              textAlign: 'left',
            }}
          >
            {content}
          </Typography>
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
