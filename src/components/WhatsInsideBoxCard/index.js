import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import
{
  CardContainer,
  ImageContainer,
  TextContainer,
} from './style';

function WhatsInsideBoxCard({
  cardImage, cardTitle, content, imgDescription,
}) {
  return (
    <Grid component="section" container columns={{ xs: 2, sm: 12, md: 4 }}>
      <CardContainer container columns={{ xs: 12, sm: 4, md: 12 }}>
        <ImageContainer item xs={3} sm={4} md={4}>
          <img src={cardImage} alt={imgDescription} />
        </ImageContainer>
        <TextContainer
          item
          xs={8}
          sm={4}
          md={8}
          spacing={8}
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
          <h3>{cardTitle}</h3>
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
