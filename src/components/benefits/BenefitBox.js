import PropTypes from 'prop-types';
import React from 'react';
import { Box } from '@mui/material';

function BenefitBox({ pContent, imgAlt, imgSrc }) {
  return (
    <Box component="section">
      <img alt={imgAlt} src={imgSrc} />
      <p>{pContent}</p>
    </Box>
  );
}

BenefitBox.propTypes = {
  pContent: PropTypes.string,
  imgAlt: PropTypes.string,
  imgSrc: PropTypes.string,
}.isRequired;

export default BenefitBox;
