import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import RadioLabelGrid from './style';

function MembershipPlanRadioLabel({
  plan, gift, advantage, charge,
}) {
  return (
    <Box component="section">
      <RadioLabelGrid container>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap',
          }}
        >
          <p style={{ fontWeight: '600' }}>{plan}</p>
          {!gift.length ? <p /> : <Chip label={gift} />}
        </Grid>
        <Grid item xs={12}>
          <p style={{ fontSize: '0.9rem', fontWeight: '600', marginTop: '16px' }}>{advantage}</p>
        </Grid>
        <Grid item>
          <p style={{ fontSize: '0.9rem' }}>{charge}</p>
        </Grid>
      </RadioLabelGrid>
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
