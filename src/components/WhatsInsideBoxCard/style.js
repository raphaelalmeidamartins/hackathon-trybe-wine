import { Grid } from '@mui/material';
import styled from 'styled-components';

export const CardContainer = styled(Grid)`
  height: 100%;
  display:flex;
  align-items: center;
`;

export const ImageContainer = styled(Grid)`
  align-items: center;
  display: flex;
  height: 83px;
  object-fit: contain;
  position: relative;
`;

export const TextContainer = styled(Grid)`
  align-items: center;
  padding: 16px;
  min-height: 200px;

  h3 {
    color: #c81a78;
  }
  p {
    color: #474952;
  }
`;
