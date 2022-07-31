import { Box } from '@mui/material';
import React from 'react';
import lightTheme from '../../styles/lightTheme';

function Divider() {
  const { colors } = lightTheme;

  return (
    <Box sx={{ backgroundColor: colors.burnetSienna, width: '100vw', height: '30px' }} />
  );
}

export default Divider;
