import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@mui/material';

function MembershipPlanRadioLabel({
  plan, gift, advantage, charge,
}) {
  return (
    <Box component="section">
      <Grid container>
        <Grid item>
          <p>{plan}</p>
          {!gift.length ? <p /> : <p>{gift}</p>}
        </Grid>
        <Grid item>
          <p>{advantage}</p>
        </Grid>
        <Grid item>
          <p>{charge}</p>
        </Grid>
      </Grid>
    </Box>
  );
}

MembershipPlanRadioLabel.propTypes = {
  plan: PropTypes.string,
  gift: PropTypes.string,
  advantage: PropTypes.string,
  charge: PropTypes.string,
}.required;

export default MembershipPlanRadioLabel;
