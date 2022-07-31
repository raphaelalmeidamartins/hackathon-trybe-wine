import { Grid, Paper, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import useElevation from '../../hooks/useElevation';
import theme from '../../styles/theme';

function BenefitBox({ pContent, imgAlt, imgSrc }) {
  const { elevation, handleMouseOver, handleMouseOut } = useElevation();
  const { colors } = theme;

  return (
    <Paper
      elevation={elevation}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      sx={{ padding: '16px', backgroundColor: colors.lightIndigo }}
    >
      <Grid container columns={{ xs: 4, sm: 4, md: 4 }} component="section">
        <Grid
          item
          xs={1}
          sm={1}
          md={1}
          component="img"
          alt={imgAlt}
          src={imgSrc}
        />
        <Grid
          item
          xs={3}
          sm={3}
          md={3}
          sx={{
            alignItems: 'center',
            display: 'flex',
            height: '100px',
            paddingLeft: '16px',
          }}
        >
          <Typography variant="body2" paragraph sx={{ margin: 0 }}>
            {pContent}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

BenefitBox.propTypes = {
  pContent: PropTypes.string,
  imgAlt: PropTypes.string,
  imgSrc: PropTypes.string,
}.isRequired;

export default BenefitBox;
