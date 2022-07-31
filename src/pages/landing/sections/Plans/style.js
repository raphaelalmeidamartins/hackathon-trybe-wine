import styled from '@emotion/styled';
import { Box } from '@mui/material';

export default styled(Box)`
  background: linear-gradient(0deg, rgba(246, 139, 44, 0.36) 0%, white 100%);
  padding-bottom: 32px;
  width: 100vw;

  span.winebox-title {
    font-size: 1.2rem;
    color: ${(props) => props.theme.palette.secondary.main};
  }

  h1 {
    color: ${(props) => props.theme.palette.secondary.main};
    font-size: 2.2rem;
    margin: 0;
    text-transform: uppercase;
  }

  @media only screen and (min-width: 900px) {
    // box-shadow: inset 0 -156px 0 0 ${(props) => props.theme.palette.background.default};
    box-shadow: inset 0 -156px 0 0 white;
  }
`;
