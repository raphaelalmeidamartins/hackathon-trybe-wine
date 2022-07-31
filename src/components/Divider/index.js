import { Box } from '@mui/material';
import React from 'react';
import theme from '../../styles/theme';

function Divider() {
  const { colors } = theme;

  return (
    <Box sx={{ backgroundColor: colors.burnetSienna, width: '100vw', height: '30px' }} />
  );
}

export default Divider;
